import { BRAND } from "../../theme";

// ─── SHARED ───────────────────────────────────────────────────────
function Card({ children, style: s = {}, hover = true }) {
  return (
    <div className={hover ? "card-hover" : ""} style={{
      background: BRAND.white, borderRadius: 12, padding: 20,
      boxShadow: "0 2px 12px rgba(10,77,181,0.08)", border: "1px solid #e2e8f0", ...s,
    }}>{children}</div>
  );
}

function Badge({ children, color = BRAND.primary, textColor = "#fff", small = false }) {
  return (
    <span style={{
      background: color, color: textColor, borderRadius: 20,
      padding: small ? "2px 8px" : "4px 12px",
      fontSize: small ? 10 : 11, fontWeight: 700, display: "inline-block", letterSpacing: 0.3,
    }}>{children}</span>
  );
}

function GradLine() {
  return <div style={{ height: 3, background: BRAND.grad, borderRadius: 2, margin: "12px 0" }} />;
}

function SlideHeader({ title, subtitle }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <h1 style={{ fontSize: 28, fontWeight: 800, color: BRAND.dark, lineHeight: 1.2 }}>{title}</h1>
      {subtitle && <p style={{ fontSize: 15, color: BRAND.subLight, marginTop: 6 }}>{subtitle}</p>}
      <GradLine />
    </div>
  );
}

function ProgressBar({ pct, color = BRAND.primary, used, total }) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
        <span style={{ fontSize: 12, color: pct > 1 ? "#dc2626" : BRAND.subLight }}>
          {used?.toFixed(2)} / {total?.toFixed(2)} zł
        </span>
      </div>
      <div style={{ height: 8, background: "#e2e8f0", borderRadius: 4, overflow: "hidden" }}>
        <div className="bar-anim" style={{
          "--bar-w": `${Math.min(pct * 100, 100)}%`,
          width: `${Math.min(pct * 100, 100)}%`,
          height: "100%", background: pct > 1 ? "#dc2626" : color, borderRadius: 4,
        }} />
      </div>
    </div>
  );
}

// ─── SLIDES ───────────────────────────────────────────────────────
function Slide1({ config }) {
  const lines = config.subtitle.split("\n");
  return (
    <div style={{
      minHeight: "100vh", background: BRAND.dark, display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden",
    }}>
      <div style={{ position:"absolute", right:-120, bottom:-120, width:500, height:500,
        borderRadius:"50%", background:"rgba(10,77,181,0.15)" }} />
      <div style={{ position:"absolute", left:-80, top:-80, width:350, height:350,
        borderRadius:"50%", background:"rgba(245,124,0,0.08)" }} />
      <div style={{ textAlign:"center", position:"relative", zIndex:1, maxWidth:700, padding:"0 32px" }}>
        <div style={{ display:"flex", justifyContent:"center", alignItems:"baseline", gap:6, marginBottom:8 }}>
          {config.platformName.split(" ").map((word, i) => (
            <span key={i} style={{ fontWeight:900, fontSize:72, letterSpacing:-3,
              color: i === 0 ? BRAND.white : BRAND.accent }}>{word}</span>
          ))}
        </div>
        <div style={{ fontSize:13, fontWeight:600, letterSpacing:4, color:BRAND.accent,
          textTransform:"uppercase", marginBottom:16 }}>Platform</div>
        <div style={{ height:3, background:BRAND.grad, borderRadius:2, marginBottom:24 }} />
        <h2 style={{ fontSize:32, fontWeight:700, color:BRAND.white, marginBottom:12, lineHeight:1.3 }}>
          {config.tagline}
        </h2>
        <p style={{ fontSize:16, color:"#93c5fd", marginBottom:32 }}>
          {lines.map((l, i) => <span key={i}>{l}{i < lines.length - 1 && <br />}</span>)}
        </p>
        <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
          {config.heroTags.map(t => (
            <span key={t} style={{
              background:"rgba(10,77,181,0.4)", color:"#93c5fd",
              border:"1px solid rgba(10,77,181,0.6)",
              borderRadius:20, padding:"6px 16px", fontSize:13, fontWeight:500,
            }}>{t}</span>
          ))}
        </div>
        <p style={{ marginTop:32, fontSize:12, color:BRAND.subLight }}>
          {config.companyName} • {config.websiteUrl}
        </p>
      </div>
    </div>
  );
}

