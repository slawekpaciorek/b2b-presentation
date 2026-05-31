import { Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9 } from "./Slides.jsx";

export const globalStyle = `
  .slide { animation: fadeIn 0.5s ease; }
  @keyframes fadeIn { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideInLeft { from { opacity:0; transform:translateX(-30px); } to { opacity:1; transform:translateX(0); } }
  @keyframes slideInUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
  @keyframes barFill { from { width:0; } to { width:var(--bar-w); } }
  .card-hover { transition:transform 0.2s, box-shadow 0.2s; cursor:default; }
  .card-hover:hover { transform:translateY(-3px); box-shadow:0 8px 24px rgba(10,77,181,0.15); }
  .step-card { animation:slideInUp 0.5s ease both; }
  .step-card:nth-child(1){animation-delay:0.1s} .step-card:nth-child(2){animation-delay:0.2s}
  .step-card:nth-child(3){animation-delay:0.3s} .step-card:nth-child(4){animation-delay:0.4s}
  .step-card:nth-child(5){animation-delay:0.5s}
  .feature-item { animation:slideInLeft 0.4s ease both; }
  .bar-anim { animation:barFill 1.2s ease both; }
`;

export const SLIDES = [
  { id: 1, label: "Start",          Component: Slide1 },
  { id: 2, label: "Dla kogo?",      Component: Slide2 },
  { id: 3, label: "Jak zamówić?",   Component: Slide3 },
  { id: 9, label: "Przepływ",       Component: Slide9 },
  { id: 4, label: "Limity",         Component: Slide4 },
  { id: 5, label: "Supervisor",     Component: Slide5 },
  { id: 6, label: "Katalog",        Component: Slide6 },
  { id: 7, label: "Roadmapa",       Component: Slide7 },
  { id: 8, label: "Start już dziś", Component: Slide8 },
];
