import React from 'react';


const business_journey_content = {
    sub_title: `Schedule A Free Consultation `,
    title: `The Future of WordPress`,
    des: `Over the past 15 years, WordPress has experienced remarkable growth, showing no signs of slowing down. Its enduring popularity ensures strong developer and community support, making it a reliable choice for individuals and businesses alike. Whether you're launching a simple blog or building a dynamic ecommerce store, WordPress remains a trusted solution backed by a dedicated community.
`,
    des2: `WordPress is more than a CMS; it’s an evolving platform with immense possibilities. But to make the most of it, it's essential to understand both its strengths and challenges. If you're considering WordPress for your next project, we'd be happy to discuss how to maximize its potential to meet your unique needs. Reach out to learn more!
`,
    des3: `Tell us more about your WordPress project—we’d love to help bring your vision to life! Simply fill out the form, and our team will review your details and get back to you within one working day. 
`,
    des4: `Prefer a more personal touch? Feel free to call us directly or send us an email. Whether you have specific requirements in mind or need guidance, we’re here to ensure your project runs smoothly and aligns perfectly with your goals.
`,
    img_1: "/assets/img/cta/ca-avata.png",
    img_2: "/assets/img/cta/cta-avata-2.png",
}
const {sub_title, title, img_1, img_2, des,des2,des3,des4,}  = business_journey_content

const BusinessJourney = ({style_service}) => {
    return (
        <>
            <div className="tp-bs-cta-area pt-105 pb-120 black-bg p-relative"
            style={{backgroundImage : `url(${style_service ? null : "/assets/img/cta/ca-cata-pattern.png"})`}}
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
                                    className="bs-cta-section__title ca-cta-section-title cd-headline loading-bar mb-5 ca-cta-title wow tpfadeUp">
                                    <span>{title}</span> 
                                </h3>
                                <p style={{color: 'white'}}>{des}</p>
                                <p style={{color: 'white'}}>{des2}</p>
                                <p style={{color: 'white'}}>{des3}</p>
                                <p style={{color: 'white'}}>{des4}</p>
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