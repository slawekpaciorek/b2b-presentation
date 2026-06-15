import { BRAND } from "../../theme";

// ─── SHARED ───────────────────────────────────────────────────────────────────

function Card({ children, style: s = {}, hover = false }) {
  return (
    <div className={hover ? "card-hover" : ""} style={{
      background: "#fff", borderRadius: 12, padding: 18,
      boxShadow: "0 2px 10px rgba(10,77,181,0.07)", border: "1px solid #e2e8f0", ...s,
    }}>{children}</div>
  );
}

function Badge({ children, color = BRAND.primary, bg, small = false }) {
  return (
    <span style={{
      background: bg ?? color, color: bg ? color : "#fff", borderRadius: 20,
      padding: small ? "2px 8px" : "4px 12px",
      fontSize: small ? 10 : 11, fontWeight: 700, display: "inline-block", letterSpacing: 0.3,
    }}>{children}</span>
  );
}

function GradLine({ mb = 16 }) {
  return <div style={{ height: 3, background: BRAND.grad, borderRadius: 2, margin: `10px 0 ${mb}px` }} />;
}

function SlideHeader({ title, subtitle }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <h1 style={{ fontSize: 26, fontWeight: 800, color: BRAND.dark, lineHeight: 1.2 }}>{title}</h1>
      {subtitle && <p style={{ fontSize: 14, color: BRAND.subLight, marginTop: 5 }}>{subtitle}</p>}
      <GradLine />
    </div>
  );
}

function StepNum({ n, color = BRAND.primary }) {
  return (
    <div style={{
      width: 32, height: 32, borderRadius: "50%", background: color, color: "#fff",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontWeight: 800, fontSize: 15, flexShrink: 0,
    }}>{n}</div>
  );
}

function InfoRow({ icon, text, color = BRAND.primary }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 8 }}>
      <span style={{ color, flexShrink: 0 }}>{icon}</span>
      <span style={{ fontSize: 12.5, color: BRAND.subDark, lineHeight: 1.5 }}>{text}</span>
    </div>
  );
}

function Tag({ children, color = BRAND.primary }) {
  return (
    <span style={{
      background: `${color}18`, color, border: `1px solid ${color}40`,
      borderRadius: 8, padding: "3px 10px", fontSize: 11, fontWeight: 600,
    }}>{children}</span>
  );
}

// ─── SLIDE 1: TYTUŁ ──────────────────────────────────────────────────────────

export function Slide1({ config }) {
  const sections = [
    { icon: "🏢", label: "Klienci i kontrakty" },
    { icon: "👤", label: "Użytkownicy" },
    { icon: "📦", label: "Produkty" },
    { icon: "💰", label: "Grupy cenowe" },
    { icon: "📋", label: "Zamówienia" },
    { icon: "📥", label: "Import danych" },
    { icon: "🔧", label: "Super Admin" },
    { icon: "📜", label: "Umowy i dokumenty" },
    { icon: "💬", label: "Zgłoszenia" },
    { icon: "📈", label: "Aktywność klientów" },
  ];
  return (
    <div style={{
      minHeight: "100vh", background: BRAND.dark, display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden",
      padding: "0 32px",
    }}>
      <div style={{ position: "absolute", right: -100, bottom: -100, width: 450, height: 450, borderRadius: "50%", background: "rgba(10,77,181,0.13)" }} />
      <div style={{ position: "absolute", left: -80, top: -80, width: 320, height: 320, borderRadius: "50%", background: "rgba(245,124,0,0.08)" }} />

      <div style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: 780 }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 4, color: BRAND.accent, textTransform: "uppercase", marginBottom: 10 }}>
          Szkolenie administratora
        </div>
        <h1 style={{ fontSize: 64, fontWeight: 900, letterSpacing: -3, lineHeight: 1.1, marginBottom: 4 }}>
          <span style={{ color: "#fff" }}>BHF</span>{" "}
          <span style={{ color: BRAND.accent }}>B2B</span>
        </h1>
        <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: 4, color: "#93c5fd", textTransform: "uppercase", marginBottom: 16 }}>
          Platform — Panel Administratora
        </div>
        <div style={{ height: 3, background: BRAND.grad, borderRadius: 2, margin: "0 auto 24px", maxWidth: 280 }} />
        <p style={{ fontSize: 16, color: "#93c5fd", marginBottom: 36, lineHeight: 1.6 }}>
          Kompletny przewodnik po możliwościach panelu administracyjnego.<br />
          Od pierwszego klienta do eksportu zamówień.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 36 }}>
          {sections.map(({ icon, label }) => (
            <span key={label} style={{
              background: "rgba(10,77,181,0.35)", color: "#93c5fd",
              border: "1px solid rgba(10,77,181,0.5)",
              borderRadius: 20, padding: "7px 16px", fontSize: 13, fontWeight: 500,
            }}>{icon} {label}</span>
          ))}
        </div>
        <p style={{ fontSize: 12, color: BRAND.subLight }}>
          {config.trainerName} • {config.date} • {config.websiteUrl}
        </p>
      </div>
    </div>
  );
}

// ─── SLIDE 2: NAWIGACJA ──────────────────────────────────────────────────────

