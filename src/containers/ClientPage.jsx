
import Banner from "components/Banner";
import Header from "components/Header";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";

export default function ClientPage() {
    
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
