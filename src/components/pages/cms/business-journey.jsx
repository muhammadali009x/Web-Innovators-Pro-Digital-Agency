import React from 'react';


const business_journey_content = {
    sub_title: "Schedule a 30 minute call",
    title: `Looking for a CMS Agency to bring your digital vision to life? 
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
                                    <h3 className="bs-cta-section__title ca-cta-section-title cd-headline loading-bar mb-55 ca-cta-title wow tpfadeUp">
                                        <span>{title}</span> 
                                    </h3>
                                    <p style={{color: 'white'}}>Choosing the right Content Management System (CMS) partner is critical to creating a website that’s not only functional but also user-friendly, scalable, and tailored to your specific needs.
                                    </p>
                                    <p style={{color: 'white'}}>Our team specializes in CMS solutions like WordPress, Drupal, and Joomla—designed to help you easily manage your content while ensuring your site delivers a seamless user experience. Whether you’re looking to build a new site from the ground up or need help optimizing an existing platform, we provide expert guidance throughout every step of the process.
                                    </p>
                                    <p style={{color: 'white'}}>With a focus on clarity, customization, and support, we’ll work with you to develop a CMS solution that grows with your business. Contact us today to learn how we can assist you.
                                    </p>
                                </div>
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