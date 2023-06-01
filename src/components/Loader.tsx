interface Props {
  isActivated: boolean
  textContent: string
  children: React.ReactNode
}
const Loader = ({ isActivated, textContent, children }: Props) => {
  return (
    <>
      {
        isActivated
          ? (
            <div className='flex flex-col fixed h-screen w-screen bg-black z-20 justify-center items-center opacity-80'>
              <div className='lds-ripple'><div></div><div></div></div>
              <h3>{ textContent }</h3>
            </div>
            )
          : null
      }
      {
        children
      }
    </>
  )
}

export default Loader
