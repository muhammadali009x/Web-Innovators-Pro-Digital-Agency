import BusinessJourney from '@/src/common/business-journey';
import Brand from '@/src/components/about-3/brand';
import WhyWeBest from '@/src/components/homes/home-10/why-we-best';
import Blog from '@/src/components/homes/home-4/blog';
import FeatureArea from '@/src/components/homes/home-4/feature-area';
import Service from '@/src/components/homes/home-2/Service';

import HeroAbout from '@/src/components/homes/home-7/hero-area';
import PromotionArea from '@/src/components/homes/home-7/promotion-area';
import AboutArea from '@/src/components/homes/home-8/about-area';
import ServiceArea from '@/src/components/homes/home-8/service-area';
import ServiceArea2 from '@/src/components/homes/home-10/service-area';

import ProjectsArea from '@/src/components/homes/home/projects-area';
import FooterThree from '@/src/layout/footers/footer-3';
import HeaderThree from '@/src/layout/headers/header-3';
import Wrapper from '@/src/layout/wrapper';
import React from 'react';
import ContactHomeSeven from '@/src/components/homes/home-7/contact-home';
import AppFaqArea from '@/src/components/homes/home-4/app-faq-area';

const WebApp = () => {


  var Data = [
    {
      Section: 1,
      Title: 'Your Go-To Agency for Web Apps',
      Description: `Looking for a partner to bring your web app vision to life?
         We've got you covered! With years of digital expertise and hands-on experience,
          our developers specialize in crafting innovative web apps tailored to fit your
           needs—no matter the size or complexity of your project. From dynamic startups to 
           established enterprises, we’re here to turn your ideas into impactful digital solutions. 
           Let's build something extraordinary together!`
    },
    {
      Section: 2,
      Title: `Do you need a sophisticated web app that delivers a seamless online experience while keeping your users engaged? We've got you covered! `,
      Para1: `Web apps are changing the game in how businesses connect with their customers. They’re dynamic, versatile, and built to adapt. With instant updates and responsive designs, web apps create intuitive user experiences across all devices. Whether you’re managing breaking news, offering rides, or providing tailored services, a well-developed web app ensures lightning-fast access and unmatched reliability. `,
      Para2: `Take a page from industry leaders like CNN, The New York Times, and Uber—these corporations leverage web apps to immerse their users and stay ahead of the curve. Imagine what a thoughtfully designed web app could do for your business.`
    }
  ]




  return (
    <Wrapper>
      <HeaderThree />
      <HeroAbout Data={Data} />
      <Brand />
      <PromotionArea  Data={Data} />
      <ProjectsArea />
      <AboutArea />
      <ServiceArea />
      <Blog />
      <FeatureArea />
      <BusinessJourney />
      <Service />
      <ContactHomeSeven />
      <AppFaqArea />
      <ServiceArea2 />
      <FooterThree />
    </Wrapper>
  );
}

export default WebApp;
