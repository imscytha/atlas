import { ZoomControls } from "@/components/map/zoom-controls";
import { Location } from "@/components/map/location";
import { Directions } from "./directions";

export function MapControls() {
  return (
    <>
      <div className="absolute top-5 right-5 flex flex-col gap-3">
        <ZoomControls className="size-10" />
        <Location />
      </div>
      <Directions />
    </>
  )
}
