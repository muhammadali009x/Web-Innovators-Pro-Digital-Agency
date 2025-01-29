import React from 'react';


const business_journey_content = {
    sub_title: "Schedule a 30 minute call",
    title: `Looking for a reliable web agency to bring your vision to life? 
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
                                    <p>We specialize in creating tailored websites and digital solutions that help businesses thrive. Whether you need a brand-new website, an update to your existing platform, or custom web applications, our experienced team is here to deliver high-quality results.
                                    </p>
                                    <p>What sets us apart?
                                    </p>
                                    <p>
                                        <ul>
                                            <li><strong>Expertise across platforms:</strong> From WordPress to React, we work with a variety of technologies to suit your exact needs.
                                            </li>
                                            <li><strong>Tailored solutions:</strong>Our team collaborates closely with you to develop a digital experience that reflects your goals and values.</li>
                                            <li><strong>Commitment to quality:</strong>From design to development, we ensure every detail is handled with precision.
                                            </li>
                                        </ul>
                                    </p>
                                    <p>Partner with us to create a digital presence that stands out. Reach out today to discuss how we can support your business goals!
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