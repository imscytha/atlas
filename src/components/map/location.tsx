import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { Ping } from "@/components/map/ping";
import { handleGeolocationError } from "@/components/map/geolocation-error";
import { FlyToEvent, type EventData } from "@/lib/helpers/event-data";
import { cn } from "@/lib/utils";
import { useMap } from "@/providers/map";

import { Locate } from "lucide-react";
import { Marker, type FlyToOptions, type MapEventType } from "maplibre-gl";
import { toast } from "sonner";
import { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";

type LocationProps = React.ComponentProps<"button">;

export function Location(props: LocationProps) {
  const map = useMap()

  const [loading, setLoading] = useState(false);

  const markerRef = useRef<Marker | null>(null);
  const rootRef = useRef<ReturnType<typeof createRoot> | null>(null)

  // NOTE: I just wanted to experiment with the concept of rendering a fully
  // fledged React Component into a `maplibre-gl.Marker`.
  // TODO: We should probably migrate this logic into utilizing the actual API
  // for drawing things on a map, complying with the MapLibre Style Spec
  // ref: https://maplibre.org/maplibre-style-spec
  const createPingMarker = (): Marker => {
    markerRef.current?.remove();

    rootRef.current?.unmount();
    rootRef.current = null; // Clear the reference for good measure

    const markerDiv = document.createElement('div');
    const root = createRoot(markerDiv);
    root.render(<Ping />);

    rootRef.current = root;

    const marker = new Marker({ element: markerDiv })
    markerRef.current = marker;

    return marker
  }

  const onLocationResolved = async ({ coords }: GeolocationPosition) => {
    const marker = markerRef.current ?? createPingMarker();

    const opts: FlyToOptions = {
      center: [coords.longitude, coords.latitude],
      zoom: 14,
    }
    map.flyTo(opts, new FlyToEvent({
      ...opts,
      marker
    }))
  }

  const onError = (err: GeolocationPositionError) => {
    setLoading(false);

    const [message, Icon] = handleGeolocationError(err);

    toast.error(message, {
      position: "top-center",
      richColors: true,
      icon: <Icon />
    });
  }

  const requestLocation = () => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      onLocationResolved,
      onError,
      {
        enableHighAccuracy: true
      }
    );
  }

  const onMoveEnd = (e: MapEventType["moveend"] & EventData) => {
    switch (e.trigger) {
      case "fly-to":
        // NOTE: we reset the bearing and pitch when we use the `flyTo`
        // animation after the map has stopped moving, then we place the marker
        // sent from the caller of flyTo
        e.target.resetNorthPitch();
        setLoading(false);
        e.data.marker
          ?.setLngLat(e.data.center!)
          .addTo(e.target);
        break;
    }
  }

  useEffect(() => {
    map.on("moveend", onMoveEnd);

    return () => {
      map.off("moveend", onMoveEnd);
    }
  }, [map]);

  return (
    <Button
      {...props}
      className={cn(
        "rounded-xl hover:rounded-lg",
        props.className
      )}
      onClick={requestLocation}
    >
      {
        loading
          ? <Spinner />
          : <Locate />
      }
    </Button>
  )
}
