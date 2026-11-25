/**
 * Daily Palan & Panchang Generator (Bilingual: Tamil & English)
 *
 * Computes astronomical positions and transit-based readings
 * in both Tamil (default) and English for all 12 rasis.
 *
 * Usage:
 *   node scripts/generate-daily.js [YYYY-MM-DD]
 */

const fs = require("fs");
const path = require("path");

const NAKSHATRAS = [
  { ta: "அசுவினி", en: "Ashwini" },
  { ta: "பரணி", en: "Bharani" },
  { ta: "கார்த்திகை", en: "Krittika" },
  { ta: "ரோகிணி", en: "Rohini" },
  { ta: "மிருகசீரிஷம்", en: "Mrigashira" },
  { ta: "திருவாதிரை", en: "Ardra" },
  { ta: "புனர்பூசம்", en: "Punarvasu" },
  { ta: "பூசம்", en: "Pushya" },
  { ta: "ஆயில்யம்", en: "Ashlesha" },
  { ta: "மகம்", en: "Magha" },
  { ta: "பூரம்", en: "Purva Phalguni" },
  { ta: "உத்திரம்", en: "Uttara Phalguni" },
  { ta: "அஸ்தம்", en: "Hasta" },
  { ta: "சித்திரை", en: "Chitra" },
  { ta: "சுவாதி", en: "Swati" },
  { ta: "விசாகம்", en: "Vishakha" },
  { ta: "அனுஷம்", en: "Anuradha" },
  { ta: "கேட்டை", en: "Jyeshtha" },
  { ta: "மூலம்", en: "Mula" },
  { ta: "பூராடம்", en: "Purva Ashadha" },
  { ta: "உத்திராடம்", en: "Uttara Ashadha" },
  { ta: "திருவோணம்", en: "Shravana" },
  { ta: "அவிட்டம்", en: "Dhanishta" },
  { ta: "சதயம்", en: "Shatabhisha" },
  { ta: "பூரட்டாதி", en: "Purva Bhadrapada" },
  { ta: "உத்திரட்டாதி", en: "Uttara Bhadrapada" },
  { ta: "ரேவதி", en: "Revati" }
];

const TITHIS = [
  { ta: "பிரதமை", en: "Pratipada" },
  { ta: "துவிதியை", en: "Dwitiya" },
  { ta: "திருதியை", en: "Tritiya" },
  { ta: "சதுர்த்தி", en: "Chaturthi" },
  { ta: "பஞ்சமி", en: "Panchami" },
  { ta: "சஷ்டி", en: "Shasthi" },
  { ta: "சப்தமி", en: "Saptami" },
  { ta: "அஷ்டமி", en: "Ashtami" },
  { ta: "நவமி", en: "Navami" },
  { ta: "தசமி", en: "Dashami" },
  { ta: "ஏகாதசி", en: "Ekadashi" },
  { ta: "துவாதசி", en: "Dwadashi" },
  { ta: "திரயோதசி", en: "Trayodashi" },
  { ta: "சதுர்த்தசி", en: "Chaturdashi" },
  { ta: "பௌர்ணமி", en: "Purnima" },
  { ta: "பிரதமை", en: "Pratipada" },
  { ta: "துவிதியை", en: "Dwitiya" },
  { ta: "திருதியை", en: "Tritiya" },
  { ta: "சதுர்த்தி", en: "Chaturthi" },
  { ta: "பஞ்சமி", en: "Panchami" },
  { ta: "சஷ்டி", en: "Shasthi" },
  { ta: "சப்தமி", en: "Saptami" },
  { ta: "அஷ்டமி", en: "Ashtami" },
  { ta: "நவமி", en: "Navami" },
  { ta: "தசமி", en: "Dashami" },
  { ta: "ஏகாதசி", en: "Ekadashi" },
  { ta: "துவாதசி", en: "Dwadashi" },
  { ta: "திரயோதசி", en: "Trayodashi" },
  { ta: "சதுர்த்தசி", en: "Chaturdashi" },
  { ta: "அமாவாசை", en: "Amavasya" }
];

