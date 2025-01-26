import React from 'react';


const promotion_content  = {
    img_1: "/assets/img/promotion/law-book-1.jpg",
    img_2: "/assets/img/promotion/law-book-2.jpg",
    title: `Do you need a sophisticated web app that delivers a seamless online experience while keeping your users engaged? We've got you covered!`,
    des: `Web apps are changing the game in how businesses connect with their customers. They’re dynamic, versatile, and built to adapt. With instant updates and responsive designs, web apps create intuitive user experiences across all devices. Whether you’re managing breaking news, offering rides, or providing tailored services, a well-developed web app ensures lightning-fast access and unmatched reliability. `,
    des2: `Take a page from industry leaders like CNN, The New York Times, and Uber—these corporations leverage web apps to immerse their users and stay ahead of the curve. Imagine what a thoughtfully designed web app could do for your business. `,
    des3: `We bring both expertise and passion to web app development, supporting projects small and large. From strategy to deployment, we’re here to help you create digital solutions that deliver real results. Our team works across a range of cutting-edge technologies, ensuring your vision is not just a goal but a reality. `,
    des4: `Ready to revolutionize how your business interacts online? Let's build something exceptional together.`


}

const {img_1, img_2, title, des, des2, des3, des4}  = promotion_content

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