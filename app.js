/**
 * Daily Palan Pass — Mobile First Bilingual App
 * Default: Tamil (தமிழ்) with English toggle
 *
 * NOTE: Full bilingual transit dataset is bundled directly into this file so
 * that opening via `file:///` (where browser CORS blocks fetch()) works 100%
 * flawlessly out of the box with zero setup!
 */

/* ==========================================================================
   Embedded Full Bilingual Daily Transit Data
   ========================================================================== */

const BILINGUAL_TRANSIT_DATA = {
  istDate: "2026-11-24",
  panchang: {
    tithi: { ta: "சுக்ல பட்ச பௌர்ணமி", en: "Shukla Paksha Purnima" },
    nakshatra: { ta: "கார்த்திகை", en: "Krittika" },
    moonSign: { ta: "ரிஷபம்", en: "Taurus" }
  },
  rasis: [
    {
      id: "mesham",
      tamilName: "மேஷம்",
      englishName: "Aries",
      glyph: "♈",
      isChandrashtama: false,
      ta: {
        focus: "பண வரவு மற்றும் குடும்ப விவகாரங்களில் தெளிவு பிறக்கும். வரவு-செலவுகளை ஒழுங்குபடுத்தவும், எதிர்காலத் தேவைகளுக்குத் திட்டமிடவும் உகந்த நாள்.",
        caution: "குடும்பப் பேச்சுவார்த்தைகளில் உணர்ச்சிவசப்பட்டுப் பேசாமல், பொறுமையைக் கடைப்பிடிக்கவும்.",
        habitCue: "இன்றைய முக்கிய செலவுகளைக் குறித்து வைத்து அத்தியாவசியத் தேவைகளுக்கு மட்டும் முன்னுரிமை கொடுங்கள்."
      },
      en: {
        focus: "Financial clarity and calm family discussions are highlighted. Review upcoming commitments with steady attention.",
        caution: "Resist hasty remarks when discussing household finances.",
        habitCue: "Jot down today's top 2 priorities on paper before checking phone alerts."
      }
    },
    {
      id: "rishabam",
      tamilName: "ரிஷபம்",
      englishName: "Taurus",
      glyph: "♉",
      isChandrashtama: false,
      ta: {
        focus: "சந்திரன் உங்கள் ஜென்ம ராசியில் கார்த்திகை நட்சத்திரத்தில் சஞ்சரிப்பதால் புத்துணர்ச்சியும் ஆற்றலும் கூடும். காலையில் ஒரு முக்கியமான முடிவை எடுத்து முடிப்பது நல்ல தொடக்கமாக அமையும்.",
        caution: "மதிய வேளையில் அவசரப்பட்டு வாக்குவாதங்களில் ஈடுபட வேண்டாம். வார்த்தைகளில் நிதானம் அவசியம்.",
        habitCue: "காலை பணியைத் தொடங்கும் முன் 3 முறை ஆழ்ந்த மூச்சுப் பயிற்சி செய்து மனதை அமைதிப்படுத்துங்கள்."
      },
      en: {
        focus: "With the Moon transiting your Janma Rasi under Krittika, mental clarity and vitality are high. Tackle your top priority before noon.",
        caution: "Avoid hasty reactions or sharp remarks in afternoon meetings.",
        habitCue: "Take 3 slow deep breaths before opening work messages."
      }
    },
    {
      id: "mithunam",
      tamilName: "மிதுனம்",
      englishName: "Gemini",
      glyph: "♊",
      isChandrashtama: false,
      ta: {
        focus: "அமைதியான சிந்தனையும் திட்டமிடலும் நன்மை தரும். தேவையற்ற அலைச்சல்களைத் தவிர்த்து, அடுத்த கட்ட வேலைகளுக்கு உங்களை ஆயத்தப்படுத்துங்கள்.",
        caution: "திட்டமிடாத வீண் செலவுகளைத் தவிர்க்கவும்; இரவு அதிக நேரம் விழித்திருப்பதைத் தவிர்க்கவும்.",
        habitCue: "தூங்கச் செல்வதற்கு 30 நிமிடங்களுக்கு முன்பே செல்போனை ஒதுக்கி வைத்துவிட்டு ஓய்வெடுங்கள்."
      },
      en: {
        focus: "Quiet contemplation and backend preparations work best. Wrap up loose ends to prepare for a fresh cycle.",
        caution: "Beware of unplanned expenditures or late-night screen time that drains sleep.",
        habitCue: "Turn off phone notifications 30 minutes before bed to allow your mind to decompress."
      }
    },
    {
      id: "kadagam",
      tamilName: "கடகம்",
      englishName: "Cancer",
      glyph: "♋",
      isChandrashtama: false,
      ta: {
        focus: "நண்பர்கள் மற்றும் நலம் விரும்பிகளின் ஆதரவு மனதிற்கு உற்சாகம் தரும். எதிர்பார்த்த நல்ல செய்தி அல்லது வாய்ப்புகள் தேடி வரக்கூடும்.",
        caution: "அதிகப்படியான சமூக சந்திப்புகளால் மாலை நேர ஓய்வை இழந்துவிடாமல் கவனமாக இருங்கள்.",
        habitCue: "நீண்ட நாட்களாகப் பேசாத ஒரு நல்ல நண்பருக்கு நலம் விசாரித்து ஒரு குறுஞ்செய்தி அனுப்புங்கள்."
      },
      en: {
        focus: "Support from friends and peers brings uplifting energy. Networking sparks timely opportunities.",
        caution: "Be selective with social commitments so you don't deplete your evening energy.",
        habitCue: "Reach out to one trusted friend you haven't spoken with recently."
      }
    },
    {
      id: "simmam",
      tamilName: "சிம்மம்",
      englishName: "Leo",
      glyph: "♌",
      isChandrashtama: false,
      ta: {
        focus: "தொழில் மற்றும் உத்தியோகத்தில் உங்கள் உழைப்புக்குரிய நன்மதிப்பு கிடைக்கும். தலைமைப் பொறுப்பை ஏற்று நேர்த்தியாக வழிநடத்த வேண்டிய நாள்.",
        caution: "மற்றவர்களின் வேலையில் அளவுக்கு அதிகமாகத் தலையிடாமல், பொறுப்புகளைப் பிரித்து அளியுங்கள்.",
        habitCue: "மாலை 5:00 மணிக்கு இன்றைய உங்கள் மிகச் சிறந்த உழைப்பைக் குறித்து வைத்து சுய திருப்தி அடையுங்கள்."
      },
      en: {
        focus: "Professional momentum and visible execution are strongly favored. Your dependability is recognized.",
        caution: "Avoid micromanaging others; empower colleagues so you can focus on core objectives.",
        habitCue: "Jot down your single most impactful work achievement of the day at 5:00 PM."
      }
    },
    {
      id: "kanni",
      tamilName: "கன்னி",
      englishName: "Virgo",
      glyph: "♍",
      isChandrashtama: false,
      ta: {
        focus: "தொலைநோக்குப் பார்வை மற்றும் ஆன்மீக எண்ணங்கள் மேலோங்கும். புதிய விஷயங்களைக் கற்றுக்கொள்வதும், வழிகாட்டிகளின் ஆலோசனையைப் பெறுவதும் நன்மையளிக்கும்.",
        caution: "பெரிய திட்டங்களில் மூழ்கி, அன்றாட சிறிய நடைமுறை வேலைகளை மறந்துவிடாதீர்கள்.",
        habitCue: "உங்களுக்குப் பிடித்த பயனுள்ள புத்தகம் அல்லது கட்டுரையை 10 நிமிடங்கள் வாசியுங்கள்."
      },
      en: {
        focus: "Perspective widens and fortune favors philosophical clarity. Mentorship and learning bring timely alignment.",
        caution: "Do not overlook small daily follow-ups while focusing on long-term ideas.",
        habitCue: "Read 10 minutes of inspiring or educational material today."
      }
    },
    {
      id: "thulam",
      tamilName: "துலாம்",
      englishName: "Libra",
      glyph: "♎",
      isChandrashtama: true,
      ta: {
        focus: "சந்திராஷ்டம நாள்: நிதானமும் எச்சரிக்கையும் மிக அவசியம். புதிய முயற்சிகளைத் தவிர்த்து வழக்கமான தினசரிப் பணிகளில் மட்டும் கவனம் செலுத்துங்கள்.",
        caution: "முக்கியமான ஒப்பந்தங்களில் கையெழுத்திடுவதோ, பெரிய நிதி முடிவுகளோ எடுப்பதைத் தவிர்க்கவும். கோபத்தைக் குறைக்கவும்.",
        habitCue: "மனதில் பதற்றம் ஏற்படும்போதெல்லாம் கண்களை மூடி 60 விநாடிகள் நிதானமாக மூச்சை கவனியுங்கள்."
      },
      en: {
        focus: "Chandrashtama transit: maintain quiet, conservative pacing. Focus on routine responsibilities rather than high-stakes moves.",
        caution: "Avoid signing contentious contracts or making major impulse commitments today.",
        habitCue: "Whenever rushed, pause for a 60-second breathing cycle and re-verify your steps."
      }
    },
    {
      id: "viruchigam",
      tamilName: "விருச்சிகம்",
      englishName: "Scorpio",
      glyph: "♏",
      isChandrashtama: false,
      ta: {
        focus: "கூட்டாளிகள் மற்றும் வாழ்க்கைத்துணையுடன் இணக்கமான சூழ்நிலை நிலவும். வெளிப்படையான கலந்துரையாடல் புதிய புரிந்துணர்வையும் நன்மைகளையும் தரும்.",
        caution: "மற்றவர்களைத் திருப்திப்படுத்த வேண்டும் என்பதற்காக உங்கள் எல்லைகளை விட்டுக் கொடுக்காதீர்கள்.",
        habitCue: "உங்களுக்கு உதவிய சக ஊழியர் அல்லது நண்பருக்கு ஒரு சிறிய நன்றிச் செய்தி அனுப்புங்கள்."
      },
      en: {
        focus: "Partnerships and collaborative discussions thrive. Active listening uncovers mutual agreements.",
        caution: "Do not sacrifice essential personal boundaries just to keep instant peace.",
        habitCue: "Send a sincere thank-you or acknowledgment to a trusted colleague."
      }
    },
    {
      id: "dhanusu",
      tamilName: "தனுசு",
      englishName: "Sagittarius",
      glyph: "♐",
      isChandrashtama: false,
      ta: {
        focus: "நிலுவையில் இருந்த சவாலான வேலைகளைச் சுலபமாக முடிக்கும் ஆற்றல் கிடைக்கும். நிர்வாகப் பணிகள் மற்றும் ஒழுங்குமுறை வேலைகள் வெற்றிகரமாக முடியும்.",
        caution: "உடற்சோர்வைப் புறக்கணிக்க வேண்டாம்; உரிய நேரத்தில் சத்தான உணவு மற்றும் போதுமான நீர் அருந்தவும்.",
        habitCue: "ஒவ்வொரு 2 மணி நேரத்திற்கும் ஒரு டம்ளர் தண்ணீர் அருந்தி சிறிது நேரம் உடல் தசைகளைத் தளர்த்தவும்."
      },
      en: {
        focus: "High stamina for clearing backlogged tasks and administrative chores. Disciplined focus wins today.",
        caution: "Do not ignore physical fatigue or skip balanced meals.",
        habitCue: "Drink a glass of water every 2 hours and stretch for 60 seconds."
      }
    },
    {
      id: "makaram",
      tamilName: "மகரம்",
      englishName: "Capricorn",
      glyph: "♑",
      isChandrashtama: false,
      ta: {
        focus: "புதிய யோசனைகள், கற்பனைத் திறன் மற்றும் திட்டமிடுதலுக்கு மிகச் சிறந்த நாள். சிக்கலான பிரச்சினைகளுக்கு புத்திசாலித்தனமான எளிய தீர்வு கிடைக்கும்.",
        caution: "ஊகங்களின் அடிப்படையில் அவசர முடிவுகள் எடுப்பதைத் தவிர்க்கவும்; உண்மை நிலவரங்களைச் சரிபார்க்கவும்.",
        habitCue: "இன்று தோன்றும் ஒரு சிறந்த புதுமையான யோசனையை உடனே குறிப்பெடுத்து வையுங்கள்."
      },
      en: {
        focus: "Creative agility and problem-solving are heightened. Great for drafting plans and unblocking roadblocks.",
        caution: "Avoid speculative moves based purely on assumptions; verify with facts.",
        habitCue: "Write down one creative insight or lesson before evening."
      }
    },
    {
      id: "kumbam",
      tamilName: "கும்பம்",
      englishName: "Aquarius",
      glyph: "♒",
      isChandrashtama: false,
      ta: {
        focus: "வீடு மற்றும் உடலமைதிக்கு முக்கியத்துவம் தரவேண்டிய நாள். வேலை செய்யும் சூழலைச் சுத்தமாக வைப்பது மன அமைதியையும் வேலைத்திறனையும் கூட்டும்.",
        caution: "பணிச்சுமையை மாலையில் வீட்டிற்கு எடுத்துச் செல்லாமல், குடும்பத்துடன் அமைதியான நேரம் செலவிடுங்கள்.",
        habitCue: "வேலை முடிந்ததும் 5 நிமிடங்கள் அமைதியாக அமர்ந்து மனதை அன்றாட அழுத்தத்திலிருந்து விடுவிக்கவும்."
      },
      en: {
        focus: "Domestic calm and personal grounding take priority. A tidy workspace enhances focus remarkably.",
        caution: "Avoid carrying lingering work stress into your evening personal hours.",
        habitCue: "Spend 5 quiet screen-free minutes resetting your pace after work."
      }
    },
    {
      id: "meenam",
      tamilName: "மீனம்",
      englishName: "Pisces",
      glyph: "♓",
      isChandrashtama: false,
      ta: {
        focus: "தகவல் தொடர்பு மற்றும் சிறு முயற்சிகள் சிறப்பான பலன் தரும். நிலுவையில் இருந்த முக்கியமான செய்தி அல்லது மின்னஞ்சல் மூலம் சாதகமான திருப்பம் உண்டாகும்.",
        caution: "ஒரே நேரத்தில் பல காரியங்களில் கவனத்தை சிதறவிடாமல் ஒரு பணியை முழுமையாக முடிக்கவும்.",
        habitCue: "அனைத்து பதில்களையும் ஒரே 20 நிமிட நேர இடைவெளியில் அனுப்பி முடித்து கவனச்சிதறலைத் தவிருங்கள்."
      },
      en: {
        focus: "Communication channels open smoothly. A crisp call or concise message unblocks a pending task.",
        caution: "Do not scatter attention across too many errands at once.",
        habitCue: "Group all outgoing messages into a single 20-minute focus window."
      }
    }
  ]
};

