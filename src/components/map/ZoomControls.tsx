import { Minus, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { useCallback } from "react";
import { cn } from "@/lib/utils";
import { useMap } from "@/providers/map";

type ZoomControlsProps = React.HTMLAttributes<HTMLDivElement>;

export function ZoomControls(props: ZoomControlsProps) {
  const map = useMap();

  const zoomIn = useCallback(() => map.zoomIn(), [map]);
  const zoomOut = useCallback(() => map.zoomOut(), [map]);

  const controlButtons: React.ButtonHTMLAttributes<HTMLButtonElement>[] = [
    { onClick: zoomIn, children: <Plus /> },
    { onClick: zoomOut, children: <Minus /> }
  ]

  return (
    <div
      role="group"
      {...props}
      className={cn(
        "flex flex-col gap-2",
        props.className
      )}
    >
      {controlButtons.map((props, i) => (
        <Button
          key={i}
          {...props}
        />
      ))}
    </div>
  )
}
