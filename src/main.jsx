import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Rout from './Route/Routes.jsx'
import Nav from './Header/nav'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
// import RoutesFunc from './Route/RoutesFunc'
import RoutesFunc from './Route/RoutesFunc'

// const router = createBrowserRouter(createRoutesFromElements(<RoutesFunc/>));
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter >
    <Nav/>
    <RoutesFunc/>
    {/* <App /> */}
    
    {/* <RouterProvider router = {router}/> */}
    </BrowserRouter>
  </StrictMode>,
)