/* ==========================================================================
   City Directory
   ========================================================================== */

const CITIES = [
  { id: "chennai", nameTa: "சென்னை", nameEn: "Chennai", lat: 13.0827, lon: 80.2707, tz: "Asia/Kolkata" },
  { id: "coimbatore", nameTa: "கோவை", nameEn: "Coimbatore", lat: 11.0168, lon: 76.9558, tz: "Asia/Kolkata" },
  { id: "madurai", nameTa: "மதுரை", nameEn: "Madurai", lat: 9.9252, lon: 78.1198, tz: "Asia/Kolkata" },
  { id: "trichy", nameTa: "திருச்சி", nameEn: "Trichy", lat: 10.7905, lon: 78.7047, tz: "Asia/Kolkata" },
  { id: "salem", nameTa: "சேலம்", nameEn: "Salem", lat: 11.6643, lon: 78.1460, tz: "Asia/Kolkata" },
  { id: "tirunelveli", nameTa: "நெல்லை", nameEn: "Tirunelveli", lat: 8.7139, lon: 77.7567, tz: "Asia/Kolkata" },
  { id: "bengaluru", nameTa: "பெங்களூரு", nameEn: "Bengaluru", lat: 12.9716, lon: 77.5946, tz: "Asia/Kolkata" },
  { id: "singapore", nameTa: "சிங்கப்பூர்", nameEn: "Singapore", lat: 1.3521, lon: 103.8198, tz: "Asia/Singapore" },
  { id: "kualalumpur", nameTa: "கோலாலம்பூர்", nameEn: "Kuala Lumpur", lat: 3.1390, lon: 101.6869, tz: "Asia/Kuala_Lumpur" },
  { id: "dubai", nameTa: "துபாய்", nameEn: "Dubai", lat: 25.2048, lon: 55.2708, tz: "Asia/Dubai" },
  { id: "london", nameTa: "லண்டன்", nameEn: "London", lat: 51.5074, lon: -0.1278, tz: "Europe/London" },
  { id: "newyork", nameTa: "நியூயார்க்", nameEn: "New York", lat: 40.7128, lon: -74.0060, tz: "America/New_York" }
];

