import React from 'react';

// Layout components
import Wrapper from '@/src/layout/wrapper';
import HeaderThree from '@/src/layout/headers/header-3';
import FooterThree from '@/src/layout/footers/footer-3';

// Page sections/components
import HeroAbout from '@/src/components/pages/react/hero-area';
import Brand from '@/src/components/about-3/brand';
import PromotionArea from '@/src/components/pages/react/promotion-area';
import ProjectsArea from '@/src/components/pages/react/projects-area';
import AboutArea from '@/src/components/pages/react/about-area';
import ServiceArea from '@/src/components/pages/react/service-area';
import ServiceArea2 from '@/src/components/pages/react/service-area2';
import Blog from '@/src/components/pages/react/blog';
import FeatureArea from '@/src/components/pages/react/feature-area';
import BusinessJourney from '@/src/common/business-journey';
import Service from '@/src/components/pages/react/service-section';
import AppFaqArea from '@/src/components/pages/react/app-faq-area';
import ContactHomeSeven from '@/src/components/pages/react/contact-home';
import SEO from '@/src/common/seo';

// Define SEO data
const SEOData = {
    pageTitle: `React Development Services | Custom Apps & Scalable Solutions 
`,
    description: `Partner with React specialists for custom web apps, dynamic UIs, and scalable single-page applications. Build intuitive digital solutions with our expert team. 
`,
    image: '/assets/img/seo-image.jpg',  // Update with an actual image path
    url: 'https://webinnovatorspro.com/agency/react',  // Replace with the actual URL
    keywords: `React Development Services,
Scalable Single-Page Applications,
Dynamic User Interfaces,
React.js Development,
Web App Development,
UI/UX Design,
Digital Solutions,
Web Application Services,
React Development

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
