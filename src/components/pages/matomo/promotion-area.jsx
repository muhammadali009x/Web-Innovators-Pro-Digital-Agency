import React from 'react';


const promotion_content = {
    img_1: "/assets/img/promotion/law-book-1.jpg",
    img_2: "/assets/img/promotion/law-book-2.jpg",
    title: `Are you searching for robust data insights into your website or app or need a tailored tracking solution that prioritizes privacy? 
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
                        
                        <div className="col-xl-12 col-lg-12">
                            <div className="section-title-wraper">
                                <div className="tp-section">
                                    <h2 className="tp-section__title text-white mb-10 text-uppercase wow tpfadeUp"> {title}</h2>
                                    <p className="text-lily wow tpfadeUp"> Matomo Analytics (previously known as Piwik) delivers a comprehensive web analytics platform designed with flexibility and privacy in mind. Unlike other analytics tools, Matomo allows businesses to maintain full ownership and control over their data, ensuring compliance without sacrificing user privacy. Trusted by industry-leading U.S. companies, Matomo is valued for its ability to adapt and meet unique business tracking requirements while providing actionable insights.
                                    </p>
                                    <p className="text-lily wow tpfadeUp">Our agency specializes in installing, configuring, and customizing Matomo to align seamlessly with your specific goals. Whether you’re looking to implement a unique tracking strategy or enhance existing systems, we ensure you unlock the full potential of Matomo.
                                    </p>
                                    <p className="text-lily wow tpfadeUp">Leverage our deep expertise with Matomo, especially when integrated with technologies like:
                                    </p>
                                    <ul  >
                                        <li>WordPress </li>
                                        <li>Drupal </li>
                                        <li>Joomla </li>
                                        <li>Laravel </li>
                                        <li>Symfony </li>
                                        <li>React </li>
                                        <li>Angular </li>
                                        <li>Vue.js </li>
                                    </ul>
                                    <p>As your web agency partner, our mission is clear—to create a Matomo solution tailored to your needs while empowering you with data insights that drive informed decisions. Connect with us to explore how we can transform your tracking strategy today.
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