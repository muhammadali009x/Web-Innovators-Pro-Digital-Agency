 import React from 'react';


const hero_content = {
    bg_img: "/assets/img/hero/law-hero.png",
    img_1: "/assets/img/hero/law-1.png",
    img_2: "/assets/img/hero/law-2.png",
    img_3: "/assets/img/hero/law-3.png",
    title: `Your Web Agency – Experts in Digital Excellence 
`,
    des: `Looking for a partner to bring your web app vision to life? We've got you covered! With years of digital expertise and hands-on experience, our developers specialize in crafting innovative web apps tailored to fit your needs—no matter the size or complexity of your project. From dynamic startups to established enterprises, we’re here to turn your ideas into impactful digital solutions. Let's build something extraordinary together!`,
    btn_text: "Get Start Your project"
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
                                        With over 20 years of experience in web development, we’re your trusted team for planning, building, and maintaining all your digital projects.

                                    </p>
                                    <p className="mb-50 wow tpfadeUp" data-wow-delay=".4s">
                                        Our expertise spans every stage of the web development process—whether you're creating a user-friendly website, developing a custom app, or ensuring seamless functionality across platforms. Here's what you can expect when you work with us:

                                    </p>

                                    <p>
                                        <ul>
                                            <li><strong>Tailored Digital Solutions:</strong>We collaborate closely with you to understand your unique goals and deliver websites and tools designed to meet your specific needs.</li>
                                            <li><strong>Reliable Maintenance & Updates:</strong>Beyond development, we keep your projects running smoothly with ongoing updates, error resolution, and performance optimization.</li>
                                            <li><strong>Future-Focused Approach:</strong>Our team incorporates the latest technologies and best practices to ensure your digital presence is both cutting-edge and scalable.
                                            </li>
                                        </ul>
                                    </p>

                                    <p>Partner with us to create a digital presence that boosts your brand, drives engagement, and supports your long-term success. Let's bring your vision to life!
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
