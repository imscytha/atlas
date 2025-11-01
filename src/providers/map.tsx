import { cn } from "@/lib/utils";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { Map } from "maplibre-gl";

import "maplibre-gl/dist/maplibre-gl.css"
import { useTheme } from "@/providers/theme";
import { useStyle } from "@/lib/helpers/map-style";


type MapProviderProps = React.ComponentProps<"div"> & {
  children: React.ReactNode;
};

const MapContext = createContext<Map | null>(null);

export function MapProvider({ children, ...props }: MapProviderProps) {
  const { mode } = useTheme()

  const containerRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;


    const map = new Map({
      container: containerRef.current,
      style: useStyle(mode),
      center: [-96.00597, 38.71427],
      zoom: 4
    });

    setMap(map);
    return () => map.remove();
  }, []);

  useEffect(() => {
    map?.setStyle(useStyle(mode));
  }, [mode]);

  return (
    <MapContext.Provider value={map}>
      <div
        {...props}
        className={cn("h-full w-full", props.className)}
      >
        <div ref={containerRef} className="w-full h-full"></div>
        {map && children}
      </div>
    </MapContext.Provider>
  )
}

export function useMap() {
  const ctx = useContext(MapContext);

  if (!ctx)
    throw new Error("useMap must be used within a MapProvider");
  return ctx;
}

