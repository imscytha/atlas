import { MapProvider } from "@/providers/map";
import { MapControls } from "@/components/map/map-controls";

export function MapView() {
  return (
    <MapProvider>
      <MapControls />
    </MapProvider>
  )
}