/* ==========================================================================
   UI Bilingual Dictionary
   ========================================================================== */

const I18N = {
  ta: {
    appTitle: "தினப்பலன்",
    previewBadge: "இலவசம்",
    unlockedBadge: "₹10 ஆக்டிவ்",
    rahuLabel: "இராகு",
    tithiLabel: "திதி",
    nakshatraLabel: "நட்சத்திரம்",
    sunLabel: "சூரியன்",
    chandrashtama: "⚠️ சந்திராஷ்டமம்",
    readingSub: "60-வினாடி தினப்பலன்",
    focusHeading: "1 · கவனம் (Focus)",
    cautionHeading: "2 · எச்சரிக்கை (Caution)",
    habitHeading: "3 · பழக்க வழக்கம் (Habit Cue)",
    freeTag: "இலவசம்",
    lockedTag: "🔒 ₹10 பாஸ்",
    unlockedTag: "✓ அன்லாக்",
    cautionOverlay: "இன்றைய எச்சரிக்கை & நேரக் குறிப்பை அறிய ₹10 பாஸ் பெறவும்",
    habitOverlay: "இன்றைய கோசாரத்திற்குரிய 2-நிமிட பழக்கக் குறிப்பு",
    unlockTitle: "முழு பலனையும் அன்லாக் செய்ய — ₹10",
    unlockDesc: "எச்சரிக்கை & பழக்க வழக்கம் (12 ராசிகளுக்கும்)",
    gpayBtn: "₹10 பாஸ்",
    unlockedMsg: "இன்றைய ₹10 பாஸ் ஆக்டிவ் (அனைத்து ராசிகளும் திறக்கப்பட்டுள்ளன)",
    resetBtn: "முன்னோட்டம்",
    locModalTitle: "இடத்தை தேர்வு செய்யவும்",
    gpsBtn: "📍 தற்போதைய இடத்தை கண்டறி (GPS)",
    modalEyebrow: "Google Pay (UPI)",
    gpayTitle: "₹10 தினப்பலன் பாஸ்",
    receiptDate: "தேதி",
    receiptCoverage: "அணுகல்",
    receiptCoverageVal: "12 ராசிகள் · முழு பலன்",
    receiptTotal: "மொத்தம்",
    protoNote: "மாதிரி கட்டணம்: 'உறுதி செய்' பொத்தானை அழுத்தினால் ₹10 பாஸ் உடனே ஆக்டிவ் ஆகும்.",
    confirmGpay: "GPay மூலம் ₹10 செலுத்தவும்",
    cancelGpay: "ரத்து செய்",
    lockedPlaceholder: "இன்றைய எச்சரிக்கை மற்றும் பழக்க வழக்கத்தை அறிய ₹10 பாஸ் பெறவும்."
  },
  en: {
    appTitle: "Daily Palan",
    previewBadge: "Free",
    unlockedBadge: "₹10 Active",
    rahuLabel: "Rahu",
    tithiLabel: "Tithi",
    nakshatraLabel: "Nakshatra",
    sunLabel: "Sun",
    chandrashtama: "⚠️ Chandrashtama",
    readingSub: "60-second forecast",
    focusHeading: "1 · Focus",
    cautionHeading: "2 · Caution",
    habitHeading: "3 · Habit Cue",
    freeTag: "Free",
    lockedTag: "🔒 ₹10 Pass",
    unlockedTag: "✓ Unlocked",
    cautionOverlay: "Unlock today's watchout & timing with the ₹10 Pass",
    habitOverlay: "Unlock today's 2-minute transit habit cue",
    unlockTitle: "Unlock Full Palan — ₹10",
    unlockDesc: "Caution & Habit Cue for all 12 rasis",
    gpayBtn: "₹10 Pass",
    unlockedMsg: "Today's ₹10 Pass Active (All 12 rasis unlocked)",
    resetBtn: "Preview",
    locModalTitle: "Choose Location",
    gpsBtn: "📍 Detect Current Location (GPS)",
    modalEyebrow: "Google Pay (UPI)",
    gpayTitle: "₹10 Daily Palan Pass",
    receiptDate: "Date",
    receiptCoverage: "Coverage",
    receiptCoverageVal: "All 12 Rasis · Full Reading",
    receiptTotal: "Total",
    protoNote: "Prototype Note: Clicking confirm activates the ₹10 pass immediately.",
    confirmGpay: "Pay ₹10 via GPay",
    cancelGpay: "Cancel",
    lockedPlaceholder: "Unlock the ₹10 Daily Pass via GPay to view Caution and Habit Cue."
  }
};

