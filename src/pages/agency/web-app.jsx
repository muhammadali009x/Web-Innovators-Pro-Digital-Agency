import React from 'react';

// Layout components
import Wrapper from '@/src/layout/wrapper';
import HeaderThree from '@/src/layout/headers/header-3';
import FooterThree from '@/src/layout/footers/footer-3';

// Page sections/components
import HeroAbout from '@/src/components/pages/web-app/hero-area';
import Brand from '@/src/components/about-3/brand';
import PromotionArea from '@/src/components/pages/web-app/promotion-area';
import ProjectsArea from '@/src/components/pages/web-app/projects-area';
import AboutArea from '@/src/components/pages/web-app/about-area';
import ServiceArea from '@/src/components/pages/web-app/service-area';
import ServiceArea2 from '@/src/components/pages/web-app/service-area2';
import Blog from '@/src/components/pages/web-app/blog';
import FeatureArea from '@/src/components/pages/web-app/feature-area';
import BusinessJourney from '@/src/common/business-journey';
import Service from '@/src/components/pages/web-app/service-section';
import AppFaqArea from '@/src/components/pages/web-app/app-faq-area';
import ContactHomeSeven from '@/src/components/homes/home-7/contact-home';
import SEO from '@/src/common/seo';

// Define SEO data
const SEOData = {
  pageTitle: `Custom Web App Development | Innovative Digital Solutions 
`,
  description: `Boost your business with custom web apps. From design to deployment, we create innovative, user-friendly solutions tailored to your unique needs.
`,
  image: '/assets/img/seo-image.jpg',  // Update with an actual image path
  url: 'https://webinnovatorspro.com/agency/web-app',  // Replace with the actual URL
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
      <PromotionArea />
      <ProjectsArea />
      <Brand />
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
