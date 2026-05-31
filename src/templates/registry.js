import bhfB2b from "./bhf-b2b/index.js";

// Aby dodać nową prezentację: zaimportuj moduł i dopisz do tablicy.
// import mojaPresent from "./moja-present/index.js";

export const templates = [
  bhfB2b,
  // mojaPresent,
];

export const templateById = Object.fromEntries(templates.map(t => [t.id, t]));
