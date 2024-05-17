import React from 'react'
import HomePage from '../pages/HomePage'
import Services from '../pages/Services'

import About from '../pages/About'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import { Route, Routes } from "react-router-dom";
import CreateCustomer from '../pages/GetDevdigital'
import FtaPlan from '../pages/FtaPlan'
import GoldPlan from '../pages/GoldPlan'
import Specialpack from '../pages/Specialpack'
import DDsilverC from '../pages/DDsilverC'
import DDsilverB from '../pages/DDsilverB'
import DDsilverA from '../pages/DDsilverA'

const AppRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/service" element={<Services/>} />
            <Route path="/getdevdigital" element={<CreateCustomer/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />  
            <Route path="/ftaplan" element={<FtaPlan/>} />  
            <Route path="/gold" element={<GoldPlan/>} />  
            <Route path="/silvera" element={<DDsilverA/>} />  
            <Route path="/silverb" element={<DDsilverB/>} />  
            <Route path="/silverc" element={<DDsilverC/>} />  
            <Route path="/special" element={<Specialpack/>} />  

        </Routes>
    </div>
  )
}

export default AppRoutes