function Slide2() {
  const roles = [
    { title:"Zamawiający", color:BRAND.primary, icon:"🛒",
      desc:"Pracownik firmy składający zamówienia dla przypisanych obiektów.",
      items:["Zamówienia dla swoich obiektów","Widzi produkty z kontraktu","Monitoruje status zamówień","Kontroluje limity miesięczne"] },
    { title:"Koordynator", color:"#7c3aed", icon:"📊",
      desc:"Pośredni szczebel — zatwierdza zamówienia w ramach progów limitu, bez pełnych uprawnień Supervisora.",
      items:["Zatwierdza zamówienia w ramach progów limitu","Widzi pełny katalog produktów","Dla większych zespołów i wielu obiektów","Progi konfigurowane per kontrakt"] },
    { title:"Supervisor", color:"#0d9488", icon:"👁️",
      desc:"Przełożony zamawiających — widzi całość, zatwierdza zamówienia.",
      items:["Widzi zamówienia całej firmy","Zatwierdza lub odrzuca oczekujące","Edytuje zamówienia przed zatwierdzeniem","Pełny dostęp do katalogu produktów"] },
    { title:"Administrator", color:BRAND.accent, icon:"⚙️",
      desc:"Pracownik BHF zarządzający platformą od strony technicznej.",
      items:["Zarządza klientami i kontraktami","Konfiguruje produkty i cenniki","Tworzy grupy cenowe","Kontroluje wszystkich użytkowników"] },
  ];
  return (
    <div style={{ padding:"40px 40px 32px", minHeight:"100vh", background:BRAND.lightBg }}>
      <SlideHeader title="Dla kogo jest BHF B2B Platform?" subtitle="Cztery role, jedna platforma — każdy ma dokładnie to, czego potrzebuje" />
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr", gap:16 }}>
        {roles.map(({ title, color, icon, desc, items }) => (
          <Card key={title} style={{ borderTop:`4px solid ${color}`, padding:0, overflow:"hidden" }}>
            <div style={{ background:color, padding:"20px 20px 16px", color:"#fff" }}>
              <div style={{ fontSize:32, marginBottom:8 }}>{icon}</div>
              <div style={{ fontWeight:800, fontSize:20 }}>{title}</div>
            </div>
            <div style={{ padding:20 }}>
              <p style={{ fontSize:13, color:BRAND.subLight, marginBottom:16, lineHeight:1.5 }}>{desc}</p>
              {items.map(item => (
                <div key={item} className="feature-item" style={{ display:"flex", alignItems:"flex-start", gap:8, marginBottom:10 }}>
                  <div style={{ width:6, height:6, borderRadius:"50%", background:color, marginTop:5, flexShrink:0 }} />
                  <span style={{ fontSize:13, color:BRAND.subDark, lineHeight:1.4 }}>{item}</span>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function Slide3({ config }) {
  const steps = [
    { n:"1", title:"Zaloguj się", desc:`Wejdź na ${config.websiteUrl} i zaloguj się e-mailem oraz hasłem od administratora.`, color:BRAND.primary, icon:"🔑" },
    { n:"2", title:"Wybierz obiekt", desc:"Kliknij 'Nowe zamówienie', wybierz punkt dostawy. Widzisz bieżące wykorzystanie limitu.", color:"#7c3aed", icon:"🏢" },
    { n:"3", title:"Typ dostawy", desc:"Dostawa pod adres lub odbiór z oddziału BHF — Magazyn lub Sklep.", color:"#0d9488", icon:"🚚" },
    { n:"4", title:"Wypełnij zamówienie", desc:"Produkty pogrupowane po kategoriach. Wpisz ilości — puste pola są pomijane.", color:BRAND.accent, icon:"📋" },
    { n:"5", title:"Złóż zamówienie", desc:"Kliknij 'Złóż zamówienie'. Pojawia się natychmiast w historii ze statusem NOWE.", color:"#16a34a", icon:"✅" },
  ];
  return (
    <div style={{ padding:"40px 40px 32px", minHeight:"100vh", background:BRAND.lightBg }}>
      <SlideHeader title="Jak złożyć zamówienie?" subtitle="Prosty proces — od logowania do potwierdzenia w 5 krokach" />
      <div style={{ display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:14, marginBottom:20 }}>
        {steps.map(({ n, title, desc, color, icon }, i) => (
          <div key={n} className="step-card" style={{ position:"relative" }}>
            {i < 4 && <div style={{ position:"absolute", right:-10, top:28, zIndex:2, color:"#94a3b8", fontSize:18 }}>→</div>}
            <Card style={{ borderTop:`4px solid ${color}`, textAlign:"center", padding:"20px 14px" }}>
              <div style={{ width:44, height:44, borderRadius:"50%", background:color, color:"#fff",
                display:"flex", alignItems:"center", justifyContent:"center",
                fontWeight:800, fontSize:18, margin:"0 auto 10px" }}>{n}</div>
              <div style={{ fontSize:24, marginBottom:8 }}>{icon}</div>
              <div style={{ fontWeight:700, fontSize:14, color:BRAND.dark, marginBottom:8 }}>{title}</div>
              <p style={{ fontSize:12, color:BRAND.subLight, lineHeight:1.5 }}>{desc}</p>
            </Card>
          </div>
        ))}
      </div>
      <Card style={{ background:BRAND.primary, border:"none", padding:"14px 20px" }}>
        <p style={{ color:"#fff", fontSize:13, margin:0, textAlign:"center" }}>
          💡 <strong>Wskazówka:</strong> Pole "Uwagi" wypełniaj tylko przy niestandardowych wymaganiach —
          każde zamówienie z uwagami wymaga zatwierdzenia przez Supervisora.
        </p>
      </Card>
    </div>
  );
}

function Slide4() {
  const objects = [
    { name:"FUP Radom 1", addr:"ul. Bolesława Chrobrego 1", used:238.60, total:400.00 },
    { name:"FUP Siedlce 2", addr:"ul. Józefa Piłsudskiego 74", used:153.05, total:1500.00 },
    { name:"FUP Warszawa 10", addr:"Al. Niepodległości 218", used:252.56, total:1200.00 },
    { name:"FUP Warszawa 116", addr:"ul. Powstańców Śląskich 126", used:274.06, total:100.00 },
    { name:"UP Ciechanów 1", addr:"ul. Grodzka 1", used:51.00, total:600.00 },
    { name:"UP Warszawa 47", addr:"ul. Józefa Lewartowskiego 5", used:25.20, total:150.00 },
  ];
  return (
    <div style={{ padding:"40px 40px 32px", minHeight:"100vh", background:BRAND.lightBg }}>
      <SlideHeader title="Kontrola limitów miesięcznych" subtitle="Zawsze wiesz ile budżetu zostało — wizualny wskaźnik przy każdym obiekcie" />
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:20 }}>
        <div style={{ display:"grid", gap:12 }}>
          {objects.map(({ name, addr, used, total }) => {
            const pct = used / total;
            const over = pct > 1;
            const barColor = over ? "#dc2626" : pct > 0.8 ? BRAND.accent : BRAND.primary;
            return (
              <Card key={name} style={{ padding:16 }}>
                <div style={{ display:"flex", justifyContent:"space-between", marginBottom:4 }}>
                  <div>
                    <div style={{ fontWeight:700, fontSize:13, color:BRAND.dark }}>{name}</div>
                    <div style={{ fontSize:11, color:BRAND.subLight }}>{addr}</div>
                  </div>
                  {over && <Badge color="#fee2e2" textColor="#dc2626" small>Przekroczony!</Badge>}
                </div>
                <ProgressBar pct={pct} color={barColor} used={used} total={total} />
              </Card>
            );
          })}
        </div>
        <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
          {[
            { color:"#16a34a", bg:"#f0fdf4", title:"Limit w normie", desc:"Zamówienie przechodzi automatycznie — status NOWE, przekazane do realizacji." },
            { color:BRAND.accent, bg:"#fff7ed", title:"Limit przekroczony", desc:"Zamówienie trafia do Supervisora z oznaczeniem OCZEKUJE NA ZATWIERDZENIE." },
            { color:"#7c3aed", bg:"#f5f3ff", title:"Zamówienie z uwagami", desc:"Każde zamówienie z uwagami zawsze czeka na zatwierdzenie — niezależnie od wartości." },
            { color:BRAND.primary, bg:"#eff6ff", title:"Dashboard na żywo", desc:"Paskowy wskaźnik przy każdym obiekcie — natychmiastowy przegląd wszystkich limitów firmy." },
          ].map(({ color, bg, title, desc }) => (
            <Card key={title} style={{ background:bg, border:`1px solid ${color}22`, padding:16 }}>
              <div style={{ display:"flex", alignItems:"flex-start", gap:12 }}>
                <div style={{ width:4, minHeight:40, background:color, borderRadius:2, flexShrink:0 }} />
                <div>
                  <div style={{ fontWeight:700, fontSize:13, color, marginBottom:4 }}>{title}</div>
                  <p style={{ fontSize:12, color:BRAND.subDark, lineHeight:1.5, margin:0 }}>{desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

function Slide5() {
  const statuses = [
    { label:"NOWE", color:"#16a34a", bg:"#f0fdf4", desc:"Złożone w limicie, bez uwag. Automatycznie przekazane do realizacji." },
    { label:"OCZEKUJE NA ZATWIERDZENIE", color:BRAND.accent, bg:"#fff7ed", desc:"Przekroczony limit lub uwagi. Czeka na decyzję Supervisora." },
    { label:"POTWIERDZONE", color:"#0d9488", bg:"#f0fdfa", desc:"Zatwierdzone. Przekazane do realizacji." },
    { label:"ANULOWANE", color:"#dc2626", bg:"#fef2f2", desc:"Odrzucone lub anulowane. Nie wlicza się do limitu." },
  ];
  const actions = [
    { color:"#16a34a", bg:"#f0fdf4", title:"Zatwierdź", icon:"✅", desc:"Zamówienie zmienia status na POTWIERDZONE i trafia do realizacji." },
    { color:BRAND.primary, bg:"#eff6ff", title:"Edytuj i zatwierdź", icon:"✏️", desc:"Zmień ilości przed zatwierdzeniem — np. dostosuj do limitu." },
    { color:"#dc2626", bg:"#fef2f2", title:"Odrzuć", icon:"❌", desc:"Zamówienie anulowane. Nie wlicza się do limitu miesięcznego." },
  ];
  return (
    <div style={{ padding:"40px 40px 32px", minHeight:"100vh", background:BRAND.lightBg }}>
      <SlideHeader title="Supervisor — zatwierdzanie zamówień" subtitle="Pełna kontrola nad budżetem firmy — jeden widok, wszystkie decyzje" />
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:20 }}>
        <div>
          <p style={{ fontWeight:700, fontSize:14, color:BRAND.dark, marginBottom:12 }}>Kiedy zamówienie wymaga zatwierdzenia?</p>
          {[
            { icon:"📊", color:BRAND.accent, title:"Przekroczony limit miesięczny", desc:"System sumuje wartość zamówień. Gdy suma przekroczy limit punktu dostawy — zamówienie czeka na Supervisora." },
            { icon:"💬", color:"#7c3aed", title:"Zamówienie zawiera uwagi", desc:"Każde zamówienie z uwagami wymaga zatwierdzenia niezależnie od wartości i limitu." },
          ].map(({ icon, color, title, desc }) => (
            <Card key={title} style={{ marginBottom:12, borderLeft:`4px solid ${color}` }}>
              <div style={{ fontWeight:700, fontSize:14, color, marginBottom:6 }}>{icon} {title}</div>
              <p style={{ fontSize:12, color:BRAND.subDark, lineHeight:1.5, margin:0 }}>{desc}</p>
            </Card>
          ))}
          <p style={{ fontWeight:700, fontSize:14, color:BRAND.dark, margin:"20px 0 12px" }}>Co może zrobić Supervisor?</p>
          {actions.map(({ color, bg, title, icon, desc }) => (
            <Card key={title} style={{ background:bg, border:`1px solid ${color}33`, marginBottom:10, padding:14 }}>
              <div style={{ display:"flex", gap:10, alignItems:"center" }}>
                <span style={{ fontSize:22 }}>{icon}</span>
                <div>
                  <div style={{ fontWeight:700, fontSize:13, color }}>{title}</div>
                  <p style={{ fontSize:12, color:BRAND.subDark, margin:0 }}>{desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div>
          <p style={{ fontWeight:700, fontSize:14, color:BRAND.dark, marginBottom:12 }}>Statusy zamówień</p>
          <div style={{ display:"flex", flexDirection:"column", gap:4 }}>
            {statuses.map(({ label, color, bg, desc }, i) => (
              <div key={label}>
                <Card style={{ background:bg, border:`1px solid ${color}33`, padding:"12px 16px" }}>
                  <Badge color={color} small>{label}</Badge>
                  <p style={{ fontSize:12, color:BRAND.subDark, margin:"6px 0 0", lineHeight:1.5 }}>{desc}</p>
                </Card>
                {i < statuses.length - 1 && (
                  <div style={{ textAlign:"center", fontSize:18, color:"#94a3b8", margin:"2px 0" }}>↓</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Slide6({ config }) {
  const features = [
    { color:BRAND.primary, title:"Ceny indywidualne", desc:"Każda firma widzi ceny ze swojej grupy cenowej — zawsze cena finalna, bez przeliczania." },
    { color:"#0d9488", title:"Filtrowanie katalogu", desc:"Wyszukiwanie po kodzie, nazwie, marce. Filtr po kategorii produktu." },
    { color:"#16a34a", title:"Produkty z kontraktu", desc:"Zamawiający widzi wyłącznie produkty przypisane do jego punktu dostawy." },
    { color:"#7c3aed", title:"Pełny katalog — Supervisor", desc:"Supervisor widzi wszystkie produkty niezależnie od kontraktów." },
    { color:BRAND.accent, title:`${config.productCount} produktów`, desc:"Bogaty asortyment podzielony na kategorie — chemia, higiena, sprzęt i inne." },
  ];
  const categories = [
    { name:"Chemia Gospodarcza", count:13, color:"#0d9488" },
    { name:"Chemia PRO — Sanitariaty", count:3, color:BRAND.primary },
    { name:"Higiena — Papiery", count:3, color:"#7c3aed" },
    { name:"Mydła", count:4, color:"#db2777" },
    { name:"Sprzęt do zamiatania", count:2, color:BRAND.accent },
    { name:"Sprzęt — Wózki", count:1, color:"#0891b2" },
    { name:"Higiena — Ręczniki", count:3, color:"#16a34a" },
    { name:"i inne kategorie...", count:0, color:"#94a3b8" },
  ];
  const max = 13;
  return (
    <div style={{ padding:"40px 40px 32px", minHeight:"100vh", background:BRAND.lightBg }}>
      <SlideHeader title="Katalog produktów" subtitle="Zawsze aktualne ceny dopasowane do Twojej firmy — bez zbędnych negocjacji" />
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:20 }}>
        <div style={{ display:"grid", gap:10 }}>
          {features.map(({ color, title, desc }) => (
            <Card key={title} style={{ padding:14, borderLeft:`4px solid ${color}` }}>
              <div style={{ fontWeight:700, fontSize:13, color, marginBottom:4 }}>{title}</div>
              <p style={{ fontSize:12, color:BRAND.subDark, margin:0, lineHeight:1.5 }}>{desc}</p>
            </Card>
          ))}
        </div>
        <div>
          <Card>
            <p style={{ fontWeight:700, fontSize:14, color:BRAND.dark, marginBottom:16 }}>Kategorie produktów</p>
            {categories.map(({ name, count, color }) => (
              <div key={name} style={{ marginBottom:10 }}>
                <div style={{ display:"flex", justifyContent:"space-between", marginBottom:4 }}>
                  <span style={{ fontSize:12, fontWeight:600, color:BRAND.subDark }}>{name}</span>
                  {count > 0 && <span style={{ fontSize:11, color:BRAND.subLight }}>{count} prod.</span>}
                </div>
                {count > 0 && (
                  <div style={{ height:6, background:"#e2e8f0", borderRadius:3, overflow:"hidden" }}>
                    <div className="bar-anim" style={{
                      "--bar-w":`${(count/max)*100}%`, width:`${(count/max)*100}%`,
                      height:"100%", background:color, borderRadius:3,
                    }} />
                  </div>
                )}
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}

function Slide7({ config }) {
  const { doneFeatures, soonFeatures, plannedFeatures } = config;
  return (
    <div style={{ padding:"40px 40px 28px", minHeight:"100vh", background:BRAND.lightBg, overflowY:"auto" }}>
      <SlideHeader title="Co działa i co nadchodzi?" subtitle="Platforma gotowa do pracy — i stale rozwijana" />
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:20 }}>
        <div>
          <p style={{ fontWeight:700, fontSize:14, color:"#16a34a", marginBottom:12 }}>✅ Już wdrożone ({doneFeatures.length} funkcji)</p>
          <Card style={{ padding:16 }}>
            {doneFeatures.map(f => (
              <div key={f} className="feature-item" style={{ display:"flex", gap:10, marginBottom:10, alignItems:"flex-start" }}>
                <div style={{ width:18, height:18, borderRadius:"50%", background:"#16a34a",
                  display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, marginTop:1 }}>
                  <span style={{ color:"#fff", fontSize:10, fontWeight:800 }}>✓</span>
                </div>
                <span style={{ fontSize:12.5, color:BRAND.subDark, lineHeight:1.5 }}>{f}</span>
              </div>
            ))}
          </Card>
        </div>
        <div>
          <p style={{ fontWeight:700, fontSize:14, color:BRAND.accent, marginBottom:12 }}>🔜 Wkrótce</p>
          {soonFeatures.map(({ icon, title, desc }) => (
            <Card key={title} style={{ marginBottom:12, borderTop:`3px solid ${BRAND.accent}` }}>
              <div style={{ display:"flex", gap:10, alignItems:"flex-start" }}>
                <span style={{ fontSize:24 }}>{icon}</span>
                <div>
                  <div style={{ fontWeight:700, fontSize:14, color:BRAND.dark, marginBottom:4 }}>{title}</div>
                  <p style={{ fontSize:12, color:BRAND.subDark, margin:0, lineHeight:1.5 }}>{desc}</p>
                </div>
              </div>
            </Card>
          ))}
          {plannedFeatures.length > 0 && (
            <>
              <p style={{ fontWeight:700, fontSize:14, color:BRAND.subLight, margin:"16px 0 12px" }}>📅 Planowane</p>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }}>
                {plannedFeatures.map(({ icon, title, desc, color = BRAND.primary }) => (
                  <Card key={title} style={{ padding:12, borderTop:`2px solid ${color}` }}>
                    <div style={{ fontSize:20, marginBottom:4 }}>{icon}</div>
                    <div style={{ fontWeight:700, fontSize:12, color:BRAND.dark, marginBottom:4 }}>{title}</div>
                    <p style={{ fontSize:11, color:BRAND.subLight, margin:0, lineHeight:1.4 }}>{desc}</p>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function Slide8({ config }) {
  return (
    <div style={{ minHeight:"100vh", background:BRAND.dark, display:"flex", flexDirection:"column",
      alignItems:"center", justifyContent:"center", padding:"40px", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", right:-80, bottom:-80, width:400, height:400,
        borderRadius:"50%", background:"rgba(245,124,0,0.1)" }} />
      <div style={{ position:"absolute", left:-60, top:-60, width:300, height:300,
        borderRadius:"50%", background:"rgba(10,77,181,0.15)" }} />
      <div style={{ position:"relative", zIndex:1, textAlign:"center", maxWidth:680 }}>
        <div style={{ display:"flex", justifyContent:"center", alignItems:"baseline", gap:4 }}>
          {config.platformName.split(" ").map((w, i) => (
            <span key={i} style={{ fontWeight:800, fontSize:28, color: i === 0 ? BRAND.white : BRAND.accent }}>{w}</span>
          ))}
        </div>
        <div style={{ height:3, background:BRAND.grad, borderRadius:2, margin:"16px auto", maxWidth:200 }} />
        <h2 style={{ fontSize:32, fontWeight:800, color:BRAND.white, margin:"16px 0 8px" }}>
          Gotowy na szybsze zamawianie?
        </h2>
        <p style={{ fontSize:15, color:"#93c5fd", marginBottom:36 }}>
          {config.platformName} — jedna platforma dla całego łańcucha zamówień.
        </p>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:16, marginBottom:32 }}>
          {[
            { role:"Zamawiający", color:BRAND.primary, icon:"🛒", action:`Złóż pierwsze zamówienie na ${config.websiteUrl}` },
            { role:"Supervisor", color:"#0d9488", icon:"👁️", action:"Zatwierdź oczekujące zamówienia w kilka kliknięć" },
            { role:"Administrator", color:BRAND.accent, icon:"⚙️", action:"Skonfiguruj klientów, produkty i cenniki w panelu admina" },
          ].map(({ role, color, icon, action }) => (
            <div key={role} style={{ background:color, borderRadius:12, padding:"20px 16px", color:"#fff" }}>
              <div style={{ fontSize:28, marginBottom:8 }}>{icon}</div>
              <div style={{ fontWeight:800, fontSize:16, marginBottom:8 }}>{role}</div>
              <div style={{ width:"100%", height:1, background:"rgba(255,255,255,0.3)", margin:"8px 0" }} />
              <p style={{ fontSize:12, opacity:0.9, lineHeight:1.5, margin:0 }}>{action}</p>
            </div>
          ))}
        </div>
        <div style={{ background:"rgba(10,77,181,0.3)", border:"1px solid rgba(10,77,181,0.5)",
          borderRadius:12, padding:"14px 24px", display:"inline-block" }}>
          <span style={{ fontWeight:800, fontSize:18, color:BRAND.accent }}>{config.websiteUrl}</span>
        </div>
        <p style={{ marginTop:20, fontSize:12, color:BRAND.subLight }}>
          {config.companyName} • Zamawiaj szybciej, zamawiaj lepiej.
        </p>
      </div>
    </div>
  );
}

// ─── SLIDE 10: INTEGRACJA Z SYSTEMEM BHF ─────────────────────────
export function Slide10() {
  const steps = [
    { label: "NOWE / POTWIERDZONE", icon: "📋", color: "#16a34a", bg: "#f0fdf4" },
    { label: "Admin eksportuje XML", icon: "⬇️", color: BRAND.primary, bg: "#eff6ff", action: true },
    { label: "W REALIZACJI", icon: "🔄", color: "#0d9488", bg: "#f0fdfa" },
    { label: "BHF realizuje dostawę", icon: "📦", color: BRAND.accent, bg: "#fff7ed" },
  ];

  const xmlFields = [
    { section: "Nagłówek", fields: ["Numer zamówienia", "Data złożenia", "Oczekiwana data dostawy", "Uwagi do zamówienia"] },
    { section: "Strony", fields: ["Kupujący: ILN + NIP", "Sprzedawca: NIP BHF"] },
    { section: "Pozycje", fields: ["Kod produktu", "Ilość + jednostka", "Cena netto", "Nazwa produktu"] },
    { section: "Podsumowanie", fields: ["Liczba pozycji", "Łączna wartość netto"] },
  ];

  return (
    <div style={{ padding: "40px 40px 28px", minHeight: "100vh", background: BRAND.lightBg }}>
      <SlideHeader
        title="Integracja z systemem BHF"
        subtitle="Zatwierdzone zamówienia eksportowane do XML — status zmienia się automatycznie"
      />

      {/* STATUS FLOW */}
      <div style={{ display: "flex", alignItems: "center", gap: 0, marginBottom: 24 }}>
        {steps.map(({ label, icon, color, bg, action }, i) => (
          <div key={label} style={{ display: "flex", alignItems: "center", flex: 1 }}>
            <div style={{
              flex: 1, background: bg, border: `2px solid ${color}${action ? "ff" : "44"}`,
              borderRadius: 10, padding: "10px 12px", textAlign: "center",
              ...(action ? { boxShadow: `0 0 0 3px ${color}22` } : {}),
            }}>
              <div style={{ fontSize: 20, marginBottom: 4 }}>{icon}</div>
              <div style={{ fontSize: 11, fontWeight: 700, color, lineHeight: 1.3 }}>{label}</div>
            </div>
            {i < steps.length - 1 && (
              <div style={{ fontSize: 18, color: "#94a3b8", flexShrink: 0, padding: "0 6px" }}>→</div>
            )}
          </div>
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>

        {/* LEFT: Export options */}
        <div>
          <p style={{ fontWeight: 700, fontSize: 14, color: BRAND.dark, marginBottom: 12 }}>Zarządzanie eksportem</p>
          {[
            {
              icon: "🔍", color: BRAND.primary, bg: "#eff6ff",
              title: "Filtrowanie zamówień",
              desc: "Admin filtruje listę po kliencie, statusie lub oddziale BHF — widzi tylko to, co go dotyczy.",
            },
            {
              icon: "📄", color: "#0d9488", bg: "#f0fdfa",
              title: "Eksport pojedynczy",
              desc: "Jedno zamówienie → jeden plik XML gotowy do importu. Status automatycznie zmienia się na W REALIZACJI.",
            },
            {
              icon: "📦", color: "#7c3aed", bg: "#f5f3ff",
              title: "Eksport zbiorczy",
              desc: "Zaznacz wiele zamówień → pobierz archiwum ZIP z plikami XML. Wszystkie statusy aktualizowane jednocześnie.",
            },
            {
              icon: "📊", color: BRAND.accent, bg: "#fff7ed",
              title: "Historia i audyt",
              desc: "Każde zamówienie W REALIZACJI pozostaje w systemie z pełną historią — numer, data, klient, pozycje, wartość.",
            },
          ].map(({ icon, color, bg, title, desc }) => (
            <Card key={title} style={{ marginBottom: 10, padding: 14, background: bg, border: `1px solid ${color}33` }}>
              <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ fontSize: 20, flexShrink: 0 }}>{icon}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 13, color, marginBottom: 4 }}>{title}</div>
                  <p style={{ fontSize: 12, color: BRAND.subDark, margin: 0, lineHeight: 1.5 }}>{desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* RIGHT: XML structure */}
        <div>
          <p style={{ fontWeight: 700, fontSize: 14, color: BRAND.dark, marginBottom: 12 }}>Struktura pliku XML</p>
          <Card hover={false} style={{ padding: 0, overflow: "hidden" }}>
            <div style={{ background: BRAND.dark, padding: "10px 16px", display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 14 }}>📄</span>
              <span style={{ fontWeight: 700, fontSize: 12, color: "#93c5fd", fontFamily: "monospace" }}>zamowienie-{"{id}"}.xml</span>
            </div>
            <div style={{ padding: "12px 16px" }}>
              {xmlFields.map(({ section, fields }) => (
                <div key={section} style={{ marginBottom: 12 }}>
                  <div style={{ fontSize: 11, fontWeight: 800, color: BRAND.primary, letterSpacing: 0.5, textTransform: "uppercase", marginBottom: 6 }}>
                    {section}
                  </div>
                  {fields.map(f => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                      <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#cbd5e1", flexShrink: 0 }} />
                      <span style={{ fontSize: 12, color: BRAND.subDark, fontFamily: "monospace" }}>{f}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </Card>
          <Card hover={false} style={{ marginTop: 12, background: BRAND.dark, border: "none", padding: "12px 16px" }}>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <span style={{ fontSize: 18 }}>🔗</span>
              <p style={{ fontSize: 12, color: "#fff", margin: 0, lineHeight: 1.5 }}>
                Format <strong style={{ color: "#93c5fd" }}>EDI-XML</strong> — gotowy do importu w systemach WMS, ERP lub arkuszach kalkulacyjnych.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

// ─── SLIDE 9: PRZEPŁYW ZAMÓWIENIA ────────────────────────────────
export function Slide9() {
  const vline = (color = "#94a3b8", h = 14) => (
    <div style={{ width: 2, height: h, background: color, margin: "0 auto" }} />
  );
  const arrowTip = (color = "#94a3b8") => (
    <div style={{ textAlign: "center", fontSize: 12, color, lineHeight: 1, marginTop: -2 }}>▼</div>
  );

  return (
    <div style={{ padding: "40px 40px 28px", minHeight: "100vh", background: BRAND.lightBg }}>
      <SlideHeader
        title="Przepływ zamówienia"
        subtitle="Automatyczna weryfikacja — system sam decyduje o ścieżce"
      />

      {/* START */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{
          background: BRAND.dark, borderRadius: 14, padding: "14px 40px",
          display: "flex", alignItems: "center", gap: 12,
          border: "2px solid rgba(10,77,181,0.3)",
        }}>
          <span style={{ fontSize: 28 }}>🛒</span>
          <div>
            <div style={{ fontWeight: 800, fontSize: 16, color: "#fff" }}>Kupujący składa zamówienie</div>
            <div style={{ fontSize: 12, color: BRAND.subLight, marginTop: 2 }}>Przez platformę BHF B2B</div>
          </div>
        </div>
      </div>

      {vline("#94a3b8", 12)}
      {arrowTip()}

      {/* SYSTEM CHECK */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{
          background: BRAND.white, borderRadius: 12, padding: "12px 32px",
          border: `2px solid ${BRAND.primary}`, textAlign: "center",
          boxShadow: "0 2px 12px rgba(10,77,181,0.1)",
        }}>
          <div style={{ fontSize: 20, marginBottom: 4 }}>⚙️</div>
          <div style={{ fontWeight: 800, fontSize: 14, color: BRAND.dark }}>System weryfikuje automatycznie</div>
          <div style={{ display: "flex", gap: 10, marginTop: 8, justifyContent: "center" }}>
            {["Czy zamówienie ma uwagi?", "Czy limit miesięczny przekroczony?"].map(q => (
              <span key={q} style={{
                fontSize: 11, color: BRAND.subLight,
                background: "#f1f5f9", borderRadius: 10, padding: "2px 10px",
              }}>{q}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Y-CONNECTOR */}
      <div style={{ position: "relative", height: 36 }}>
        <div style={{ position: "absolute", left: "50%", top: 0, width: 2, height: 16, background: "#94a3b8", transform: "translateX(-50%)" }} />
        <div style={{ position: "absolute", left: "25%", top: 16, right: "25%", height: 2, background: "#94a3b8" }} />
        <div style={{ position: "absolute", left: "25%", top: 16, width: 2, height: 20, background: "#16a34a", transform: "translateX(-50%)" }} />
        <div style={{ position: "absolute", right: "25%", top: 16, width: 2, height: 20, background: BRAND.accent, transform: "translateX(50%)" }} />
      </div>

      {/* TWO COLUMNS */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>

        {/* AUTO PATH */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{
            background: "#f0fdf4", border: "2px solid #16a34a", borderRadius: 20,
            padding: "5px 16px", fontSize: 12, fontWeight: 700, color: "#16a34a",
          }}>✅ NIE — brak uwag, limit OK</div>

          {vline("#16a34a")}
          {arrowTip("#16a34a")}

          <div style={{ width: "100%", background: "#16a34a", borderRadius: 12, padding: 14, textAlign: "center" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.65)", letterSpacing: 1, marginBottom: 4 }}>STATUS</div>
            <div style={{ fontSize: 22, fontWeight: 900, color: "#fff", letterSpacing: 1 }}>NOWE</div>
          </div>

          {vline("#16a34a")}
          {arrowTip("#16a34a")}

          <Card hover={false} style={{ width: "100%", textAlign: "center", border: "2px solid #16a34a22", padding: "18px 20px" }}>
            <div style={{ fontSize: 28 }}>📦</div>
            <div style={{ fontWeight: 700, fontSize: 14, color: BRAND.dark, marginTop: 8 }}>Przekazane do realizacji</div>
            <div style={{ fontSize: 11, color: BRAND.subLight, marginTop: 4 }}>Automatycznie — brak akcji wymagany</div>
          </Card>
        </div>

        {/* SUPERVISOR PATH */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{
            background: "#fff7ed", border: `2px solid ${BRAND.accent}`, borderRadius: 20,
            padding: "5px 16px", fontSize: 12, fontWeight: 700, color: BRAND.accent,
          }}>⚠️ TAK — uwagi lub limit przekroczony</div>

          {vline(BRAND.accent)}
          {arrowTip(BRAND.accent)}

          <div style={{ width: "100%", background: BRAND.accent, borderRadius: 12, padding: 14, textAlign: "center" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.65)", letterSpacing: 1, marginBottom: 4 }}>STATUS</div>
            <div style={{ fontSize: 15, fontWeight: 900, color: "#fff", letterSpacing: 0.5 }}>OCZEKUJE NA ZATWIERDZENIE</div>
          </div>

          {vline(BRAND.accent)}
          {arrowTip(BRAND.accent)}

          <Card hover={false} style={{ width: "100%", textAlign: "center", border: `2px solid ${BRAND.accent}33`, padding: 12 }}>
            <div style={{ fontSize: 22 }}>👁️</div>
            <div style={{ fontWeight: 800, fontSize: 14, color: BRAND.dark, marginTop: 6 }}>Supervisor decyduje</div>
          </Card>

          {/* 3-WAY SPLIT */}
          <div style={{ position: "relative", width: "100%", height: 28 }}>
            <div style={{ position: "absolute", left: "50%", top: 0, width: 2, height: 12, background: "#94a3b8", transform: "translateX(-50%)" }} />
            <div style={{ position: "absolute", left: "16.5%", top: 12, right: "16.5%", height: 2, background: "#94a3b8" }} />
            <div style={{ position: "absolute", left: "16.5%", top: 12, width: 2, height: 16, background: "#16a34a", transform: "translateX(-50%)" }} />
            <div style={{ position: "absolute", left: "50%", top: 12, width: 2, height: 16, background: BRAND.primary, transform: "translateX(-50%)" }} />
            <div style={{ position: "absolute", right: "16.5%", top: 12, width: 2, height: 16, background: "#dc2626", transform: "translateX(50%)" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, width: "100%" }}>
            {[
              { icon: "✅", label: "Zatwierdź", result: "POTWIERDZONE", color: "#16a34a", bg: "#f0fdf4" },
              { icon: "✏️", label: "Edytuj", result: "POTWIERDZONE", color: BRAND.primary, bg: "#eff6ff" },
              { icon: "❌", label: "Odrzuć", result: "ANULOWANE", color: "#dc2626", bg: "#fef2f2" },
            ].map(({ icon, label, result, color, bg }) => (
              <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                <div style={{ background: bg, border: `1px solid ${color}33`, borderRadius: 10, padding: "8px 4px", textAlign: "center", width: "100%" }}>
                  <div style={{ fontSize: 18 }}>{icon}</div>
                  <div style={{ fontSize: 11, fontWeight: 700, color, marginTop: 4 }}>{label}</div>
                </div>
                <div style={{ width: 2, height: 8, background: color }} />
                <div style={{ background: color, borderRadius: 8, padding: "4px 6px", textAlign: "center", width: "100%" }}>
                  <div style={{ fontSize: 9, fontWeight: 800, color: "#fff", letterSpacing: 0.3 }}>{result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* FOOTER */}
      <div style={{ marginTop: 16 }}>
        <Card hover={false} style={{ background: BRAND.dark, border: "none", padding: "10px 20px" }}>
          <p style={{ color: "#fff", fontSize: 12, margin: 0, textAlign: "center" }}>
            📋 Po zatwierdzeniu przez Supervisora zamówienie zmienia status na <strong>POTWIERDZONE</strong> i trafia do eksportu XML → <strong>W REALIZACJI</strong>
          </p>
        </Card>
      </div>
    </div>
  );
}

// ─── SLIDE 11: SYSTEM ZGŁOSZEŃ ───────────────────────────────────
export function Slide11() {
  const flow = [
    { label: "Zamawiający tworzy zgłoszenie", icon: "💬", color: BRAND.primary, bg: "#eff6ff" },
    { label: "Rozmowa w zespole firmy", icon: "👥", color: "#7c3aed", bg: "#f5f3ff" },
    { label: "Eskalacja do BHF", icon: "🚀", color: BRAND.accent, bg: "#fff7ed", action: true },
    { label: "Rozwiązane", icon: "✅", color: "#16a34a", bg: "#f0fdf4" },
  ];

  const categories = [
    { icon: "📦", color: "#dc2626", title: "Reklamacja", desc: "Problem z dostarczonym towarem — uszkodzenie, niezgodność, braki." },
    { icon: "❓", color: BRAND.primary, title: "Pytanie", desc: "Pytanie o produkt, zamówienie, dostawę lub działanie platformy." },
    { icon: "🚚", color: BRAND.accent, title: "Problem z dostawą", desc: "Brak dostawy, opóźnienie, błędny adres lub termin." },
    { icon: "📝", color: "#64748B", title: "Inne", desc: "Wszystko, co nie pasuje do powyższych kategorii." },
  ];

  const features = [
    { icon: "🔗", color: "#0d9488", title: "Powiązanie z zamówieniem", desc: "Zgłoszenie można od razu połączyć z konkretnym zamówieniem — kontekst widoczny od razu." },
    { icon: "🧵", color: "#7c3aed", title: "Wątek odpowiedzi", desc: "Czat — każda strona dopisuje kolejne wiadomości, pełna historia rozmowy." },
    { icon: "🔁", color: BRAND.primary, title: "Status: otwarte / rozwiązane", desc: "Po rozwiązaniu można ponownie otworzyć zgłoszenie, jeśli problem nie został w pełni załatwiony." },
    { icon: "📣", color: BRAND.accent, title: "Eskalacja do BHF", desc: "Koordynator lub Supervisor przekazuje zgłoszenie zespołowi BHF, gdy zespół firmy nie jest w stanie pomóc." },
  ];

  return (
    <div style={{ padding: "40px 40px 28px", minHeight: "100vh", background: BRAND.lightBg }}>
      <SlideHeader title="System zgłoszeń" subtitle="Pytanie, reklamacja lub problem z dostawą — bezpośrednio z platformy, z eskalacją do BHF" />

      {/* FLOW */}
      <div style={{ display: "flex", alignItems: "center", gap: 0, marginBottom: 24 }}>
        {flow.map(({ label, icon, color, bg, action }, i) => (
          <div key={label} style={{ display: "flex", alignItems: "center", flex: 1 }}>
            <div style={{
              flex: 1, background: bg, border: `2px solid ${color}${action ? "ff" : "44"}`,
              borderRadius: 10, padding: "10px 12px", textAlign: "center",
              ...(action ? { boxShadow: `0 0 0 3px ${color}22` } : {}),
            }}>
              <div style={{ fontSize: 20, marginBottom: 4 }}>{icon}</div>
              <div style={{ fontSize: 11, fontWeight: 700, color, lineHeight: 1.3 }}>{label}</div>
            </div>
            {i < flow.length - 1 && (
              <div style={{ fontSize: 18, color: "#94a3b8", flexShrink: 0, padding: "0 6px" }}>→</div>
            )}
          </div>
        ))}
      </div>

      {/* TWO COLUMNS */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        <div>
          <p style={{ fontWeight: 700, fontSize: 14, color: BRAND.dark, marginBottom: 12 }}>Kategorie zgłoszeń</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {categories.map(({ icon, color, title, desc }) => (
              <Card key={title} style={{ borderTop: `3px solid ${color}`, padding: 14 }}>
                <div style={{ fontSize: 22, marginBottom: 6 }}>{icon}</div>
                <div style={{ fontWeight: 700, fontSize: 13, color: BRAND.dark, marginBottom: 4 }}>{title}</div>
                <p style={{ fontSize: 11.5, color: BRAND.subLight, margin: 0, lineHeight: 1.5 }}>{desc}</p>
              </Card>
            ))}
          </div>
        </div>
        <div>
          <p style={{ fontWeight: 700, fontSize: 14, color: BRAND.dark, marginBottom: 12 }}>Jak to działa?</p>
          {features.map(({ icon, color, title, desc }) => (
            <Card key={title} style={{ marginBottom: 10, padding: 14, borderLeft: `4px solid ${color}` }}>
              <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ fontSize: 20, flexShrink: 0 }}>{icon}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 13, color, marginBottom: 4 }}>{title}</div>
                  <p style={{ fontSize: 12, color: BRAND.subDark, margin: 0, lineHeight: 1.5 }}>{desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── SLIDE 12: KOORDYNATOR — PROGI AKCEPTACJI ────────────────────
export function Slide12() {
  const modes = [
    { icon: "🔒", color: "#dc2626", bg: "#fef2f2", title: "Tylko Supervisor", desc: "Koordynator widzi zamówienia oczekujące, ale decyzję podejmuje wyłącznie Supervisor." },
    { icon: "📐", color: BRAND.accent, bg: "#fff7ed", title: "Wg progów procentowych", desc: "Koordynator zatwierdza, jeśli przekroczenie limitu nie wykracza poza skonfigurowany próg." },
    { icon: "🔓", color: "#16a34a", bg: "#f0fdf4", title: "Bez ograniczeń", desc: "Koordynator zatwierdza każde zamówienie przekraczające limit — tak jak Supervisor." },
  ];

  const tiers = [
    { range: "0 – 100 zł", pct: "50%", example: "limit 80 zł → akceptowalne do 120 zł" },
    { range: "100 – 1000 zł", pct: "15%", example: "limit 500 zł → akceptowalne do 575 zł" },
    { range: "powyżej 1000 zł", pct: "10%", example: "limit 2000 zł → akceptowalne do 2200 zł" },
  ];

  return (
    <div style={{ padding: "40px 40px 28px", minHeight: "100vh", background: BRAND.lightBg }}>
      <SlideHeader title="Koordynator — progi akceptacji ponad limit" subtitle="Tryb zatwierdzania konfigurowany per kontrakt — pełna kontrola nad tym, co koordynator może zrobić samodzielnie" />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 24 }}>
        {modes.map(({ icon, color, bg, title, desc }) => (
          <Card key={title} style={{ background: bg, border: `1px solid ${color}33`, padding: 18 }}>
            <div style={{ fontSize: 28, marginBottom: 8 }}>{icon}</div>
            <div style={{ fontWeight: 800, fontSize: 15, color, marginBottom: 6 }}>{title}</div>
            <p style={{ fontSize: 12.5, color: BRAND.subDark, margin: 0, lineHeight: 1.5 }}>{desc}</p>
          </Card>
        ))}
      </div>

      <p style={{ fontWeight: 700, fontSize: 14, color: BRAND.dark, marginBottom: 12 }}>
        Przykładowe progi dla trybu „Wg progów procentowych" (konfigurowalne per kontrakt)
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 20 }}>
        {tiers.map(({ range, pct, example }) => (
          <Card key={range} style={{ borderTop: `4px solid ${BRAND.primary}`, textAlign: "center", padding: 18 }}>
            <div style={{ fontSize: 13, color: BRAND.subLight, marginBottom: 6 }}>{range}</div>
            <div style={{ fontSize: 28, fontWeight: 900, color: BRAND.primary, marginBottom: 8 }}>+{pct}</div>
            <p style={{ fontSize: 12, color: BRAND.subDark, margin: 0, lineHeight: 1.5 }}>{example}</p>
          </Card>
        ))}
      </div>

      <Card style={{ background: BRAND.dark, border: "none", padding: "14px 20px" }}>
        <p style={{ color: "#fff", fontSize: 13, margin: 0, textAlign: "center" }}>
          💬 <strong>Zamówienie z uwagami</strong> zawsze trafia do Supervisora — niezależnie od trybu zatwierdzania koordynatora.
        </p>
      </Card>
    </div>
  );
}

// ─── SLIDE 13: SZABLONY ZAMÓWIEŃ I TYPY ZAMÓWIEŃ ─────────────────
export function Slide13() {
  const templateFeatures = [
    { icon: "💾", color: BRAND.primary, title: "Zapisz zestaw produktów", desc: "Dowolna liczba szablonów per punkt dostawy — np. „Standardowe zamówienie miesięczne”." },
    { icon: "✏️", color: "#0d9488", title: "Edytuj w każdej chwili", desc: "Dodawaj, usuwaj i zmieniaj ilości produktów w szablonie bez wpływu na już złożone zamówienia." },
    { icon: "📥", color: "#7c3aed", title: "Import / eksport XLSX", desc: "Pobierz arkusz z produktami, wypełnij ilości offline i zaimportuj całą listę naraz." },
    { icon: "🔘", color: BRAND.accent, title: "Aktywuj / dezaktywuj", desc: "Tymczasowo wyłącz szablon bez usuwania — np. na czas przerwy w dostawach." },
  ];

  const orderTypes = [
    { title: "Cykliczne", icon: "🔁", color: BRAND.primary, freq: "1× w miesiącu", desc: "Główne, regularne zamówienie punktu dostawy. System pozwala złożyć tylko jedno cykliczne zamówienie w danym miesiącu." },
    { title: "Domówienie", icon: "➕", color: BRAND.accent, freq: "bez limitu", desc: "Dodatkowe zamówienia poza cyklem — pilne potrzeby, zapomniane produkty, nadwyżki." },
  ];

  return (
    <div style={{ padding: "40px 40px 28px", minHeight: "100vh", background: BRAND.lightBg }}>
      <SlideHeader title="Szablony zamówień i typy zamówień" subtitle="Przygotuj listę raz — składaj zamówienia szybciej każdego miesiąca" />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        <div>
          <p style={{ fontWeight: 700, fontSize: 14, color: BRAND.dark, marginBottom: 12 }}>📋 Szablony zamówień</p>
          {templateFeatures.map(({ icon, color, title, desc }) => (
            <Card key={title} style={{ marginBottom: 10, padding: 14, borderLeft: `4px solid ${color}` }}>
              <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ fontSize: 20, flexShrink: 0 }}>{icon}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 13, color, marginBottom: 4 }}>{title}</div>
                  <p style={{ fontSize: 12, color: BRAND.subDark, margin: 0, lineHeight: 1.5 }}>{desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div>
          <p style={{ fontWeight: 700, fontSize: 14, color: BRAND.dark, marginBottom: 12 }}>🔁 Typ zamówienia — osobne śledzenie dostaw</p>
          {orderTypes.map(({ title, icon, color, freq, desc }) => (
            <Card key={title} style={{ marginBottom: 14, borderTop: `4px solid ${color}`, padding: 0, overflow: "hidden" }}>
              <div style={{ background: color, padding: "16px 20px", color: "#fff", display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: 28 }}>{icon}</span>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 17 }}>{title}</div>
                  <div style={{ fontSize: 12, opacity: 0.9 }}>{freq}</div>
                </div>
              </div>
              <div style={{ padding: "14px 20px" }}>
                <p style={{ fontSize: 13, color: BRAND.subDark, margin: 0, lineHeight: 1.5 }}>{desc}</p>
              </div>
            </Card>
          ))}
          <Card style={{ background: "#eff6ff", border: `1px solid ${BRAND.primary}22`, padding: 14 }}>
            <p style={{ fontSize: 12, color: BRAND.subDark, margin: 0, lineHeight: 1.5 }}>
              📜 Historia zamówień filtrowana po typie — szybko sprawdzisz, czy zamówienie cykliczne na dany miesiąc zostało już złożone.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}

// ─── SLIDE 14: RAPORTY ZUŻYCIA ───────────────────────────────────
export function Slide14() {
  const summary = [
    { icon: "📅", color: BRAND.primary, title: "Zakres dat", desc: "Domyślnie bieżący miesiąc — dowolny zakres „od – do”." },
    { icon: "🎯", color: "#7c3aed", title: "Zakres punktów", desc: "Wszystkie punkty, jeden kontrakt albo wybrane punkty dostawy." },
    { icon: "💰", color: "#16a34a", title: "Podsumowanie", desc: "Łączna wartość netto i liczba zamówień dla wybranego zakresu." },
  ];

  const details = [
    { icon: "📦", color: BRAND.accent, title: "Rozbicie na produkty", desc: "Dla każdego punktu — kod, nazwa, ilość i wartość zamówionych produktów." },
    { icon: "📊", color: "#0d9488", title: "Wykresy TOP 10", desc: "Wizualne porównanie punktów lub produktów o największej wartości." },
    { icon: "🖨️", color: BRAND.primary, title: "Druk / PDF", desc: "Każdy raport można wydrukować lub zapisać jako PDF do archiwum." },
  ];

  return (
    <div style={{ padding: "40px 40px 28px", minHeight: "100vh", background: BRAND.lightBg }}>
      <SlideHeader title="Raporty zużycia" subtitle="Supervisor — pełny obraz wydatków firmy, z podziałem na punkty i produkty" />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        <div>
          <p style={{ fontWeight: 700, fontSize: 14, color: BRAND.dark, marginBottom: 12 }}>Podsumowanie — wszystkie punkty</p>
          {summary.map(({ icon, color, title, desc }) => (
            <Card key={title} style={{ marginBottom: 10, padding: 14, borderLeft: `4px solid ${color}` }}>
              <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ fontSize: 20, flexShrink: 0 }}>{icon}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 13, color, marginBottom: 4 }}>{title}</div>
                  <p style={{ fontSize: 12, color: BRAND.subDark, margin: 0, lineHeight: 1.5 }}>{desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div>
          <p style={{ fontWeight: 700, fontSize: 14, color: BRAND.dark, marginBottom: 12 }}>Szczegóły per punkt dostawy</p>
          {details.map(({ icon, color, title, desc }) => (
            <Card key={title} style={{ marginBottom: 10, padding: 14, borderLeft: `4px solid ${color}` }}>
              <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ fontSize: 20, flexShrink: 0 }}>{icon}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 13, color, marginBottom: 4 }}>{title}</div>
                  <p style={{ fontSize: 12, color: BRAND.subDark, margin: 0, lineHeight: 1.5 }}>{desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Card style={{ marginTop: 4, background: BRAND.primary, border: "none", padding: "14px 20px" }}>
        <p style={{ color: "#fff", fontSize: 13, margin: 0, textAlign: "center" }}>
          📈 Dostępne w portalu pod <strong>„Raporty”</strong> — widoczne dla Supervisora, dla pełnego nadzoru nad budżetem firmy.
        </p>
      </Card>
    </div>
  );
}

// ─── EXPORTS ──────────────────────────────────────────────────────
export { Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8 };
