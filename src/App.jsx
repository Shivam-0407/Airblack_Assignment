import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './components/Heading'
import Hero from './components/Hero'
import Join_Airblack from './components/Join_Airblack'
import GetCertificate from './components/GetCertificate'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Heading />
      <Hero label={`Professional Online Makeup Course`}/>
      <Join_Airblack />
      <GetCertificate />
      <Footer />
    </div>
  )
}

export default App
