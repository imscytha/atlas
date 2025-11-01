import type { FlyToOptions, Marker } from "maplibre-gl";

// TODO: add as we feel the neeed to extend
type EventTrigger = "fly-to";

abstract class BaseEventData<T, K extends EventTrigger> {
  abstract readonly trigger: K;

  constructor(public readonly data: T) { }
}

export class FlyToEvent extends BaseEventData<FlyToOptions & {
  marker?: Marker
}, "fly-to"> {
  readonly trigger: "fly-to" = "fly-to";
}

// NOTE: here we will export our typed events with custom data through
// discriminated unions
export type EventData = FlyToEvent;
