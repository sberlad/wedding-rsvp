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

    travel: "We know many are traveling—please RSVP as soon as possible.",

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

    notes: "Note",

    send: "Send RSVP",

    sending: "Sending…",

    footer: "Esther & Samuel · June 26, 2026",

    sent: "Thank you. Your RSVP has been received.",

    missing: "RSVP database is not configured yet.",

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

    travel: "אנחנו יודעים שרבים מגיעים מרחוק — נשמח לאישור הגעה בהקדם.",

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

  fr: {

    esther: "Esther Ayadi",

    samuel: "Samuel Berlad",

    married: "se marient",

    date: "Vendredi 26 juin 2026",

    hdate: "11 Tamouz 5786 · י״א תמוז תשפ״ו",

    reception: "Réception à 10h30",

    chuppah: "Houppa à 11h00",

    rsvp: "RSVP",

    celebration: "La célébration",

    details: "Détails du mariage",

    location: "Lieu",

    venue: "Kerem Tamar",

    address: "Gush Etzion Winery, Israël",

    dress: "Tenue",

    dressText:

      "<strong>Tenue cocktail.</strong> Élégante, festive et confortable pour un mariage en journée.",

    travel:

      "Nous savons que beaucoup viennent de loin — merci de répondre dès que possible.",

    reply: "Merci de répondre",

    rsvpTitle: "RSVP",

    name: "Nom complet",

    contact: "E-mail / Téléphone",

    attendance: "Présence",

    yes: "Je serai présent(e)",

    no: "Je ne pourrai pas venir",

    guests: "Nombre d’invités",

    guestHint:

      "Incluez-vous dans le nombre si vous venez. Indiquez 0 si vous ne venez pas.",

    guestNames: "Noms des invités supplémentaires",

    notes: "Message",

    send: "Envoyer la réponse",

    sending: "Envoi…",

    footer: "Esther & Samuel · 26 juin 2026",

    sent: "Merci. Votre réponse a bien été reçue.",

    missing: "La base de données RSVP n’est pas encore configurée.",

    fail: "Une erreur s’est produite. Veuillez réessayer.",

    eName: "Veuillez entrer votre nom complet.",

    eContact: "Veuillez entrer un e-mail ou un téléphone.",

    eAttend: "Veuillez indiquer si vous serez présent(e).",

    eGuests: "Veuillez entrer un nombre entre 0 et 12.",

    eYes: "Veuillez vous inclure dans le nombre d’invités.",

    eNo: "Veuillez indiquer 0 si vous ne venez pas."

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

const supabaseReady =

  window.supabase &&

  SUPABASE_URL.startsWith("https://") &&

  !SUPABASE_ANON_KEY.startsWith("PASTE_");

const db = supabaseReady

  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

  : null;

const $ = (s, r = document) => r.querySelector(s);

const $$ = (s, r = document) => [...r.querySelectorAll(s)];

const getLang = () => localStorage.getItem("weddingLang") || "en";

const T = (k) => tr[getLang()]?.[k] || tr.en[k] || k;

function applyLanguage(lang) {

  const activeLang = tr[lang] ? lang : "en";

  localStorage.setItem("weddingLang", activeLang);

  document.documentElement.lang = activeLang;

  document.documentElement.dir = activeLang === "he" ? "rtl" : "ltr";

  $("#language") && ($("#language").value = activeLang);

  $$("[data-i18n]").forEach((el) => {

    const value = tr[activeLang][el.dataset.i18n];

    if (value === undefined) return;

    value.includes("<") ? (el.innerHTML = value) : (el.textContent = value);

  });

  $$(".language-switch button").forEach((button) => {

    button.classList.toggle("active", button.dataset.lang === activeLang);

  });

}

function setError(name, message = "") {

  const el = $(`[data-error-for="${name}"]`);

  if (el) el.textContent = message;

}

function validate(form) {

  const data = new FormData(form);

  let ok = true;

  const name = String(data.get("fullName") || "").trim();

  const contact = String(data.get("contact") || "").trim();

  const attending = data.get("attending");

  const guestCount = Number(data.get("guestCount"));

  ["fullName", "contact", "attending", "guestCount"].forEach(setError);

  if (!name) {

    setError("fullName", T("eName"));

    ok = false;

  }

  if (!contact) {

    setError("contact", T("eContact"));

    ok = false;

  }

  if (!attending) {

    setError("attending", T("eAttend"));

    ok = false;

  }

  if (!Number.isInteger(guestCount) || guestCount < 0 || guestCount > 12) {

    setError("guestCount", T("eGuests"));

    ok = false;

  }

  if (attending === "yes" && guestCount < 1) {

    setError("guestCount", T("eYes"));

    ok = false;

  }

  if (attending === "no" && guestCount !== 0) {

    setError("guestCount", T("eNo"));

    ok = false;

  }

  return ok;

}

async function submit(e) {

  e.preventDefault();

  const form = e.currentTarget;

  const status = $("#formStatus");

  if (status) status.textContent = "";

  if (!validate(form)) return;

  const data = new FormData(form);

  if (data.get("company")?.trim()) {

    console.warn("Spam blocked");

    return;

  }

  if (!db) {

    if (status) status.textContent = T("missing");

    return;

  }

  const payload = {

    name: String(data.get("fullName") || "").trim(),

    contact: String(data.get("contact") || "").trim(),

    attending: data.get("attending") === "yes",

    guest_count: Number(data.get("guestCount") || 0),

    guest_names: String(data.get("guestNames") || "").trim(),

    meal_preference: String(data.get("mealPreference") || "").trim(),

    notes: String(data.get("notes") || "").trim(),

    language: getLang()

  };

  const button = form.querySelector("button");

  if (button) {

    button.disabled = true;

    button.textContent = T("sending");

  }

  const { error } = await db.from("rsvps").insert(payload);

  if (button) {

    button.disabled = false;

    button.textContent = T("send");

  }

  if (error) {

    console.error(error);

    if (status) status.textContent = T("fail");

    return;

  }

  form.reset();

  const guestCountInput = $("#guestCount");

  if (guestCountInput) guestCountInput.value = "1";

  if (status) status.textContent = T("sent");

}

/* Admin without login screen */

function esc(value) {

  return String(value ?? "")

    .replaceAll("&", "&amp;")

    .replaceAll("<", "&lt;")

    .replaceAll(">", "&gt;")

    .replaceAll('"', "&quot;");

}

function csv(value) {

  const stringValue = String(value ?? "");

  return /[",\n]/.test(stringValue)

    ? `"${stringValue.replaceAll('"', '""')}"`

    : stringValue;

}

async function loadAdminRows() {

  if (!$("#adminPanel")) return [];

  const status = $("#adminStatus");

  if (!db) {

    if (status) status.textContent = "Supabase not configured.";

    return [];

  }

  if (status) status.textContent = "Loading…";

  const { data, error } = await db

    .from("rsvps")

    .select("*")

    .order("created_at", { ascending: false });

  if (error) {

    console.error(error);

    if (status) {

      status.textContent =

        "Could not load RSVPs. Check the Supabase SELECT policy.";

    }

    return [];

  }

  const rows = data || [];

  const totalAttending = rows

    .filter((row) => row.attending)

    .reduce((sum, row) => sum + Number(row.guest_count || 0), 0);

  $("#totalResponses").textContent = rows.length;

  $("#totalAttending").textContent = totalAttending;

  $("#totalDeclined").textContent = rows.filter((row) => !row.attending).length;

  $("#rsvpRows").innerHTML = rows

    .map((row) => {

      return `

        <tr>

          <td>${new Date(row.created_at).toLocaleString()}</td>

          <td>${esc(row.name)}</td>

          <td>${esc(row.contact)}</td>

          <td>${row.attending ? "Yes" : "No"}</td>

          <td>${Number(row.guest_count || 0)}</td>

          <td>${esc(row.guest_names)}</td>

          <td>${esc(row.meal_preference)}</td>

          <td>${esc(row.notes)}</td>

          <td>${esc(row.language)}</td>

        </tr>

      `;

    })

    .join("");

  if (status) status.textContent = rows.length ? "" : "No RSVPs yet.";

  return rows;

}

function downloadCSV(rows) {

  const headers = [

    "created_at",

    "name",

    "contact",

    "attending",

    "guest_count",

    "guest_names",

    "meal_preference",

    "notes",

    "language"

  ];

  const text = [

    headers.join(","),

    ...rows.map((row) => headers.map((header) => csv(row[header])).join(","))

  ].join("\n");

  const blob = new Blob([text], { type: "text/csv;charset=utf-8" });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;

  link.download = "esther-samuel-rsvps.csv";

  link.click();

  URL.revokeObjectURL(url);

}

function initAdmin() {

  if (!$("#adminPanel")) return;

  let rows = [];

  loadAdminRows().then((loadedRows) => {

    rows = loadedRows;

  });

  $("#refreshAdmin")?.addEventListener("click", () => {

    loadAdminRows().then((loadedRows) => {

      rows = loadedRows;

    });

  });

  $("#exportCsv")?.addEventListener("click", () => {

    downloadCSV(rows);

  });

}

document.addEventListener("DOMContentLoaded", () => {

  $$(".language-switch button").forEach((button) => {

    button.addEventListener("click", () => applyLanguage(button.dataset.lang));

  });

  applyLanguage(getLang());

  $("#rsvpForm")?.addEventListener("submit", submit);

  $$('input[name="attending"]').forEach((input) => {

    input.addEventListener("change", () => {

      const guestCount = $("#guestCount");

      if (guestCount) guestCount.value = input.value === "no" ? "0" : "1";

    });

  });

  initAdmin();

});