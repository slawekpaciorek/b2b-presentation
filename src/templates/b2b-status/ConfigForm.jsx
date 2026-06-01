import { BRAND } from "../../theme";

const inputStyle = {
  width: "100%", padding: "10px 14px", borderRadius: 8, fontSize: 14,
  border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.07)",
  color: "#fff", fontFamily: "Outfit, sans-serif", outline: "none",
};

const labelStyle = {
  display: "block", fontSize: 12, fontWeight: 600, color: BRAND.subLight,
  marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.5,
};

const sectionStyle = {
  background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 12, padding: 24, marginBottom: 20,
};

export default function StatusConfigForm({ config, setField }) {
  return (
    <div style={sectionStyle}>
      <h2 style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 20 }}>
        Slajd 1 — Status projektu
      </h2>
      <div style={{ display: "grid", gap: 16 }}>
        <div>
          <label style={labelStyle}>Tytuł slajdu</label>
          <input value={config.title} onChange={e => setField("title", e.target.value)}
            style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Podtytuł</label>
          <input value={config.subtitle} onChange={e => setField("subtitle", e.target.value)}
            style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Data</label>
          <input value={config.date} onChange={e => setField("date", e.target.value)}
            style={inputStyle} placeholder="np. 2026-06-01" />
        </div>
      </div>
      <p style={{ fontSize: 11, color: "#475569", marginTop: 16 }}>
        Zawartość list (Zrobione / Otwarte / Roadmapa) jest zakodowana w pliku Slides.jsx i aktualizowana ręcznie wraz z postępem projektu.
      </p>
    </div>
  );
}
