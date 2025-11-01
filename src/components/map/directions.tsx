import { Compass } from "@/components/map/compass";
import { b2d, type Direction } from "@/lib/helpers/directions";
import { useMap } from "@/providers/map";

import { useCallback, useEffect, useRef, useState, type MouseEventHandler } from "react";
import { ChevronDown } from "lucide-react";

import type { MapEventType } from "maplibre-gl";

type Mode = "compass" | "direction";

type ZoomControlsProps = React.ComponentProps<"div">;

export function Directions(props: ZoomControlsProps) {
  const map = useMap();

  const [mode, setMode] = useState<Mode>("compass");
  const [rotation, setRotation] = useState(() => ({
    pitch: map.getPitch(),
    bearing: map.getBearing()
  }));

  const initialDirection = b2d(map.getBearing());
  const [direction, setDirection] = useState<Direction>(initialDirection);
  const directionRef = useRef<Direction>(initialDirection);

  const updateDirection = useCallback((bearing: number) => {
    if (mode === "direction") {
      const direction = b2d(bearing);
      if (direction !== directionRef.current) {
        directionRef.current = direction;
        setDirection(direction);
      }
    }
  }, [mode]);

  const onMove = useCallback((e: MapEventType["move"]) => {
    const bearing = e.target.getBearing();

    setRotation({
      bearing,
      pitch: e.target.getPitch()
    });

    updateDirection(bearing);
  }, [updateDirection]);

  const flipMode: MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    setMode(prevMode =>
      prevMode === "compass" ? "direction" : "compass"
    );
  }

  useEffect(() => {
    updateDirection(rotation.bearing);
  }, [mode])

  useEffect(() => {
    map.on('move', onMove);

    return () => {
      map.off('move', onMove);
    }
  }, [map, onMove]);

  const modeComponent = mode === "compass"
    ? <Compass bearing={rotation.bearing} direction={direction} />
    : (
      <div
        className={`font-compass font-extrabold text-4xl ${direction === 'N' ? 'text-red-500' : ''}`}
      >
        {direction}
      </div>
    );

  return (
    <div
      className={`
      absolute bottom-15 right-9
      ${rotation.bearing !== 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}
      ${mode === 'compass' ? 'bg-primary/15' : 'bg-primary/30'}
      text-primary rounded-full cursor-pointer
      transition-all duration-300 ease-in-out
    `}
      onClick={() => map.resetNorthPitch()}
      onContextMenu={flipMode}
    >
      <div className="size-24 flex items-center justify-center">
        {modeComponent}
        <div
          className="absolute inset-0 transition-transform duration-150 ease-out"
          style={{
            transform: `rotate(${-rotation.bearing}deg)`
          }}
        >
          <ChevronDown
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[75%] text-red-500"
            strokeWidth={3}
          />
        </div>
      </div>
    </div>
  );
}
