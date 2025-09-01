declare module "@vgrid/react-leaflet-heatmap-layer" {
  import { FunctionComponent } from "react";
  import { LayerProps } from "react-leaflet";

  export interface HeatmapLayerProps extends LayerProps {
    points: Array<{ lat: number; lng: number; intensity?: number }>;
    longitudeExtractor?: (p: any) => number;
    latitudeExtractor?: (p: any) => number;
    intensityExtractor?: (p: any) => number;
    max?: number;
    radius?: number;
    blur?: number;
    minOpacity?: number;
    gradient?: { [key: string]: string };
  }

  const HeatmapLayer: FunctionComponent<HeatmapLayerProps>;
  export default HeatmapLayer;
}
