import React from 'react';


const hero_content = {
    bg_img: "/assets/img/hero/law-hero.png",
    img_1: "/assets/img/hero/law-1.png",
    img_2: "/assets/img/hero/law-2.png",
    img_3: "/assets/img/hero/law-3.png",
    title: `Your Contao Agency 
`,
    des: <>We’ve always known that for businesses large and small, IT will <br /> can be a real challenge to manage.</>,
    btn_text: "Get Start Your Project"
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
                                {/* {/* <div className="law-hero__imgs mb-35 d-flex">
                                    <div className="law-img-1 mr-15 wow tpfadeUp" data-wow-delay=".2s">
                                        <img src={img_1} alt="" />
                                    </div>
                                    <div className="law-img-1 mr-15 wow tpfadeUp" data-wow-delay=".3s">
                                        <img src={img_2} alt="" />
                                    </div>
                                    <div className="law-img-1 wow tpfadeUp" data-wow-delay=".4s">
                                        <img src={img_3} alt="" />
                                    </div>
                                </div> */} */}
                                <div className="law-hero__content">
                                    <h2 className="law-hero__content-title mb-20 wow tpfadeUp">{title}</h2>
                                    <p className=" wow tpfadeUp" data-wow-delay=".4s">
                                        Since 2012, we’ve honed our expertise in all things Contao. With over a decade of hands-on experience, we specialize in helping businesses plan, develop, and maintain their Contao projects seamlessly.

                                    </p>
                                    <p className=" wow tpfadeUp" data-wow-delay=".4s">
                                        From building robust, scalable solutions to ensuring your systems run smoothly over time, our team combines technical know-how with a deep understanding of your needs. Whether you’re launching a new project or optimizing an existing one, we are your reliable partner every step of the way.

                                    </p>
                                    <p className=" wow tpfadeUp" data-wow-delay=".4s">
                                        By choosing us, you gain more than just an agency—you gain a team dedicated to delivering tailored solutions, expert guidance, and ongoing support to ensure your success with Contao.

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