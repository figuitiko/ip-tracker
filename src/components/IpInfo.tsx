import { useContext } from 'react'
import ItemIpInfo from './ItemIpInfo'
import IpContext from '../context/IpContext'
import { getStateAcronym } from '../util'
import { type IpContextType } from '../types'

const IpInfo = () => {
  const { ipAddress, location, timezone, isp } = useContext(IpContext) as IpContextType
  const { city, countryCode, zipCode } = location
  const cityCode = getStateAcronym(countryCode)
  const locationString = cityCode !== '' ? `${city}, ${cityCode} ${zipCode}` : 'No location yet'
  return (
    <div className='w-[327px] md:w-[1110px] h-[294px] md:h-[161px]  left-6 md:left-[165px] top-[167px] md:to-[200px] absolute
      rounded-[15px] shadow-ip bg-white px-[24px] md:px-[32px] pt-[26px] md:pt-[37px] pb-[24px] flex flex-col md:flex-row items-center md:items-start gap-[24px] z-10 '>
      <ItemIpInfo title='ip address' content={ ipAddress } isBordered={true} />
      <ItemIpInfo title='location' content={locationString} isBordered={true} />
      <ItemIpInfo title='Timezone' content={ timezone} isBordered={true} />
      <ItemIpInfo title='isp' content={ isp } />
    </div>
  )
}

export default IpInfo
