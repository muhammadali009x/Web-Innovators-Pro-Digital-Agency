import React from 'react';
import Tilt from "react-parallax-tilt";



const about_content = {
    about_img: "/assets/img/about/ca-about.jpg",
    circle_img: "/assets/img/about/favicon.webp",
    about: "About",
    sub_title: "About Us",
    title: `Who Are We? 
`,
    des: `We’re a dynamic digital agency proudly rooted in the US but with a global reach. Specializing in web development, we’ve built a reputation for delivering cutting-edge solutions tailored to our clients’ needs. Over nearly two decades, we’ve cultivated a team of 25 skilled professionals who bring deep expertise across a wide variety of technologies. But we don’t stop there—our mastery extends to project management, sharp communication, and top-tier customer service, ensuring our clients are supported every step of the way.
`,
    des2: `What sets us apart? We’re owner-managed, meaning our leadership doesn’t just steer from the sidelines—they’re actively involved in day-to-day projects, infusing every task with a personal and dedicated touch. While our main hub is in Boston, our team operates on two continents, bringing together the best talents from across the US and Europe. 
`,
    des3: `With a focus on fostering collaboration, innovation, and a people-first approach, we’re not just delivering web solutions—we’re forging long-lasting partnerships with our clients. Whether you’re looking for seamless UX design, robust backend architecture, or thoughtful technical consulting, we’re here to make your digital vision a reality. Let's build something extraordinary together! 
`,
    author_img: "/assets/img/about/ca-about-sm.jpg",
    author_name: "Mikado Sinson",
    author_des: <>“ Find IT Marketing In Usa! Privacy Friendly. lways Facts. Unlimited Access. ”</>,
    phone: "78568065900",
    email: "hello@webinnovatorspro.com"


}

const { about_img, circle_img, about, sub_title, title, des, des2, des3, author_img, author_name, author_des, phone, email } = about_content

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
                                {/* <div className="ca-about-info tp-border-bottom d-md-flex align-items-center pb-40 mb-50">
                                    <div className="ca-about-info__thumb mr-30">
                                        <img src={author_img} alt="" />
                                    </div>
                                    <div className="ca-about-info__content ">
                                        <h4 className="ca-about-info__content-title">{author_des} </h4>
                                        <span>{author_name}</span>
                                    </div>

                                </div> */}
                                <div className="ca-about-btn-wrapper d-md-flex align-items-center">
                                    <div className="ca-about-btn-wrapper mr-30 mb-30">
                                        <a href='/about' className="tp-border-btn-rgb">
                                            Read More
                                            <span>
                                                <i className="fal  fa-long-arrow-right"></i>
                                                <i className="fal  fa-long-arrow-right"></i>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="ca-about-cta mb-30">
                                        <span>Get Support</span> <br />
                                        <a href={`mailto:${email}`}>{email}</a>
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