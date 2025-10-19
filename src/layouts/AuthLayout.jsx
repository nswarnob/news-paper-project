import React from 'react';
import Navbar from '../components/Navba';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen' >
            <header className='w=11/12 mx-auto p-10 '>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto py-5'>
             <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;