import React from 'react';


const promotion_content = {
    img_1: "/assets/img/promotion/law-book-1.jpg",
    img_2: "/assets/img/promotion/law-book-2.jpg",
    title: `Are you looking for the perfect agency partner for your digital project? 
`,
    des: <>S Hossain & Associates is a full service law firm in Bangladesh and
        has adequate
        knowledge, expertise, lawyers, consultants and logistics to undertake any legal a
        full
        service law firm in Dhaka that has been ranked.</>,
}

const { img_1, img_2, title, des } = promotion_content

const PromotionArea = () => {
    return (
        <>
            <div className="law-promotion-area wine-bg pt-100 pb-90 p-relative">
                <div className="container">
                    <div className="row align-items-xl-center">
                        <div className="col-xl-6 col-lg-5">
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
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <div className="section-title-wraper">
                                <div className="tp-section">
                                    <h2 className="tp-section__title text-white mb-10 text-uppercase wow tpfadeUp"> {title}</h2>
                                    <p className="text-lily wow tpfadeUp">At [Your Company], we understand that a successful digital solution is about more than just code—it’s about creating a seamless platform combined with meaningful content. Whether it's building a sleek website, designing an intuitive web app, or customizing advanced integrations, we have the tools, talent, and expertise to bring your vision to reality.
                                    </p>
                                    <p className="text-lily wow tpfadeUp">For over 20 years, hundreds of businesses across the U.S. have entrusted us to deliver on their digital goals. Our team brings extensive experience across a wide range of platforms and technologies, ensuring personalized solutions that meet your unique business needs.
                                    </p>
                                    <p className="text-lily wow tpfadeUp">Our dedicated team of 25 developers specializes in front-end frameworks like React, Angular, and Vue.js, as well as robust back-end technologies like Laravel and Symfony. Additionally, we excel in CMS solutions such as WordPress and Drupal. Complementing this, we provide expertise in web analytics, performance optimization, and accessibility compliance—ensuring your platform is both high-performing and inclusive for all users.
                                    </p>
                                    <p className="text-lily wow tpfadeUp">Partnering with us means working with a team that is professional, innovative, and committed to delivering exceptional results. We’re ready to turn your digital ideas into impactful realities.
                                    </p>
                                    <p className="text-lily wow tpfadeUp">Get in touch with us today to start your next project!
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