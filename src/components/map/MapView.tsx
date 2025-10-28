import { MapProvider } from "@/providers/MapProvider";
import { MapControls } from "./MapControls";

export function MapView() {
  return (
    <MapProvider>
      <MapControls />
    </MapProvider>
  )
}
