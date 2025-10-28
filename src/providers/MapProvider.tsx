import React, { useEffect, useRef, useState } from "react";
import { Map } from "maplibre-gl";
import { MapContext } from "@/contexts/MapContext";
import "maplibre-gl/dist/maplibre-gl.css"
import { cn } from "@/lib/utils";

type MapProviderProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

export function MapProvider({ children, ...props }: MapProviderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const map = new Map({
      container: containerRef.current,
      style: "https://tiles.openfreemap.org/styles/liberty",
      center: [-96.00597, 38.71427],
      zoom: 4
    });

    setMap(map);
    return () => map.remove();
  }, [])

  return (
    <MapContext.Provider value={map}>
      <div  {...props} className={cn("h-full w-full", props.className)}>
        <div ref={containerRef} className="w-full h-full"></div>
        {map && children}
      </div>
    </MapContext.Provider>
  )
}
