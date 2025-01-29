import React from 'react';


const promotion_content  = {
    img_1: "/assets/img/promotion/law-book-1.jpg",
    img_2: "/assets/img/promotion/law-book-2.jpg",
    title: `Looking to build a website, app, or custom module with Drupal? 
`,
    des: <>S Hossain & Associates is a full service law firm in Bangladesh and
    has adequate
    knowledge, expertise, lawyers, consultants and logistics to undertake any legal a
    full
    service law firm in Dhaka that has been ranked.</>,
}

const {img_1, img_2, title, des}  = promotion_content

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
                                <p className="text-lily wow tpfadeUp">Drupal, the versatile open-source platform, has come a long way since its origins as simple forum software. Today, it stands as a powerful, feature-rich Content Management System (CMS) that delivers exceptional performance and scalability. Trusted by some of the most renowned brands and institutions in the U.S.—including Tesla, NASA, and Harvard University—Drupal powers a vast array of digital experiences across industries. 
                                </p>
                                <p className="text-lily wow tpfadeUp"> Its flexibility allows organizations to design tailored, secure, and robust solutions, making Drupal the CMS of choice for those looking to craft more complex and dynamic platforms. With cutting-edge tools, robust modularity, and a thriving community, Drupal can adapt to meet your unique needs. 
                                </p>
                                <p className="text-lily wow tpfadeUp"> At [Your Agency Name], we specialize in harnessing Drupal’s advanced capabilities to bring your vision to life. Whether you need a sleek website, a high-performing app, or a custom-built module, our seasoned team delivers solutions designed to scale and evolve with your business. 
                                </p>
                                <p className="text-lily wow tpfadeUp"> Partner with an experienced Drupal agency that is committed to transforming your ideas into digital reality. Get in touch today to explore how we can make your project a success. 
                                </p>
                                <a href="#" className="tp-red-btn tp-btn-hover alt-bg-white wow tpfadeUp" data-wow-delay=".3s">
                                    download now
                                    <span className="ml-10 wow tpfadeUp">
                                        <i className="fal fa-long-arrow-right"></i>
                                        <i className="fal fa-long-arrow-right"></i>
                                    </span>
                                    <b></b>

                                </a>
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