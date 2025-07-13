import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix default icon issue with Leaflet in React
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

// Updated coordinates for XMVJ+C2M, Addis Ababa
const CHURCH_POSITION: [number, number] = [9.0108, 38.7613] // Alembank, Addis Ababa

const MapView: React.FC = () => {
  return (
    <MapContainer center={CHURCH_POSITION} zoom={16} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={CHURCH_POSITION}>
        <Popup>
          Alembank Full Gospel Church<br />
          XMVJ+C2M, Addis Ababa<br />
          Alembank Area, Ethiopia
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default MapView 