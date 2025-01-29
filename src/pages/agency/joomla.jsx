import React from 'react';

// Layout components
import Wrapper from '@/src/layout/wrapper';
import HeaderThree from '@/src/layout/headers/header-3';
import FooterThree from '@/src/layout/footers/footer-3';

// Page sections/components
import HeroAbout from '@/src/components/pages/joomla/hero-area';
import Brand from '@/src/components/about-3/brand';
import PromotionArea from '@/src/components/pages/joomla/promotion-area';
import ProjectsArea from '@/src/components/pages/joomla/projects-area';
import AboutArea from '@/src/components/pages/joomla/about-area';
import ServiceArea from '@/src/components/pages/joomla/service-area';
import ServiceArea2 from '@/src/components/pages/joomla/service-area2';
import Blog from '@/src/components/pages/joomla/blog';
import FeatureArea from '@/src/components/pages/joomla/feature-area';
import BusinessJourney from '@/src/components/pages/joomla/business-journey';
import Service from '@/src/components/pages/joomla/service-section';
import AppFaqArea from '@/src/components/pages/joomla/app-faq-area';
import ContactHomeSeven from '@/src/components/pages/joomla/contact-home';
import SEO from '@/src/common/seo';

// Define SEO data
const SEOData = {
  pageTitle: `Top Joomla Development & Maintenance Agency | Expert Support 
`,
  description: `Need Joomla support? From development to Joomla 4 migration, our Boston-based agency offers expert services tailored to your website’s needs. Contact us today!
`,
  image: '/assets/img/seo-image.jpg',  // Update with an actual image path
  url: 'https://webinnovatorspro.com/agency/joomla',  // Replace with the actual URL
  keywords: `Joomla Development,
Joomla Maintenance,
Joomla 4 Migration,
Joomla Agency,
Joomla Maintenance <end,
Joomla Experts,
Website Maintenance,
Joomla Migration

`
};

const WebApp = () => {
  return (
    <Wrapper>
      {/* Pass SEOData props to the SEO component */}
      <SEO
        pageTitle={SEOData.pageTitle}
        description={SEOData.description}
        image={SEOData.image}
        url={SEOData.url}
        keywords={SEOData.keywords}
      />
      <HeaderThree />
      <HeroAbout />
      <Brand />
      <PromotionArea />
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
