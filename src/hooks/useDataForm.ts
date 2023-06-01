import { useContext, useState } from 'react'
import { type ICoordinates, type ILocation, type IpContextType } from '../types'
import IpContext from '../context/IpContext'
import { fetchData } from '../util'
const baseApiUrl = import.meta.env.VITE_GEO_API_BASE_URL as string
const apiKey = import.meta.env.VITE_API_GEO_IP_API as string

export const useDataForm = () => {
  const { ipAddress, setIpAddress, setLocation, setTimezone, setIsp, setCoordinates } = useContext(IpContext) as IpContextType
  const [isInValidIP, setIsValid] = useState(false)

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    const cleanValue = inputValue.replace(/[^\d.]/g, '')
    const octets = cleanValue.split('.')
    const maskedOctets = octets.map((octet) => octet.substring(0, 3))
    const maskedIP = maskedOctets.join('.')
    setIpAddress(maskedIP)
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const [err, data] = await fetchData(`${baseApiUrl}?apiKey=${apiKey}&ipAddress=${ipAddress}`)
    if (err !== null) {
      setIsValid(true)
      setTimeout(() => {
        setIsValid(false)
      }, 3000)
    }
    const ipAddressRegex = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/
    if (!ipAddressRegex.test(ipAddress)) {
      setIsValid(true)
      setTimeout(() => {
        setIsValid(false)
      }, 3000)
    }
    const { location, isp, location: { lat, lng, timezone } } = data
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
  }
  return {
    handleSubmit,
    isInValidIP,
    handleOnChange,
    ipAddress
  }
}
