import { createContext, useContext } from "react";
import type { Map } from "maplibre-gl";

export const MapContext = createContext<Map | null>(null);

export function useMap() {
  const ctx = useContext(MapContext);
  if (!ctx) throw new Error("useMap must be used within a MapProvider");
  return ctx;
}
