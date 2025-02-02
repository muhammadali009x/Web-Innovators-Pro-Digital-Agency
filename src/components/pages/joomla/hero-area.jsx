import React from 'react';


const hero_content = {
    bg_img: "/assets/img/hero/law-hero.png",
    img_1: "/assets/img/hero/law-1.png",
    img_2: "/assets/img/hero/law-2.png",
    img_3: "/assets/img/hero/law-3.png",
    title: `We’d love to be your trusted Joomla Agency.`,
    des: <>We’ve always known that for businesses large and small, IT will <br /> can be a real challenge to manage.</>,
    btn_text: "Get Started Your Project"
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
                                Based in Boston, we have been working with Joomla for nearly two decades, gaining deep, hands-on experience with this versatile content management system. Our expertise encompasses every aspect of Joomla, from planning and designing to developing and maintaining robust, efficient websites tailored to your unique needs. 
                                </p>
                                <p className="mb-50 wow tpfadeUp" data-wow-delay=".4s">
                                By partnering with us, you gain access to a team that understands Joomla inside and out. Whether you’re starting from scratch or need an expert hand to optimize or maintain your existing site, we’re here to guide you every step of the way. 
                                </p>
                                <p className="mb-50 wow tpfadeUp" data-wow-delay=".4s">
                                Looking for a dependable Joomla partner? Let's make your website exceptional!
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