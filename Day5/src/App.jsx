
// import Login from './components/login'

import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from "./components/login"
import Homepage from "./components/homepage"
import Signup from "./components/Signup"
import Home from "./components/Home"
import Events from "./components/Events"
import Aboutus from "./components/Aboutus"
import Gallery from "./components/Gallery"
import Dashboard from "./Dashboard"


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
      element:<Aboutus/>
    },
    {
      path:'/gallery',
      element:<Gallery/>
    },
    {
      path:'/d',
      element:<Dashboard/>
    },
   
  ])
return(
  <div>
  <RouterProvider router={router}></RouterProvider>
  </div>
)
}

export default App
