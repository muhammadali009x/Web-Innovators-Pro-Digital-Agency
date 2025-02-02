import React from 'react';


const business_journey_content = {
    sub_title: "Schedule a 30 minute call",
    title: `Need a top-notch React developer to bring your ideas to life? 
`,
    des: `Whether you’re building a sleek web app or enhancing your user experience, our expert React developers have the skills and creativity to turn your vision into reality. With a deep understanding of modern frameworks and clean, efficient code, they’re ready to tackle your next big project. 
`,
    des2: `Let's make it happen—connect with us today!
`,
    img_1: "/assets/img/cta/ca-avata.png",
    img_2: "/assets/img/cta/cta-avata-2.png",
}
const { sub_title, title, img_1, img_2, des, des2 } = business_journey_content

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
                                    <p style={{ color: 'white' }}>{des2}</p>
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
                            {/* {/* <a href="#" className={`${style_service ? "tp-white-btn" : "tp-black-btn-rgb"} wow tpfadeUp`}>
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