const RASIS = [
  { id: "mesham", tamilName: "மேஷம்", englishName: "Aries", glyph: "♈" },
  { id: "rishabam", tamilName: "ரிஷபம்", englishName: "Taurus", glyph: "♉" },
  { id: "mithunam", tamilName: "மிதுனம்", englishName: "Gemini", glyph: "♊" },
  { id: "kadagam", tamilName: "கடகம்", englishName: "Cancer", glyph: "♋" },
  { id: "simmam", tamilName: "சிம்மம்", englishName: "Leo", glyph: "♌" },
  { id: "kanni", tamilName: "கன்னி", englishName: "Virgo", glyph: "♍" },
  { id: "thulam", tamilName: "துலாம்", englishName: "Libra", glyph: "♎" },
  { id: "viruchigam", tamilName: "விருச்சிகம்", englishName: "Scorpio", glyph: "♏" },
  { id: "dhanusu", tamilName: "தனுசு", englishName: "Sagittarius", glyph: "♐" },
  { id: "makaram", tamilName: "மகரம்", englishName: "Capricorn", glyph: "♑" },
  { id: "kumbam", tamilName: "கும்பம்", englishName: "Aquarius", glyph: "♒" },
  { id: "meenam", tamilName: "மீனம்", englishName: "Pisces", glyph: "♓" }
];

function getJulianDate(date) {
  return date.getTime() / 86400000 + 2440587.5;
}

function getPlanetaryPositions(date) {
  const jd = getJulianDate(date);
  const d = jd - 2451545.0;

  const g = (357.529 + 0.98560028 * d) % 360;
  const q = (280.459 + 0.98564736 * d) % 360;
  const gRad = (g * Math.PI) / 180;
  const sunLong = (q + 1.915 * Math.sin(gRad) + 0.02 * Math.sin(2 * gRad)) % 360;

  const l = (218.316 + 13.176396 * d) % 360;
  const m = (134.963 + 13.064993 * d) % 360;
  const mRad = (m * Math.PI) / 180;
  const moonLong = (l + 6.289 * Math.sin(mRad)) % 360;

  const ayanamsa = 23.85 + (d / 365.25) * 0.01397;
  const nirayanaMoon = (moonLong - ayanamsa + 360) % 360;
  const nirayanaSun = (sunLong - ayanamsa + 360) % 360;

  const diff = (nirayanaMoon - nirayanaSun + 360) % 360;
  const tithiIndex = Math.floor(diff / 12) % 30;
  const isShukla = tithiIndex < 15;
  const tithiRaw = TITHIS[tithiIndex];
  const tithiTa = `${isShukla ? "சுக்ல பட்ச" : "கிருஷ்ண பட்ச"} ${tithiRaw.ta}`;
  const tithiEn = `${isShukla ? "Shukla Paksha" : "Krishna Paksha"} ${tithiRaw.en}`;

  const nakshatraIndex = Math.floor(nirayanaMoon / (360 / 27)) % 27;
  const nakshatraRaw = NAKSHATRAS[nakshatraIndex];

  const moonRasiIndex = Math.floor(nirayanaMoon / 30);
  const moonRasi = RASIS[moonRasiIndex];

  return {
    tithi: { ta: tithiTa, en: tithiEn },
    nakshatra: { ta: nakshatraRaw.ta, en: nakshatraRaw.en },
    moonRasiIndex,
    moonRasiName: { ta: moonRasi.tamilName, en: moonRasi.englishName }
  };
}

