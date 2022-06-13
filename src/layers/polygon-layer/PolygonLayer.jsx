import usePolygonLayerHook from "./PolygonLayerHook"
import { LayerGroup, LayersControl, Polygon, Tooltip } from "react-leaflet"
import { v4 as uuid } from "@lukeed/uuid"
import { useState,useEffect } from "react"

export const PolygonLayer = ({ data, handleChange }) => {
  const [layer, setLayer] = useState(null)
  const { centerPolygon, country, getIdSwot } = usePolygonLayerHook({
    data,
    handleChange,
  })

  useEffect(() => {
    setLayer(
      data.features.map(feature => {
        const { ID_SWOT, DAM_NAME, LONG_WW, LAT_WW } = feature.properties
        const { coordinates } = feature.geometry
        const reversedMultiPolygons = coordinates[0].map(polygon =>
          polygon.map(p => [p[1], p[0]])
        )
        return (
          <Polygon
            key={uuid()}
            positions={reversedMultiPolygons}
            data-coordinates={[LAT_WW, LONG_WW]}
            eventHandlers={{
              click: el => {
                centerPolygon(el.target.options["data-coordinates"])
                getIdSwot(ID_SWOT)
              },
            }}
          >
            <Tooltip>
              <h3>{DAM_NAME}</h3>
            </Tooltip>
          </Polygon>
        )
      })
    )
  }, [data])

  return (
    <LayersControl.Overlay checked name={`${country} lakes polygons`}>
      <LayerGroup>{layer}</LayerGroup>
    </LayersControl.Overlay>
  )
}