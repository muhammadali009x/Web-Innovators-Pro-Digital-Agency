import React from 'react';


const hero_content = {
    bg_img: "/assets/img/hero/law-hero.png",
    img_1: "/assets/img/hero/law-1.png",
    img_2: "/assets/img/hero/law-2.png",
    img_3: "/assets/img/hero/law-3.png",
    title: `Your Trusted Partner for Matomo Integration
`,
    des: <>We’ve always known that for businesses large and small, IT will <br /> can be a real challenge to manage.</>,
    btn_text: "786. 869. 350. 00"
}
const { bg_img, img_1, img_2, img_3, title, des, btn_text } = hero_content




const HeroAbout = () => {
    return (
        <>
            <div className="law-hero-area mt-40"
                style={{ backgroundImage: `url(${bg_img})` }}

            >
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="law-hero-info">
                                <div className="law-hero__imgs mb-35 d-flex">
                                    <div className="law-img-1 mr-15 wow tpfadeUp" data-wow-delay=".2s">
                                        <img src={img_1} alt="" />
                                    </div>
                                    <div className="law-img-1 mr-15 wow tpfadeUp" data-wow-delay=".3s">
                                        <img src={img_2} alt="" />
                                    </div>
                                    <div className="law-img-1 wow tpfadeUp" data-wow-delay=".4s">
                                        <img src={img_3} alt="" />
                                    </div>
                                </div>
                                <div className="law-hero__content">
                                    <h2 className="law-hero__content-title mb-20 wow tpfadeUp">{title}</h2>
                                    <p className="mb-50 wow tpfadeUp" data-wow-delay=".4s">
                                        Not every data point creates actionable insights—and that’s where we come in. Whether you’re tracking e-commerce metrics to boost conversion rates, analyzing events to understand user interactions, or mapping user journeys to enhance overall experience, our tailored Matomo solutions are designed to align with your specific business goals.

                                    </p>
                                    <p className="mb-50 wow tpfadeUp" data-wow-delay=".4s">
                                        Our team has the expertise to assist with Matomo projects of any scale, from initial setup and custom configurations to advanced analysis and reporting. With a focus on empowering your organization, we’ll ensure that your data doesn’t just speak—you’ll know how to listen, interpret, and act on it for meaningful outcomes.

                                    </p>
                                    <p className="mb-50 wow tpfadeUp" data-wow-delay=".4s">
                                        When tracking meets strategy, incredible insights follow. Connect with us to make the most of what Matomo has to offer.

                                    </p>
                                    <a href={`tel:${btn_text}`} className="tp-red-btn tp-btn-hover alt-bg-white wow tpfadeUp" data-wow-delay=".5s">
                                        <span className="mr-10">
                                            <i className="fas fa-phone"></i>
                                            <i className="fas fa-phone"></i>
                                        </span>
                                        {btn_text}
                                        <b></b>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroAbout;