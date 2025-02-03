import React from "react";
import SEO from "../common/seo";
import Portfolio from "../components/portfolios/portfolio";

const index = () => {
  return (
    <>
      <SEO pageTitle={"Web Innovators Pro - Portfolio"} />
      <Portfolio />
    </>
  );
};

export default index;
