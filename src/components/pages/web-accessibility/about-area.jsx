import React from 'react';
import Tilt from "react-parallax-tilt";



const about_content = {
    about_img: "/assets/img/about/ca-about.jpg",
    circle_img: "/assets/img/about/favicon.webp",
    about: "About",
    sub_title: "About Us",
    title: `Who Are We?`,
    des: `We are a full-service digital agency based in the US, specializing in web development tailored to meet diverse client needs. With nearly 20 years of experience under our belt, our skilled team of 25 professionals has mastered a wide array of frameworks and technologies. Beyond our technical expertise, we pride ourselves on our refined strengths in project management, seamless communication, and exceptional customer service—all designed to ensure a smooth and successful project for our clients.
`,
    des2: `What sets us apart is our owner-managed structure. Our leadership team is deeply involved in the day-to-day projects and operations, ensuring every client's needs are understood and addressed at the highest level. This hands-on approach fosters accountability and ensures a consistently high standard of quality.
`,
    des3: `While our main office is in Boston, our team is proudly international. With members located across the US and Europe, we bring together a variety of perspectives, experiences, and skills, allowing us to deliver creative and innovative solutions with a global outlook.
`,
    des4: `Partner with us, and you’ll benefit from a well-coordinated team and a proven track record of delivering outstanding results. Whether your project involves creating a modern website or developing a complex web application, we’re here to support you every step of the way.
`,
    author_img: "/assets/img/about/ca-about-sm.jpg",
    author_name: "Mikado Sinson",
    author_des: <>“ Find IT Marketing In Usa! Privacy Friendly. lways Facts. Unlimited Access. ”</>,
    phone: "78568065900",
    email: "hello@webinnovatorspro.com"


}

const { about_img, circle_img, about, sub_title, title, des, des2, des3, des4, author_img, author_name, author_des, phone, email } = about_content

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
                                        <p>{des4}</p>
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