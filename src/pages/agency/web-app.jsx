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
  return (
    <Wrapper>
      <HeaderThree />
      <HeroAbout />
      <Brand />
      <PromotionArea />
      <ProjectsArea />
      <AboutArea />
      <ServiceArea />
      <Blog />
      <FeatureArea />  
      <BusinessJourney/>
      <Service />
      <ContactHomeSeven />
      <AppFaqArea />
      <ServiceArea2  />
      <FooterThree />
      </Wrapper>
  );
}

export default WebApp;
