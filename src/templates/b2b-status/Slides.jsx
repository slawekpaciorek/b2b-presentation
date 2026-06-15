import { BRAND } from "../../theme";

const DONE = [
  "Pełny panel SUPER_ADMIN — backup H2/MySQL (w transakcji REPEATABLE READ), soft reset z wyborem zakresu danych, migracja do MySQL, konfiguracja sprzedawcy",
  "Metryki systemu (RAM, CPU, Heap, dysk, sesje, HikariCP) + karta błędów aplikacji z licznikiem 24h",
  "5 ról: SUPER_ADMIN, ADMIN, SUPERVISOR, KOORDYNATOR, ZAMAWIAJĄCY — pełna konfiguracja uprawnień i routingu",
  "Nazwa skrócona klienta + automatyczna numeracja zamówień (FIRMA-00042, FIRMA-S-00001 dla specjalnych)",
  "Dopłata transportowa przy zamówieniach poniżej minimalnej wartości kontraktu",
  "Pełna historia statusów zamówień — timeline (kto, kiedy, jaki status)",
  "Zamówienia specjalne — bez punktu dostawy, odbiór osobisty z oddziału",
  "Typ zamówienia: cykliczne (1×/miesiąc, auto-szablon) vs domówienie",
  "Konfigurowalne progi akceptacji ponad limit dla koordynatora — per kontrakt, per przedział wartości limitu",
  "Pasek wykorzystania limitu — widoczny przy zamówieniu i zbiorczo na dashboardzie",
  "\"Druga działalność\" — alternatywny nabywca (ILN/NIP) per punkt dostawy",
  "Wyszukiwarka produktów spoza kontraktu — dodawanie do zamówienia w locie",
  "Moduł dokumentów prawnych i umów — regulamin, RODO, polityka prywatności, umowy z klientami + przedstawiciele",
  "System zgłoszeń klientów — hierarchiczny czat ZAMAWIAJĄCY → zespół → BHF, z eskalacją",
  "Raporty zużycia — podsumowanie per punkt + rozbicie na produkty, wykresy, druk/PDF",
  "Raport \"Aktywność klientów\" — regularność zamówień, dynamika wartości, zmiany produktowe (nocny job)",
  "Panel dyskusyjny w uwagach wewnętrznych (/admin/notes) — wątki odpowiedzi",
  "Wydłużona sesja (4h) dla SUPERVISOR/KOORDYNATOR/ADMIN, 1h dla ZAMAWIAJĄCEGO",
  "Refaktoring kodu — podział dużych kontrolerów, scentralizowana autoryzacja, eliminacja duplikatów",
];

const OPEN = [
  {
    label: "ManyToMany ClientUser ↔ BusinessClient",
    desc: "Jeden supervisor/koordynator/zamawiający może obsługiwać wiele firm (działalności). Wymaga nowej tabeli user_clients, przebudowy zapytań i formularzy.",
    complexity: "Duża",
  },
  {
    label: "Odseparowanie zamówień per magazyn/oddział",
    desc: "Branch-based filtering — rozdzielenie widoczności zamówień i danych pomiędzy oddziały BHF (np. Dzielna/Główny). Większa zmiana architektoniczna, wymaga ustalenia zakresu z zarządem.",
    complexity: "Duża",
  },
];

const ROADMAP = [
  { priority: "Wysoki",  icon: "🔁", name: "Zamów ponownie",        desc: "Kopiuj pozycje starego zamówienia do nowego" },
  { priority: "Średni",  icon: "💲", name: "Powiadomienie o cenie",  desc: "Alert dla supervisora przy zmianie ceny produktu w kontrakcie" },
  { priority: "Średni",  icon: "🔄", name: "Grupowa podmiana produktu", desc: "Zastąp produkt X→Y we wszystkich/wybranych kontraktach" },
  { priority: "Średni",  icon: "💳", name: "Logika płatności",       desc: "Przelew / karta przy odbiorze / przedpłata — per klient lub kontrakt" },
  { priority: "Średni",  icon: "📄", name: "PDF zamówienia",         desc: "Pobierz potwierdzenie zamówienia jako PDF" },
  { priority: "Niski",   icon: "🏷️", name: "Tagi produktów",         desc: "Filtrowanie po cechach: ekologiczny, antypoślizgowy itp." },
  { priority: "Niski",   icon: "📧", name: "Powiadomienia e-mail",   desc: "Zatwierdzono / odrzucono zamówienie" },
  { priority: "Niski",   icon: "🗂️", name: "Archiwizacja zamówień",  desc: "Przenoszenie starych rekordów po X miesiącach" },
  { priority: "Niski",   icon: "📱", name: "PWA",                    desc: "Instalacja na telefonie, tryb offline" },
  { priority: "Niski",   icon: "🧮", name: "Kalkulator obiektu",     desc: "Rekomendowane ilości / koszty na podstawie historii" },
];

const PRIORITY_COLOR = {
  Wysoki: { bg: "rgba(220,38,38,0.15)",  border: "rgba(220,38,38,0.35)",  text: "#f87171" },
  Średni: { bg: "rgba(245,124,0,0.15)",  border: "rgba(245,124,0,0.35)",  text: "#fb923c" },
  Niski:  { bg: "rgba(71,85,105,0.25)",  border: "rgba(71,85,105,0.4)",   text: "#94a3b8" },
};

