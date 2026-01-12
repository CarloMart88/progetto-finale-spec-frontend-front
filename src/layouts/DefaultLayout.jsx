import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function DefaultLayout() {
  return (
    <>
      <Navbar />

      <main className="caffe">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default DefaultLayout;
