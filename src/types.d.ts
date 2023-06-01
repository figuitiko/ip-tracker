export interface ILocation {
  countryCode: string
  city: string
  zipCode: string
}
export interface ICoordinates {
  lat: number
  lng: number
}
export interface IpContextType {
  ipAddress: string
  setIpAddress: (ip: string) => void
  location: ILocation
  setLocation: (location: ILocation) => void
  timezone: string
  setTimezone: (timezone: string) => void
  isp: string
  setIsp: (isp: string) => void
  coordinates: ICoordinates
  setCoordinates: (coordinates: ICoordinates) => void
}

export type IStates = Record<string, string>
