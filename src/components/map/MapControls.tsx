import { ZoomControls } from "@/components/map/zoom-controls";

export function MapControls() {
  return (
    <div className="absolute top-5 right-5 flex flex-col gap-5">
      <ZoomControls className="size-10" />
    </div>
  )
}
