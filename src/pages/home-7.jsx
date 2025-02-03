import React from "react";
import SEO from "../common/seo";
import HomeSeven from "../components/homes/home-7";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Web Innovators Pro - Law Firm"} />
      <HomeSeven />
    </Wrapper>
  );
};

export default index;
