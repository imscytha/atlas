import { ClockAlert, MapPinX, MapPinXInside, type LucideIcon } from "lucide-react";

export type GeolocationErrorCode = 1 | 2 | 3;

export function isGeolocationErrorCode(value: number): value is GeolocationErrorCode {
  return value === 1 || value === 2 || value === 3;
}


type GeolocationError = {
  [K in GeolocationErrorCode]: {
    title: string;
    body: string;
    icon: LucideIcon;
  };
}

export const GEOLOCATION_ERROR_MESSAGES: GeolocationError = {
  1: {
    title: "Permission Denied",
    body: "Location access was denied. Please enable permissions in your browser settings.",
    icon: MapPinX
  },
  2: {
    title: "Position Unavailable",
    body: "Unable to determine your location. Please check your network or GPS.",
    icon: MapPinXInside
  },
  3: {
    title: "Timeout",
    body: "The request for location took too long. Please try again.",
    icon: ClockAlert
  }
};
