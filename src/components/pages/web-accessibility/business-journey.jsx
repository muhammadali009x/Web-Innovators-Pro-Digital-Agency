import React from 'react';


const business_journey_content = {
    sub_title: "Schedule a 30 minute call",
    title: `What Does Accessibility Mean to Us?
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
                                        className="bs-cta-section__title ca-cta-section-title cd-headline loading-bar   ca-cta-title wow tpfadeUp">
                                        <span>{title}</span>

                                    </h3>
                                    <p style={{ color: 'white' }}>When we first started out, accessibility wasn’t at the forefront of our mission—but that changed during a defining project in our early days. Our agency manager, Dean, worked on a web project for a local non-profit that served individuals with various disabilities. Although it began as just another project, it quickly transformed into something deeply meaningful.
                                    </p>
                                    <p style={{ color: 'white' }}>During the development process, Dean had the opportunity to meet individuals from the disability community and hear their personal stories. This experience wasn't just eye-opening—it was life-changing. It gave us a firsthand understanding of the challenges many people face when accessing digital spaces and the real-life impact thoughtful, inclusive web design can have.
                                    </p>
                                    <p style={{ color: 'white' }}>This project not only enhanced our technical expertise but also reshaped how we view web accessibility as a whole. It became more than a technical deliverable; it became a responsibility. It set the foundation for our ongoing commitment to creating accessible digital solutions and championing inclusivity in every project we take on.
                                    </p>
                                    <p style={{ color: 'white' }}>Accessibility, for us, is not just a checkbox—it’s a fundamental value rooted in respect, empathy, and the belief that everyone deserves equal access to the digital world.
                                    </p>
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