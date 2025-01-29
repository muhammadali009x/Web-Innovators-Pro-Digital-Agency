import React from 'react';

// Layout components
import Wrapper from '@/src/layout/wrapper';
import HeaderThree from '@/src/layout/headers/header-3';
import FooterThree from '@/src/layout/footers/footer-3';

// Page sections/components
import HeroAbout from '@/src/components/pages/matomo/hero-area';
import Brand from '@/src/components/about-3/brand';
import PromotionArea from '@/src/components/pages/matomo/promotion-area';
import ProjectsArea from '@/src/components/pages/matomo/projects-area';
import AboutArea from '@/src/components/pages/matomo/about-area';
import ServiceArea from '@/src/components/pages/matomo/service-area';
import ServiceArea2 from '@/src/components/pages/matomo/service-area2';
import Blog from '@/src/components/pages/matomo/blog';
import FeatureArea from '@/src/components/pages/matomo/feature-area';
import BusinessJourney from '@/src/components/pages/matomo/business-journey';
import Service from '@/src/components/pages/matomo/service-section';
import AppFaqArea from '@/src/components/pages/matomo/app-faq-area';
import ContactHomeSeven from '@/src/components/pages/matomo/contact-home';
import SEO from '@/src/common/seo';

// Define SEO data
const SEOData = {
  pageTitle: `Expert Matomo Integration Services | Unlock Web Data Insights 
`,
  description: `Simplify tracking with tailored Matomo solutions. From setup to advanced analytics, gain actionable insights and total control over your web data.
`,
  image: '/assets/img/seo-image.jpg',  // Update with an actual image path
  url: 'https://webinnovatorspro.com/agency/matomo',  // Replace with the actual URL
  keywords: `Matomo Integration,
Web Analytics,
Data Insights,
Tailored Tracking Solutions,
Web Analytics Partner,
Matomo Services,
Matomo Analytics,
Web Data Insights

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
