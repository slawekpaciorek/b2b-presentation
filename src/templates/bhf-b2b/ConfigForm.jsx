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

function FeatureListEditor({ label, items, onChange, withIcon = false }) {
  function update(i, field, val) {
    const next = items.map((item, idx) =>
      idx === i ? (withIcon ? { ...item, [field]: val } : val) : item
    );
    onChange(next);
  }
  function add() {
    onChange([...items, withIcon ? { icon: "⭐", title: "", desc: "" } : ""]);
  }
  function remove(i) {
    onChange(items.filter((_, idx) => idx !== i));
  }

  return (
    <div>
      <label style={labelStyle}>{label}</label>
      {items.map((item, i) => (
        <div key={i} style={{ display: "flex", gap: 8, marginBottom: 8, alignItems: "flex-start" }}>
          {withIcon && (
            <input
              value={item.icon}
              onChange={e => update(i, "icon", e.target.value)}
              style={{ ...inputStyle, width: 52, textAlign: "center", padding: "10px 6px", flexShrink: 0 }}
              placeholder="🔁"
            />
          )}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
            {withIcon ? (
              <>
                <input value={item.title} onChange={e => update(i, "title", e.target.value)}
                  style={inputStyle} placeholder="Tytuł" />
                <input value={item.desc} onChange={e => update(i, "desc", e.target.value)}
                  style={{ ...inputStyle, fontSize: 13 }} placeholder="Opis" />
              </>
            ) : (
              <input value={item} onChange={e => update(i, null, e.target.value)}
                style={inputStyle} placeholder="Funkcja..." />
            )}
          </div>
          <button onClick={() => remove(i)} style={{
            background: "rgba(220,38,38,0.2)", color: "#f87171", border: "none",
            borderRadius: 6, padding: "10px 12px", cursor: "pointer", flexShrink: 0,
          }}>✕</button>
        </div>
      ))}
      <button onClick={add} style={{
        background: "rgba(10,77,181,0.25)", color: "#93c5fd", border: "1px solid rgba(10,77,181,0.4)",
        borderRadius: 6, padding: "8px 16px", fontSize: 12, fontWeight: 600, cursor: "pointer",
        marginTop: 4,
      }}>+ Dodaj</button>
    </div>
  );
}

export default function BhfConfigForm({ config, setField }) {
  return (
    <>
      {/* Slajd 1 — Hero */}
      <div style={sectionStyle}>
        <h2 style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 20 }}>
          Slajd 1 — Strona tytułowa
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div>
            <label style={labelStyle}>Nazwa firmy</label>
            <input value={config.companyName} onChange={e => setField("companyName", e.target.value)}
              style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Nazwa platformy</label>
            <input value={config.platformName} onChange={e => setField("platformName", e.target.value)}
              style={inputStyle} />
          </div>
          <div style={{ gridColumn: "1 / -1" }}>
            <label style={labelStyle}>Hasło (tagline)</label>
            <input value={config.tagline} onChange={e => setField("tagline", e.target.value)}
              style={inputStyle} />
          </div>
          <div style={{ gridColumn: "1 / -1" }}>
            <label style={labelStyle}>Podtytuł</label>
            <textarea value={config.subtitle} onChange={e => setField("subtitle", e.target.value)}
              rows={2} style={{ ...inputStyle, resize: "vertical" }} />
          </div>
          <div style={{ gridColumn: "1 / -1" }}>
            <label style={labelStyle}>Adres strony (URL)</label>
            <input value={config.websiteUrl} onChange={e => setField("websiteUrl", e.target.value)}
              style={inputStyle} placeholder="b2b.bhf.net.pl" />
          </div>
        </div>
        <div style={{ marginTop: 16 }}>
          <FeatureListEditor
            label="Tagi na stronie tytułowej"
            items={config.heroTags}
            onChange={val => setField("heroTags", val)}
          />
        </div>
      </div>

      {/* Slajd 6 — Katalog */}
      <div style={sectionStyle}>
        <h2 style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 20 }}>
          Slajd 6 — Katalog produktów
        </h2>
        <div>
          <label style={labelStyle}>Liczba produktów</label>
          <input
            type="number" min={1}
            value={config.productCount}
            onChange={e => setField("productCount", parseInt(e.target.value) || 0)}
            style={{ ...inputStyle, width: 140 }}
          />
        </div>
      </div>

      {/* Slajd 7 — Roadmapa */}
      <div style={sectionStyle}>
        <h2 style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 20 }}>
          Slajd 7 — Roadmapa
        </h2>
        <div style={{ display: "grid", gap: 24 }}>
          <FeatureListEditor
            label="✅ Już wdrożone"
            items={config.doneFeatures}
            onChange={val => setField("doneFeatures", val)}
          />
          <FeatureListEditor
            label="🔜 Wkrótce"
            items={config.soonFeatures}
            onChange={val => setField("soonFeatures", val)}
            withIcon
          />
          <FeatureListEditor
            label="📅 Planowane"
            items={config.plannedFeatures}
            onChange={val => setField("plannedFeatures", val)}
            withIcon
          />
        </div>
      </div>
    </>
  );
}
