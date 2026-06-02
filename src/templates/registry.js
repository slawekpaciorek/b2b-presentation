import bhfB2b from "./bhf-b2b/index.js";
import b2bStatus from "./b2b-status/index.js";
import adminTraining from "./admin-training/index.js";

export const templates = [
  bhfB2b,
  b2bStatus,
  adminTraining,
];

export const templateById = Object.fromEntries(templates.map(t => [t.id, t]));
