import React from 'react';

const hero_content = {
    bg_img: "/assets/img/hero/heroimage.webp",
    img_1: "/assets/img/hero/law-1.png",
    img_2: "/assets/img/hero/law-2.png",
    img_3: "/assets/img/hero/law-3.png",
    title: `Your Go-To Agency for Web Apps `,
    des: `Looking for a partner to bring your web app vision to life? We've got you covered! With years of digital expertise and hands-on experience, our developers specialize in crafting innovative web apps tailored to fit your needs—no matter the size or complexity of your project. From dynamic startups to established enterprises, we’re here to turn your ideas into impactful digital solutions. Let's build something extraordinary together!`,
    btn_text: "Get Start Your project"
}

const {bg_img , img_1, img_2, img_3, title, des, btn_text}  = hero_content

const HeroAbout = () => {
    return (
        <>
            <div className="law-hero-area"  
            style={{backgroundImage: `url(${bg_img})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="law-hero-info">
                            
                            <div className="law-hero__content">
                                <h1 className="law-hero__content-title mb-20 wow tpfadeUp">{title}</h1>
                                <p className="mb-50 wow tpfadeUp" data-wow-delay=".4s">
                                    {des}
                                </p>
                                <a href='#contact-form-section' className="tp-red-btn tp-btn-hover alt-bg-white wow tpfadeUp" data-wow-delay=".5s">
                                    {/* <span className="mr-10">
                                        <i className="fas fa-phone"></i>
                                        <i className="fas fa-phone"></i>
                                    </span> */}
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