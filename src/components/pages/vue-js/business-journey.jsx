import React from 'react';


const business_journey_content = {
    sub_title: "Schedule a 30 minute call",
    title: `Searching for an experienced Vue.js developer to bring your project to life?`,
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
                                    <p style={{color: 'white'}}>Our skilled developers specialize in creating dynamic, high-performing web applications using Vue.js. Whether you need a single-page application or a fully-featured web solution, we provide expertise in crafting efficient and scalable code tailored to your unique requirements.</p>
                                    <p style={{color: 'white'}}>Partner with us for:</p>

                                    <ul style={{color: 'white'}}>
                                        <li>Expertise in Vue.js frameworks and libraries</li>
                                        <li>Clean, maintainable, and optimized code </li>
                                        <li>Custom solutions designed to grow with your business </li>
                                        <li>Commitment to meeting deadlines and exceeding expectations
                                        </li>
                                    </ul>

                                    <p>Discover how our professional Vue.js developers can elevate your project. Let's build something exceptional together.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="bs-cta-btns text-center">
                            <a href="/contact" className={`${style_service ? "tp-btn" : "tp-grd-btn"} mr-30 wow tpfadeUp`}> 
Get In Touch
                                <span className="ml-10">
                                    <i className="fal fa-long-arrow-right"></i>
                                    <i className="fal fa-long-arrow-right"></i>
                                </span>
                            </a> {" "}
                            {/* <a href="#" className={`${style_service ? "tp-white-btn" : "tp-black-btn-rgb"} wow tpfadeUp`}>
                                <span className="mr-10">
                                    <i className="fab fa-google"></i>
                                    <i className="fab fa-google"></i>
                                </span>
                                Google Calendar
                            </a> */}
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