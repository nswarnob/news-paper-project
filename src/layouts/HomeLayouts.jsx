import React from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navba";
import LeftAside from "../components/HomeLayout/LeftAside";
import RightAside from "../components/HomeLayout/RightAside";
import Loading from "../pages/Loading";

const HomeLayouts = () => {
  const { state } = useNavigation();
  return (
    <div>
      <header className="w-11/12 mx-auto space-y-4">
        <Header></Header>
        <section>
          <LatestNews></LatestNews>
        </section>
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>
      <main className=" w-11/12  mx-auto my-3 grid grid-cols-12  md:gap-6">
        <aside className="col-span-12 md:col-span-3 h-fit top-0 md:sticky order-1 md:order-none">
          <LeftAside />
        </aside>

        <section className="col-span-12 md:col-span-6 order-2 md:order-none">
          {state === "loading" ? <Loading /> : <Outlet />}
        </section>

        <aside className="col-span-12 md:col-span-3 h-fit top-0 md:sticky order-3 md:mt-0 mt-10 md:order-none">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayouts;
