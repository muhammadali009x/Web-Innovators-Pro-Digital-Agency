import React from 'react';


const promotion_content = {
    img_1: "/assets/img/promotion/law-book-1.jpg",
    img_2: "/assets/img/promotion/law-book-2.jpg",
    title: `Do you need a modern web application or a tailored custom solution? Laravel might be exactly what you're looking for. 
`,
    des: `Since its launch in 2011, Laravel has gone from being a simple PHP framework to a robust, feature-rich platform that's trusted by businesses of all sizes. It powers everything from sleek, user-friendly web applications to complex, large-scale online systems. 
`,
    des2: `Well-known organizations like Lockheed Martin, Purdue University, and Startups.com have leveraged Laravel to manage their online operations effectively. Why? Because it combines flexibility with developer-friendly functionality, making it the go-to choice for projects across multiple industries. 
`,
    des3: `At [Your Agency Name], we bring years of hands-on experience with Laravel to deliver tailored solutions for businesses just like yours. Whether you’re launching a startup or expanding your enterprise, our team is here to guide you every step of the way—offering expert advice, strategic planning, and top-tier execution to turn your vision into reality. 
`,
    des4: `Got a project in mind? Let's connect and create something amazing together.
`,
}

const { img_1, img_2, title, des, des2, des3, des4 } = promotion_content

const PromotionArea = () => {
    return (
        <>
            <div className="law-promotion-area wine-bg pt-100 pb-90 p-relative">
                <div className="container">
                    <div className="row align-items-xl-center">
                        {/* <div className="col-xl-6 col-lg-5">
                            <div className="law-promotion-books mb-20">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="law-book text-xl-end mr-10 wow tpfadeUp" data-wow-delay=".4s" data-tilt="" data-tilt-perspective="2000">
                                            <img src={img_1} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="law-book wow tpfadeUp" data-wow-delay=".3s">
                                            <img src={img_2} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="col-xl-12 col-lg-12">
                            <div className="section-title-wraper">
                                <div className="tp-section">
                                    <h2 className="tp-section__title text-white mb-10 text-uppercase wow tpfadeUp"> {title}</h2>
                                    <p className="text-lily wow tpfadeUp"> {des}</p>
                                    <p className="text-lily wow tpfadeUp"> {des2}</p>
                                    <p className="text-lily wow tpfadeUp"> {des3}</p>
                                    <p className="text-lily wow tpfadeUp"> {des4}</p>
                                    {/* <a href="#" className="tp-red-btn tp-btn-hover alt-bg-white wow tpfadeUp" data-wow-delay=".3s">
                                        download now
                                        <span className="ml-10 wow tpfadeUp">
                                            <i className="fal fa-long-arrow-right"></i>
                                            <i className="fal fa-long-arrow-right"></i>
                                        </span>
                                        <b></b>
                                    </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ring-1">
                    <img src="/assets/img/promotion/ring.png" alt="" />
                    <div className="ring-2">
                        <img src="/assets/img/promotion/sm-ring.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default PromotionArea;