import React from 'react';

// Layout components
import Wrapper from '@/src/layout/wrapper';
import HeaderThree from '@/src/layout/headers/header-3';
import FooterThree from '@/src/layout/footers/footer-3';

// Page sections/components
import HeroAbout from '@/src/components/pages/vue-js/hero-area';
import Brand from '@/src/components/about-3/brand';
import PromotionArea from '@/src/components/pages/vue-js/promotion-area';
import ProjectsArea from '@/src/components/pages/vue-js/projects-area';
import AboutArea from '@/src/components/pages/vue-js/about-area';
import ServiceArea from '@/src/components/pages/vue-js/service-area';
import ServiceArea2 from '@/src/components/pages/vue-js/service-area2';
import Blog from '@/src/components/pages/vue-js/blog';
import FeatureArea from '@/src/components/pages/vue-js/feature-area';
import BusinessJourney from '@/src/components/pages/vue-js/business-journey';
import Service from '@/src/components/pages/vue-js/service-section';
import AppFaqArea from '@/src/components/pages/vue-js/app-faq-area';
import ContactHomeSeven from '@/src/components/pages/vue-js/contact-home';
import SEO from '@/src/common/seo';

// Define SEO data
const SEOData = {
  pageTitle: `Expert Vue.js Development Services | Custom Web Applications 
`,
  description: `Partner with our Vue.js agency for scalable web applications. Expert development tailored to your needs. Build high-performance, user-friendly digital solutions. 
`,
  image: '/assets/img/seo-image.jpg',  // Update with an actual image path
  url: 'https://webinnovatorspro.com/agency/vue-js',  // Replace with the actual URL
  keywords: `Vue.js development,
Web application development,
Digital solutions,
Expert Vue.js Agency,
Vue.js Development Services,
Web Application,
Vue.js Agency,
Vue.js Experts,
Web Development Solutions,

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
