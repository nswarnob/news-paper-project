import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navba';
import LeftAside from '../components/HomeLayout/LeftAside';
import RightAside from '../components/HomeLayout/RightAside';

const HomeLayouts = () => {
    return (
        <div>
            <header className='w-11/12 mx-auto my-3' >
                <Header></Header>
                <section >
                    <LatestNews></LatestNews>
                </section>
                <nav >
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='w-11/12 mx-auto my-3 grid grid-cols-12'>
                <aside className='col-span-3' > <LeftAside></LeftAside> </aside>
            
              <section className="main col-span-6">
                  <Outlet></Outlet>
              </section>
                
                <aside className='col-span-3' > <RightAside></RightAside> </aside>
            </main>
        </div>
    );
};

export default HomeLayouts;