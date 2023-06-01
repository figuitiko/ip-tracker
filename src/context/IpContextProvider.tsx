import type { ICoordinates, ILocation, IpContextType } from '../types'
import IpContext from './IpContext'
import { useState } from 'react'

const IpContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [ipAddress, setIpAddress] = useState('')
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
    <IpContext.Provider value={initValue}>
      {children}
    </IpContext.Provider>
  )
}

export default IpContextProvider
