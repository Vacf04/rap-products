import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home.jsx';
import Products from './routes/Products.jsx'
import Cart from './routes/Cart.jsx'
import About from './routes/About.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/products",
    element: <Products />
  },
  {
    path: "/cart",
    element: <Cart />
  },
  {
    path: "/about",
    element: <About />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
