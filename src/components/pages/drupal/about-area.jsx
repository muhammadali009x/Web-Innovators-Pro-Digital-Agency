import React from 'react';
import Tilt from "react-parallax-tilt";



const about_content = {
    about_img: "/assets/img/about/ca-about.jpg",
    circle_img: "/assets/img/about/ca-cirlce-logo.png",
    about: "About",
    sub_title: "About Us",
    title: "Who Are We?",
    des: <>Being employee-owned keeps us focused on the unique needs of our
        users, and we wouldn't have it any other way. Our many security features
        include Multi Factor Authentication, auto-enabled sFTP .</>,
    author_img: "/assets/img/about/ca-about-sm.jpg",
    author_name: "Mikado Sinson",
    author_des: <>“ Find IT Marketing In Usa! Privacy Friendly. lways Facts. Unlimited Access. ”</>,
    phone: "78568065900",
    email: "hello@webinnovatorspro.com"


}

const { about_img, circle_img, about, sub_title, title, des, author_img, author_name, author_des, phone, email } = about_content

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
                                        <p> Located in the heart of Boston, our agency specializes in crafting and supporting world-class websites and web applications. With nearly two decades of experience, our team of 25 professionals has a deep understanding of a wide range of technologies, enabling us to deliver tailored solutions for businesses across industries.
                                        </p>
                                        <p>What sets us apart is our owner-managed model. This means our leadership is involved in the daily execution of projects—bringing a personal and highly attentive approach to every client relationship. We believe that consistent, clear communication and exceptional customer service are just as crucial as technical expertise when it comes to helping clients achieve their goals.
                                        </p>
                                        <p>While our main office is proudly based in Boston, our team is truly international. With members across the United States and Europe, we bring diverse perspectives, creativity, and expertise to our work. This global team structure ensures we’re never far from where our clients are, accommodating different time zones and providing seamless collaboration no matter the location.
                                        </p>
                                        <p> Whether it's designing a responsive website, building a complex web application, or maintaining your platform over time, we pride ourselves on delivering results that go beyond expectations. With a firm commitment to quality and customer focus, we’re here to turn vision into reality—one project at a time.
                                        </p>
                                    </div>
                                </div>
                                <div className="ca-about-info tp-border-bottom d-md-flex align-items-center pb-40 mb-50">
                                    <div className="ca-about-info__thumb mr-30">
                                        <img src={author_img} alt="" />
                                    </div>
                                    <div className="ca-about-info__content ">
                                        <h4 className="ca-about-info__content-title">{author_des} </h4>
                                        <span>{author_name}</span>
                                    </div>

                                </div>
                                <div className="ca-about-btn-wrapper d-md-flex align-items-center">
                                    <div className="ca-about-btn-wrapper mr-30 mb-30">
                                        <a href={`tel:${phone}`} className="tp-border-btn-rgb">
                                            Our Services
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