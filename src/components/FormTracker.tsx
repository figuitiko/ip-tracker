import imageArrow from '../assets/images/icon-arrow.svg'
import { useDataForm } from '../hooks/useDataForm'

const FormTracker = () => {
  const { isInValidIP, ipAddress, handleSubmit, handleOnChange } = useDataForm()
  return (
    <>
      <form className='flex mt-[29px] w-[327px] md:w-[555px] h-[58px]' onSubmit={handleSubmit}>
        <input
          type='text'
          className={`rounded-tl-[15px] rounded-bl-[15px] w-full h-full outline-none py-[18px] pl-[24px] ${isInValidIP ? 'border-2 border-red-500' : 'border-0'}}`}
          placeholder='Search for any IP address or domain'
          onInput={handleOnChange}
          value={ipAddress}
          maxLength = {15}
        />
        <button className='rounded-tr-[15px] rounded-br-[15px] rounded-tl-[0]  rounded-bl-[0] w-[58px] h-full bg-[#000000] text-white border-0'>
          <picture>
            <source srcSet={imageArrow} type='image/svg+xml' />
            <img src={imageArrow} alt='arrow' />
          </picture>
        </button>
      </form>
      {isInValidIP && <p className='text-red-500 text-xs mt-[5px]'>Please enter a valid IP address</p>}
    </>

  )
}

export default FormTracker
