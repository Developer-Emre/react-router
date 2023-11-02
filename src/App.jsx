// App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import About from './pages/About'
import ErrorPage from './pages/ErrorPage';

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

const Dashboard = () =>{
return (

  <div>
    <Navbar />
    <hr />
    <Outlet />
    <Footer />
  </div>

);
}


const router = createBrowserRouter([

  {
    path: '/',
    element: <Dashboard />,
    children: [
      {
        path:'/',
        element: <Home />
      },
      {
        path:'/about',
        element: <About />
      },
    ]
  },

  {
    path: "/",
    element: <Home />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "*",
    element: <ErrorPage />
  },

])

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
