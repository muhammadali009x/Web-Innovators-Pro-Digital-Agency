import BreadcrumbArea from "@/src/common/breadcrumb-area";
import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";
import Brand from "../homes/brand";
import FaqArea from "./faq-area";
import HeaderThree from "@/src/layout/headers/header-3";
import FooterThree from "@/src/layout/footers/footer-3";

const FAQ = () => {
  return (
    <>
      <HeaderThree />
      <BreadcrumbArea acive_menu="FAQ"  title="Frequently Asked Questions" />
      <FaqArea /> 
      <FooterThree />
    </>
  );
};

export default FAQ;
