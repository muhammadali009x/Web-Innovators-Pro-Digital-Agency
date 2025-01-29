import React from 'react';

// Layout components
import Wrapper from '@/src/layout/wrapper';
import HeaderThree from '@/src/layout/headers/header-3';
import FooterThree from '@/src/layout/footers/footer-3';

// Page sections/components
import HeroAbout from '@/src/components/pages/cms/hero-area';
import Brand from '@/src/components/about-3/brand';
import PromotionArea from '@/src/components/pages/cms/promotion-area';
import ProjectsArea from '@/src/components/pages/cms/projects-area';
import AboutArea from '@/src/components/pages/cms/about-area';
import ServiceArea from '@/src/components/pages/cms/service-area';
import ServiceArea2 from '@/src/components/pages/cms/service-area2';
import Blog from '@/src/components/pages/cms/blog';
import FeatureArea from '@/src/components/pages/cms/feature-area';
import BusinessJourney from '@/src/components/pages/cms/business-journey';
import Service from '@/src/components/pages/cms/service-section';
import AppFaqArea from '@/src/components/pages/cms/app-faq-area';
import ContactHomeSeven from '@/src/components/pages/cms/contact-home';
import SEO from '@/src/common/seo';

// Define SEO data
const SEOData = {
  pageTitle: `Expert CMS Development by Trusted Web Agency 
`,
  description: `Discover scalable CMS development solutions tailored to your business. Partner with our expert web agency for custom digital platforms, design, and support.
`,
  image: '/assets/img/seo-image.jpg',  // Update with an actual image path
  url: 'https://webinnovatorspro.com/agency/cms',  // Replace with the actual URL
  keywords: `CMS Development,
Web Agency,
Digital Platform,
Web Design,
Digital Solutions,
Digital Platforms <end,
Digital Project,
CMS selection,
Web development agency

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
