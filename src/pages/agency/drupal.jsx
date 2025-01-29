import React from 'react';

// Layout components
import Wrapper from '@/src/layout/wrapper';
import HeaderThree from '@/src/layout/headers/header-3';
import FooterThree from '@/src/layout/footers/footer-3';

// Page sections/components
import HeroAbout from '@/src/components/pages/drupal/hero-area';
import Brand from '@/src/components/about-3/brand';
import PromotionArea from '@/src/components/pages/drupal/promotion-area';
import ProjectsArea from '@/src/components/pages/drupal/projects-area';
import AboutArea from '@/src/components/pages/drupal/about-area';
import ServiceArea from '@/src/components/pages/drupal/service-area';
import ServiceArea2 from '@/src/components/pages/drupal/service-area2';
import Blog from '@/src/components/pages/drupal/blog';
import FeatureArea from '@/src/components/pages/drupal/feature-area';
import BusinessJourney from '@/src/components/pages/drupal/business-journey';
import Service from '@/src/components/pages/drupal/service-section';
import AppFaqArea from '@/src/components/pages/drupal/app-faq-area';
import ContactHomeSeven from '@/src/components/pages/drupal/contact-home';
import SEO from '@/src/common/seo';

// Define SEO data
const SEOData = {
    pageTitle: `Custom Drupal Development Services | Trusted Drupal Agency 
`,
    description: `Partner with our expert Drupal agency for tailored web applications & custom modules. Your trusted solution for scalable, high-performing digital platforms.
`,
    image: '/assets/img/seo-image.jpg',  // Update with an actual image path
    url: 'https://webinnovatorspro.com/agency/drupal',  // Replace with the actual URL
    keywords: `Drupal Development,
Web Application,
Drupal Agency,
Custom Module Development,
Drupal Solutions,
Custom module,
Web Application Development,
Web Applications,
Custom Drupal Solutions

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
