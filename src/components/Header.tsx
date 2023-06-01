import FormTracker from './FormTracker'
import IpInfo from './IpInfo'

const Header = () => {
  return (
    <header className='flex flex-col items-center  justify-start  w-[375px] md:w-full h-[300px] md:h-[280px] bg-hero-mobile md:bg-hero-desktop bg-cover bg-no-repeat bg-center relative z-10'>
      <h1 className='font-medium text-white text-[32px] mt-[26px]  tracking-[-0.285714] leading-[30px]'>IP Address Tracker</h1>
      <FormTracker />
      <IpInfo />
    </header>
  )
}

export default Header
