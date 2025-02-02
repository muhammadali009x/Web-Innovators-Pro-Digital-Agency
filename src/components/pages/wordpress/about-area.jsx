import React from 'react';
import Tilt from "react-parallax-tilt";



const about_content = {
    about_img: "/assets/img/about/ca-about.jpg",
    circle_img: "/assets/img/about/favicon.webp",
    about: "About",
    sub_title: "About Us",
    title: "Who Are We?",
    des: `At our core, we are a US-based agency specializing in designing and building high-performing websites and web applications. Over the past 20 years, our team of 25 skilled professionals has acquired extensive experience across a broad range of web technologies, delivering tailored solutions for businesses of all sizes. 
`,
    des2: `Our connection to WordPress goes back to its early days. For many on our team, WordPress was their first CMS, sparking a passion for intuitive web design and development. Since 2007, we’ve been deeply committed to pushing the boundaries of what WordPress can achieve, using it to create custom digital experiences that meet modern business needs. 
`,
    des3: `With a combination of deep technical expertise and close collaboration with our clients, our team works to transform your digital ideas into reality while ensuring scalability, user-friendliness, and innovation. At every step, we focus on creating value and delivering solutions that align with your goals.
`,
    author_img: "/assets/img/about/ca-about-sm.jpg",
    author_name: "Mikado Sinson",
    author_des:<>“ Find IT Marketing In Usa! Privacy Friendly. lways Facts. Unlimited Access. ”</>,
    phone: "78568065900",
    email : "hello@webinnovatorspro.com"


}

const {about_img, circle_img, about, sub_title, title, des,des2,des3, author_img, author_name, author_des, phone, email}  = about_content

const AboutArea = () => {
    return (
        <>
            <div className="ca-about-area pt-120 pb-90">
            <div className="container">
                <div className="row align-items-xl-center">
                    <div className="col-lg-6 wow tpfadeUp" data-wow-delay=".5s">
                        <div className="ca-about-img p-relative mb-30" data-tilt="" data-tilt-perspective="2000">

                        <Tilt 
                            className="tilt-img"
                            tiltMaxAngleX={5}
                            tiltMaxAngleY={5}
                            perspective={900}
                            transitionSpeed={1000}
                            gyroscope={true}
                            >
                            <img src={about_img} alt="" />
                            <div className="ca-about-circle">
                                <img src={circle_img} alt="" />
                            </div>

                            </Tilt>
                        </div>
                    </div>
                    <div className="col-lg-6 wow tpfadeUp" data-wow-delay=".6s">
                        <div className="ca-about-info-wrapper ml-30 mr-30 mb-30">
                            <div className="section-title-wraper">
                                <div className="tp-section">
                                    <span className="tp-section__bigtitle">{about}</span>
                                    <span className="tp-section__subtitle shadow-none text-rgb mb-15 p-0">{sub_title}</span>
                                    <h2 className="tp-section__title mb-30">{title}</h2>
                                    <p>{des}</p>
                                    <p>{des2}</p>
                                    <p>{des3}</p>
                                </div>
                            </div>
                                   
                            <div className="ca-about-btn-wrapper d-md-flex align-items-center">
                                <div className="ca-about-btn-wrapper mr-30 mb-30">
                                    <a href='about' className="tp-border-btn-rgb">
                                      Read More
                                        <span>
                                            <i className="fal  fa-long-arrow-right"></i>
                                            <i className="fal  fa-long-arrow-right"></i>
                                        </span>
                                    </a>
                                </div>
                                <div className="ca-about-cta mb-30">
                                    <span>Get Support</span> <br />
                                    <a  href={`mailto:${email}`}>{email}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default AboutArea;