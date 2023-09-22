import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Component/PrimaryNav/App.jsx'
import './index.css'
import SecondNav from './Component/SecondaryNav/SecondNav.jsx'
import Carousel from './Component/Carousel/Carousel.jsx'
import AddGallery from './Component/AddOne/AddOne.jsx'
import CategoriesMain from './Component/Categories/CategoriesMain.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <SecondNav />
    {/* <Carousel /> */}
    <AddGallery />
    <CategoriesMain />
  </React.StrictMode>,
)
