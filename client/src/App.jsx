import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import CarDetails from './pages/CarDetails'
import Cars from './pages/Cars'
import MyBookings from './pages/MyBookings'
import Bookings from './pages/bookings'
import Footer from './components/Footer'
import Layout from './pages/owner/Layout'
import Dashboard from './pages/owner/Dashboard'
import AddCar from './pages/owner/AddCar'
// import ManageCars from './pages/owner/'
import ManageBookings from './pages/owner/ManageBookings'
import ManageCars from './pages/owner/ManageCars'
import Login from './components/Login'

const App = () => {
  const [showLogin, setShowLogin] = React.useState(false)
  const location = useLocation()
  const isOwnerPath = location.pathname.startsWith('/owner')

  return (
    <>
       {showLogin && <Login setShowLogin={setShowLogin}/>}
    
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin} />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/car-details/:id' element={<CarDetails />} />
        <Route path='/cars' element={<Cars />} />
        <Route path='/my-booking' element={<MyBookings />} />
        <Route path='/bookings' element={<Bookings />} />
        <Route path='/owner' element={<Layout />}>
        <Route index element={<Dashboard />}/>
        <Route path='add-car' element={<AddCar />}/>
        <Route path='manage-cars' element={<ManageCars />}/>
        
        {/* <Route path='manage-car' element={<ManageCars/>}/> */}
        <Route path='manage-bookings' element={<ManageBookings />}/>

        </Route>
      </Routes>


     {!isOwnerPath && <Footer />}
      
    </>
  )
}

export default App