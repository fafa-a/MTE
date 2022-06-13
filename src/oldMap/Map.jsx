import { useContext, useEffect, useState, useRef } from "react"
import { LayersControl, MapContainer, Polygon, TileLayer } from "react-leaflet"

import { MarkerLayer } from "../../layers/MarkerLayer"
import { MarkerLayerWithTooltipCluster } from "../../layers/MarkerLayerWithTooltipCluster"
import { Chart } from "../chart/Chart"
import { PolygonLayer } from "../../layers/PolygonLayer"
import { Checkbox } from "../checkbox/Checkbox"

import { Andalousie } from "../../data/geojson/Andalousie"
import { BurkinaFaso } from "../../data/geojson/BurkinaFaso"
import { India } from "../../data/geojson/India"
import { Occitanie } from "../../data/geojson/Occitanie"
import { Tunisia } from "../../data/geojson/Tunisia"

import { dsv } from "d3"
import { config } from "../../config"

export const Map = () => {
  const [geoFilter, setGeoFilter] = useState(null)
  const getGeoFilter = () => geoFilter
  const [radiusFilter, setRadiusFilter] = useState(null)
  const getRadiusFilter = () => radiusFilter
  const dataGeojson = [Andalousie, BurkinaFaso, India, Occitanie, Tunisia]
  const [polygonClicked, setPolygonCliked] = useState(Boolean)
  const [chartData, setChartData] = useState([](()))
  const [idSwot, setIdSwot] = useState([])
  const [lakesInfo, setLakesInfo] = useState([])

  const getLakeData = async (id, pattern) => {
    if (!id || !pattern) return
    const data = await dsv(
      ";",
      `/src/data/series/${id}${config.delimitter}${pattern}${config.delimitter}MO1.csv`
    )
    setChartData([...chartData, data])
  }

  useEffect(() => {
    lakesInfo.forEach(({ pattern }) => getLakeData(idSwot, pattern))
  }, [idSwot])

  const handleChange = el => {
    if (!el) return
    setLakesInfo([
      ...lakesInfo,
      {
        pattern: el.name,
        id: el.id,
      },
    ])
  }

  const getIdSwot = id => {
    if (idSwot.includes(id)) return
    setIdSwot([...idSwot, id])
  }
  const checkboxInfo = config.dataTypes.map(el => {
    const info = Object.entries(el)
    const [id] = info[0]
    const { label, pattern } = info[0][1]
    return { id, label, pattern }
  })

  const formValues = config.dataTypes.map((properties, dataType) => {
    const { label, pattern } = properties
    return {
      id: dataType,
      label: properties.label,
      active: false,
    }
  })


  return (
    <>
      <MapContainer center={[36.91, -3.54]} zoom={12} scrollWheelZoom={true}>
        <LayersControl position="topright">
          <LayersControl.BaseLayer name="OSM Strets">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer checked name="ESRI World Imagery">
            <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
            />
          </LayersControl.BaseLayer>
          {dataGeojson.map((data, index) => (
            <div key={index.toString()}>
              <MarkerLayer
                data={data}
                setRadiusFilter={setRadiusFilter}
                getRadiusFilter={getRadiusFilter}
                getGeoFilter={getGeoFilter}
              />
              <PolygonLayer data={data} getIdSwot={getIdSwot} />

              <MarkerLayerWithTooltipCluster data={data} />
            </div>
          ))}
          {/* <RadiusFilteR
            radiusFilter={radiusFilter}
            setRadiusFilter={setRadiusFilter}
          />
          <ContinentsPolygonLayer
            data={continents}
            setGeoFilter={setGeoFilter}
            getGeoFilter={getGeoFilter}
          />
        */}
          {/* <FitBoundToDataControl /> */}
          {/* <ShowActiveFiltersControl
              getFilters={() => ({ geoFilter, radiusFilter })}
            /> */}
        </LayersControl>
      </MapContainer>
      <div style={{ display: "flex", height: "45vh" }}>
        {/* <Chart chartData={chartData} lakesInfo={lakesInfo} /> */}
        <div
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          {checkboxInfo.map(el => {
            const { id, label, pattern } = el
            return (
              <Checkbox
                key={id}
                id={id}
                label={label}
                pattern={pattern}
                handleChange={handleChange}
              />
            )
          })}
        </div>
        <Checkbox />
      </div>
    </>
  )
}