import { GEOLOCATION_ERRORS, UNKNOWN_ERROR, isGeolocationErrorCode, type GeolocationErrorCode } from "@/lib/helpers/location";

import { Bug, type LucideIcon } from "lucide-react";
import type { ReactElement } from "react";

type GeolocationErrorProps = {
  errorCode?: GeolocationErrorCode
}

export function GeolocationError({ errorCode }: GeolocationErrorProps) {
  const error = errorCode
    ? GEOLOCATION_ERRORS[errorCode]
    : UNKNOWN_ERROR;
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
      GEOLOCATION_ERRORS[error.code].icon
    ]
  }
  return [
    <GeolocationError />,
    Bug
  ]
}
