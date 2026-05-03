// Supabase (keep your real values here locally)
const SUPABASE_URL = "https://khwdgtrhqqjmmttngeld.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_hn92V8d9xNYdcVHgNqe3SQ_3Q3w0tpg";

/* =========================
   Translations
========================= */
const tr = {
  en: {
    esther: "Esther Ayadi",
    samuel: "Samuel Berlad",
    married: "are getting married",
    date: "Friday, June 26, 2026",
    hdate: "11 Tamuz 5786 · י״א תמוז תשפ״ו",
    reception: "Reception at 10:30",
    chuppah: "Chuppah at 11:00",
    rsvp: "RSVP",

    celebration: "The Celebration",
    details: "Wedding Details",
    location: "Location",
    venue: "Kerem Tamar",
    address: "Gush Etzion Winery, Israel",

    dress: "Dress Code",
    dressText:
      "<strong>Cocktail attire.</strong> Elegant, festive, and comfortable for a daytime wedding.",

    travel:
      "We know many are traveling—please RSVP as soon as possible.",

    reply: "Kindly Reply",
    rsvpTitle: "RSVP",

    name: "Full Name",
    contact: "Email / Phone",
    attendance: "Attendance",
    yes: "Attending",
    no: "Not attending",

    guests: "Number of guests",
    guestHint: "Include yourself if attending. Use 0 if not attending.",
    guestNames: "Names of additional guests",

    meal: "Meal preference",
    mealNone: "No preference / not sure yet",
    regular: "Regular",
    vegetarian: "Vegetarian",
    vegan: "Vegan",
    gf: "Gluten-free",
    other: "Other — I’ll explain below",

    notes: "Note",
    send: "Send RSVP",
    sending: "Sending…",

    footer: "Esther & Samuel · June 26, 2026",

    sent: "Thank you. Your RSVP has been received.",
    missing:
      "RSVP database is not configured yet. Add Supabase credentials in script.js.",
    fail: "Something went wrong. Please try again.",

    eName: "Please enter your full name.",
    eContact: "Please enter an email or phone.",
    eAttend: "Please choose whether you are attending.",
    eGuests: "Please enter a number between 0 and 12.",
    eYes: "Please include yourself in the guest count.",
    eNo: "Please use 0 if you are not attending."
  },

  he: {
    esther: "אסתר עיאדי",
    samuel: "שמואל ברלד",
    married: "מתחתנים",
    date: "יום שישי, 26 ביוני 2026",
    hdate: "י״א תמוז תשפ״ו",
    reception: "קבלת פנים בשעה 10:30",
    chuppah: "חופה בשעה 11:00",
    rsvp: "אישור הגעה",

    celebration: "החגיגה",
    details: "פרטי האירוע",
    location: "מיקום",
    venue: "כרם תמר",
    address: "יקב גוש עציון, ישראל",

    dress: "קוד לבוש",
    dressText:
      "<strong>לבוש קוקטייל.</strong> אלגנטי, חגיגי ונוח לחתונת צהריים.",

    travel:
      "אנחנו יודעים שרבים מגיעים מרחוק — נשמח לאישור הגעה בהקדם.",

    reply: "נשמח לתשובתכם",
    rsvpTitle: "אישור הגעה",

    name: "שם מלא",
    contact: "אימייל / טלפון",
    attendance: "הגעה",
    yes: "מגיע/ה",
    no: "לא מגיע/ה",

    guests: "מספר אורחים",
    guestHint: "אם אתם מגיעים, כללו גם את עצמכם. אם לא — כתבו 0.",
    guestNames: "שמות אורחים נוספים",

    meal: "העדפת אוכל",
    mealNone: "אין העדפה / עדיין לא בטוח",
    regular: "רגיל",
    vegetarian: "צמחוני",
    vegan: "טבעוני",
    gf: "ללא גלוטן",
    other: "אחר — אפרט בהערות",

    notes: "הערה",
    send: "שליחת אישור",
    sending: "שולח…",

    footer: "אסתר ושמואל · 26 ביוני 2026",

    sent: "תודה. אישור ההגעה התקבל.",
    missing: "מסד הנתונים עדיין לא מוגדר.",
    fail: "משהו השתבש. נסו שוב.",

    eName: "נא להזין שם מלא.",
    eContact: "נא להזין אימייל או טלפון.",
    eAttend: "נא לבחור אם אתם מגיעים.",
    eGuests: "נא להזין מספר בין 0 ל־12.",
    eYes: "אם אתם מגיעים, נא לכלול גם את עצמכם בספירה.",
    eNo: "אם אינכם מגיעים, נא להזין 0."
  },

  de: {
    esther: "Esther Ayadi",
    samuel: "Samuel Berlad",
    married: "heiraten",
    date: "Freitag, 26. Juni 2026",
    hdate: "11. Tamus 5786 · י״א תמוז תשפ״ו",
    reception: "Empfang um 10:30",
    chuppah: "Chuppa um 11:00",
    rsvp: "RSVP",

    celebration: "Die Feier",
    details: "Details zur Hochzeit",
    location: "Ort",
    venue: "Kerem Tamar",
    address: "Gush Etzion Winery, Israel",

    dress: "Dresscode",
    dressText:
      "<strong>Cocktail Attire.</strong> Elegant, festlich und angenehm für eine Tageshochzeit.",

    travel:
      "Wir wissen, dass viele von weit her anreisen — bitte gebt uns möglichst bald Bescheid.",

    reply: "Um Antwort wird gebeten",
    rsvpTitle: "RSVP",

    name: "Vollständiger Name",
    contact: "E-Mail / Telefon",
    attendance: "Teilnahme",
    yes: "Ich komme",
    no: "Ich komme nicht",

    guests: "Anzahl der Gäste",
    guestHint: "Bitte euch selbst mitzählen. Bei Absage bitte 0 eintragen.",
    guestNames: "Namen zusätzlicher Gäste",

    meal: "Essenswunsch",
    mealNone: "Keine Präferenz / noch nicht sicher",
    regular: "Regulär",
    vegetarian: "Vegetarisch",
    vegan: "Vegan",
    gf: "Glutenfrei",
    other: "Andere — ich schreibe es unten",

    notes: "Nachricht",
    send: "RSVP senden",
    sending: "Wird gesendet…",

    footer: "Esther & Samuel · 26. Juni 2026",

    sent: "Vielen Dank. Eure RSVP ist eingegangen.",
    missing: "Die RSVP-Datenbank ist noch nicht konfiguriert.",
    fail: "Etwas ist schiefgelaufen.",

    eName: "Bitte vollständigen Namen eingeben.",
    eContact: "Bitte E-Mail oder Telefon eingeben.",
    eAttend: "Bitte auswählen, ob ihr kommt.",
    eGuests: "Bitte eine Zahl zwischen 0 und 12 eingeben.",
    eYes: "Bitte euch selbst mitzählen.",
    eNo: "Bei Absage bitte 0 eintragen."
  }
};