function generateBilingualReading(targetRasiIndex, moonRasiIndex, nakshatra, rasi) {
  const house = ((moonRasiIndex - targetRasiIndex + 12) % 12) + 1;
  const isChandrashtama = house === 8;

  let ta = { focus: "", caution: "", habitCue: "" };
  let en = { focus: "", caution: "", habitCue: "" };

  switch (house) {
    case 1:
      ta.focus = `சந்திரன் உங்கள் ஜென்ம ராசியில் ${nakshatra.ta} நட்சத்திரத்தில் சஞ்சரிப்பதால் புத்துணர்ச்சியும் ஆற்றலும் கூடும். காலையில் ஒரு முக்கியமான முடிவை எடுத்து முடிப்பது நல்ல தொடக்கமாக அமையும்.`;
      ta.caution = `மதிய வேளையில் அவசரப்பட்டு வாக்குவாதங்களில் ஈடுபட வேண்டாம். வார்த்தைகளில் நிதானம் அவசியம்.`;
      ta.habitCue = `காலை பணியைத் தொடங்கும் முன் 3 முறை ஆழ்ந்த மூச்சுப் பயிற்சி செய்து மனதை அமைதிப்படுத்துங்கள்.`;

      en.focus = `With the Moon transiting your Janma Rasi under ${nakshatra.en}, mental clarity and vitality are high. Tackle your top priority before noon.`;
      en.caution = `Avoid hasty reactions or sharp remarks in afternoon meetings.`;
      en.habitCue = `Take 3 slow deep breaths before opening work messages.`;
      break;

    case 2:
      ta.focus = `பண வரவு மற்றும் குடும்ப விவகாரங்களில் தெளிவு பிறக்கும். வரவு-செலவுகளை ஒழுங்குபடுத்தவும், எதிர்காலத் தேவைகளுக்குத் திட்டமிடவும் உகந்த நாள்.`;
      ta.caution = `குடும்பப் பேச்சுவார்த்தைகளில் உணர்ச்சிவசப்பட்டுப் பேசாமல், பொறுமையைக் கடைப்பிடிக்கவும்.`;
      ta.habitCue = `இன்றைய முக்கிய செலவுகளைக் குறித்து வைத்து அத்தியாவசியத் தேவைகளுக்கு மட்டும் முன்னுரிமை கொடுங்கள்.`;

      en.focus = `Financial clarity and calm family discussions are highlighted. Review upcoming commitments with steady attention.`;
      en.caution = `Resist hasty remarks when discussing household finances.`;
      en.habitCue = `Jot down today's top 2 priorities on paper before checking phone alerts.`;
      break;

    case 3:
      ta.focus = `தகவல் தொடர்பு மற்றும் சிறு முயற்சிகள் சிறப்பான பலன் தரும். நிலுவையில் இருந்த முக்கியமான செய்தி அல்லது மின்னஞ்சல் மூலம் சாதகமான திருப்பம் உண்டாகும்.`;
      ta.caution = `ஒரே நேரத்தில் பல காரியங்களில் கவனத்தை சிதறவிடாமல் ஒரு பணியை முழுமையாக முடிக்கவும்.`;
      ta.habitCue = `அனைத்து பதில்களையும் ஒரே 20 நிமிட நேர இடைவெளியில் அனுப்பி முடித்து கவனச்சிதறலைத் தவிருங்கள்.`;

      en.focus = `Communication channels open smoothly. A crisp call or concise message unblocks a pending task.`;
      en.caution = `Do not scatter attention across too many errands at once.`;
      en.habitCue = `Group all outgoing messages into a single 20-minute focus window.`;
      break;

    case 4:
      ta.focus = `வீடு மற்றும் உடலமைதிக்கு முக்கியத்துவம் தரவேண்டிய நாள். வேலை செய்யும் சூழலைச் சுத்தமாக வைப்பது மன அமைதியையும் வேலைத்திறனையும் கூட்டும்.`;
      ta.caution = `பணிச்சுமையை மாலையில் வீட்டிற்கு எடுத்துச் செல்லாமல், குடும்பத்துடன் அமைதியான நேரம் செலவிடுங்கள்.`;
      ta.habitCue = `வேலை முடிந்ததும் 5 நிமிடங்கள் அமைதியாக அமர்ந்து மனதை அன்றாட அழுத்தத்திலிருந்து விடுவிக்கவும்.`;

      en.focus = `Domestic calm and personal grounding take priority. A tidy workspace enhances focus remarkably.`;
      en.caution = `Avoid carrying lingering work stress into your evening personal hours.`;
      en.habitCue = `Spend 5 quiet screen-free minutes resetting your pace after work.`;
      break;

    case 5:
      ta.focus = `புதிய யோசனைகள், கற்பனைத் திறன் மற்றும் திட்டமிடுதலுக்கு மிகச் சிறந்த நாள். சிக்கலான பிரச்சினைகளுக்கு புத்திசாலித்தனமான எளிய தீர்வு கிடைக்கும்.`;
      ta.caution = `ஊகங்களின் அடிப்படையில் அவசர முடிவுகள் எடுப்பதைத் தவிர்க்கவும்; உண்மை நிலவரங்களைச் சரிபார்க்கவும்.`;
      ta.habitCue = `இன்று தோன்றும் ஒரு சிறந்த புதுமையான யோசனையை உடனே குறிப்பெடுத்து வையுங்கள்.`;

      en.focus = `Creative agility and problem-solving are heightened. Great for drafting plans and unblocking roadblocks.`;
      en.caution = `Avoid speculative moves based purely on assumptions; verify with facts.`;
      en.habitCue = `Write down one creative insight or lesson before evening.`;
      break;

    case 6:
      ta.focus = `நிலுவையில் இருந்த சவாலான வேலைகளைச் சுலபமாக முடிக்கும் ஆற்றல் கிடைக்கும். நிர்வாகப் பணிகள் மற்றும் ஒழுங்குமுறை வேலைகள் வெற்றிகரமாக முடியும்.`;
      ta.caution = `உடற்சோர்வைப் புறக்கணிக்க வேண்டாம்; உரிய நேரத்தில் சத்தான உணவு மற்றும் போதுமான நீர் அருந்தவும்.`;
      ta.habitCue = `ஒவ்வொரு 2 மணி நேரத்திற்கும் ஒரு டம்ளர் தண்ணீர் அருந்தி சிறிது நேரம் உடல் தசைகளைத் தளர்த்தவும்.`;

      en.focus = `High stamina for clearing backlogged tasks and administrative chores. Disciplined focus wins today.`;
      en.caution = `Do not ignore physical fatigue or skip balanced meals.`;
      en.habitCue = `Drink a glass of water every 2 hours and stretch for 60 seconds.`;
      break;

    case 7:
      ta.focus = `கூட்டாளிகள் மற்றும் வாழ்க்கைத்துணையுடன் இணக்கமான சூழ்நிலை நிலவும். வெளிப்படையான கலந்துரையாடல் புதிய புரிந்துணர்வையும் நன்மைகளையும் தரும்.`;
      ta.caution = `மற்றவர்களைத் திருப்திப்படுத்த வேண்டும் என்பதற்காக உங்கள் எல்லைகளை விட்டுக் கொடுக்காதீர்கள்.`;
      ta.habitCue = `உங்களுக்கு உதவிய சக ஊழியர் அல்லது நண்பருக்கு ஒரு சிறிய நன்றிச் செய்தி அனுப்புங்கள்.`;

      en.focus = `Partnerships and collaborative discussions thrive. Active listening uncovers mutual agreements.`;
      en.caution = `Do not sacrifice essential personal boundaries just to keep instant peace.`;
      en.habitCue = `Send a sincere thank-you or acknowledgment to a trusted colleague.`;
      break;

    case 8: // Chandrashtama
      ta.focus = `சந்திராஷ்டம நாள்: நிதானமும் எச்சரிக்கையும் மிக அவசியம். புதிய முயற்சிகளைத் தவிர்த்து வழக்கமான தினசரிப் பணிகளில் மட்டும் கவனம் செலுத்துங்கள்.`;
      ta.caution = `முக்கியமான ஒப்பந்தங்களில் கையெழுத்திடுவதோ, பெரிய நிதி முடிவுகளோ எடுப்பதைத் தவிர்க்கவும். கோபத்தைக் குறைக்கவும்.`;
      ta.habitCue = `மனதில் பதற்றம் ஏற்படும்போதெல்லாம் கண்களை மூடி 60 விநாடிகள் நிதானமாக மூச்சை கவனியுங்கள்.`;

      en.focus = `Chandrashtama transit: maintain quiet, conservative pacing. Focus on routine responsibilities rather than high-stakes moves.`;
      en.caution = `Avoid signing contentious contracts or making major impulse commitments today.`;
      en.habitCue = `Whenever rushed, pause for a 60-second breathing cycle and re-verify your steps.`;
      break;

    case 9:
      ta.focus = `தொலைநோக்குப் பார்வை மற்றும் ஆன்மீக எண்ணங்கள் மேலோங்கும். புதிய விஷயங்களைக் கற்றுக்கொள்வதும், வழிகாட்டிகளின் ஆலோசனையைப் பெறுவதும் நன்மையளிக்கும்.`;
      ta.caution = `பெரிய திட்டங்களில் மூழ்கி, அன்றாட சிறிய நடைமுறை வேலைகளை மறந்துவிடாதீர்கள்.`;
      ta.habitCue = `உங்களுக்குப் பிடித்த பயனுள்ள புத்தகம் அல்லது கட்டுரையை 10 நிமிடங்கள் வாசியுங்கள்.`;

      en.focus = `Perspective widens and fortune favors philosophical clarity. Mentorship and learning bring timely alignment.`;
      en.caution = `Do not overlook small daily follow-ups while focusing on long-term ideas.`;
      en.habitCue = `Read 10 minutes of inspiring or educational material today.`;
      break;

    case 10:
      ta.focus = `தொழில் மற்றும் உத்தியோகத்தில் உங்கள் உழைப்புக்குரிய நன்மதிப்பு கிடைக்கும். தலைமைப் பொறுப்பை ஏற்று நேர்த்தியாக வழிநடத்த வேண்டிய நாள்.`;
      ta.caution = `மற்றவர்களின் வேலையில் அளவுக்கு அதிகமாகத் தலையிடாமல், பொறுப்புகளைப் பிரித்து அளியுங்கள்.`;
      ta.habitCue = `மாலை 5:00 மணிக்கு இன்றைய உங்கள் மிகச் சிறந்த உழைப்பைக் குறித்து வைத்து சுய திருப்தி அடையுங்கள்.`;

      en.focus = `Professional momentum and visible execution are strongly favored. Your dependability is recognized.`;
      en.caution = `Avoid micromanaging others; empower colleagues so you can focus on core objectives.`;
      en.habitCue = `Jot down your single most impactful work achievement of the day at 5:00 PM.`;
      break;

    case 11:
      ta.focus = `நண்பர்கள் மற்றும் நலம் விரும்பிகளின் ஆதரவு மனதிற்கு உற்சாகம் தரும். எதிர்பார்த்த நல்ல செய்தி அல்லது வாய்ப்புகள் தேடி வரக்கூடும்.`;
      ta.caution = `அதிகப்படியான சமூக சந்திப்புகளால் மாலை நேர ஓய்வை இழந்துவிடாமல் கவனமாக இருங்கள்.`;
      ta.habitCue = `நீண்ட நாட்களாகப் பேசாத ஒரு நல்ல நண்பருக்கு நலம் விசாரித்து ஒரு குறுஞ்செய்தி அனுப்புங்கள்.`;

      en.focus = `Support from friends and peers brings uplifting energy. Networking sparks timely opportunities.`;
      en.caution = `Be selective with social commitments so you don't deplete your evening energy.`;
      en.habitCue = `Reach out to one trusted friend you haven't spoken with recently.`;
      break;

    case 12:
      ta.focus = `அமைதியான சிந்தனையும் திட்டமிடலும் நன்மை தரும். தேவையற்ற அலைச்சல்களைத் தவிர்த்து, அடுத்த கட்ட வேலைகளுக்கு உங்களை ஆயத்தப்படுத்துங்கள்.`;
      ta.caution = `திட்டமிடாத வீண் செலவுகளைத் தவிர்க்கவும்; இரவு அதிக நேரம் விழித்திருப்பதைத் தவிர்க்கவும்.`;
      ta.habitCue = `தூங்கச் செல்வதற்கு 30 நிமிடங்களுக்கு முன்பே செல்போனை ஒதுக்கி வைத்துவிட்டு ஓய்வெடுங்கள்.`;

      en.focus = `Quiet contemplation and backend preparations work best. Wrap up loose ends to prepare for a fresh cycle.`;
      en.caution = `Beware of unplanned expenditures or late-night screen time that drains sleep.`;
      en.habitCue = `Turn off phone notifications 30 minutes before bed to allow your mind to decompress.`;
      break;
  }

  return {
    ...rasi,
    housePosition: house,
    isChandrashtama,
    ta,
    en
  };
}

