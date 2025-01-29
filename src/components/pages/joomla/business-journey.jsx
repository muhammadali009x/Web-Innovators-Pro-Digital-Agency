import React from 'react';


const business_journey_content = {
    sub_title: "Schedule a 30 minute call",
    title: `Our Joomla Resources
`,
    img_1: "/assets/img/cta/ca-avata.png",
    img_2: "/assets/img/cta/cta-avata-2.png",
}
const { sub_title, title, img_1, img_2 } = business_journey_content

const BusinessJourney = ({ style_service }) => {
    return (
        <>
            <div className="tp-bs-cta-area pt-105 pb-120 black-bg p-relative"
                style={{ backgroundImage: `url(${style_service ? null : "/assets/img/cta/ca-cata-pattern.png"})` }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="bs-cta-section text-center">
                                <span className={`bs-cta-section__subtitle ${style_service ? "" : "ca-cta-section-subtitle"} wow tpfadeUp`}>
                                    {sub_title}
                                </span>
                                <div className="cd-intro">
                                    <h3
                                        className="bs-cta-section__title ca-cta-section-title cd-headline loading-bar mb-55 ca-cta-title wow tpfadeUp">
                                        <span>{title}</span>
                                    </h3>
                                    <p>Explore our comprehensive range of Joomla resources, designed to enhance your understanding and improve your Joomla website's performance. Whether you're a beginner or an experienced developer, these guides cover essential topics to help you make the most of your Joomla experience.
                                    </p>
                                </div>
                                <h2>Centralizing Resources Across Multiple Joomla Websites
                                </h2>
                                <p>Managing resources across several Joomla sites can be challenging. Learn how to streamline your processes and centralize resources efficiently, saving time and improving collaboration. This guide outlines practical strategies to reduce duplication and maintain consistency across your sites.
                                </p>
                                <h2>Building a Joomla Development Workflow with Akeeba UNiTE
                                </h2>
                                <p>Discover how to create a structured development workflow using the powerful Akeeba UNiTE tool. This resource offers step-by-step instructions on building a workflow that enhances productivity and simplifies your Joomla development processes.
                                </p>
                                <h2>What is a Joomla Template? 
                                </h2>
                                <p>Dive into the basics of Joomla templates and their role in designing your website. This article explains what templates are, how they function, and why they are essential for customizing the appearance and layout of your Joomla site. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="bs-cta-btns text-center">
                            <a href="#" className={`${style_service ? "tp-btn" : "tp-grd-btn"} mr-30 wow tpfadeUp`}>
                                Schedule a meeting
                                <span className="ml-10">
                                    <i className="fal fa-long-arrow-right"></i>
                                    <i className="fal fa-long-arrow-right"></i>
                                </span>
                            </a> {" "}
                            <a href="#" className={`${style_service ? "tp-white-btn" : "tp-black-btn-rgb"} wow tpfadeUp`}>
                                <span className="mr-10">
                                    <i className="fab fa-google"></i>
                                    <i className="fab fa-google"></i>
                                </span>
                                Google Calendar
                            </a>
                        </div>
                    </div>
                </div>
                <div className="ca-cta-avata">
                    <img src={img_1} alt="" />
                </div>
                <div className="ca-cta-avata-2 ">
                    <img src={img_2} alt="" />
                </div>
            </div>
        </>
    );
};

export default BusinessJourney;