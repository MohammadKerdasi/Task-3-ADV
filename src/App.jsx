import { Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import Contact from "./pages/Contact"
import PropertiesPage from "./pages/PropertiesPage"
import PropertyDetails from "./pages/propertyDetails"




function App() {


  return (
    <>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Properties" element={<PropertiesPage />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/PropertyDetails" element={<PropertyDetails />} />
      </Routes>


    
    </>
  )
}

export default App