export function Slide2({ config }) {
  const sections = [
    { icon: "📦", color: BRAND.primary,  title: "Produkty",          path: "/products",      desc: "Katalog produktów — dodawaj ręcznie lub importuj z XLSX" },
    { icon: "🏷️", color: "#0891b2",      title: "Kategorie",          path: "/categories",    desc: "Grupy tematyczne produktów (chemia, higiena, sprzęt…)" },
    { icon: "🏢", color: "#16a34a",      title: "Klienci biznesowi",  path: "/clients",       desc: "Firmy + kontrakty + punkty dostawy + użytkownicy" },
    { icon: "👤", color: "#7c3aed",      title: "Użytkownicy",        path: "/admin/users",   desc: "Konta platformy — role, przypisanie do klienta, hasło" },
    { icon: "💰", color: BRAND.accent,   title: "Grupy cenowe",       path: "/price-groups",  desc: "Indywidualne cenniki — ręcznie lub import XLSX, korekta %" },
    { icon: "📋", color: "#0d9488",      title: "Zamówienia",         path: "/orders",        desc: "Lista zamówień, zmiana statusu, eksport XML / ZIP" },
    { icon: "📥", color: "#db2777",      title: "Import danych",      path: "/import",        desc: "Masowy import klientów, użytkowników, produktów" },
    { icon: "🔧", color: "#475569",      title: "Super Admin",        path: "/super-admin",   desc: "Metryki, backup bazy, reset, konfiguracja sprzedawcy" },
    { icon: "📜", color: "#0ea5e9",      title: "Umowy i dokumenty",  path: "/admin/legal",      desc: "Regulamin, RODO, umowy z klientami + przedstawiciele kontrahenta" },
    { icon: "💬", color: "#f59e0b",      title: "Zgłoszenia",         path: "/admin/zgloszenia", desc: "Czat z klientami — pytania i problemy, z eskalacją do zespołu BHF" },
    { icon: "📈", color: "#dc2626",      title: "Aktywność klientów", path: "/admin/aktywnosc",  desc: "Regularność zamówień, dynamika wartości, zmiany w asortymencie" },
    { icon: "📝", color: "#65a30d",      title: "Notatki",            path: "/admin/notes",      desc: "Wewnętrzne uwagi i wątki dyskusyjne o klientach i zamówieniach" },
  ];
  return (
    <div style={{ padding: "36px 40px 28px", minHeight: "100vh", background: BRAND.lightBg }}>
      <SlideHeader
        title="Panel administratora — nawigacja"
        subtitle="Po zalogowaniu jako ADMIN widzisz wszystkie sekcje. Kliknij kafelek lub użyj menu bocznego."
      />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
        {sections.map(({ icon, color, title, path, desc }) => (
          <Card key={title} hover style={{ borderTop: `4px solid ${color}`, padding: 16 }}>
            <div style={{ fontSize: 26, marginBottom: 8 }}>{icon}</div>
            <div style={{ fontWeight: 700, fontSize: 14, color: BRAND.dark, marginBottom: 4 }}>{title}</div>
            <code style={{ fontSize: 10, color: BRAND.subLight, background: "#f1f5f9", padding: "1px 6px", borderRadius: 4 }}>{path}</code>
            <p style={{ fontSize: 11.5, color: BRAND.subLight, margin: "8px 0 0", lineHeight: 1.5 }}>{desc}</p>
          </Card>
        ))}
      </div>
      <Card style={{ marginTop: 14, background: BRAND.primary, border: "none", padding: "12px 20px" }}>
        <p style={{ color: "#fff", fontSize: 12.5, margin: 0 }}>
          💡 <strong>Adres platformy:</strong> {config.websiteUrl} — logowanie e-mailem i hasłem ustawionym przez Super Admina
        </p>
      </Card>
    </div>
  );
}

// ─── SLIDE 3: KLIENCI BIZNESOWI ──────────────────────────────────────────────

