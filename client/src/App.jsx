import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Mission from './components/Mission'
import MedicinalPlants from './components/MedicinalPlants'
import HydroponicSystems from './components/HydroponicSystems'
import HabitatTools from './components/HabitatTools'
import Consultation from './components/Consultation'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Mission />
      <MedicinalPlants />
      <HydroponicSystems />
      <HabitatTools />
      <Consultation />
      <Footer />
    </div>
  )
}

export default App
