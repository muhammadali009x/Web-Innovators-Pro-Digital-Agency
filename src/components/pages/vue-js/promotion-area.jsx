import React from 'react';


const promotion_content  = {
    img_1: "/assets/img/promotion/law-book-1.jpg",
    img_2: "/assets/img/promotion/law-book-2.jpg",
    title: `Do you need a powerful and flexible framework like Vue.js for your next digital project?
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
                    {/* <div className="col-xl-6 col-lg-5">
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
                    </div> */}
                    <div className="col-xl-12 col-lg-12">
                        <div className="section-title-wraper">
                            <div className="tp-section">
                                <h2 className="tp-section__title text-white mb-10 text-uppercase wow tpfadeUp"> {title}</h2>
                                <p className="text-lily wow tpfadeUp"> Since its launch in 2014, Vue.js has rapidly become one of the most popular JavaScript frameworks, known for its simplicity, robust functionality, and ability to create highly interactive user interfaces. Its progressive architecture allows developers to integrate it incrementally into projects, making it adaptable to a variety of needs. From startups to industry giants, organizations across sectors are relying on Vue.js to deliver performant and responsive web applications. Notably, companies like NASA, Adobe, and IBM have leveraged Vue.js to advance their digital platforms.
                                </p>
                                <p className="text-lily wow tpfadeUp">Whether you're building a single-page application, progressive web app, or an entirely dynamic website, utilizing Vue.js can significantly enhance your project's efficiency and interactivity. With our team of seasoned developers, you’ll have access to deep expertise in Vue.js development. We focus on finding solutions tailored to your unique requirements, ensuring your project is built with precision and scalability in mind.
                                </p>
                                <p className="text-lily wow tpfadeUp">Regardless of your project’s size or complexity, we are here to provide the technical guidance and support you need to design remarkable web experiences with Vue.js.
                                </p>
                                 {/* <a href="#" className="tp-red-btn tp-btn-hover alt-bg-white wow tpfadeUp" data-wow-delay=".3s">
                                    download now
                                    <span className="ml-10 wow tpfadeUp">
                                        <i className="fal fa-long-arrow-right"></i>
                                        <i className="fal fa-long-arrow-right"></i>
                                    </span>
                                    <b></b>

                                </a> */}
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