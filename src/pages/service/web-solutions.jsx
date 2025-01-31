import React from 'react';

// Layout components
import Wrapper from '@/src/layout/wrapper';
import HeaderThree from '@/src/layout/headers/header-3';
import FooterThree from '@/src/layout/footers/footer-3';

// Page sections/components
import HeroAbout from '@/src/components/pages/web-solutions/hero-area';
import Brand from '@/src/components/about-3/brand';
import PromotionArea from '@/src/components/pages/web-solutions/promotion-area';
import ProjectsArea from '@/src/components/pages/web-solutions/projects-area';
import AboutArea from '@/src/components/pages/web-solutions/about-area';
import ServiceArea from '@/src/components/pages/web-solutions/service-area';
import ServiceArea2 from '@/src/components/pages/web-solutions/service-area2';
import Blog from '@/src/components/pages/web-solutions/blog';
import FeatureArea from '@/src/components/pages/web-solutions/feature-area';
import BusinessJourney from '@/src/components/pages/web-solutions/business-journey';
import Service from '@/src/components/pages/web-solutions/service-section';
import AppFaqArea from '@/src/components/pages/web-solutions/app-faq-area';
import ContactHomeSeven from '@/src/components/pages/web-solutions/contact-home';
import SEO from '@/src/common/seo';

// Define SEO data
const SEOData = {
  pageTitle: `SEO-Friendly Web Solutions | Custom Web Development Experts 
`,
  description: `Discover tailored web solutions from the experts in custom development. From CMS websites to accessible apps, we bring your vision to life. Start today!
`,
  image: '/assets/img/seo-image.jpg',  // Update with an actual image path
  url: 'https://webinnovatorspro.com/agency/web-solutions',  // Replace with the actual URL
  keywords: `Digital Project Partner,
CMS-Powered Websites,
SEO-friendly Web Solutions,
Custom Web Development,
CMS Specialist,
Web Solutions,
Digital Services,
Custom Web Applications 
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
