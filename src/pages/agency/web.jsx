import React from 'react';

// Layout components
import Wrapper from '@/src/layout/wrapper';
import HeaderThree from '@/src/layout/headers/header-3';
import FooterThree from '@/src/layout/footers/footer-3';

// Page sections/components
import HeroAbout from '@/src/components/pages/web/hero-area';
import Brand from '@/src/components/about-3/brand';
import PromotionArea from '@/src/components/pages/web/promotion-area';
import ProjectsArea from '@/src/components/pages/web/projects-area';
import AboutArea from '@/src/components/pages/web/about-area';
import ServiceArea from '@/src/components/pages/web/service-area';
import ServiceArea2 from '@/src/components/pages/web/service-area2';
import Blog from '@/src/components/pages/web/blog';
import FeatureArea from '@/src/components/pages/web/feature-area';
import BusinessJourney from '@/src/components/pages/web/business-journey';
import Service from '@/src/components/pages/web/service-section';
import AppFaqArea from '@/src/components/pages/web/app-faq-area';
import ContactHomeSeven from '@/src/components/pages/web/contact-home';
import SEO from '@/src/common/seo';

// Define SEO data
const SEOData = {
    pageTitle: `Web Development Agency | Digital Solutions for Your Success 
`,
    description: `Partner with our web development agency to create custom websites & apps that drive results. Over 20 years of expertise in crafting scalable digital solutions.
`,
    image: '/assets/img/seo-image.jpg',  // Update with an actual image path
    url: 'https://webinnovatorspro.com/agency/web',  // Replace with the actual URL
    keywords: `Web Development Agency
Digital Solutions
Custom Web Applications
Web Agency
Digital Excellence
Reliable Development Partner
SEO-friendly Meta Titles
Web Development Expertise
SEO-friendly Web Development

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
