import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import FAQs from './pages/FAQs';
import ContactUs from './pages/ContactUs';
import Layout from './components/Layout/Layout'; 

// Create the router with routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Your layout component that contains the navbar and footer
    children: [
      { path: '/', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'faqs', element: <FAQs /> },
      { path: 'contactus', element: <ContactUs /> },
    ],
  },
]);

// Render the application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
