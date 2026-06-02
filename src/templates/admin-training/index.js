import { SLIDES, globalStyle } from "./slides-registry.js";
import ConfigForm from "./ConfigForm.jsx";

export const defaultConfig = {
  trainerName: "BHF Harendarczyk",
  date: "03.06.2026",
  websiteUrl: "b2b.bhf.net.pl",
};

export default {
  id: "admin-training",
  name: "Szkolenie Administratora",
  description: "Przewodnik po panelu admina BHF B2B Platform — możliwości i etapy pracy",
  slides: SLIDES,
  globalStyle,
  defaultConfig,
  ConfigForm,
};
