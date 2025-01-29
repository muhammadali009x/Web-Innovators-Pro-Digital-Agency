import React from 'react';


const business_journey_content = {
    sub_title: "Schedule a 30 minute call",
    title: `Looking for a Drupal agency with proven expertise?`,
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
                                    <h3 className="bs-cta-section__title ca-cta-section-title cd-headline loading-bar ca-cta-title wow tpfadeUp">
                                        <span>{title}</span>
                                    </h3>
                                    <p style={{color: 'white'}}>Our team specializes in creating powerful, scalable, and user-friendly Drupal websites tailored to meet your unique needs. From seamless migrations and custom themes to feature-rich module development, we have the expertise to bring your vision to life.
                                    </p>
                                    <p style={{color: 'white'}}>Whether you’re updating an existing Drupal site or building one from scratch, we’ll work with you every step of the way to deliver a platform that’s as functional as it is visually stunning. Connect with us today to learn how we can support your project!
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