function ColHeader({ icon, title, count, color }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
      <span style={{ fontSize: 18 }}>{icon}</span>
      <span style={{ fontSize: 14, fontWeight: 700, color: "#e2e8f0", letterSpacing: 0.3 }}>{title}</span>
      {count !== undefined && (
        <span style={{
          marginLeft: "auto", background: color, color: "#fff",
          borderRadius: 20, padding: "1px 9px", fontSize: 11, fontWeight: 700,
        }}>{count}</span>
      )}
    </div>
  );
}

export function Slide1Status({ config }) {
  return (
    <div style={{
      minHeight: "100vh", background: BRAND.dark,
      display: "flex", flexDirection: "column",
      padding: "28px 32px 68px",
      fontFamily: "Outfit, sans-serif",
      position: "relative", overflow: "hidden",
    }}>
      {/* bg blobs */}
      <div style={{ position:"absolute", right:-100, top:-100, width:400, height:400,
        borderRadius:"50%", background:"rgba(10,77,181,0.1)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", left:-80, bottom:-80, width:300, height:300,
        borderRadius:"50%", background:"rgba(245,124,0,0.07)", pointerEvents:"none" }} />

      {/* Header */}
      <div style={{ marginBottom: 20, position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <h1 style={{ fontSize: 26, fontWeight: 800, color: "#f1f5f9", lineHeight: 1.2 }}>
            {config.title}
          </h1>
          <span style={{ fontSize: 12, color: "#475569", fontWeight: 500 }}>{config.date}</span>
        </div>
        <p style={{ fontSize: 13, color: "#64748b", marginTop: 4 }}>{config.subtitle}</p>
        <div style={{ height: 3, background: BRAND.grad, borderRadius: 2, marginTop: 10 }} />
      </div>

      {/* 3 columns */}
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 0.55fr 0.9fr",
        gap: 16, flex: 1, position: "relative", zIndex: 1,
      }}>

        {/* ── Zrobione ── */}
        <div style={{
          background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 12, padding: 16, overflow: "hidden", display: "flex", flexDirection: "column",
        }}>
          <ColHeader icon="✅" title="Zrobione" count={DONE.length} color="#16a34a" />
          <div style={{ overflowY: "auto", flex: 1 }}>
            {DONE.map((item, i) => (
              <div key={i} style={{
                display: "flex", gap: 8, padding: "5px 0",
                borderBottom: i < DONE.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                alignItems: "flex-start",
              }}>
                <span style={{ color: "#4ade80", fontSize: 11, marginTop: 2, flexShrink: 0 }}>✓</span>
                <span style={{ fontSize: 11.5, color: "#cbd5e1", lineHeight: 1.45 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Otwarte ── */}
        <div style={{
          background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 12, padding: 16, display: "flex", flexDirection: "column",
        }}>
          <ColHeader icon="🔴" title="Otwarte" count={OPEN.length} color="#dc2626" />
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {OPEN.map((item, i) => (
              <div key={i} style={{
                background: "rgba(220,38,38,0.08)", border: "1px solid rgba(220,38,38,0.25)",
                borderRadius: 10, padding: "12px 14px",
              }}>
                <div style={{ fontSize: 12.5, fontWeight: 700, color: "#fca5a5", marginBottom: 6 }}>
                  {item.label}
                </div>
                <div style={{ fontSize: 11, color: "#94a3b8", lineHeight: 1.5 }}>{item.desc}</div>
                <div style={{ marginTop: 8 }}>
                  <span style={{
                    background: "rgba(220,38,38,0.2)", color: "#f87171", borderRadius: 20,
                    padding: "2px 10px", fontSize: 10, fontWeight: 700,
                  }}>Złożoność: {item.complexity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Roadmapa ── */}
        <div style={{
          background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 12, padding: 16, overflow: "hidden", display: "flex", flexDirection: "column",
        }}>
          <ColHeader icon="🗺️" title="Roadmapa" />
          <div style={{ overflowY: "auto", flex: 1, display: "flex", flexDirection: "column", gap: 5 }}>
            {ROADMAP.map((item, i) => {
              const pc = PRIORITY_COLOR[item.priority];
              return (
                <div key={i} style={{
                  background: pc.bg, border: `1px solid ${pc.border}`,
                  borderRadius: 8, padding: "7px 10px",
                  display: "flex", alignItems: "flex-start", gap: 8,
                }}>
                  <span style={{ fontSize: 14, flexShrink: 0, marginTop: 1 }}>{item.icon}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2 }}>
                      <span style={{ fontSize: 12, fontWeight: 700, color: "#e2e8f0" }}>{item.name}</span>
                      <span style={{
                        fontSize: 9, fontWeight: 700, color: pc.text,
                        background: `${pc.bg}`, border: `1px solid ${pc.border}`,
                        borderRadius: 20, padding: "1px 6px", flexShrink: 0,
                      }}>{item.priority}</span>
                    </div>
                    <div style={{ fontSize: 10.5, color: "#64748b", lineHeight: 1.4 }}>{item.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}