/* =========================
   Supabase setup
========================= */
const supabaseReady =
  window.supabase &&
  SUPABASE_URL.startsWith("https://") &&
  !SUPABASE_ANON_KEY.startsWith("PASTE_");

const db = supabaseReady
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

/* =========================
   Helpers
========================= */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

const getLang = () => localStorage.getItem("weddingLang") || "en";
const T = (k) => tr[getLang()][k] || tr.en[k] || k;

/* =========================
   Language switching
========================= */
function applyLanguage(l) {
  localStorage.setItem("weddingLang", l);

  document.documentElement.lang = l;
  document.documentElement.dir = l === "he" ? "rtl" : "ltr";

  $("#language") && ($("#language").value = l);

  $$("[data-i18n]").forEach((e) => {
    const v = tr[l][e.dataset.i18n];
    if (v === undefined) return;

    v.includes("<") ? (e.innerHTML = v) : (e.textContent = v);
  });

  $$(".language-switch button").forEach((b) =>
    b.classList.toggle("active", b.dataset.lang === l)
  );
}

/* =========================
   Validation
========================= */
function setError(n, m = "") {
  const el = $(`[data-error-for="${n}"]`);
  if (el) el.textContent = m;
}

function validate(form) {
  const d = new FormData(form);
  

  let ok = true;

  const n = String(d.get("fullName") || "").trim();
  const c = String(d.get("contact") || "").trim();
  const a = d.get("attending");
  const g = Number(d.get("guestCount"));

  ["fullName", "contact", "attending", "guestCount"].forEach(setError);

  if (!n) {
    setError("fullName", T("eName"));
    ok = false;
  }

  if (!c) {
    setError("contact", T("eContact"));
    ok = false;
  }

  if (!a) {
    setError("attending", T("eAttend"));
    ok = false;
  }

  if (!Number.isInteger(g) || g < 0 || g > 12) {
    setError("guestCount", T("eGuests"));
    ok = false;
  }

  if (a === "yes" && g < 1) {
    setError("guestCount", T("eYes"));
    ok = false;
  }

  if (a === "no" && g !== 0) {
    setError("guestCount", T("eNo"));
    ok = false;
  }

  return ok;
}

/* =========================
   Submit
========================= */
async function submit(e) {
  e.preventDefault();

  const f = e.currentTarget;
  const s = $("#formStatus");

  s.textContent = "";

  if (!validate(f)) return;

  if (!db) {
    s.textContent = T("missing");
    return;
  }

 const d = new FormData(f);

if (d.get("company")?.trim()) {
  console.warn("Spam blocked");
  return;
}// ← spam trap

const payload = {
  name: d.get("fullName"),
  contact: d.get("contact"),
  attending: d.get("attending") === "yes",
  guest_count: +d.get("guestCount"),
  guest_names: d.get("guestNames"),
  meal_preference: d.get("mealPreference"),
  notes: d.get("notes"),
  language: getLang()
};

  const b = f.querySelector("button");

  b.disabled = true;
  b.textContent = T("sending");

  const { error } = await db.from("rsvps").insert(payload);

  b.disabled = false;
  b.textContent = T("send");

  if (error) {
    console.error(error);
    s.textContent = T("fail");
    return;
  }

  f.reset();
  $("#guestCount").value = 1;

  s.textContent = T("sent");
}

/* =========================
   Init
========================= */
document.addEventListener("DOMContentLoaded", () => {
  $$(".language-switch button").forEach(
    (b) => (b.onclick = () => applyLanguage(b.dataset.lang))
  );

  applyLanguage(getLang());

  $("#rsvpForm")?.addEventListener("submit", submit);

  $$('input[name="attending"]').forEach(
    (i) =>
      (i.onchange = () =>
        ($("#guestCount").value = i.value === "no" ? 0 : 1))
  );
});