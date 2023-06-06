import { useEffect, useState } from 'react'
import './App.css'
import { getRandomDimension } from './utils/random'
import axios from 'axios'
import Location from './components/Location'
import ResidentList from './components/ResidentList'

function App() {
  
  const bgImage = ["bg"]

  const [location, setLocation] = useState(null)

  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/location/${getRandomDimension()}`

    axios.get(URL)
    .then(({data})=>setLocation(data))
    .catch((err)=>console.log(err))
    
  }, []) 

  return (

    <main className={`app ${bgImage} min-h-screen text-white font-primary-font`}>
      
      <header className="flex justify-center h-auto w-full">
        <div className="py-20 top-10">
          <img src="images/lg/lg-header.png" alt="" />
        </div>
        
      </header>
      <Location location={location} setLocation={setLocation} />
      <ResidentList location={location} residents={location?.residents}/>
      
    </main>
  )
}

export default App
