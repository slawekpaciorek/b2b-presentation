import { useState } from "react";
import { templates, templateById } from "./templates/registry";
import { BRAND } from "./theme";

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

export default function PresentationForm({ initial, onSave, onCancel }) {
  const isEdit = !!initial;

  const [selectedTemplateId, setSelectedTemplateId] = useState(
    initial?.templateId ?? templates[0].id
  );
  const [name, setName] = useState(initial?.name ?? "");
  const [description, setDescription] = useState(initial?.description ?? "");
  const [config, setConfig] = useState(
    initial?.config ?? { ...templateById[templates[0].id].defaultConfig }
  );

  function handleTemplateChange(id) {
    setSelectedTemplateId(id);
    setConfig({ ...templateById[id].defaultConfig });
  }

  function setField(key, val) {
    setConfig(c => ({ ...c, [key]: val }));
  }

  function handleSave() {
    if (!name.trim()) return;
    onSave({ name: name.trim(), description: description.trim(), config, templateId: selectedTemplateId });
  }

  const activeTemplate = templateById[selectedTemplateId];
  const { ConfigForm } = activeTemplate;

  return (
    <div style={{ minHeight: "100vh", background: BRAND.dark, padding: "0 0 60px" }}>
      {/* Header */}
      <div style={{
        background: "rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.08)",
        padding: "20px 40px", display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
          <span style={{ fontWeight: 900, fontSize: 20, color: BRAND.white }}>BHF</span>
          <span style={{ fontWeight: 900, fontSize: 20, color: BRAND.accent }}>B2B</span>
          <span style={{ fontSize: 13, color: "#64748b", marginLeft: 8 }}>
            {isEdit ? "Edytuj prezentację" : "Nowa prezentacja"}
          </span>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <button onClick={onCancel} style={{
            background: "rgba(255,255,255,0.08)", color: "#94a3b8", border: "none",
            borderRadius: 8, padding: "10px 20px", fontSize: 14, fontWeight: 600, cursor: "pointer",
          }}>Anuluj</button>
          <button onClick={handleSave} disabled={!name.trim()} style={{
            background: name.trim() ? BRAND.primary : "rgba(10,77,181,0.3)",
            color: name.trim() ? "#fff" : "#475569",
            border: "none", borderRadius: 8, padding: "10px 24px",
            fontSize: 14, fontWeight: 700, cursor: name.trim() ? "pointer" : "not-allowed",
          }}>
            {isEdit ? "Zapisz zmiany" : "Utwórz prezentację"}
          </button>
        </div>
      </div>

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "36px 24px" }}>
        <div style={{ height: 3, background: BRAND.grad, borderRadius: 2, marginBottom: 32, maxWidth: 100 }} />

        {/* Wybór szablonu — tylko przy nowej prezentacji */}
        {!isEdit && templates.length > 1 && (
          <div style={sectionStyle}>
            <h2 style={{ fontSize: 15, fontWeight: 700, color: BRAND.white, marginBottom: 16 }}>
              Wybierz typ prezentacji
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
              {templates.map(t => {
                const selected = t.id === selectedTemplateId;
                return (
                  <button key={t.id} onClick={() => handleTemplateChange(t.id)} style={{
                    background: selected ? "rgba(10,77,181,0.35)" : "rgba(255,255,255,0.04)",
                    border: `2px solid ${selected ? BRAND.primary : "rgba(255,255,255,0.1)"}`,
                    borderRadius: 10, padding: "14px 16px", cursor: "pointer",
                    textAlign: "left", transition: "all 0.15s",
                  }}>
                    <div style={{ fontWeight: 700, fontSize: 14, color: selected ? "#93c5fd" : BRAND.white, marginBottom: 4 }}>
                      {t.name}
                    </div>
                    <p style={{ fontSize: 12, color: BRAND.subLight, margin: 0, lineHeight: 1.4 }}>
                      {t.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Podstawowe informacje */}
        <div style={sectionStyle}>
          <h2 style={{ fontSize: 15, fontWeight: 700, color: BRAND.white, marginBottom: 20 }}>
            Podstawowe informacje
          </h2>
          <div style={{ display: "grid", gap: 16 }}>
            <div>
              <label style={labelStyle}>Nazwa prezentacji *</label>
              <input value={name} onChange={e => setName(e.target.value)}
                style={inputStyle} placeholder="np. BHF B2B — Prezentacja dla klienta X" />
            </div>
            <div>
              <label style={labelStyle}>Opis (opcjonalny)</label>
              <input value={description} onChange={e => setDescription(e.target.value)}
                style={inputStyle} placeholder="np. Prezentacja na spotkanie 15.06" />
            </div>
          </div>
        </div>

        {/* Pola specyficzne dla szablonu */}
        {ConfigForm && <ConfigForm config={config} setField={setField} />}
      </div>
    </div>
  );
}