/* ==========================================================================
   State & Storage
   ========================================================================== */

const STORAGE_KEYS = {
  lang: "palan_lang_v4",
  rasi: "palan_rasi_v4",
  city: "palan_city_v4",
  pass: "palan_pass_v4"
};

const state = {
  lang: "ta", // Default is Tamil
  selectedRasiId: "mesham",
  currentCity: CITIES[0],
  isUnlocked: false,
  data: BILINGUAL_TRANSIT_DATA // Populated immediately so file:/// works!
};

/* ==========================================================================
   Astronomical Solar & Vedic Timings Engine
   ========================================================================== */

function calculateSolarTimes(date, lat, lon) {
  const dayOfYear = Math.floor(
    (date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24
  );
  const gamma = (2 * Math.PI / 365) * (dayOfYear - 1);

  const eqtime =
    229.18 *
    (0.000075 +
      0.001868 * Math.cos(gamma) -
      0.032077 * Math.sin(gamma) -
      0.014615 * Math.cos(2 * gamma) -
      0.040849 * Math.sin(2 * gamma));

  const decl =
    0.006918 -
    0.399912 * Math.cos(gamma) +
    0.070257 * Math.sin(gamma) -
    0.006758 * Math.cos(2 * gamma) +
    0.000907 * Math.sin(2 * gamma);

  const latRad = (lat * Math.PI) / 180;
  const zenithRad = (90.833 * Math.PI) / 180;

  const cosH =
    (Math.cos(zenithRad) - Math.sin(latRad) * Math.sin(decl)) /
    (Math.cos(latRad) * Math.cos(decl));

  const clampedCosH = Math.max(-1, Math.min(1, cosH));
  const haHours = (Math.acos(clampedCosH) * 180 / Math.PI) / 15;

  const solarNoonUtcMinutes = 720 - 4 * lon - eqtime;
  const sunriseUtcMinutes = solarNoonUtcMinutes - haHours * 60;
  const sunsetUtcMinutes = solarNoonUtcMinutes + haHours * 60;

  const sunriseDate = new Date(date);
  sunriseDate.setUTCHours(0, 0, 0, 0);
  sunriseDate.setUTCMinutes(sunriseUtcMinutes);

  const sunsetDate = new Date(date);
  sunsetDate.setUTCHours(0, 0, 0, 0);
  sunsetDate.setUTCMinutes(sunsetUtcMinutes);

  return { sunriseDate, sunsetDate };
}

function calculateVedicTimings(date, lat, lon, timezone) {
  const { sunriseDate, sunsetDate } = calculateSolarTimes(date, lat, lon);
  const dayLengthMs = Math.max(1, sunsetDate.getTime() - sunriseDate.getTime());
  const segmentMs = dayLengthMs / 8;

  const dayOfWeek = date.getDay();
  const RAHU_SEGMENTS = [8, 2, 7, 5, 6, 4, 3];
  const rahuPart = RAHU_SEGMENTS[dayOfWeek] - 1;

  const rahuStart = new Date(sunriseDate.getTime() + rahuPart * segmentMs);
  const rahuEnd = new Date(sunriseDate.getTime() + (rahuPart + 1) * segmentMs);

  const formatOpts = { timeZone: timezone, hour: "numeric", minute: "2-digit", hour12: true };
  const fmt = (d) => new Intl.DateTimeFormat("en-IN", formatOpts).format(d);

  return {
    sunrise: fmt(sunriseDate),
    sunset: fmt(sunsetDate),
    rahu: `${fmt(rahuStart)}–${fmt(rahuEnd)}`
  };
}

/* ==========================================================================
   DOM Elements
   ========================================================================== */

const els = {
  appTitle: document.getElementById("appTitle"),
  dateLocationSub: document.getElementById("dateLocationSub"),
  langTaBtn: document.getElementById("langTaBtn"),
  langEnBtn: document.getElementById("langEnBtn"),
  openLocModalBtn: document.getElementById("openLocModalBtn"),
  locBtnLabel: document.getElementById("locBtnLabel"),
  passStatusBadge: document.getElementById("passStatusBadge"),

  rahuLabel: document.getElementById("rahuLabel"),
  rahuVal: document.getElementById("rahuVal"),
  tithiLabel: document.getElementById("tithiLabel"),
  tithiVal: document.getElementById("tithiVal"),
  nakshatraLabel: document.getElementById("nakshatraLabel"),
  nakshatraVal: document.getElementById("nakshatraVal"),
  sunLabel: document.getElementById("sunLabel"),
  sunVal: document.getElementById("sunVal"),

  rasiCarousel: document.getElementById("rasiCarousel"),

  activeGlyph: document.getElementById("activeGlyph"),
  activeRasiName: document.getElementById("activeRasiName"),
  chandrashtamaBadge: document.getElementById("chandrashtamaBadge"),
  readingSub: document.getElementById("readingSub"),

  focusHeading: document.getElementById("focusHeading"),
  focusTag: document.getElementById("focusTag"),
  focusText: document.getElementById("focusText"),

  cautionCard: document.getElementById("cautionCard"),
  cautionHeading: document.getElementById("cautionHeading"),
  cautionLockTag: document.getElementById("cautionLockTag"),
  cautionText: document.getElementById("cautionText"),
  cautionOverlay: document.getElementById("cautionOverlay"),
  cautionOverlayText: document.getElementById("cautionOverlayText"),

  habitCard: document.getElementById("habitCard"),
  habitHeading: document.getElementById("habitHeading"),
  habitLockTag: document.getElementById("habitLockTag"),
  habitText: document.getElementById("habitText"),
  habitOverlay: document.getElementById("habitOverlay"),
  habitOverlayText: document.getElementById("habitOverlayText"),

  unlockCtaBox: document.getElementById("unlockCtaBox"),
  unlockCtaTitle: document.getElementById("unlockCtaTitle"),
  unlockCtaDesc: document.getElementById("unlockCtaDesc"),
  openGpayModalBtn: document.getElementById("openGpayModalBtn"),
  gpayBtnText: document.getElementById("gpayBtnText"),

  unlockedStatusBox: document.getElementById("unlockedStatusBox"),
  unlockedMsg: document.getElementById("unlockedMsg"),
  resetPassBtn: document.getElementById("resetPassBtn"),

  locModalBackdrop: document.getElementById("locModalBackdrop"),
  closeLocModalBtn: document.getElementById("closeLocModalBtn"),
  locModalTitle: document.getElementById("locModalTitle"),
  gpsLocateBtn: document.getElementById("gpsLocateBtn"),
  cityListGrid: document.getElementById("cityListGrid"),

  gpayModalBackdrop: document.getElementById("gpayModalBackdrop"),
  modalEyebrow: document.getElementById("modalEyebrow"),
  gpayTitle: document.getElementById("gpayTitle"),
  closeGpayModalBtn: document.getElementById("closeGpayModalBtn"),
  receiptDateLabel: document.getElementById("receiptDateLabel"),
  receiptDateVal: document.getElementById("receiptDateVal"),
  receiptCoverageLabel: document.getElementById("receiptCoverageLabel"),
  receiptCoverageVal: document.getElementById("receiptCoverageVal"),
  receiptTotalLabel: document.getElementById("receiptTotalLabel"),
  prototypeNote: document.getElementById("prototypeNote"),
  confirmGpayBtn: document.getElementById("confirmGpayBtn"),
  confirmGpayText: document.getElementById("confirmGpayText"),
  cancelGpayBtn: document.getElementById("cancelGpayBtn"),
  cancelGpayText: document.getElementById("cancelGpayText")
};

/* ==========================================================================
   Rendering
   ========================================================================== */

function getDayKey(tz) {
  try {
    const parts = new Intl.DateTimeFormat("en-CA", {
      timeZone: tz || "Asia/Kolkata",
      year: "numeric", month: "2-digit", day: "2-digit"
    }).formatToParts(new Date());
    const m = Object.fromEntries(parts.map(p => [p.type, p.value]));
    return `${m.year}-${m.month}-${m.day}`;
  } catch {
    return new Date().toISOString().split("T")[0];
  }
}

function updateStaticText() {
  const t = I18N[state.lang];
  document.documentElement.lang = state.lang;

  els.appTitle.textContent = t.appTitle;
  els.rahuLabel.textContent = t.rahuLabel;
  els.tithiLabel.textContent = t.tithiLabel;
  els.nakshatraLabel.textContent = t.nakshatraLabel;
  els.sunLabel.textContent = t.sunLabel;

  els.readingSub.textContent = t.readingSub;
  els.chandrashtamaBadge.textContent = t.chandrashtama;

  els.focusHeading.textContent = t.focusHeading;
  els.focusTag.textContent = t.freeTag;

  els.cautionHeading.textContent = t.cautionHeading;
  els.cautionOverlayText.textContent = t.cautionOverlay;

  els.habitHeading.textContent = t.habitHeading;
  els.habitOverlayText.textContent = t.habitOverlay;

  els.unlockCtaTitle.textContent = t.unlockTitle;
  els.unlockCtaDesc.textContent = t.unlockDesc;
  els.gpayBtnText.textContent = t.gpayBtn;

  els.unlockedMsg.textContent = t.unlockedMsg;
  els.resetPassBtn.textContent = t.resetBtn;

  els.locModalTitle.textContent = t.locModalTitle;
  els.gpsLocateBtn.innerHTML = `<span>${t.gpsBtn}</span>`;

  els.modalEyebrow.textContent = t.modalEyebrow;
  els.gpayTitle.textContent = t.gpayTitle;
  els.receiptDateLabel.textContent = t.receiptDate;
  els.receiptCoverageLabel.textContent = t.receiptCoverage;
  els.receiptCoverageVal.textContent = t.receiptCoverageVal;
  els.receiptTotalLabel.textContent = t.receiptTotal;
  els.prototypeNote.textContent = t.protoNote;
  els.confirmGpayText.textContent = t.confirmGpay;
  els.cancelGpayText.textContent = t.cancelGpay;

  els.langTaBtn.classList.toggle("is-active", state.lang === "ta");
  els.langEnBtn.classList.toggle("is-active", state.lang === "en");
}

function renderPanchangAndLocation() {
  const loc = state.currentCity;
  const cityName = state.lang === "ta" ? (loc.nameTa || loc.nameEn) : loc.nameEn;
  els.locBtnLabel.textContent = cityName;

  const now = new Date();
  const dateFormatted = new Intl.DateTimeFormat(state.lang === "ta" ? "ta-IN" : "en-IN", {
    timeZone: loc.tz,
    day: "numeric", month: "short"
  }).format(now);

  els.dateLocationSub.textContent = `${dateFormatted} · ${cityName}`;
  els.receiptDateVal.textContent = `${dateFormatted} (${cityName})`;

  // Calculate dynamic solar & vedic timings
  const timings = calculateVedicTimings(now, loc.lat, loc.lon, loc.tz);
  els.rahuVal.textContent = timings.rahu;
  els.sunVal.textContent = timings.sunrise;

  if (state.data && state.data.panchang) {
    const p = state.data.panchang;
    els.tithiVal.textContent = state.lang === "ta" ? p.tithi.ta : p.tithi.en;
    els.nakshatraVal.textContent = state.lang === "ta" ? p.nakshatra.ta : p.nakshatra.en;
  }
}

function renderRasiCarousel() {
  if (!state.data || !state.data.rasis) return;
  els.rasiCarousel.innerHTML = "";

  state.data.rasis.forEach((rasi) => {
    const isSelected = rasi.id === state.selectedRasiId;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `rasi-chip-btn ${isSelected ? "is-selected" : ""}`;
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", String(isSelected));
    btn.dataset.rasiId = rasi.id;

    const glyph = document.createElement("span");
    glyph.className = "chip-glyph";
    glyph.textContent = rasi.glyph;

    const title = document.createElement("span");
    title.className = "chip-title";
    const name = state.lang === "ta" ? rasi.tamilName : rasi.englishName;
    title.textContent = rasi.isChandrashtama ? `${name} ⚠️` : name;

    btn.append(glyph, title);
    btn.addEventListener("click", () => selectRasi(rasi.id));
    els.rasiCarousel.appendChild(btn);

    if (isSelected) {
      setTimeout(() => btn.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" }), 50);
    }
  });
}

function renderReading() {
  if (!state.data || !state.data.rasis) return;

  const rasi = state.data.rasis.find(r => r.id === state.selectedRasiId) || state.data.rasis[0];
  const langKey = state.lang;
  const content = rasi[langKey] || rasi.ta;

  els.activeGlyph.textContent = rasi.glyph;
  els.activeRasiName.textContent = langKey === "ta"
    ? `${rasi.tamilName} · ${rasi.englishName}`
    : `${rasi.englishName} (${rasi.tamilName})`;

  els.chandrashtamaBadge.hidden = !rasi.isChandrashtama;
  els.focusText.textContent = content.focus;

  const t = I18N[state.lang];

  if (state.isUnlocked) {
    els.passStatusBadge.textContent = t.unlockedBadge;
    els.passStatusBadge.className = "status-badge status-badge--unlocked";

    els.cautionCard.classList.remove("palan-card--locked");
    els.cautionText.textContent = content.caution;
    els.cautionLockTag.textContent = t.unlockedTag;
    els.cautionLockTag.className = "tag-unlocked";
    els.cautionOverlay.hidden = true;

    els.habitCard.classList.remove("palan-card--locked");
    els.habitText.textContent = content.habitCue;
    els.habitLockTag.textContent = t.unlockedTag;
    els.habitLockTag.className = "tag-unlocked";
    els.habitOverlay.hidden = true;

    els.unlockCtaBox.hidden = true;
    els.unlockedStatusBox.hidden = false;
  } else {
    els.passStatusBadge.textContent = t.previewBadge;
    els.passStatusBadge.className = "status-badge status-badge--preview";

    els.cautionCard.classList.add("palan-card--locked");
    els.cautionText.textContent = t.lockedPlaceholder;
    els.cautionLockTag.textContent = t.lockedTag;
    els.cautionLockTag.className = "tag-locked";
    els.cautionOverlay.hidden = false;

    els.habitCard.classList.add("palan-card--locked");
    els.habitText.textContent = t.lockedPlaceholder;
    els.habitLockTag.textContent = t.lockedTag;
    els.habitLockTag.className = "tag-locked";
    els.habitOverlay.hidden = false;

    els.unlockCtaBox.hidden = false;
    els.unlockedStatusBox.hidden = true;
  }
}

function renderLocationModal() {
  els.cityListGrid.innerHTML = "";
  CITIES.forEach((city) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `city-btn ${city.id === state.currentCity.id ? "is-active" : ""}`;
    btn.textContent = state.lang === "ta" ? city.nameTa : city.nameEn;
    btn.addEventListener("click", () => {
      selectCity(city);
      closeLocModal();
    });
    els.cityListGrid.appendChild(btn);
  });
}

/* ==========================================================================
   Interactions
   ========================================================================== */

function selectRasi(id) {
  if (state.selectedRasiId === id) return;
  state.selectedRasiId = id;
  try { localStorage.setItem(STORAGE_KEYS.rasi, id); } catch {}

  const buttons = els.rasiCarousel.querySelectorAll(".rasi-chip-btn");
  buttons.forEach(btn => {
    const isSelected = btn.dataset.rasiId === id;
    btn.setAttribute("aria-selected", String(isSelected));
    btn.classList.toggle("is-selected", isSelected);
  });
  renderReading();
}

function selectCity(city) {
  state.currentCity = city;
  try {
    localStorage.setItem(STORAGE_KEYS.city, city.id);
  } catch {}
  renderPanchangAndLocation();
  renderReading();
}

function setLanguage(lang) {
  if (state.lang === lang) return;
  state.lang = lang;
  try { localStorage.setItem(STORAGE_KEYS.lang, lang); } catch {}
  updateStaticText();
  renderPanchangAndLocation();
  renderRasiCarousel();
  renderReading();
}

function openLocModal() {
  renderLocationModal();
  els.locModalBackdrop.hidden = false;
}

function closeLocModal() {
  els.locModalBackdrop.hidden = true;
}

function openGpayModal() {
  els.gpayModalBackdrop.hidden = false;
}

function closeGpayModal() {
  els.gpayModalBackdrop.hidden = true;
}

function simulateGpayUnlock() {
  state.isUnlocked = true;
  try {
    const dayKey = getDayKey(state.currentCity.tz);
    localStorage.setItem(STORAGE_KEYS.pass, dayKey);
  } catch {}
  closeGpayModal();
  renderReading();
}

function resetToPreview() {
  state.isUnlocked = false;
  try { localStorage.removeItem(STORAGE_KEYS.pass); } catch {}
  renderReading();
}

function detectGpsLocation() {
  if (!navigator.geolocation) {
    alert("GPS not supported in this browser.");
    return;
  }
  els.gpsLocateBtn.textContent = state.lang === "ta" ? "கண்டறிகிறது..." : "Locating...";

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "Asia/Kolkata";
      const customCity = {
        id: "custom",
        nameTa: `தற்போதைய இடம் (${lat.toFixed(1)}°, ${lon.toFixed(1)}°)`,
        nameEn: `Current (${lat.toFixed(1)}°, ${lon.toFixed(1)}°)`,
        lat, lon, tz
      };
      selectCity(customCity);
      closeLocModal();
    },
    (err) => {
      alert(state.lang === "ta" ? "GPS இருப்பிடத்தைப் பெற முடியவில்லை." : "Could not fetch GPS location.");
      els.gpsLocateBtn.textContent = I18N[state.lang].gpsBtn;
    },
    { timeout: 8000 }
  );
}

