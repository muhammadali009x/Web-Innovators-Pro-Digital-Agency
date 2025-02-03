import React from 'react';


const hero_content = {
    bg_img: "/assets/img/hero/heroimage.webp",
    img_1: "/assets/img/hero/law-1.png",
    img_2: "/assets/img/hero/law-2.png",
    img_3: "/assets/img/hero/law-3.png",
    title: `Your Angular Agency 
`,
    des: `Angularity" is in our DNA. Since 2018, we’ve been dedicated to harnessing the power of Angular to craft high-performing websites and seamless apps that deliver exceptional user experiences.`,
    des2: `Our expertise spans everything from building complex, feature-rich applications to creating scalable, responsive websites tailored to meet your specific needs. Whether you have a clear vision or need guidance in shaping your project, our team is here to provide creative, innovative solutions every step of the way. 
`,
    des3: `With years of hands-on Angular development experience, we’re equipped to not only bring your ideas to life but to elevate them. Let's collaborate to turn your concept into a dynamic, efficient, and engaging platform.
`,
    btn_text: "Get Start Your Project"
}
const { bg_img, img_1, img_2, img_3, title, des, des2, des3, btn_text } = hero_content




const HeroAbout = () => {
    return (
        <>
            <div className="law-hero-area "
                style={{ backgroundImage: `url(${bg_img})` }}

            >
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="law-hero-info">
                                   
                                <div className="law-hero__content">
                                    <h2 className="law-hero__content-title mb-20 wow tpfadeUp">{title}</h2>
                                    <p className="mb-50 wow tpfadeUp" data-wow-delay=".4s">
                                        {des}
                                    </p>
                                    <p className="mb-50 wow tpfadeUp" data-wow-delay=".4s">
                                        {des2}
                                    </p>
                                    <p className="mb-50 wow tpfadeUp" data-wow-delay=".4s">
                                        {des3}
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