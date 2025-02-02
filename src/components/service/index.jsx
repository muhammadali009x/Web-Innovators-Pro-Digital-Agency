import BreadcrumbArea from "@/src/common/breadcrumb-area";
import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";
import PriceArea from "./price-area"; 
import HeaderThree from "@/src/layout/headers/header-3";
import FooterThree from "@/src/layout/footers/footer-3";
import ServiceArea from "../homes/home-8/service-area";

const Service = () => {
  return (
    <>
      <HeaderThree />
       <ServiceArea /> 
      <FooterThree />
    </>
  );
};

export default Service;