function bindEvents() {
  els.langTaBtn.addEventListener("click", () => setLanguage("ta"));
  els.langEnBtn.addEventListener("click", () => setLanguage("en"));

  els.openLocModalBtn.addEventListener("click", openLocModal);
  els.closeLocModalBtn.addEventListener("click", closeLocModal);
  els.gpsLocateBtn.addEventListener("click", detectGpsLocation);

  els.openGpayModalBtn.addEventListener("click", openGpayModal);
  els.closeGpayModalBtn.addEventListener("click", closeGpayModal);
  els.cancelGpayBtn.addEventListener("click", closeGpayModal);
  els.confirmGpayBtn.addEventListener("click", simulateGpayUnlock);
  els.resetPassBtn.addEventListener("click", resetToPreview);

  els.locModalBackdrop.addEventListener("click", (e) => {
    if (e.target === els.locModalBackdrop) closeLocModal();
  });
  els.gpayModalBackdrop.addEventListener("click", (e) => {
    if (e.target === els.gpayModalBackdrop) closeGpayModal();
  });
}

/* ==========================================================================
   Init
   ========================================================================== */

async function init() {
  // Read saved storage safely
  try {
    const savedLang = localStorage.getItem(STORAGE_KEYS.lang);
    if (savedLang === "en" || savedLang === "ta") state.lang = savedLang;

    const savedRasi = localStorage.getItem(STORAGE_KEYS.rasi);
    if (savedRasi && BILINGUAL_TRANSIT_DATA.rasis.some(r => r.id === savedRasi)) {
      state.selectedRasiId = savedRasi;
    }

    const savedCityId = localStorage.getItem(STORAGE_KEYS.city);
    const foundCity = CITIES.find(c => c.id === savedCityId);
    if (foundCity) state.currentCity = foundCity;

    const dayKey = getDayKey(state.currentCity.tz);
    state.isUnlocked = localStorage.getItem(STORAGE_KEYS.pass) === dayKey;
  } catch {}

  // If running via http server, optionally check for newer feed
  if (window.location.protocol.startsWith("http")) {
    try {
      const res = await fetch("data/today.json");
      if (res.ok) {
        const fetched = await res.json();
        if (fetched && fetched.rasis) state.data = fetched;
      }
    } catch {}
  }

  updateStaticText();
  renderPanchangAndLocation();
  renderRasiCarousel();
  renderReading();
  bindEvents();
}

init();
