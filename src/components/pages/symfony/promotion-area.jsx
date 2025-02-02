import React from 'react';


const promotion_content  = {
    img_1: "/assets/img/promotion/law-book-1.jpg",
    img_2: "/assets/img/promotion/law-book-2.jpg",
    title: `Looking for a Symfony web application or a custom solution that stands out? 
`,
    des: `Symfony is a powerhouse PHP framework with an impressive track record since its launch in 2005. Renowned for its flexibility and reliability, it has become the backbone of innovative web applications across industries. Some of the world’s most iconic brands—like Hulu, Spotify, and even Drupal—trust Symfony to drive their digital platforms. 
`,
    des2: `Why Symfony? Its versatility makes it ideal for projects of all shapes and sizes. Whether you’re launching a sleek startup tool or managing a global enterprise solution, Symfony provides unparalleled scalability, speed, and functionality. 
`,
    des3: `At our agency, we take the complexity out of Symfony development. With years of hands-on experience across diverse projects, our team of expert Symfony developers can help translate your ideas into sophisticated, seamless web applications. 
`,
    des4: `From crafting custom solutions to scaling your existing platforms, we’re here to support your vision every step of the way. Whether you need expert advice or a dedicated team to tackle your next big project, we’ve got you covered. 
`,
    des5: `Why settle for ordinary when you can create extraordinary? Get in touch today, and let’s start building something exceptional together! 
`,
}

const {img_1, img_2, title, des, des2, des3, des4, des5}  = promotion_content

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
                                <p className="text-lily wow tpfadeUp"> {des5}</p>
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