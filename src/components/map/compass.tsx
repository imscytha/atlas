import type { Direction } from "@/lib/helpers/directions";
import { CircularProtractor } from "../icons/protractor";
import { cn } from "@/lib/utils";

import { CompassIcon } from "lucide-react";

type CompassProps = React.ComponentProps<"div"> & {
  bearing: number;
  direction: Direction
};

export function Compass({ bearing, direction, ...props }: CompassProps) {
  return (
    <div
      {...props}
      className={cn(
        "compass-button-group flex items-center justify-center cursor-pointer",
        props.className
      )}
    >
      <div className="absolute"
        style={{
          transform: `rotate(${-bearing}deg)`
        }}
      >
        <CircularProtractor className="w-full h-full" />
      </div>


      <div
        className="flex w-full h-full"
      >
        <CompassIcon strokeWidth={1} className="w-20" />
        {/* <ArrowUpFromDot /> */}
        {/* <CompassNeedle accentColor="red" /> */}
      </div>
    </div>
  )
}
