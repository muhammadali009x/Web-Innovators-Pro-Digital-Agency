import React from 'react';


const hero_content = {
    bg_img: "/assets/img/hero/heroimage.webp",
    img_1: "/assets/img/hero/law-1.png",
    img_2: "/assets/img/hero/law-2.png",
    img_3: "/assets/img/hero/law-3.png",
    title: `Expert WordPress Solutions for Your Business Success`,
    des: `Discover custom WordPress solutions tailored for your business. From web design to WooCommerce optimization, our experts deliver SEO-friendly results.
`,
    des2: `We've been working with WordPress for over 16 years, helping businesses create websites that are both powerful and user-friendly. Since our start in 2007, our Boston-based agency has specialized in designing, building, and maintaining WordPress sites tailored to meet the unique needs of our clients.
`,
    des3: `With years of experience under our belt, we bring deep expertise, attention to detail, and innovative solutions to every project. Whether you’re building a new site from the ground up or need ongoing support to keep your site running smoothly, we’re here to help every step of the way.
`,
    btn_text: "Get Start Your Project"
}
const { bg_img, img_1, img_2, img_3, title, des, des2, des3, btn_text } = hero_content




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