import React from 'react';

// Layout components
import Wrapper from '@/src/layout/wrapper';
import HeaderThree from '@/src/layout/headers/header-3';
import FooterThree from '@/src/layout/footers/footer-3';

// Page sections/components
import HeroAbout from '@/src/components/pages/angular/hero-area';
import Brand from '@/src/components/about-3/brand';
import PromotionArea from '@/src/components/pages/angular/promotion-area';
import ProjectsArea from '@/src/components/pages/angular/projects-area';
import AboutArea from '@/src/components/pages/angular/about-area';
import ServiceArea from '@/src/components/pages/angular/service-area';
import ServiceArea2 from '@/src/components/pages/angular/service-area2';
import Blog from '@/src/components/pages/angular/blog';
import FeatureArea from '@/src/components/pages/angular/feature-area';
import BusinessJourney from '@/src/components/pages/angular/business-journey';
import Service from '@/src/components/pages/angular/service-section';
import AppFaqArea from '@/src/components/pages/angular/app-faq-area';
import ContactHomeSeven from '@/src/components/pages/angular/contact-home';
import SEO from '@/src/common/seo';

// Define SEO data
const SEOData = {
    pageTitle: `Angular Development Solutions | Build Scalable Web Applications 
`,
    description: `Leverage expert Angular development to create scalable, high-performance web applications. Tailored solutions for your business needs. Contact us today!
`,
    image: '/assets/img/seo-image.jpg',  // Update with an actual image path
    url: 'https://webinnovatorspro.com/agency/angular',  // Replace with the actual URL
    keywords: `Angular Development,
Scalable Web Applications,
Web Development Agency,
Web Application,
Scalable Solutions,
Custom Web Solutions,
Digital Solutions,
Innovative Digital Solutions,
Scalable Architecture,

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
