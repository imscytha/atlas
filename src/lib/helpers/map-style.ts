// FIXME: This whole file should be scrapped. Styles should be provided by the
// backend.
// TODO: Refactor to consume styles from the backend instead of hardcoding them
// here.

import type { Mode } from "@/providers/theme";

interface MapStyleProvider {
  baseUrl: string;
  style: { [K in Mode]: string; }

  // NOTE: could return a `maplibre-gl.StyleSpecification`
  getStyleSpec(mode: Mode): string;
}

class OpenFreeMap implements MapStyleProvider {
  readonly baseUrl = "tiles.openfreemap.org/styles";
  readonly style = {
    light: "liberty",
    dark: "positron"
  } as const;

  getStyleSpec(mode: Mode): string {
    return `https://${this.baseUrl}/${this.style[mode]}`;
  }
}

class MapTiler implements MapStyleProvider {
  readonly baseUrl = "api.maptiler.com/maps";
  readonly style = {
    light: "bright-v2",
    dark: "019a3f9e-4c56-720c-a239-19d8197629e0"
  } as const;
  apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  getStyleSpec(mode: Mode): string {
    return `https://${this.baseUrl}/${this.style[mode]}/style.json?key=${this.apiKey}`;
  }
}

let styleProvider: MapStyleProvider | null = null;

function getStyleProvider(): MapStyleProvider {
  if (styleProvider) return styleProvider;

  const apiKey = process.env.BUN_PUBLIC_MAPTILER_API_KEY;
  styleProvider = apiKey ? new MapTiler(apiKey) : new OpenFreeMap();
  return styleProvider;
}

export const useStyle = (mode: Mode): string => {
  const provider = getStyleProvider();
  return provider.getStyleSpec(mode);
}
