import React from 'react';

// Layout components
import Wrapper from '@/src/layout/wrapper';
import HeaderThree from '@/src/layout/headers/header-3';
import FooterThree from '@/src/layout/footers/footer-3';

// Page sections/components
import HeroAbout from '@/src/components/pages/symfony/hero-area';
import Brand from '@/src/components/about-3/brand';
import PromotionArea from '@/src/components/pages/symfony/promotion-area';
import ProjectsArea from '@/src/components/pages/symfony/projects-area';
import AboutArea from '@/src/components/pages/symfony/about-area';
import ServiceArea from '@/src/components/pages/symfony/service-area';
import ServiceArea2 from '@/src/components/pages/symfony/service-area2';
import Blog from '@/src/components/pages/symfony/blog';
import FeatureArea from '@/src/components/pages/symfony/feature-area';
import BusinessJourney from '@/src/components/pages/symfony/business-journey';
import Service from '@/src/components/pages/symfony/service-section';
import AppFaqArea from '@/src/components/pages/symfony/app-faq-area';
import ContactHomeSeven from '@/src/components/pages/symfony/contact-home';
import SEO from '@/src/common/seo';

// Define SEO data
const SEOData = {
  pageTitle: `Symfony Agency | Expert Custom Symfony Solutions 
`,
  description: `Partner with our Symfony agency to build scalable web applications. Get custom web solutions crafted by expert Symfony developers. Let's create extraordinary! 
`,
  image: '/assets/img/seo-image.jpg',  // Update with an actual image path
  url: 'https://webinnovatorspro.com/agency/symfony',  // Replace with the actual URL
  keywords: `Web App Development,
Custom Web Applications,
Innovative Web Apps,
Web App Design,
Innovative Web App Solutions,
Digital Solutions <end,
Innovative Web Solutions,
SEO-friendly Web Apps,
Custom Web App Development,
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
