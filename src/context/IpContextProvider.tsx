import Loader from '../components/Loader'
import type { ICoordinates, ILocation, IpContextType } from '../types'
import { fetchData } from '../util'
import IpContext from './IpContext'
import { useEffect, useState } from 'react'
const baseApiUrl = import.meta.env.VITE_GEO_API_BASE_URL as string
const apiKey = import.meta.env.VITE_API_GEO_IP_API as string
const IpContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [ipAddress, setIpAddress] = useState('')
  const [isActive, setIsActive] = useState(true)
  const [location, setLocation] = useState<ILocation>({
    city: '',
    countryCode: '',
    zipCode: ''
  })
  const [timezone, setTimezone] = useState('')
  const [isp, setIsp] = useState('')
  const [coordinates, setCoordinates] = useState<ICoordinates>({
    lat: 0,
    lng: 0
  })
  useEffect(() => {
    const getIpInfo = async () => {
      try {
        const [err, rsp] = await fetchData('https://api.ipify.org?format=json')
        if (err !== null) {
          console.log(err)
          return
        }
        const ip: string = await rsp.ip
        const [errIp, dataIP] = await fetchData(`${baseApiUrl}?apiKey=${apiKey}&ipAddress=${ip}`)
        if (errIp !== null) {
          console.log(errIp)
          return
        }
        setIpAddress(ip)
        const { location, isp, location: { lat, lng, timezone } } = dataIP
        const locationData: ILocation = {
          city: location.city,
          countryCode: location.region,
          zipCode: location.postalCode
        }
        setLocation(locationData)
        setTimezone(timezone)
        setIsp(isp)
        const newCoordinates: ICoordinates = {
          lat,
          lng
        }
        setCoordinates(newCoordinates)
        setIsActive(false)
      } catch (error) {
        console.log(error)
      }
    }
    getIpInfo().catch(err => {
      console.log(err)
    })
  }, [])

  const initValue: IpContextType = {
    ipAddress,
    setIpAddress,
    location,
    setLocation,
    timezone,
    setTimezone,
    isp,
    setIsp,
    coordinates,
    setCoordinates
  }
  return (
    <Loader isActivated={isActive} textContent='your content is been loaded'>
      <IpContext.Provider value={initValue}>
        {children}
      </IpContext.Provider>
    </Loader>
  )
}

export default IpContextProvider
