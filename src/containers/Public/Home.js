import React, { useEffect, useRef } from "react";
import Header from "./Header";
import { Outlet, useLocation } from "react-router-dom";
import { Navigation, Search } from "./index";
import { Intro, Contact, Footer } from "../../components";
import { path } from "../../ultils/constant";
import SliderHome from "../../components/SliderHome/SliderHome";

const Home = () => {
  const location = useLocation();
  const navRef = useRef();

  //   useEffect(() => {
  //     const handleScroll = (e) => {
  //       if (window.pageYOffset >= 134) {
  //         navRef.current.style.cssText = `
  //                 position: fixed;
  //                 top: 0;
  //                 left: 0;
  //                 right: 0;
  //                 z-index: 50;
  //                 `;
  //       } else {
  //         navRef.current.style.cssText = `
  //                 width: 100%
  //                 `;
  //       }
  //     };
  //     window.addEventListener("scroll", handleScroll);
  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);
  return (
    <div className="w-full flex gap-6 flex-col items-center h-full bg-[#fff]">
      <Header />
      <div ref={navRef} className="w-full">
        <Navigation />
      </div>
      <div className="w-full mt-8">
        {location.pathname !== `/${path.CONTACT}` &&
          location.pathname !== `/${path.LOGIN}` &&
          !location.pathname?.includes(path.DETAIL) && <SliderHome />}
      </div>
      {location.pathname !== `/${path.CONTACT}` &&
        location.pathname !== `/${path.LOGIN}` &&
        !location.pathname?.includes(path.DETAIL) && <Search />}
      <div className="w-full lg:w-4/5 flex flex-col items-start justify-start mt-3">
        <Outlet />
      </div>
      <Intro />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
