import React from 'react';


const hero_content = {
    bg_img: "/assets/img/hero/law-hero.png",
    img_1: "/assets/img/hero/law-1.png",
    img_2: "/assets/img/hero/law-2.png",
    img_3: "/assets/img/hero/law-3.png",
    title: `Your Trusted Drupal Agency`,
    des: <>We’ve always known that for businesses large and small, IT will <br /> can be a real challenge to manage.</>,
    btn_text: "Get Started Your Project"
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
                                {/* <div className="law-hero__imgs mb-35 d-flex">
                                    <div className="law-img-1 mr-15 wow tpfadeUp" data-wow-delay=".2s">
                                        <img src={img_1} alt="" />
                                    </div>
                                    <div className="law-img-1 mr-15 wow tpfadeUp" data-wow-delay=".3s">
                                        <img src={img_2} alt="" />
                                    </div>
                                    <div className="law-img-1 wow tpfadeUp" data-wow-delay=".4s">
                                        <img src={img_3} alt="" />
                                    </div>
                                </div> */}
                                <div className="law-hero__content">
                                    <h2 className="law-hero__content-title mb-20 wow tpfadeUp">{title}</h2>
                                    <p className="mb-50 wow tpfadeUp" data-wow-delay=".4s">
                                        Since 2010, we’ve been partnering with businesses to seamlessly integrate Drupal into their workflows, helping them achieve critical business goals. With over 13 years of in-depth experience in Drupal development, we bring a blend of expert knowledge and practical insight to every project we undertake.

                                    </p>
                                    <p className="mb-50 wow tpfadeUp" data-wow-delay=".4s">
                                        Our team specializes in planning, developing, and maintaining Drupal solutions tailored to your unique needs. From building dynamic web applications to optimizing your existing projects for performance and scalability, we ensure your Drupal platform evolves alongside your goals.

                                    </p>
                                    <p className="mb-50 wow tpfadeUp" data-wow-delay=".4s">
                                        Whether you’re looking to launch a new project or enhance an existing one, our expertise guarantees a trusted partnership every step of the way. Together, we’ll unlock the full potential of Drupal for your business.

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