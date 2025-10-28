import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { ZoomControls } from "./ZoomControls";

export function MapControls() {
  return (
    <div className="absolute top-2 right-2 flex flex-col gap-5">
      <div>
        <Button>
          <Search />
        </Button>
      </div>
      <ZoomControls />
    </div>
  )
}
