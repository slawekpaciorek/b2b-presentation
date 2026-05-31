import { useState } from "react";
import { BRAND } from "./theme";
import { templateById } from "./templates/registry";

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("pl-PL", {
    day: "2-digit", month: "long", year: "numeric",
  });
}

export default function PresentationList({ presentations, onOpen, onNew, onEdit, onDuplicate, onDelete }) {
  const [confirmId, setConfirmId] = useState(null);

  function handleDelete(id) {
    if (confirmId === id) {
      onDelete(id);
      setConfirmId(null);
    } else {
      setConfirmId(id);
    }
  }

  return (
    <div style={{ minHeight: "100vh", background: BRAND.dark, padding: "0 0 60px" }}>
      {/* Header */}
      <div style={{
        background: "rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.08)",
        padding: "20px 40px", display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
          <span style={{ fontWeight: 900, fontSize: 24, color: BRAND.white, letterSpacing: -1 }}>BHF</span>
          <span style={{ fontWeight: 900, fontSize: 24, color: BRAND.accent, letterSpacing: -1 }}>B2B</span>
          <span style={{ fontSize: 13, color: "#64748b", marginLeft: 8, fontWeight: 500 }}>Prezentacje</span>
        </div>
        <button onClick={onNew} style={{
          background: BRAND.primary, color: "#fff", border: "none", borderRadius: 8,
          padding: "10px 20px", fontSize: 14, fontWeight: 700, cursor: "pointer",
          display: "flex", alignItems: "center", gap: 8,
        }}>
          + Nowa prezentacja
        </button>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 24px" }}>
        <div style={{ marginBottom: 32 }}>
          <h1 style={{ fontSize: 28, fontWeight: 800, color: BRAND.white, marginBottom: 6 }}>
            Twoje prezentacje
          </h1>
          <p style={{ fontSize: 14, color: BRAND.subLight }}>
            {presentations.length} {presentations.length === 1 ? "prezentacja" : "prezentacji"} · kliknij aby otworzyć
          </p>
          <div style={{ height: 3, background: BRAND.grad, borderRadius: 2, marginTop: 12, maxWidth: 120 }} />
        </div>

        {presentations.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 0", color: BRAND.subLight }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>📋</div>
            <p style={{ fontSize: 16, marginBottom: 24 }}>Brak prezentacji. Utwórz pierwszą.</p>
            <button onClick={onNew} style={{
              background: BRAND.primary, color: "#fff", border: "none", borderRadius: 8,
              padding: "12px 28px", fontSize: 15, fontWeight: 700, cursor: "pointer",
            }}>+ Nowa prezentacja</button>
          </div>
        ) : (
          <div style={{ display: "grid", gap: 16 }}>
            {presentations.map((p) => {
              const template = templateById[p.templateId ?? "bhf-b2b"];
              return (
                <div key={p.id} style={{
                  background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)",
                  borderRadius: 12, overflow: "hidden",
                  display: "flex", alignItems: "stretch",
                  transition: "border-color 0.2s",
                }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(10,77,181,0.6)"}
                  onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)"}
                >
                  {/* Accent bar */}
                  <div style={{ width: 4, background: BRAND.grad, flexShrink: 0 }} />

                  {/* Content — clickable */}
                  <div
                    onClick={() => onOpen(p)}
                    style={{ flex: 1, padding: "20px 24px", cursor: "pointer" }}
                  >
                    <div style={{ fontWeight: 800, fontSize: 18, color: BRAND.white, marginBottom: 4 }}>
                      {p.name}
                    </div>
                    {p.description && (
                      <div style={{ fontSize: 13, color: BRAND.subLight, marginBottom: 8 }}>
                        {p.description}
                      </div>
                    )}
                    <div style={{ display: "flex", gap: 16, fontSize: 12, color: "#475569", flexWrap: "wrap" }}>
                      <span style={{
                        background: "rgba(10,77,181,0.25)", color: "#93c5fd",
                        borderRadius: 4, padding: "2px 8px", fontSize: 11, fontWeight: 600,
                      }}>{template?.name ?? p.templateId}</span>
                      {p.config?.websiteUrl && <span>🌐 {p.config.websiteUrl}</span>}
                      <span>📅 {formatDate(p.createdAt)}</span>
                      {p.config?.doneFeatures && <span>✅ {p.config.doneFeatures.length} funkcji</span>}
                    </div>
                  </div>

                  {/* Actions */}
                  <div style={{
                    display: "flex", flexDirection: "column", justifyContent: "center",
                    gap: 6, padding: "16px 20px", borderLeft: "1px solid rgba(255,255,255,0.06)",
                    flexShrink: 0,
                  }}>
                    <button onClick={() => onOpen(p)} style={btnStyle("#16a34a")}>▶ Otwórz</button>
                    <button onClick={() => onEdit(p)} style={btnStyle(BRAND.primary)}>✏ Edytuj</button>
                    <button onClick={() => onDuplicate(p.id)} style={btnStyle("#7c3aed")}>⧉ Duplikuj</button>
                    <button onClick={() => handleDelete(p.id)} style={btnStyle(confirmId === p.id ? "#dc2626" : "#374151")}>
                      {confirmId === p.id ? "Potwierdź" : "🗑 Usuń"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

function btnStyle(bg) {
  return {
    background: bg, color: "#fff", border: "none", borderRadius: 6,
    padding: "6px 14px", fontSize: 12, fontWeight: 600, cursor: "pointer",
    whiteSpace: "nowrap", fontFamily: "Outfit, sans-serif",
  };
}
