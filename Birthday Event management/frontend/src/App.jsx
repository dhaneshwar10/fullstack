
// import Login from './components/login'

import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from "./components/login"
import Signup from "./components/Signup"
import Home from "./components/Home"
import Events from "./components/Events"

import Gallery from "./components/Gallery"
import Dashboard from "./Dashboard"
import AboutUs from "./components/Aboutus"
import Footer from "./components/Footer"
import Profile from "./components/Profile"
import PaymentPage from "./components/PaymentPage"
import YogaRegistration from "./components/reg"
import FoodItems from "./components/FoodItems"
import AdminHome from "./components/Admin"


// import CustomNavbar from "./components/Navbar"

const App=()=>{
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Login/>
    },{
      path:'/home',
      element:<Home/>
    },
    {
      path:'/signup',
      element:<Signup/>
    },
    {
      path:'/event',
      element:<Events/>
    },
    {
      path:'/aboutus',
      element:<AboutUs/>
    },
    {
      path:'/gallery',
      element:<Gallery/>
    },
    {
      path:'/d',
      element:<Dashboard/>
    },
    {
      path:'/footer',
      element:<Footer/>
    },
   
    {
      path:'/prof',
      element:<Profile/>
    },
    {
      path:'/pay',
      element:<PaymentPage/>
    },
    {
      path:'/a',
      element:<AdminHome/>
    },
    {
      path:'/book',
      element:<YogaRegistration/>
    },
    {
      path:'/food',
      element:<FoodItems/>
    },
   
  ])
return(
  <div>
  <RouterProvider router={router}></RouterProvider>
  </div>
)
}

export default App
