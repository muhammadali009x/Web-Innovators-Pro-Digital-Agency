import React from 'react';


const promotion_content  = {
    img_1: "/assets/img/promotion/law-book-1.jpg",
    img_2: "/assets/img/promotion/law-book-2.jpg",
    title: `What does Joomla mean to me?
`,
    des: <>S Hossain & Associates is a full service law firm in Bangladesh and
    has adequate
    knowledge, expertise, lawyers, consultants and logistics to undertake any legal a
    full
    service law firm in Dhaka that has been ranked.</>,
}

const {img_1, img_2, title, des}  = promotion_content

const PromotionArea = () => {
    return (
        <>
            <div className="law-promotion-area wine-bg pt-100 pb-90 p-relative">
            <div className="container">
                <div className="row align-items-xl-center">
                    <div className="col-xl-6 col-lg-5">
                        <div className="law-promotion-books mb-20">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="law-book text-xl-end mr-10 wow tpfadeUp" data-wow-delay=".4s" data-tilt="" data-tilt-perspective="2000">
                                        <img src={img_1} alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="law-book wow tpfadeUp" data-wow-delay=".3s">
                                        <img src={img_2} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7">
                        <div className="section-title-wraper">
                            <div className="tp-section">
                                <h2 className="tp-section__title text-white mb-10 text-uppercase wow tpfadeUp"> {title}</h2>
                                <p className="text-lily wow tpfadeUp"> My journey with Joomla began quite unexpectedly in 2006 when I decided to help a friend with their website. At the time, I had no experience with Content Management Systems (CMS), but I was eager to learn. Joomla quickly stood out to me—it was intuitive, versatile, and powerful. I found myself enjoying the process, and after completing that project, I built a few more websites using Joomla.
                                </p>
                                <p className="text-lily wow tpfadeUp">By 2008, I realized this was more than just a passing interest. I made the decision to leave my job and take a leap of faith as a freelance web developer, fully immersing myself in the world of Joomla development. That pivotal moment changed the course of my career. It was the spark that eventually led to the creation of this web agency.
                                </p>
                                <p className="text-lily wow tpfadeUp"> Fast forward to today, and Joomla continues to play a central role in our work. Its flexibility and reliability allow us to deliver tailored solutions for our clients, and it remains one of our go-to platforms for web development projects.
                                </p>
                                <p className="text-lily wow tpfadeUp"> For me, Joomla is more than just a tool—it's the foundation upon which I built my career and this agency. It represents the start of my professional journey in web development and continues to be a key part of our work with clients every day.
                                </p>

                                <a href="#" className="tp-red-btn tp-btn-hover alt-bg-white wow tpfadeUp" data-wow-delay=".3s">
                                    download now
                                    <span className="ml-10 wow tpfadeUp">
                                        <i className="fal fa-long-arrow-right"></i>
                                        <i className="fal fa-long-arrow-right"></i>
                                    </span>
                                    <b></b>

                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ring-1">
                <img src="/assets/img/promotion/ring.png" alt="" />
                <div className="ring-2">
                    <img src="/assets/img/promotion/sm-ring.png" alt="" />
                </div>
            </div>
        </div>
        </>
    );
};

export default PromotionArea;