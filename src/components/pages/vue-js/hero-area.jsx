import React from 'react';


const hero_content = {
    bg_img: "/assets/img/hero/law-hero.png",
    img_1: "/assets/img/hero/law-1.png",
    img_2: "/assets/img/hero/law-2.png",
    img_3: "/assets/img/hero/law-3.png",
    title: `Your Vue.js Agency 
`,
    des: <>We’ve always known that for businesses large and small, IT will <br /> can be a real challenge to manage.</>,
    btn_text: "Get Started Your Project"
}
const { bg_img, img_1, img_2, img_3, title, des, btn_text } = hero_content




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
                                        Leverage the full potential of Vue.js with our specialized expertise and comprehensive digital knowledge. Our team of experienced Vue.js developers is ready to support projects of all scales and complexities, whether you're building a dynamic single-page application, a robust enterprise solution, or enhancing an existing framework.

                                    </p>
                                    <p className="mb-50 wow tpfadeUp" data-wow-delay=".4s">
                                        By combining technical precision with a deep understanding of modern web development, we deliver scalable, high-performance, and maintainable solutions tailored to your specific needs. Partner with us for seamless collaboration and innovative results that take your project to the next level.

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