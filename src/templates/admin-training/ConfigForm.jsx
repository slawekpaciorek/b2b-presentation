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

export default function AdminTrainingConfigForm({ config, setField }) {
  return (
    <div style={sectionStyle}>
      <h2 style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 20 }}>
        Dane szkolenia
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div>
          <label style={labelStyle}>Prowadzący</label>
          <input value={config.trainerName} onChange={e => setField("trainerName", e.target.value)}
            style={inputStyle} placeholder="Jan Kowalski" />
        </div>
        <div>
          <label style={labelStyle}>Data szkolenia</label>
          <input value={config.date} onChange={e => setField("date", e.target.value)}
            style={inputStyle} placeholder="03.06.2026" />
        </div>
        <div style={{ gridColumn: "1 / -1" }}>
          <label style={labelStyle}>Adres platformy</label>
          <input value={config.websiteUrl} onChange={e => setField("websiteUrl", e.target.value)}
            style={inputStyle} placeholder="b2b.bhf.net.pl" />
        </div>
      </div>
    </div>
  );
}
