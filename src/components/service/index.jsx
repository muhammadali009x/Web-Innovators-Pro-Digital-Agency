import BreadcrumbArea from "@/src/common/breadcrumb-area";
import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";
import PriceArea from "./price-area";
import ServiceArea from "./service-area";
import HeaderThree from "@/src/layout/headers/header-3";
import FooterThree from "@/src/layout/footers/footer-3";

const Service = () => {
  return (
    <>
      <HeaderThree />
      <BreadcrumbArea acive_menu="Services" title="What We Do" />
      <ServiceArea />
      <PriceArea />
      <FooterThree />
    </>
  );
};

export default Service;
