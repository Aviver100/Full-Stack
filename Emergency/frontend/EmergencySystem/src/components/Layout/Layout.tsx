import React from 'react'
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

interface LayoutProps {
    children?: React.ReactNode; 
  }
  
const Layout: React.FC<LayoutProps> = () => {
    return (
        <>
            <NavBar />
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default Layout