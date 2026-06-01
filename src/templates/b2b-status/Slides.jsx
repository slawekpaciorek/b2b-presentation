import { BRAND } from "../../theme";

const DONE = [
  "Rola SUPER_ADMIN + panel (backup H2, soft reset, migracja MySQL, konfiguracja)",
  "Backup MySQL przez JDBC + pobieranie pliku .sql z panelu",
  "Monitoring rozmiaru bazy danych (information_schema)",
  "Metryki systemu: RAM, CPU, Heap, Dysk, Sesje, HikariCP",
  "Statystyki platformy w karcie sesji (klienci, użytkownicy, zamówienia, oczekujące)",
  "Karta błędów aplikacji z licznikiem 24h → link do logów",
  "Rola KOORDYNATOR — formularz, security, instrukcje",
  "Etykiety ról z metody getLabel() — koniec z hardkodowanymi ternary w szablonach",
  "Nazwa skrócona klienta (shortName) + automatyczny numer zamówienia (ACME-00042)",
  "SchemaUpdater: ADD COLUMN IF NOT EXISTS dla short_name i order_number",
  "Filtrowanie zamówień: status, kontrakt, obiekt, osoba — admin i portal",
  "Dopłata transportowa na kontrakcie (minOrderValue, lowOrderSurcharge)",
  "Dashboard supervisora z licznikiem oczekujących zamówień",
  "Instrukcja admina i portalu zaktualizowane (role, numery, backup)",
];

const OPEN = [
  {
    label: "ManyToMany ClientUser ↔ BusinessClient",
    desc: "Jeden supervisor/koordynator/zamawiający może obsługiwać wiele firm (działalności). Wymaga nowej tabeli user_clients, przebudowy zapytań i formularzy.",
    complexity: "Duża",
  },
];

const ROADMAP = [
  { priority: "Wysoki",  icon: "🔁", name: "Zamów ponownie",        desc: "Kopiuj pozycje starego zamówienia do nowego" },
  { priority: "Wysoki",  icon: "📄", name: "PDF zamówienia",         desc: "Pobierz potwierdzenie jako PDF" },
  { priority: "Średni",  icon: "📊", name: "Statystyki supervisora", desc: "Obroty, top produkty, dashboard portalu" },
  { priority: "Średni",  icon: "📈", name: "Raport miesięczny",      desc: "XLSX: obroty per obiekt i per produkt" },
  { priority: "Średni",  icon: "📋", name: "Szablony zamówień",      desc: "Zapisz zestaw produktów jako szablon" },
  { priority: "Średni",  icon: "🛒", name: "Stały koszyk",           desc: "Koszyk przeżywa zamknięcie przeglądarki" },
  { priority: "Niski",   icon: "📧", name: "Powiadomienia e-mail",   desc: "Zatwierdzono / odrzucono zamówienie" },
  { priority: "Niski",   icon: "🗂️", name: "Archiwizacja zamówień",  desc: "Przenoszenie starych rekordów po X miesiącach" },
  { priority: "Niski",   icon: "📱", name: "PWA",                    desc: "Instalacja na telefonie, tryb offline" },
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