function generateDailyData(targetDateStr) {
  let targetDate;
  if (targetDateStr) {
    targetDate = new Date(`${targetDateStr}T12:00:00+05:30`);
  } else {
    const now = new Date();
    const istParts = new Intl.DateTimeFormat("en-CA", {
      timeZone: "Asia/Kolkata",
      year: "numeric", month: "2-digit", day: "2-digit"
    }).formatToParts(now);
    const map = Object.fromEntries(istParts.map(p => [p.type, p.value]));
    targetDate = new Date(`${map.year}-${map.month}-${map.day}T12:00:00+05:30`);
  }

  const istDateString = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kolkata",
    year: "numeric", month: "2-digit", day: "2-digit"
  }).format(targetDate);

  const astro = getPlanetaryPositions(targetDate);

  const rasis = RASIS.map((rasi, idx) =>
    generateBilingualReading(idx, astro.moonRasiIndex, astro.nakshatra, rasi)
  );

  return {
    generatedAt: new Date().toISOString(),
    istDate: istDateString,
    panchang: {
      tithi: astro.tithi,
      nakshatra: astro.nakshatra,
      moonSign: astro.moonRasiName
    },
    rasis
  };
}

const inputDate = process.argv[2];
const payload = generateDailyData(inputDate);

const dataDir = path.resolve(__dirname, "../data");
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const datedPath = path.join(dataDir, `palan-${payload.istDate}.json`);
const todayPath = path.join(dataDir, "today.json");

fs.writeFileSync(datedPath, JSON.stringify(payload, null, 2), "utf8");
fs.writeFileSync(todayPath, JSON.stringify(payload, null, 2), "utf8");

console.log(`✓ Bilingual Daily Palan generated for ${payload.istDate}`);
console.log(`  - Moon Sign: ${payload.panchang.moonSign.ta} (${payload.panchang.moonSign.en})`);
console.log(`  - Tithi: ${payload.panchang.tithi.ta}`);
console.log(`  - Nakshatra: ${payload.panchang.nakshatra.ta}`);