export function Slide3() {
  const steps = [
    { n: "1", color: BRAND.primary, title: "Dodaj klienta", items: ["Pełna nazwa firmy (np. Poczta Polska S.A.)", "Nazwa skrócona — prefix w numerach zamówień (POCZTA-00001)", "NIP i ILN klienta (trafia do pliku XML zamówienia)"] },
    { n: "2", color: "#16a34a",    title: "Dodaj kontrakt", items: ["Numer kontraktu (unikalny)", "Data obowiązywania: od / do", "Status: AKTYWNY = widoczny dla zamawiających"] },
    { n: "3", color: "#7c3aed",   title: "Produkty kontraktu", items: ["Zaznacz checkboxami z pełnego katalogu", "LUB: Pobierz szablon XLSX → wgraj plik", "Zamawiający widzi TYLKO produkty z tego kontraktu"] },
    { n: "4", color: BRAND.accent, title: "Punkty dostawy", items: ["Każdy punkt = obiekt klienta (budynek, oddział)", "Adres + miesięczny limit budżetu (PLN)", "Import wielu punktów z XLSX jednocześnie"] },
  ];
  const contractFields = [
    { label: "Min. wartość zamówienia", desc: "Jeśli ustawiona — zamówienie poniżej tej kwoty generuje dopłatę transportową" },
    { label: "Dopłata transportowa", desc: "Kwota w PLN doliczana automatycznie gdy zamówienie < minimum" },
    { label: "Nazwa dopłaty", desc: "Opis widoczny w zamówieniu (np. 'Dopłata za mały zamówienie')" },
    { label: "Druga działalność (per punkt)", desc: "Alternatywny NIP/ILN dla wybranego punktu dostawy — używany w eksporcie XML, gdy odbiorca różni się od głównego klienta" },
  ];
  return (
    <div style={{ padding: "36px 40px 28px", minHeight: "100vh", background: BRAND.lightBg }}>
      <SlideHeader
        title="Krok 1 — Klienci biznesowi i kontrakty"
        subtitle="Każda firma musi mieć klienta + aktywny kontrakt + punkty dostawy — dopiero wtedy może zamawiać"
      />
      <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: 20 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {steps.map(({ n, color, title, items }) => (
            <Card key={n} style={{ borderLeft: `4px solid ${color}`, padding: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <StepNum n={n} color={color} />
                <span style={{ fontWeight: 700, fontSize: 14, color: BRAND.dark }}>{title}</span>
              </div>
              {items.map(item => (
                <InfoRow key={item} icon="›" text={item} color={color} />
              ))}
            </Card>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <Card style={{ borderTop: `4px solid ${BRAND.accent}` }}>
            <p style={{ fontWeight: 700, fontSize: 13, color: BRAND.dark, marginBottom: 12 }}>Ustawienia kontraktu</p>
            {contractFields.map(({ label, desc }) => (
              <div key={label} style={{ marginBottom: 12, paddingBottom: 12, borderBottom: "1px solid #f1f5f9" }}>
                <div style={{ fontWeight: 600, fontSize: 13, color: BRAND.accent, marginBottom: 3 }}>{label}</div>
                <p style={{ fontSize: 11.5, color: BRAND.subLight, margin: 0, lineHeight: 1.5 }}>{desc}</p>
              </div>
            ))}
          </Card>
          <Card style={{ background: "#f0fdf4", border: "1px solid #16a34a33" }}>
            <p style={{ fontWeight: 700, fontSize: 12.5, color: "#16a34a", marginBottom: 8 }}>✅ Kiedy klient może zamówić?</p>
            {["Klient ma konto użytkownika z rolą ZAMAWIAJĄCY", "Użytkownik jest przypisany do klienta", "Kontrakt jest AKTYWNY i zawiera produkty", "Punkt dostawy istnieje i ma limit > 0"].map(item => (
              <InfoRow key={item} icon="✓" text={item} color="#16a34a" />
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}

// ─── SLIDE 4: UŻYTKOWNICY ────────────────────────────────────────────────────

export function Slide4() {
  const roles = [
    { role: "ZAMAWIAJĄCY", color: BRAND.primary,  icon: "🛒", desc: "Składa zamówienia dla przypisanych punktów dostawy. Widzi produkty ze swojego kontraktu.", path: "Portal" },
    { role: "SUPERVISOR",  color: "#0d9488",       icon: "👁️", desc: "Zatwierdza zamówienia całej firmy. Edytuje zamówienia przed zatwierdzeniem. Widzi pełny katalog.", path: "Portal" },
    { role: "KOORDYNATOR", color: "#7c3aed",       icon: "📊", desc: "Zatwierdza zamówienia w ramach progów limitu skonfigurowanych dla kontraktu. Widzi pełny katalog — pośredni szczebel między Zamawiającym a Supervisorem.", path: "Portal" },
    { role: "ADMIN",       color: BRAND.accent,    icon: "⚙️", desc: "Pełny dostęp do panelu administracyjnego. Zarządza całą platformą.", path: "Admin" },
  ];
  const steps = [
    "Przejdź do /admin/users → kliknij 'Nowy użytkownik'",
    "Podaj: e-mail (login), imię, nazwisko, rola",
    "Wybierz klienta biznesowego (opcjonalne dla ADMIN)",
    "Ustaw hasło startowe — użytkownik może je zmienić",
    "Kliknij 'Zapisz' — konto jest od razu aktywne",
  ];
  return (
    <div style={{ padding: "36px 40px 28px", minHeight: "100vh", background: BRAND.lightBg }}>
      <SlideHeader
        title="Krok 2 — Użytkownicy i role"
        subtitle="Jedna platforma, cztery role — każda z innym zakresem dostępu"
      />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 16 }}>
        {roles.map(({ role, color, icon, desc, path }) => (
          <Card key={role} style={{ borderLeft: `4px solid ${color}`, padding: 16 }}>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ fontSize: 28 }}>{icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                  <span style={{ fontWeight: 800, fontSize: 13, color }}>{role}</span>
                  <Badge small color={color} bg={`${color}18`}>{path}</Badge>
                </div>
                <p style={{ fontSize: 12, color: BRAND.subDark, margin: 0, lineHeight: 1.5 }}>{desc}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <Card style={{ borderTop: `3px solid ${BRAND.primary}` }}>
          <p style={{ fontWeight: 700, fontSize: 13, color: BRAND.dark, marginBottom: 12 }}>Jak dodać użytkownika?</p>
          {steps.map((s, i) => (
            <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 8 }}>
              <span style={{ fontWeight: 800, fontSize: 11, color: BRAND.primary, width: 18, flexShrink: 0, marginTop: 2 }}>{i + 1}.</span>
              <span style={{ fontSize: 12, color: BRAND.subDark, lineHeight: 1.5 }}>{s}</span>
            </div>
          ))}
        </Card>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <Card style={{ background: "#fff7ed", border: "1px solid #f57c0033" }}>
            <p style={{ fontWeight: 700, fontSize: 12.5, color: BRAND.accent, marginBottom: 8 }}>Reset hasła</p>
            <p style={{ fontSize: 12, color: BRAND.subDark, margin: 0, lineHeight: 1.5 }}>
              Wejdź w szczegóły użytkownika → przycisk <strong>"Zmień hasło"</strong>. Podaj nowe hasło (min. 8 znaków). Użytkownik może też zmienić je samodzielnie po zalogowaniu.
            </p>
          </Card>
          <Card style={{ background: "#fef2f2", border: "1px solid #dc262633" }}>
            <p style={{ fontWeight: 700, fontSize: 12.5, color: "#dc2626", marginBottom: 8 }}>Dezaktywacja konta</p>
            <p style={{ fontSize: 12, color: BRAND.subDark, margin: 0, lineHeight: 1.5 }}>
              Usuń przypisanie do klienta lub zmień rolę na nieaktywną. Konto pozostaje w bazie — historia zamówień jest zachowana.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}

// ─── SLIDE 5: GRUPY CENOWE ───────────────────────────────────────────────────

export function Slide5() {
  const methods = [
    { icon: "✏️",  color: BRAND.primary,  title: "Ręczne dodanie ceny", desc: "Wybierz produkt z listy → wpisz cenę netto → Zapisz. Cena pojawi się natychmiast." },
    { icon: "📊",  color: "#16a34a",      title: "Import XLSX",          desc: "Pobierz szablon → uzupełnij kolumny (kod produktu, cena netto) → wgraj plik. System importuje i pomija nieznane kody." },
    { icon: "📈",  color: "#7c3aed",      title: "Korekta procentowa",   desc: "Wpisz +5 lub -10 → system przemnożył wszystkie ceny w grupie. Przydatne przy aktualizacji cennika." },
    { icon: "🗑️",  color: "#dc2626",      title: "Usuń wybrane ceny",    desc: "Zaznacz checkboxy przy pozycjach → 'Usuń zaznaczone'. Produkty bez ceny w grupie używają ceny bazowej." },
  ];
  return (
    <div style={{ padding: "36px 40px 28px", minHeight: "100vh", background: BRAND.lightBg }}>
      <SlideHeader
        title="Krok 3 — Grupy cenowe"
        subtitle="Każda firma może mieć własny cennik — jedna grupa cenowa może obsługiwać wielu klientów"
      />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        <div>
          <p style={{ fontWeight: 700, fontSize: 13, color: BRAND.dark, marginBottom: 12 }}>Jak stworzyć grupę cenową?</p>
          {[
            { n: "1", color: BRAND.primary, text: "Przejdź do /price-groups → kliknij 'Nowa grupa cenowa'" },
            { n: "2", color: BRAND.primary, text: "Wpisz nazwę (np. 'Poczta Polska — Q3 2025') → Zapisz" },
            { n: "3", color: BRAND.primary, text: "Dodaj ceny jedną z czterech metod (patrz po prawej)" },
            { n: "4", color: BRAND.primary, text: "Przejdź do klienta → sekcja 'Kontrakty' → ustaw grupę cenową" },
          ].map(({ n, color, text }) => (
            <div key={n} style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 12 }}>
              <StepNum n={n} color={color} />
              <div style={{ paddingTop: 6, fontSize: 12.5, color: BRAND.subDark, lineHeight: 1.5 }}>{text}</div>
            </div>
          ))}
          <Card style={{ marginTop: 8, background: "#eff6ff", border: "1px solid #0a4db533" }}>
            <p style={{ fontWeight: 700, fontSize: 12.5, color: BRAND.primary, marginBottom: 6 }}>Jak działają ceny?</p>
            <InfoRow icon="1." text="System sprawdza czy klient ma przypisaną grupę cenową" color={BRAND.primary} />
            <InfoRow icon="2." text="Jeśli produkt ma cenę w grupie → używa jej" color={BRAND.primary} />
            <InfoRow icon="3." text="Jeśli brak ceny w grupie → używa ceny bazowej produktu" color={BRAND.primary} />
            <InfoRow icon="4." text="Zamawiający zawsze widzi cenę finalną — bez przeliczania" color={BRAND.primary} />
          </Card>
        </div>
        <div>
          <p style={{ fontWeight: 700, fontSize: 13, color: BRAND.dark, marginBottom: 12 }}>Metody dodawania cen</p>
          {methods.map(({ icon, color, title, desc }) => (
            <Card key={title} style={{ marginBottom: 12, padding: 14, borderLeft: `4px solid ${color}` }}>
              <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ fontSize: 20 }}>{icon}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 13, color, marginBottom: 4 }}>{title}</div>
                  <p style={{ fontSize: 11.5, color: BRAND.subDark, margin: 0, lineHeight: 1.5 }}>{desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── SLIDE 6: PRODUKTY I KATALOG ─────────────────────────────────────────────

export function Slide6() {
  const xlsxCols = ["kod", "nazwa", "marka", "kategoria", "jednostka", "cena_netto"];
  return (
    <div style={{ padding: "36px 40px 28px", minHeight: "100vh", background: BRAND.lightBg }}>
      <SlideHeader
        title="Krok 4 — Produkty i katalog"
        subtitle="Produkty to baza całej platformy — kontrakt i grupy cenowe odnoszą się do kodów produktów"
      />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        <div>
          <p style={{ fontWeight: 700, fontSize: 13, color: BRAND.dark, marginBottom: 12 }}>Import XLSX (zalecany)</p>
          {[
            { n: "1", text: "Przejdź do /import → zakładka 'Produkty'" },
            { n: "2", text: "Kliknij 'Pobierz szablon' — gotowy plik Excel z nagłówkami" },
            { n: "3", text: "Uzupełnij dane: jeden produkt = jeden wiersz" },
            { n: "4", text: "Wgraj plik — system zaimportuje, poinformuje o błędach" },
            { n: "5", text: "Istniejące kody są AKTUALIZOWANE, nowe — dodawane" },
          ].map(({ n, text }) => (
            <div key={n} style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 10 }}>
              <StepNum n={n} />
              <div style={{ paddingTop: 6, fontSize: 12.5, color: BRAND.subDark }}>{text}</div>
            </div>
          ))}
          <Card style={{ marginTop: 8, background: "#f0fdfa", border: "1px solid #0d948833", padding: 14 }}>
            <p style={{ fontWeight: 700, fontSize: 12.5, color: "#0d9488", marginBottom: 8 }}>Kolumny w pliku XLSX</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {xlsxCols.map(col => (
                <code key={col} style={{ fontSize: 11, background: "#e0fdf4", color: "#0d9488", padding: "2px 8px", borderRadius: 4 }}>{col}</code>
              ))}
            </div>
          </Card>
        </div>
        <div>
          <p style={{ fontWeight: 700, fontSize: 13, color: BRAND.dark, marginBottom: 12 }}>Ręczne zarządzanie</p>
          {[
            { color: BRAND.primary, icon: "📦", title: "Dodaj produkt",  desc: "Przejdź do /products → 'Nowy produkt' → uzupełnij pola. Kod produktu jest unikalny." },
            { color: "#0891b2",     icon: "🏷️", title: "Kategorie",      desc: "Twórz i edytuj kategorie w /categories. Produkty bez kategorii trafiają do 'Inne'." },
            { color: "#7c3aed",     icon: "🏆", title: "Marki",           desc: "Tworzone automatycznie przy imporcie. Możesz zmienić nazwę lub scalić duplikaty w /brands." },
            { color: "#0d9488",     icon: "📋", title: "Produkty kontraktu", desc: "W widoku kontraktu zaznacz checkboxy lub zaimportuj listę kodów z XLSX. Zmiany aktywne natychmiast." },
          ].map(({ color, icon, title, desc }) => (
            <Card key={title} style={{ marginBottom: 12, padding: 14, borderLeft: `4px solid ${color}` }}>
              <div style={{ fontWeight: 700, fontSize: 13, color, marginBottom: 4 }}>{icon} {title}</div>
              <p style={{ fontSize: 11.5, color: BRAND.subDark, margin: 0, lineHeight: 1.5 }}>{desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── SLIDE 7: ZAMÓWIENIA ─────────────────────────────────────────────────────

export function Slide7() {
  const statuses = [
    { label: "NOWE",                       color: "#16a34a", desc: "Złożone w limicie, bez uwag. Gotowe do eksportu." },
    { label: "OCZEKUJE NA ZATWIERDZENIE",  color: BRAND.accent, desc: "Przekroczony limit lub uwagi. Czeka na Supervisora." },
    { label: "POTWIERDZONE",               color: "#0d9488", desc: "Zatwierdzone przez Supervisora. Gotowe do eksportu." },
    { label: "W REALIZACJI",               color: BRAND.primary, desc: "Wyeksportowane do XML. BHF realizuje dostawę." },
    { label: "ANULOWANE",                  color: "#dc2626", desc: "Odrzucone. Nie wlicza się do limitu." },
  ];
  return (
    <div style={{ padding: "36px 40px 28px", minHeight: "100vh", background: BRAND.lightBg }}>
      <SlideHeader
        title="Zarządzanie zamówieniami"
        subtitle="Codzienna praca admina — przegląd, filtrowanie, eksport XML do systemu BHF"
      />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        <div>
          <p style={{ fontWeight: 700, fontSize: 13, color: BRAND.dark, marginBottom: 10 }}>Widok listy zamówień (/orders)</p>
          <Card style={{ marginBottom: 12, borderLeft: `4px solid ${BRAND.primary}` }}>
            <p style={{ fontWeight: 600, fontSize: 12.5, color: BRAND.primary, marginBottom: 8 }}>Bez filtrów — 3 sekcje</p>
            <InfoRow icon="🔴" text="OCZEKUJĄCE — wymagają decyzji" color={BRAND.accent} />
            <InfoRow icon="🟢" text="AKTYWNE — status NOWE, czekają na eksport" color="#16a34a" />
            <InfoRow icon="🔵" text="ARCHIWUM — W REALIZACJI, ANULOWANE, POTWIERDZONE" color={BRAND.primary} />
          </Card>
          <Card style={{ marginBottom: 12 }}>
            <p style={{ fontWeight: 600, fontSize: 12.5, color: BRAND.dark, marginBottom: 8 }}>Filtry wyszukiwania</p>
            {["Klient biznesowy", "Status zamówienia", "Oddział BHF", "Wyszukaj punkt dostawy", "Numer kontraktu", "Numer zamówienia (np. POCZTA-00042)", "Typ zamówienia (cykliczne / domówienie)"].map(f => (
              <div key={f} style={{ display: "flex", gap: 8, marginBottom: 5 }}>
                <span style={{ color: BRAND.subLight, fontSize: 12 }}>▸</span>
                <span style={{ fontSize: 12, color: BRAND.subDark }}>{f}</span>
              </div>
            ))}
          </Card>
        </div>
        <div>
          <p style={{ fontWeight: 700, fontSize: 13, color: BRAND.dark, marginBottom: 10 }}>Eksport XML — integracja z BHF</p>
          {[
            { icon: "📄", color: "#0d9488", bg: "#f0fdfa", title: "Eksport pojedynczy", desc: "W widoku zamówienia → przycisk 'Eksportuj XML'. Pobiera plik zamowienie-{id}.xml. Status → W REALIZACJI automatycznie." },
            { icon: "📦", color: "#7c3aed", bg: "#f5f3ff", title: "Eksport zbiorczy (ZIP)", desc: "Na liście zamówień zaznacz checkboxy → 'Eksportuj zaznaczone'. Pobiera archiwum ZIP. Wszystkie statusy zmieniane jednocześnie." },
          ].map(({ icon, color, bg, title, desc }) => (
            <Card key={title} style={{ marginBottom: 12, background: bg, border: `1px solid ${color}33`, padding: 14 }}>
              <div style={{ display: "flex", gap: 10 }}>
                <span style={{ fontSize: 22 }}>{icon}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 13, color, marginBottom: 4 }}>{title}</div>
                  <p style={{ fontSize: 11.5, color: BRAND.subDark, margin: 0, lineHeight: 1.5 }}>{desc}</p>
                </div>
              </div>
            </Card>
          ))}
          <p style={{ fontWeight: 700, fontSize: 12.5, color: BRAND.dark, marginBottom: 8 }}>Statusy zamówień</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            {statuses.map(({ label, color, desc }) => (
              <div key={label} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: color, flexShrink: 0 }} />
                <span style={{ fontWeight: 700, fontSize: 10, color, minWidth: 180 }}>{label}</span>
                <span style={{ fontSize: 11, color: BRAND.subLight }}>{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── SLIDE 8: IMPORT MASOWY ───────────────────────────────────────────────────

export function Slide8() {
  const importTypes = [
    {
      color: BRAND.primary, icon: "📦", title: "Produkty",
      cols: ["kod", "nazwa", "marka", "kategoria", "jednostka", "cena_netto"],
      tip: "Istniejące kody są aktualizowane, nowe — dodawane.",
    },
    {
      color: "#16a34a", icon: "🏢", title: "Klienci + punkty dostawy",
      cols: ["nazwa_firmy", "short_name", "nip", "iln", "nazwa_punktu", "adres", "limit_miesieczny"],
      tip: "Jeden arkusz tworzy klientów i ich punkty dostawy jednocześnie.",
    },
    {
      color: "#7c3aed", icon: "👤", title: "Użytkownicy",
      cols: ["email", "imie", "nazwisko", "rola", "klient_nip"],
      tip: "Klient identyfikowany po NIP. Rola: BUYER / SUPERVISOR / COORDINATOR.",
    },
    {
      color: BRAND.accent, icon: "📋", title: "Produkty kontraktu",
      cols: ["kod_produktu"],
      tip: "Import z poziomu widoku kontraktu. Przypisuje produkty po kodzie.",
    },
  ];
  return (
    <div style={{ padding: "36px 40px 28px", minHeight: "100vh", background: BRAND.lightBg }}>
      <SlideHeader
        title="Import masowy danych"
        subtitle="Jeden plik XLSX zamiast setek kliknięć — idealne przy pierwszym wdrożeniu lub aktualizacji danych"
      />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
        {importTypes.map(({ color, icon, title, cols, tip }) => (
          <Card key={title} style={{ borderTop: `4px solid ${color}`, padding: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
              <span style={{ fontSize: 22 }}>{icon}</span>
              <span style={{ fontWeight: 700, fontSize: 14, color: BRAND.dark }}>{title}</span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 10 }}>
              {cols.map(col => (
                <code key={col} style={{ fontSize: 10, background: `${color}15`, color, padding: "2px 7px", borderRadius: 4 }}>{col}</code>
              ))}
            </div>
            <p style={{ fontSize: 11.5, color: BRAND.subLight, margin: 0, lineHeight: 1.5 }}>💡 {tip}</p>
          </Card>
        ))}
      </div>
      <Card style={{ background: BRAND.dark, border: "none", padding: "14px 20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          {["Pobierz szablon XLSX", "→", "Uzupełnij dane", "→", "Wgraj plik", "→", "System raportuje: ile wgrano / ile pominięto / jakie błędy"].map((item, i) => (
            <span key={i} style={{ fontSize: 13, color: item === "→" ? BRAND.subLight : "#fff", fontWeight: item === "→" ? 400 : 600 }}>{item}</span>
          ))}
        </div>
      </Card>
    </div>
  );
}

// ─── SLIDE 9: OSZCZĘDNOŚĆ I ROZWÓJ ──────────────────────────────────────────

export function Slide9({ config }) {
  const gains = [
    { icon: "📞", color: BRAND.primary,  text: "Koniec z telefonami i mailami potwierdzającymi zamówienia — klient składa je sam, o każdej porze" },
    { icon: "📊", color: "#0d9488",      text: "Limity miesięczne kontrolowane automatycznie — brak rozmów o przekroczeniach budżetu" },
    { icon: "🔍", color: "#7c3aed",      text: "Pełna historia zamówień zawsze pod ręką — wyszukaj po kliencie, dacie, statusie w kilka sekund" },
    { icon: "📄", color: BRAND.accent,   text: "Eksport do XML jednym kliknięciem zamiast ręcznego przepisywania zamówień do systemu" },
    { icon: "✅", color: "#16a34a",      text: "Supervisor zatwierdza zamówienia samodzielnie — admin nie jest pośrednikiem w każdej decyzji" },
    { icon: "⏱️", color: "#db2777",      text: "Godziny odzyskane tygodniowo — czas pracownika biurowego na rzeczy, które naprawdę wymagają uwagi" },
  ];
  const roadmap = [
    { icon: "🔁", color: BRAND.primary,  label: "Zamów ponownie",     desc: "Powtórz stare zamówienie jednym kliknięciem" },
    { icon: "📄", color: "#0d9488",      label: "PDF zamówienia",      desc: "Pobierz potwierdzenie do archiwum lub klienta" },
    { icon: "💲", color: "#7c3aed",      label: "Alert zmiany ceny",   desc: "Powiadomienie, gdy cena produktu się zmieni" },
    { icon: "🏷️", color: BRAND.accent,   label: "Tagi produktów",      desc: "Filtrowanie po cechach: ekologiczny, antypoślizgowy…" },
    { icon: "📧", color: "#db2777",      label: "Powiadomienia e-mail", desc: "Zatwierdzone / odrzucone — prosto na skrzynkę" },
    { icon: "💳", color: "#16a34a",      label: "Logika płatności",    desc: "Przelew / karta / przedpłata — per klient lub kontrakt" },
  ];
  return (
    <div style={{ padding: "36px 40px 28px", minHeight: "100vh", background: BRAND.lightBg }}>
      <SlideHeader
        title="Oszczędność i elastyczność"
        subtitle="Platforma zdejmuje powtarzalną pracę z pracownika biurowego — i rośnie razem z potrzebami klienta"
      />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>

        {/* LEWA: co zyskuje pracownik */}
        <div>
          <p style={{ fontWeight: 700, fontSize: 13, color: BRAND.dark, marginBottom: 12 }}>
            Co zyskuje pracownik biurowy?
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {gains.map(({ icon, color, text }) => (
              <Card key={text} style={{ padding: 14, borderLeft: `4px solid ${color}` }}>
                <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span style={{ fontSize: 18, flexShrink: 0 }}>{icon}</span>
                  <p style={{ fontSize: 12.5, color: BRAND.subDark, margin: 0, lineHeight: 1.5 }}>{text}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* PRAWA: roadmapa + elastyczność */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <Card style={{ borderTop: `4px solid ${BRAND.primary}` }}>
            <p style={{ fontWeight: 700, fontSize: 13, color: BRAND.dark, marginBottom: 12 }}>
              Platforma rozwijana razem z Wami
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {roadmap.map(({ icon, color, label, desc }) => (
                <div key={label} style={{ background: `${color}0f`, border: `1px solid ${color}30`, borderRadius: 10, padding: "10px 12px" }}>
                  <div style={{ fontSize: 18, marginBottom: 4 }}>{icon}</div>
                  <div style={{ fontWeight: 700, fontSize: 12, color, marginBottom: 3 }}>{label}</div>
                  <p style={{ fontSize: 10.5, color: BRAND.subLight, margin: 0, lineHeight: 1.4 }}>{desc}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card style={{ background: BRAND.dark, border: "none", padding: 20 }}>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 14 }}>
              <span style={{ fontSize: 26 }}>🤝</span>
              <div>
                <div style={{ fontWeight: 800, fontSize: 15, color: "#fff", marginBottom: 6 }}>
                  Jesteśmy elastyczni
                </div>
                <p style={{ fontSize: 12.5, color: "#93c5fd", margin: 0, lineHeight: 1.6 }}>
                  Każda sugestia ze strony klienta jest analizowana i brana pod uwagę przy planowaniu kolejnych wersji. Nie narzucamy gotowego rozwiązania — dostosowujemy platformę do realnych potrzeb Waszego procesu zamawiania.
                </p>
              </div>
            </div>
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 12 }}>
              <p style={{ fontSize: 12, color: "#64748b", margin: 0 }}>
                📬 Kontakt bezpośredni z zespołem BHF — {config.websiteUrl}
              </p>
            </div>
          </Card>
        </div>

      </div>
    </div>
  );
}

// ─── SLIDE 10: PODSUMOWANIE ───────────────────────────────────────────────────

export function Slide10({ config }) {
  const checklist = [
    { step: "Klient biznesowy", detail: "/clients → nowy klient → shortName, NIP, ILN" },
    { step: "Kontrakt",         detail: "W karcie klienta → nowy kontrakt → data, status AKTYWNY" },
    { step: "Produkty kontraktu", detail: "Zaznacz lub importuj XLSX z kodami produktów" },
    { step: "Punkt dostawy",    detail: "Nowy punkt → adres + limit miesięczny (PLN)" },
    { step: "Użytkownik",       detail: "/admin/users → rola ZAMAWIAJĄCY → przypisz do klienta" },
    { step: "Grupa cenowa",     detail: "/price-groups → utwórz → dodaj ceny → przypisz do klienta" },
  ];
  return (
    <div style={{
      minHeight: "100vh", background: BRAND.dark, display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", padding: "40px", position: "relative", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", right: -80, bottom: -80, width: 400, height: 400, borderRadius: "50%", background: "rgba(245,124,0,0.08)" }} />
      <div style={{ position: "absolute", left: -60, top: -60, width: 300, height: 300, borderRadius: "50%", background: "rgba(10,77,181,0.12)" }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 780, width: "100%" }}>
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: "#fff", marginBottom: 8 }}>Gotowy do pracy!</h2>
          <div style={{ height: 3, background: BRAND.grad, borderRadius: 2, margin: "0 auto 12px", width: 200 }} />
          <p style={{ fontSize: 14, color: "#93c5fd" }}>Checklist uruchomienia nowego klienta — w tej kolejności</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
          {checklist.map(({ step, detail }, i) => (
            <div key={step} style={{
              background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 10, padding: "12px 16px", display: "flex", gap: 12, alignItems: "flex-start",
            }}>
              <div style={{ width: 24, height: 24, borderRadius: "50%", background: BRAND.primary, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 12, flexShrink: 0 }}>{i + 1}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 13, color: "#f1f5f9", marginBottom: 3 }}>{step}</div>
                <code style={{ fontSize: 11, color: "#93c5fd" }}>{detail}</code>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 20 }}>
          {[
            { icon: "📋", color: BRAND.primary, label: "Zamówienia", url: "/orders" },
            { icon: "📥", color: "#db2777",     label: "Import danych", url: "/import" },
            { icon: "🔧", color: "#475569",     label: "Super Admin", url: "/super-admin" },
          ].map(({ icon, color, label, url }) => (
            <div key={label} style={{ background: color, borderRadius: 10, padding: "14px 16px", textAlign: "center" }}>
              <div style={{ fontSize: 22, marginBottom: 4 }}>{icon}</div>
              <div style={{ fontWeight: 800, fontSize: 14, color: "#fff" }}>{label}</div>
              <code style={{ fontSize: 11, color: "rgba(255,255,255,0.7)" }}>{url}</code>
            </div>
          ))}
        </div>

        <div style={{ background: "rgba(10,77,181,0.3)", border: "1px solid rgba(10,77,181,0.5)", borderRadius: 12, padding: "12px 20px", textAlign: "center" }}>
          <span style={{ fontWeight: 800, fontSize: 18, color: BRAND.accent }}>{config.websiteUrl}</span>
          <span style={{ color: "#64748b", marginLeft: 16, fontSize: 12 }}>{config.trainerName} • {config.date}</span>
        </div>
      </div>
    </div>
  );
}

// ─── SLIDE 11: KOSZYKI SZABLONOWE I TYPY ZAMÓWIEŃ ───────────────────────────

export function Slide11() {
  const steps = [
    { n: "1", color: BRAND.primary, title: "Otwórz koszyk szablonowy", text: "Kontrakt → punkty dostawy → ikona 🧺 przy punkcie ('Koszyki szablonowe')" },
    { n: "2", color: "#16a34a",     title: "Utwórz szablon",          text: "Podaj nazwę (np. 'Zamówienie tygodniowe'). Jeden punkt może mieć wiele szablonów" },
    { n: "3", color: "#7c3aed",     title: "Dodaj produkty",          text: "Wyszukiwarka + domyślna ilość, lub import XLSX (kolumny: Kod produktu, Ilość)" },
    { n: "4", color: BRAND.accent,  title: "Aktywuj szablon",         text: "Tylko aktywne szablony są widoczne klientowi przy zamówieniu cyklicznym" },
  ];
  const orderTypes = [
    {
      icon: "🔁", color: BRAND.primary, title: "Cykliczne",
      items: [
        "Maksymalnie jedno na miesiąc, na punkt dostawy",
        "System automatycznie podstawia produkty z pierwszego aktywnego szablonu",
        "Klient może zmienić ilości lub usunąć produkty przed wysłaniem",
      ],
    },
    {
      icon: "➕", color: "#0d9488", title: "Domówienie",
      items: [
        "Bez limitu liczby — dla zamówień doraźnych",
        "Szablon NIE jest automatycznie podstawiany",
        "Używane, gdy w danym miesiącu trzeba domówić dodatkowy towar",
      ],
    },
  ];
  return (
    <div style={{ padding: "36px 40px 28px", minHeight: "100vh", background: BRAND.lightBg }}>
      <SlideHeader
        title="Koszyki szablonowe i typy zamówień"
        subtitle="Admin przygotowuje koszyk produktów per punkt dostawy — klient korzysta z niego przy zamówieniach cyklicznych"
      />
      <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: 20 }}>
        <div>
          <p style={{ fontWeight: 700, fontSize: 13, color: BRAND.dark, marginBottom: 12 }}>Jak skonfigurować koszyk szablonowy?</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {steps.map(({ n, color, title, text }) => (
              <Card key={n} style={{ borderLeft: `4px solid ${color}`, padding: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <StepNum n={n} color={color} />
                  <span style={{ fontWeight: 700, fontSize: 13, color: BRAND.dark }}>{title}</span>
                </div>
                <p style={{ fontSize: 12, color: BRAND.subDark, margin: 0, lineHeight: 1.5 }}>{text}</p>
              </Card>
            ))}
          </div>
          <Card style={{ marginTop: 14, background: "#eff6ff", border: `1px solid ${BRAND.primary}33` }}>
            <p style={{ fontWeight: 700, fontSize: 12.5, color: BRAND.primary, marginBottom: 6 }}>💡 Częste pytanie klienta</p>
            <p style={{ fontSize: 12, color: BRAND.subDark, margin: 0, lineHeight: 1.6 }}>
              "Dlaczego produkty same się wpisały do zamówienia?" — to działanie aktywnego koszyka szablonowego skonfigurowanego dla tego punktu dostawy. Wystarczy zmienić ilości albo usunąć pozycje przed wysłaniem.
            </p>
          </Card>
        </div>
        <div>
          <p style={{ fontWeight: 700, fontSize: 13, color: BRAND.dark, marginBottom: 12 }}>Cykliczne vs. domówienie</p>
          {orderTypes.map(({ icon, color, title, items }) => (
            <Card key={title} style={{ marginBottom: 14, borderTop: `4px solid ${color}`, padding: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <span style={{ fontSize: 22 }}>{icon}</span>
                <span style={{ fontWeight: 800, fontSize: 15, color }}>{title}</span>
              </div>
              {items.map(item => (
                <InfoRow key={item} icon="›" text={item} color={color} />
              ))}
            </Card>
          ))}
          <Card style={{ background: BRAND.dark, border: "none", padding: 14 }}>
            <p style={{ fontSize: 12, color: "#93c5fd", margin: 0, lineHeight: 1.6 }}>
              ⚠️ Druga próba złożenia zamówienia cyklicznego w tym samym miesiącu zostaje zablokowana z komunikatem: "W tym miesiącu zostało już złożone zamówienie cykliczne dla tego obiektu. Wybierz „Domówienie"."
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}

// ─── SLIDE 12: PROGI KOORDYNATORA, ZGŁOSZENIA I RAPORTY ─────────────────────

export function Slide12() {
  const modes = [
    { mode: "NONE",      label: "Tylko supervisor",        color: "#dc2626",   desc: "Każde zamówienie ponad limit czeka na Supervisora — Koordynator nie ma nic do zatwierdzenia." },
    { mode: "THRESHOLD", label: "Wg progów procentowych",   color: BRAND.accent, desc: "Koordynator zatwierdza przekroczenie do określonego % limitu — wyżej trafia do Supervisora." },
    { mode: "UNLIMITED", label: "Bez ograniczeń",           color: "#16a34a",   desc: "Koordynator zatwierdza każde przekroczenie limitu samodzielnie." },
  ];
  const tiers = [
    { range: "0 – 100 zł",        pct: "+50%", color: BRAND.primary },
    { range: "100 – 1000 zł",     pct: "+15%", color: "#7c3aed" },
    { range: "powyżej 1000 zł",   pct: "+10%", color: BRAND.accent },
  ];
  const categories = ["Reklamacja", "Pytanie", "Problem z dostawą", "Inne"];
  return (
    <div style={{ padding: "36px 40px 28px", minHeight: "100vh", background: BRAND.lightBg }}>
      <SlideHeader
        title="Progi koordynatora, zgłoszenia i raporty"
        subtitle="Trzy funkcje skonfigurowane lub obsługiwane samodzielnie przez klienta — admin powinien wiedzieć, jak działają"
      />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        <div>
          <p style={{ fontWeight: 700, fontSize: 13, color: BRAND.dark, marginBottom: 12 }}>Progi akceptacji ponad limit (Koordynator)</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 12 }}>
            {modes.map(({ mode, label, color, desc }) => (
              <Card key={mode} style={{ borderTop: `4px solid ${color}`, padding: 12 }}>
                <Badge small color={color} bg={`${color}18`}>{mode}</Badge>
                <div style={{ fontWeight: 700, fontSize: 12, color: BRAND.dark, margin: "6px 0 4px" }}>{label}</div>
                <p style={{ fontSize: 11, color: BRAND.subLight, margin: 0, lineHeight: 1.4 }}>{desc}</p>
              </Card>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 12 }}>
            {tiers.map(({ range, pct, color }) => (
              <Card key={range} style={{ textAlign: "center", padding: 12, borderLeft: `4px solid ${color}` }}>
                <div style={{ fontSize: 11, color: BRAND.subLight, marginBottom: 4 }}>{range}</div>
                <div style={{ fontWeight: 800, fontSize: 18, color }}>{pct}</div>
              </Card>
            ))}
          </div>
          <Card style={{ background: "#fff7ed", border: `1px solid ${BRAND.accent}33` }}>
            <p style={{ fontWeight: 700, fontSize: 12.5, color: BRAND.accent, marginBottom: 6 }}>📌 Kto to konfiguruje?</p>
            <p style={{ fontSize: 12, color: BRAND.subDark, margin: 0, lineHeight: 1.6 }}>
              Wyłącznie <strong>Supervisor klienta</strong>, samodzielnie, w portalu (Ustawienia → "Progi akceptacji ponad limit") — osobno dla każdego kontraktu. Admin nie ustawia tego w panelu, ale dobrze znać te wartości domyślne, gdy klient pyta, dlaczego Koordynator mógł (albo nie mógł) zatwierdzić zamówienie ponad limit.
            </p>
          </Card>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <Card style={{ borderTop: "4px solid #f59e0b" }}>
            <p style={{ fontWeight: 700, fontSize: 13, color: BRAND.dark, marginBottom: 10 }}>💬 System zgłoszeń — /admin/zgloszenia</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 10 }}>
              {categories.map(c => (
                <div key={c} style={{ background: "#f1f5f9", borderRadius: 8, padding: "6px 10px", fontSize: 12, color: BRAND.subDark, textAlign: "center" }}>{c}</div>
              ))}
            </div>
            <InfoRow icon="①" text="Klient rozpoczyna rozmowę na poziomie „Zespół” — widoczna tylko dla jego firmy" color="#f59e0b" />
            <InfoRow icon="②" text="Koordynator lub Supervisor może eskalować zgłoszenie do poziomu „BHF”" color="#f59e0b" />
            <InfoRow icon="③" text="Do /admin/zgloszenia trafiają TYLKO zgłoszenia eskalowane do poziomu „BHF”" color="#f59e0b" />
            <InfoRow icon="④" text="Admin odpowiada, oznacza jako rozwiązane lub otwiera ponownie" color="#f59e0b" />
          </Card>
          <Card style={{ background: BRAND.dark, border: "none" }}>
            <p style={{ fontWeight: 700, fontSize: 13, color: "#fff", marginBottom: 8 }}>📊 Raporty zużycia — narzędzie klienta</p>
            <p style={{ fontSize: 12, color: "#93c5fd", margin: 0, lineHeight: 1.6 }}>
              Supervisor ma w portalu własny raport zużycia (podsumowanie per punkt dostawy, rozbicie na produkty, wykresy TOP 10, druk/PDF). To narzędzie klienta do samodzielnej analizy — niezależne od raportu <strong>Aktywność klientów</strong> w panelu admina.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}