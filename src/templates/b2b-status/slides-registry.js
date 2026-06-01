import { Slide1Status } from "./Slides.jsx";

export const globalStyle = `
  .slide { animation: fadeIn 0.5s ease; }
  @keyframes fadeIn { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
`;

export const SLIDES = [
  { id: 1, label: "Status projektu", Component: Slide1Status },
];