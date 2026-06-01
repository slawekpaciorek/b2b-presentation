import { SLIDES, globalStyle } from "./slides-registry.js";
import ConfigForm from "./ConfigForm.jsx";

const defaultConfig = {
  title: "Status Projektu BHF B2B",
  subtitle: "Przegląd zrealizowanych funkcji, otwartych zadań i planów",
  date: "2026-06-01",
};

export default {
  id: "b2b-status",
  name: "Status Projektu B2B",
  description: "Wewnętrzny przegląd postępu prac — co zrobione, co otwarte, roadmapa",
  slides: SLIDES,
  globalStyle,
  defaultConfig,
  ConfigForm,
};
