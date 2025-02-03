import React from 'react';


const hero_content = {
    bg_img: "/assets/img/hero/heroimage.webp",
    img_1: "/assets/img/hero/law-1.png",
    img_2: "/assets/img/hero/law-2.png",
    img_3: "/assets/img/hero/law-3.png",
    title: `Your Symfony Agency 
`,
    des: `Looking for digital solutions that truly deliver? At [Company Name], we bring a wealth of Symfony expertise to every project. From streamlining large-scale enterprise applications to crafting custom solutions for startups, our Symfony developers are ready to tackle projects of any size or complexity. 
`,
    des2:`We don't just build software—we build tools that empower you to grow. When you partner with us, you’re tapping into a team that’s passionate about delivering results and creating digital experiences that matter. 
` ,
    des3: `Curious how Symfony can transform your project? Reach out today and let's make something incredible together! 
`,
    btn_text: "Get Start Your Project"
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
                                    {des}
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