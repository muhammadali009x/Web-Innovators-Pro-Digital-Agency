import React from 'react';
import Tilt from "react-parallax-tilt";



const about_content = {
    about_img: "/assets/img/about/ca-about.jpg",
    circle_img: "/assets/img/about/ca-cirlce-logo.png",
    about: "About",
    sub_title: "About Us",
    title: "Who Are We?",
    des: `At our core, we are a Boston-based digital agency specializing in web development, with nearly two decades of expertise in delivering exceptional results. Our team of 25 talented professionals works across a diverse range of technologies, from established frameworks to the latest cutting-edge tools. Over the years, we have refined our approach to project management, communication, and customer service, ensuring that every client receives a service that is not only efficient but also deeply collaborative.
`,
    des2: `What sets us apart is the hands-on role of our owner-managers, who actively oversee and participate in daily projects. This ensures that each project benefits from the insights and leadership of our most experienced team members—whether it's a complex development challenge or shaping the strategic vision of a new product.
`,
    des3: `We take pride in being an international team. While our primary office is rooted in the heart of Boston, our collaborators span across the United States and Europe. This global presence allows us to bring a broad perspective to every project, combining local expertise with international insights.
`,
    des4: `At [Agency Name], we believe in building more than just websites and applications—we build lasting partnerships founded on trust, accountability, and innovation.
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