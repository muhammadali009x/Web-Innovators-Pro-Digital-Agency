import React from 'react';


const hero_content = {
    bg_img: "/assets/img/hero/law-hero.png",
    img_1: "/assets/img/hero/law-1.png",
    img_2: "/assets/img/hero/law-2.png",
    img_3: "/assets/img/hero/law-3.png",
    title: `Your Trusted Partner in Web Accessibility 
`,
    des:`Leverage our deep expertise, passion, and hands-on experience to ensure your website or web app is accessible to all. Our dedicated team is here to support you every step of the way with detailed audits, tailored development, and seamless retrofitting to bring your digital presence in line with established accessibility guidelines. 
 `,
    des2:` We understand that creating accessible digital platforms goes beyond compliance—it’s about fostering inclusivity and delivering exceptional user experiences for everyone. Whether you need an in-depth evaluation of your current site, targeted improvements, or a complete overhaul, we’re equipped to help you achieve accessibility with confidence. 
`,
    des3:`Let’s work together to build a more inclusive digital world, one webpage at a time. Reach out to learn how we can make a difference for your organization.
 `,
    btn_text: "Get Start Your Project"
}
const {bg_img , img_1, img_2, img_3, title, des, btn_text}  = hero_content




const HeroAbout = () => {
    return (
        <>
            <div className="law-hero-area mt-40"  
            style={{backgroundImage: `url(${bg_img})`}}
            
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
                                    {des}
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