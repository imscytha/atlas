import { ClockAlert, MapPinX, MapPinXInside, type LucideIcon } from "lucide-react";

type GeolocationErrorBody = {
    title: string;
    body: string;
    icon: LucideIcon;
};

const PERMISSION_DENIED: GeolocationErrorBody = {
  title: "Permission Denied",
  body: "Location access was denied. Please enable permissions in your browser settings.",
  icon: MapPinX
};

const POSITION_UNAVAILABLE: GeolocationErrorBody = {
  title: "Position Unavailable",
  body: "Unable to determine your location. Please check your network or GPS.",
  icon: MapPinXInside
}

const TIMEOUT: GeolocationErrorBody = {
  title: "Timeout",
  body: "The request for location took too long. Please try again.",
  icon: ClockAlert
};

const UNKNOWN_ERROR: GeolocationErrorBody = {
  title: "Unknown error",
  body: "Something went wrong while trying to geolocate"
}

type GeolocationErrorCode = 1 | 2 | 3;

function isGeolocationErrorCode(value: number): value is GeolocationErrorCode {
  return value === 1 || value === 2 || value === 3;
}

type GeolocationError = {
  [K in GeolocationErrorCode]: GeolocationErrorBody;
}

const GEOLOCATION_ERRORS: GeolocationError = {
  1: PERMISSION_DENIED,
  2: POSITION_UNAVAILABLE,
  3: TIMEOUT
};

export {
  GEOLOCATION_ERRORS,
  UNKNOWN_ERROR,
  isGeolocationErrorCode,

  type GeolocationErrorCode 
}
