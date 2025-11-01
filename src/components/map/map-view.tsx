import { MapProvider } from "@/providers/map";
import { MapControls } from "./MapControls";

export function MapView() {
  return (
    <MapProvider>
      <MapControls />
    </MapProvider>
  )
}
