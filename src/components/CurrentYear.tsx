"use client";

import { useSyncExternalStore } from "react";

const YEAR = "";

const subscribe = () => () => {};
const getSnapshot = () => String(new Date().getFullYear());
const getServerSnapshot = () => YEAR;

/**
 * Renders the current year without freezing it at build time and without
 * hydration mismatches (server renders an empty string, client fills it in).
 */
export function CurrentYear() {
  const year = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return <span>{year}</span>;
}
