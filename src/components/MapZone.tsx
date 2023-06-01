import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useContext } from 'react'
import IpContext from '../context/IpContext'
import { type IpContextType } from '../types'
// Define a custom icon for the marker
const customIcon = new Icon({
  iconUrl: 'src/assets/images/icon-location-ok.svg',
  iconSize: [46, 56],
  iconAnchor: [12, 41]
})
function MyComponent () {
  const { coordinates, location } = useContext(IpContext) as IpContextType
  const { lat, lng } = coordinates
  const { city } = location
  const map = useMap()
  map.setView([lat, lng], 13)
  return (
    <>
      <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]} icon={customIcon} >
        <Popup>
            {city}
          </Popup>
        </Marker>
    </>
  )
}

const MapZone = () => {
  const { coordinates } = useContext(IpContext) as IpContextType
  const { lat, lng } = coordinates
  return (
    <div className='z-[1] relative flex flex-col w-[375px] md:w-[1440px] h-[800px]  overflow-hidden'>
      <MapContainer center={[lat, lng]} zoom={13} scrollWheelZoom={false} id='map'>
        {
          lat !== 0 && lng !== 0 ? <MyComponent /> : null
        }
      </MapContainer>
    </div>
  )
}

export default MapZone
