import React from "react";
import Header from "../Admindashboard/Header";
import Sidebar from "../Admindashboard/Sidebar";
import Home from "../Admindashboard/Home";
import {useState} from 'react'

export default function Homecontainer() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <Home />
    </div>
  );
}
