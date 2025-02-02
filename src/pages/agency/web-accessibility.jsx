import React from 'react';

// Layout components
import Wrapper from '@/src/layout/wrapper';
import HeaderThree from '@/src/layout/headers/header-3';
import FooterThree from '@/src/layout/footers/footer-3';

// Page sections/components
import HeroAbout from '@/src/components/pages/web-accessibility/hero-area';
import Brand from '@/src/components/about-3/brand';
import PromotionArea from '@/src/components/pages/web-accessibility/promotion-area';
import ProjectsArea from '@/src/components/pages/web-accessibility/projects-area';
import AboutArea from '@/src/components/pages/web-accessibility/about-area';
import ServiceArea from '@/src/components/pages/web-accessibility/service-area';
import ServiceArea2 from '@/src/components/pages/web-accessibility/service-area2';
import Blog from '@/src/components/pages/web-accessibility/blog';
import FeatureArea from '@/src/components/pages/web-accessibility/feature-area';
import BusinessJourney from '@/src/components/pages/web-accessibility/business-journey';
import Service from '@/src/components/pages/web-accessibility/service-section';
import AppFaqArea from '@/src/components/pages/web-accessibility/app-faq-area';
import ContactHomeSeven from '@/src/components/pages/web-accessibility/contact-home';
import SEO from '@/src/common/seo';

// Define SEO data
const SEOData = {
  pageTitle: `Web Accessibility Services | Inclusive & Compliant Design 
`,
  description: `Ensure your website is inclusive and meets accessibility guidelines. Our experts offer audits, retrofitting, and accessible design solutions for all users.
`,
  image: '/assets/img/seo-image.jpg',  // Update with an actual image path
  url: 'https://webinnovatorspro.com/agency/web-app',  // Replace with the actual URL
  keywords: `Web Accessibility,
Digital Inclusivity,
Accessible Design,
Accessible Web Design,
Web Accessibility Services,
Inclusive Web Design,
Digital Platform Accessibility,
Accessibility Solutions,
Accessible Development

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
