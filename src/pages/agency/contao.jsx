import React from 'react';

// Layout components
import Wrapper from '@/src/layout/wrapper';
import HeaderThree from '@/src/layout/headers/header-3';
import FooterThree from '@/src/layout/footers/footer-3';

// Page sections/components
import HeroAbout from '@/src/components/pages/contao/hero-area';
import Brand from '@/src/components/about-3/brand';
import PromotionArea from '@/src/components/pages/contao/promotion-area';
import ProjectsArea from '@/src/components/pages/contao/projects-area';
import AboutArea from '@/src/components/pages/contao/about-area';
import ServiceArea from '@/src/components/pages/contao/service-area';
import ServiceArea2 from '@/src/components/pages/contao/service-area2';
import Blog from '@/src/components/pages/contao/blog';
import FeatureArea from '@/src/components/pages/contao/feature-area';
import BusinessJourney from '@/src/components/pages/contao/business-journey';
import Service from '@/src/components/pages/contao/service-section';
import AppFaqArea from '@/src/components/pages/contao/app-faq-area';
import ContactHomeSeven from '@/src/components/pages/contao/contact-home';
import SEO from '@/src/common/seo';

// Define SEO data
const SEOData = {
  pageTitle: `Professional Contao Development Services | Custom Web Solutions 
`,
  description: `Deliver scalable, user-friendly web projects with expert Contao development. Tailored solutions, seamless migrations, and ongoing support. Contact us today!
`,
  image: '/assets/img/seo-image.jpg',  // Update with an actual image path
  url: 'https://webinnovatorspro.com/agency/contao',  // Replace with the actual URL
  keywords: `Contao Development,
Custom Web Solutions,
Web App Development,
Contao Agency,
Custom Contao Solutions,
Contao Development Services,
Web Application Development,
Custom Contao Extensions,
Contao Web Design

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
