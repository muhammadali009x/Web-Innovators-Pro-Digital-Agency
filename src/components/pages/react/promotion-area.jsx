import React from 'react';


const promotion_content = {
    img_1: "/assets/img/promotion/law-book-1.jpg",
    img_2: "/assets/img/promotion/law-book-2.jpg",
    title: `Do you need a dynamic user interface or a scalable single-page application? `,
    des: `React, the open-source JavaScript library maintained by Facebook, has revolutionized front-end development since its debut in 2013. Known for its efficiency and flexibility, React allows developers to create seamless, interactive user interfaces with ease. It’s no wonder industry giants like Instagram, Airbnb, and Netflix trust React to power their cutting-edge digital platforms. 
`,
    des2: `With React, you get more than just a tool—it’s a game-changer in web development. Whether you're aiming for lightning-fast performance or delivering an intuitive user experience, React empowers your digital ambitions with its component-driven architecture and reusable code. 
`,
    des3: `Our team of experienced developers knows React inside and out! From building sophisticated web applications to crafting interfaces that keep your users engaged, we're ready to support you every step of the way. Whether it’s a small-scale project or a comprehensive digital overhaul, we’re here to ensure your vision comes to life. 
`,
    des4: `Let's build something incredible—together.
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