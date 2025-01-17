import { useEffect, useState } from 'react'
import { Marker } from 'react-leaflet'
import { v4 as uuid } from '@lukeed/uuid'
import { defaultIcon } from '@/icons/defaultIcon'
import useMarkerLayerClusterHook from './MarkerLayerClusterHook'
import MarkerClusterGroup from 'react-leaflet-markercluster'
import PropTypes from 'prop-types'
/**
 * Component to diplay a marker cluster layer for reservoirs
 *
 * @component
 * @returns {LayersControl.Overlay}
 */
export const MarkerLayerCluster = ({ data }) => {
  const { coordinates, zoomLevel } = useMarkerLayerClusterHook(data)
  const [layer, setLayer] = useState(null)
  useEffect(() => {
    setLayer(
      data.features.map(({ properties }, index) => {
        const { LONG_WW, LAT_WW } = properties
        if (LONG_WW === 'MISSING' || LAT_WW === 'MISSING') return
        return (
          <Marker
            icon={defaultIcon}
            key={uuid()}
            position={coordinates[index]}
          />
        )
      })
    )
  }, [])
  return zoomLevel <= 8 ? (
    <MarkerClusterGroup zoomToBoundsOnClick={false}>{layer}</MarkerClusterGroup>
  ) : null
}

MarkerLayerCluster.propTypes = {
  data: PropTypes.object.isRequired,
}
