import { useState, useEffect, useCallback } from "react";
import PresentationList from "./PresentationList";
import PresentationForm from "./PresentationForm";
import { usePresentations } from "./hooks/usePresentations";
import { templateById } from "./templates/registry";
import { BRAND } from "./theme";

const baseStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Outfit', Arial, sans-serif; background: #0A0F1E; }
  ::-webkit-scrollbar{width:4px} ::-webkit-scrollbar-thumb{background:#0a4db5;border-radius:2px}
`;

// ─── VIEWER ───────────────────────────────────────────────────────
function PresentationViewer({ presentation, onBack }) {
  const template = templateById[presentation.templateId ?? "bhf-b2b"];
  const { slides } = template;
  const { config } = presentation;

  const [current, setCurrent] = useState(0);
  const [key, setKey] = useState(0);

  const goTo = useCallback((i) => { setCurrent(i); setKey(k => k + 1); }, []);
  const prev = useCallback(() => goTo(Math.max(0, current - 1)), [current, goTo]);
  const next = useCallback(() => goTo(Math.min(slides.length - 1, current + 1)), [current, goTo, slides.length]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") next();
      if (e.key === "ArrowLeft"  || e.key === "ArrowUp")   prev();
      if (e.key === "Escape") onBack();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev, onBack]);

  const { Component } = slides[current];
  const pct = ((current + 1) / slides.length) * 100;

  return (
    <>
      {template.globalStyle && <style>{template.globalStyle}</style>}

      <div style={{ position:"fixed", top:0, left:0, right:0, height:3, zIndex:100, background:"#1e293b" }}>
        <div style={{ height:"100%", background:BRAND.grad, width:`${pct}%`,
          transition:"width 0.4s ease", borderRadius:"0 2px 2px 0" }} />
      </div>

      <div key={key} className="slide" style={{ minHeight:"100vh" }}>
        <Component config={config} />
      </div>

      <div style={{
        position:"fixed", bottom:0, left:0, right:0, zIndex:100,
        background:"rgba(10,15,30,0.95)", backdropFilter:"blur(8px)",
        borderTop:"1px solid rgba(255,255,255,0.08)",
        display:"flex", alignItems:"center", justifyContent:"space-between",
        padding:"10px 20px",
      }}>
        <button onClick={onBack} style={{
          background:"rgba(255,255,255,0.08)", color:"#94a3b8", border:"none",
          borderRadius:6, padding:"5px 14px", fontSize:12, fontWeight:600,
          cursor:"pointer", flexShrink:0, marginRight:12, fontFamily:"Outfit,sans-serif",
        }}>← Lista</button>

        <div style={{ display:"flex", gap:4, overflowX:"auto", flex:1 }}>
          {slides.map((s, i) => (
            <button key={s.id} onClick={() => goTo(i)} style={{
              background: i === current ? BRAND.primary : "rgba(255,255,255,0.06)",
              color: i === current ? "#fff" : "#94a3b8",
              border:"none", borderRadius:6, padding:"5px 14px",
              fontSize:12, fontWeight: i === current ? 700 : 500,
              cursor:"pointer", whiteSpace:"nowrap", fontFamily:"Outfit,sans-serif",
              transition:"all 0.2s",
            }}>{s.id}. {s.label}</button>
          ))}
        </div>

        <div style={{ display:"flex", gap:8, marginLeft:16, flexShrink:0 }}>
          <button onClick={prev} disabled={current === 0} style={{
            background: current === 0 ? "rgba(255,255,255,0.04)" : BRAND.primary,
            color: current === 0 ? "#475569" : "#fff",
            border:"none", borderRadius:8, width:36, height:36, fontSize:16,
            cursor: current === 0 ? "not-allowed" : "pointer", fontFamily:"Outfit,sans-serif",
          }}>←</button>
          <button onClick={next} disabled={current === slides.length - 1} style={{
            background: current === slides.length - 1 ? "rgba(255,255,255,0.04)" : BRAND.primary,
            color: current === slides.length - 1 ? "#475569" : "#fff",
            border:"none", borderRadius:8, width:36, height:36, fontSize:16,
            cursor: current === slides.length - 1 ? "not-allowed" : "pointer", fontFamily:"Outfit,sans-serif",
          }}>→</button>
          <span style={{ color:"#475569", fontSize:12, alignSelf:"center", minWidth:40 }}>
            {current + 1}/{slides.length}
          </span>
        </div>
      </div>

      <div style={{ height:56 }} />
    </>
  );
}

// ─── APP ROUTER ───────────────────────────────────────────────────
export default function App() {
  const { presentations, add, update, remove, duplicate } = usePresentations();
  const [screen, setScreen] = useState("list");
  const [activePresentation, setActivePresentation] = useState(null);

  function handleOpen(p) {
    setActivePresentation(p);
    setScreen("viewer");
  }

  function handleNew() {
    setActivePresentation(null);
    setScreen("new");
  }

  function handleEdit(p) {
    setActivePresentation(p);
    setScreen("edit");
  }

  function handleSave(fields) {
    if (screen === "edit" && activePresentation) {
      update(activePresentation.id, fields);
    } else {
      add(fields.name, fields.description, fields.config, fields.templateId);
    }
    setScreen("list");
  }

  return (
    <>
      <style>{baseStyle}</style>
      {screen === "list" && (
        <PresentationList
          presentations={presentations}
          onOpen={handleOpen}
          onNew={handleNew}
          onEdit={handleEdit}
          onDuplicate={duplicate}
          onDelete={remove}
        />
      )}
      {screen === "viewer" && activePresentation && (
        <PresentationViewer
          presentation={activePresentation}
          onBack={() => setScreen("list")}
        />
      )}
      {(screen === "new" || screen === "edit") && (
        <PresentationForm
          initial={screen === "edit" ? activePresentation : null}
          onSave={handleSave}
          onCancel={() => setScreen("list")}
        />
      )}
    </>
  );
}
