import React, { Fragment, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../../../components/layout/Header/Header";
import Dealer from "../../dealer/Dealer";
import Calculator from "../../Calculator/Calculator";
import Sidebar from "../../../components/layout/Sidebar/Sidebar";

const Dashboard = () => {
  const location = useLocation();

  return (
    <Fragment>
      <Header />
      <Sidebar />
      <Outlet />
    </Fragment>
  );
};

export default Dashboard;
