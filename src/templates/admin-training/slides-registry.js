import { Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9, Slide10, Slide11, Slide12 } from "./Slides.jsx";

export const globalStyle = `
  .slide { animation: fadeIn 0.45s ease; }
  @keyframes fadeIn { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
  .card-hover { transition: transform 0.18s, box-shadow 0.18s; cursor: default; }
  .card-hover:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(10,77,181,0.12); }
`;

export const SLIDES = [
  { id: 1,  label: "Tytuł",            Component: Slide1  },
  { id: 2,  label: "Nawigacja",        Component: Slide2  },
  { id: 3,  label: "Klienci",          Component: Slide3  },
  { id: 4,  label: "Użytkownicy",      Component: Slide4  },
  { id: 5,  label: "Grupy cenowe",     Component: Slide5  },
  { id: 6,  label: "Produkty",         Component: Slide6  },
  { id: 7,  label: "Zamówienia",       Component: Slide7  },
  { id: 11, label: "Koszyki i typy",    Component: Slide11 },
  { id: 12, label: "Progi / Zgłoszenia / Raporty", Component: Slide12 },
  { id: 8,  label: "Import masowy",    Component: Slide8  },
  { id: 9,  label: "Oszczędność",       Component: Slide9  },
  { id: 10, label: "Podsumowanie",     Component: Slide10 },
];
