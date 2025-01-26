import React from 'react';

// Layout components
import Wrapper from '@/src/layout/wrapper';
import HeaderThree from '@/src/layout/headers/header-3';
import FooterThree from '@/src/layout/footers/footer-3';

// Page sections/components
import HeroAbout from '@/src/components/pages/wordpress/hero-area';
import Brand from '@/src/components/about-3/brand';
import PromotionArea from '@/src/components/pages/wordpress/promotion-area';
import ProjectsArea from '@/src/components/pages/wordpress/projects-area';
import AboutArea from '@/src/components/pages/wordpress/about-area';
import ServiceArea from '@/src/components/pages/wordpress/service-area';
import ServiceArea2 from '@/src/components/pages/wordpress/service-area2';
import Blog from '@/src/components/pages/wordpress/blog';
import FeatureArea from '@/src/components/pages/wordpress/feature-area';
import BusinessJourney from '@/src/components/pages/wordpress/business-journey';
import Service from '@/src/components/pages/wordpress/service-section';
import AppFaqArea from '@/src/components/pages/wordpress/app-faq-area';
import ContactHomeSeven from '@/src/components/homes/home-7/contact-home';
import SEO from '@/src/common/seo';

// Define SEO data
const SEOData = {
  pageTitle: `Custom WordPress Development Services | Expert Web Design 
`,
  description: `Discover custom WordPress solutions tailored for your business. From web design to WooCommerce optimization, our experts deliver SEO-friendly results.
`,
  image: '/assets/img/seo-image.jpg',  // Update with an actual image path
  url: 'https://webinnovatorspro.com/agency/web-app',  // Replace with the actual URL
  keywords: `WordPress Development,
SEO-Friendly Websites,
Web Design,
SEO-friendly Web Development,
WordPress Specialists,
Custom WordPress Solutions,
WooCommerce Optimization,
Website Maintenance,
Web Application Development

`
};

const WordPress = () => {
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
      <AboutArea />
      <ServiceArea />
      <ProjectsArea /> 
      <PromotionArea />
      <FeatureArea />
      <Service />
      <BusinessJourney />
      <Blog />
     
    
     
      <ContactHomeSeven />
      <AppFaqArea />
      <ServiceArea2 />
      <FooterThree />
    </Wrapper>
  );
}

export default WordPress;
