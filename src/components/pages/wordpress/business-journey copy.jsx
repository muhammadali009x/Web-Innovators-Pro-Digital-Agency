import React from 'react';


const business_journey_content = {
    sub_title: "Schedule a 30 minute call",
    title: `Transform Your Vision into a Powerful Web App`,
    des: `Need a professional web app developer to bring your vision to life? Whether you’re launching a new startup, scaling your current business, or just looking for a refresh, we’ve got the expertise to make it happen. From sleek designs to seamless functionality, we’ll help create a web app that works perfectly—and looks great doing it. Get in touch today and let's build something extraordinary together!
`,
    img_1: "/assets/img/cta/ca-avata.png",
    img_2: "/assets/img/cta/cta-avata-2.png",
}
const { sub_title, title, img_1, img_2, des } = business_journey_content

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
                                        className="bs-cta-section__title ca-cta-section-title cd-headline loading-bar  ca-cta-title wow tpfadeUp">
                                        <span>{title}</span>
                                    </h3>
                                    <p style={{ color: 'white' }}>{des}</p>
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