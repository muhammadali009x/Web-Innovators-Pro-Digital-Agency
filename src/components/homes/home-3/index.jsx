import LineWrap from "@/src/common/line-wrap";
import FooterThree from "@/src/layout/footers/footer-3";
import HeaderThree from "@/src/layout/headers/header-3";
import React from "react";
import About from "./about";
import BlogArea from "./blog-area";
import CtaArea from "./cta-area";
import FeatureLists from "./feature-lists";
import HeroBanner from "./hero-banner";
import OurTeam from "./our-team";
import PricePlan from "./price-plan";
import ProjectArea from "./project-area";
import Testimonial from "./testimonial";
import ServiceArea from "../home-8/service-area";
import ProjectsArea from "../home/projects-area";
import AppFaqArea from "../home-4/app-faq-area";

const HomeThree = () => {

  const service_data = [
    {
      id: 1,
      img: "/assets/img/services/icon/ca-sv-icon-1.png",
      title: "Accessibility",
      des: <>Our typical customer doesn’t want to be distracted by IT Services.</>
    },
    {
      id: 2,
      img: "/assets/img/services/icon/ca-sv-icon-2.png",
      title: "Angular",
      des: <>Our typical customer doesn’t want to be distracted by IT Services.</>
    },
    {
      id: 3,
      img: "/assets/img/services/icon/ca-sv-icon-3.png",
      title: "Contao",
      des: <>Our typical customer doesn’t want to be distracted by IT Services.</>
    },
    {
      id: 4,
      img: "/assets/img/services/icon/ca-sv-icon-3.png",
      title: "Drupal",
      des: <>Our typical customer doesn’t want to be distracted by IT Services.</>
    },
    {
      id: 5,
      img: "/assets/img/services/icon/ca-sv-icon-3.png",
      title: "Joomla",
      des: <>Our typical customer doesn’t want to be distracted by IT Services.</>
    },
    {
      id: 6,
      img: "/assets/img/services/icon/ca-sv-icon-3.png",
      title: "Laravel",
      des: <>Our typical customer doesn’t want to be distracted by IT Services.</>
    },
    {
      id: 7,
      img: "/assets/img/services/icon/ca-sv-icon-3.png",
      title: "Matomo",
      des: <>Our typical customer doesn’t want to be distracted by IT Services.</>
    },
    {
      id: 8,
      img: "/assets/img/services/icon/ca-sv-icon-3.png",
      title: "Symfony",
      des: <>Our typical customer doesn’t want to be distracted by IT Services.</>
    },
    {
      id: 9,
      img: "/assets/img/services/icon/ca-sv-icon-3.png",
      title: "Web Apps",
      des: <>Our typical customer doesn’t want to be distracted by IT Services.</>
    },
    {
      id: 10,
      img: "/assets/img/services/icon/ca-sv-icon-3.png",
      title: "WordPress",
      des: <>Our typical customer doesn’t want to be distracted by IT Services.</>
    },
    {
      id: 11,
      img: "/assets/img/services/icon/ca-sv-icon-3.png",
      title: "React",
      des: <>Our typical customer doesn’t want to be distracted by IT Services.</>
    },
    {
      id: 12,
      img: "/assets/img/services/icon/ca-sv-icon-3.png",
      title: "Vue.js",
      des: <>Our typical customer doesn’t want to be distracted by IT Services.</>
    },
  ]

  return (
    <>
      <LineWrap />
      <HeaderThree />
      <HeroBanner />  
      <ServiceArea service_data={service_data}/> 
      <ProjectsArea />
      <AppFaqArea />   
      <BlogArea />
      <FooterThree />
    </>
  );
};

export default HomeThree;
