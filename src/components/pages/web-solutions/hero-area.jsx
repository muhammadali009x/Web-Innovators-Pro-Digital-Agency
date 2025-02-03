import React from 'react';


const hero_content = {
    bg_img: "/assets/img/hero/heroimage.webp",
    img_1: "/assets/img/hero/law-1.png",
    img_2: "/assets/img/hero/law-2.png",
    img_3: "/assets/img/hero/law-3.png",
    title: `Web Solutions & Services`,
    des: <>We’ve always known that for businesses large and small, IT will <br /> can be a real challenge to manage.</>,
    btn_text: "Get Started Your Project"
}
const {bg_img , img_1, img_2, img_3, title, des, btn_text}  = hero_content




const HeroAbout = () => {
    return (
        <>
            <div className="law-hero-area"  
            style={{backgroundImage: `url(${bg_img})`}}
            
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
                                With over 20 years of experience in web development, we provide comprehensive solutions tailored to meet your digital needs. From strategic planning and development to ongoing maintenance, our team ensures your projects are delivered with precision and care. 

                                </p>
                                <p className="mb-50 wow tpfadeUp" data-wow-delay=".4s">
                                Whether you're launching a new website, developing a web application, or upgrading an existing platform, we bring expertise and dedication to every stage of the process. We're not just here to deliver a product—we're here to support the growth and success of your digital presence.

                                </p>
                                <a href='/contact' className="tp-red-btn tp-btn-hover alt-bg-white wow tpfadeUp" data-wow-delay=".5s">
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