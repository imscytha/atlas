import { GEOLOCATION_ERROR_MESSAGES, isGeolocationErrorCode, type GeolocationErrorCode } from "@/lib/helpers/location";

import { Bug, type LucideIcon } from "lucide-react";
import type { ReactElement } from "react";

type GeolocationErrorProps = {
  errorCode?: GeolocationErrorCode
}

export function GeolocationError({ errorCode }: GeolocationErrorProps) {
  const error = errorCode
    ? GEOLOCATION_ERROR_MESSAGES[errorCode]
    : {
      title: "Unknown error",
      body: "Something went wrong while trying to geolocate"
    };
  return (
    <div className="ml-2">
      <h1 className="font-extrabold">{error.title}</h1>
      <h2>{error.body}</h2>
    </div>
  );
}

export const handleGeolocationError = (error: GeolocationPositionError): [ReactElement, LucideIcon] => {
  if (isGeolocationErrorCode(error.code)) {
    return [
      <GeolocationError errorCode={error.code} />,
      GEOLOCATION_ERROR_MESSAGES[error.code].icon
    ]
  }
  return [
    <GeolocationError />,
    Bug
  ]
}
