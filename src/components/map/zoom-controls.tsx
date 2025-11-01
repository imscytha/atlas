import { ButtonGroup } from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useMap } from "@/providers/map";
import { cn } from "@/lib/utils";

import { Minus, Plus } from "lucide-react";

type ZoomControlsProps = React.ComponentProps<"button">;

export function ZoomControls(props: ZoomControlsProps) {
  const map = useMap();

  return (
    <ButtonGroup
      orientation="vertical"
      aria-label="Zoom controls"
      className="h-fit"
    >
      <Button
        {...props}
        size="icon"
        className={cn(
          "rounded-2xl hover:rounded-lg",
          props.className
        )}
        onClick={() => map.zoomIn()}
      >
        <Plus />
      </Button>
      <Separator />
      <Button
        {...props}
        size="icon"
        className={cn(
          "rounded-2xl hover:rounded-lg",
          props.className
        )}
        onClick={() => map.zoomOut()}
      >
        <Minus />
      </Button>
    </ButtonGroup>
  )
}
