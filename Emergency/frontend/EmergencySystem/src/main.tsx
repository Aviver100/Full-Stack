import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from './components/signup/signup.tsx';
import Login from './components/login/login.tsx';
import Layout from './components/Layout/Layout.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
    { index: true, element: <App />},
    { path: "signup", element: <Signup />},
    { path: "login", element: <Login />},
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
