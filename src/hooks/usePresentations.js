import { useState, useCallback } from "react";
import { defaultConfig } from "../data/defaultConfig";

const STORAGE_KEY = "bhf_presentations";

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    // ignore malformed localStorage data
  }
  return null;
}

function saveToStorage(presentations) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(presentations));
}

function createPresentation(name, description, config, templateId = "bhf-b2b") {
  return {
    id: crypto.randomUUID(),
    name,
    description,
    templateId,
    createdAt: new Date().toISOString(),
    config,
  };
}

function initialState() {
  const stored = loadFromStorage();
  if (stored && stored.length > 0) return stored;
  const def = createPresentation(
    "BHF B2B Platform — Prezentacja główna",
    "Pełna prezentacja platformy dla nowych klientów",
    { ...defaultConfig },
    "bhf-b2b"
  );
  saveToStorage([def]);
  return [def];
}

export function usePresentations() {
  const [presentations, setPresentations] = useState(initialState);

  const save = useCallback((next) => {
    setPresentations(next);
    saveToStorage(next);
  }, []);

  const add = useCallback((name, description, config = {}, templateId = "bhf-b2b") => {
    const p = createPresentation(name, description, config, templateId);
    save((prev) => [...prev, p]);
    return p.id;
  }, [save]);

  const update = useCallback((id, { name, description, config }) => {
    save((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, name, description, config: { ...p.config, ...config } } : p
      )
    );
  }, [save]);

  const remove = useCallback((id) => {
    save((prev) => prev.filter((p) => p.id !== id));
  }, [save]);

  const duplicate = useCallback((id) => {
    const source = presentations.find((p) => p.id === id);
    if (!source) return;
    const copy = {
      ...source,
      id: crypto.randomUUID(),
      name: `${source.name} (kopia)`,
      createdAt: new Date().toISOString(),
      config: { ...source.config },
    };
    save((prev) => [...prev, copy]);
    return copy.id;
  }, [presentations, save]);

  return { presentations, add, update, remove, duplicate };
}
