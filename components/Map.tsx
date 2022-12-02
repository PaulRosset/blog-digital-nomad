import jsVectorMap from "jsvectormap";
import "jsvectormap/dist/maps/world.js";
import "jsvectormap/dist/css/jsvectormap.css";
import { useEffect } from "react";

export default function Map() {
  let map: any = null;

  useEffect(() => {
    if (map === null) {
      map = new jsVectorMap({
        selector: "#map",
        map: "world",
        markers: [
          {
            name: "Indonesia",
            labelName: "Bali",
            coords: [-8.65, 115.216667],
            style: { fill: "red" },
          },
        ],
        labels: {
          markers: {
            // Starting from jsvectormap v1.2 the render function receives
            // the marker object as a first parameter and index as the second.
            render(marker: { labelName: string; name: string }) {
              return marker.labelName ?? marker.name ?? "Not available";
            },
          },
        },
      });
    }
  }, []);

  return <div id="map" style={{ width: window.innerWidth, height: 400 }} />;
}
