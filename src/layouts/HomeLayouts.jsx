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
      <main className="w-11/12 mx-auto my-3 grid grid-cols-12">
        <aside className="col-span-3 h-fit top-0 sticky">
          {" "}
          <LeftAside></LeftAside>{" "}
        </aside>

        <section className="main col-span-6">
          {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>}
        </section>

        <aside className="col-span-3 h-fit top-0 sticky">
          {" "}
          <RightAside></RightAside>{" "}
        </aside>
      </main>
    </div>
  );
};

export default HomeLayouts;
