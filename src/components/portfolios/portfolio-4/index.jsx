import BreadcrumbArea from "@/src/common/breadcrumb-area";
import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";
import PortfolioItemsArea from "./portfolio-items-area";
import HeaderThree from "@/src/layout/headers/header-3";
import FooterThree from "@/src/layout/footers/footer-3";

const PortfolioFoure = () => {
  return (
    <>
      <HeaderThree />
      <BreadcrumbArea acive_menu="Portfolio Laoute 4" title="Case Study" />
      <PortfolioItemsArea />
      <FooterThree tp_border={true} />
      
    </>
  );
};

export default PortfolioFoure;
