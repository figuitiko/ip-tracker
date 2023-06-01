import Header from './components/Header'
import MapZone from './components/MapZone'
import IpContextProvider from './context/IpContextProvider'

function App () {
  return (
    <IpContextProvider>
      <div className='flex flex-col h-[828px] md:h-full w-[375px] md:w-[1440px] overflow-hidden'>
        <Header />
        <MapZone />
      </div>
    </IpContextProvider>
  )
}

export default App
