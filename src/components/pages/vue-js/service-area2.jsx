import React from 'react';

const service_content = {
    title: `Are you seeking expertise in additional technologies?
`,
    description: `Our team also specializes in web app development using leading frameworks. Here’s how we can help:
`
}
const { title, description } = service_content


const service_data = [


    // service data home 2
    {
        id: 1,
        link: "/service-3",
        img: "/assets/img/services/icon/it-service-1.png",
        title: `Laravel`,
        des: `As a seasoned Laravel agency, we deliver scalable and secure web solutions tailored to your business needs. Whether it’s a custom application or an e-commerce platform, we bring your ideas to life with high-quality Laravel development.
`
    },
    {
        id: 2,
        link: "/service-3",
        img: "/assets/img/services/icon/it-service-2.png",
        title: `Symfony`,
        des: `Harness the power of Symfony with our expert team. Known for its robust architecture, Symfony is perfect for building enterprise-level web applications, and we are skilled at making the most out of its flexibility and performance.`
    },
    {
        id: 3,
        link: "/service-3",
        img: "/assets/img/services/icon/it-service-3.png",
        title: `React`,
        des: `Unlock the potential of React for fast, dynamic, and user-friendly interfaces. Our skilled developers will help you create interactive web apps that provide seamless user experiences.`
    },

    // service home 5
    {
        id: 4,
        icon: "flaticon-diaphragm",
        link: "#",
        img: "/assets/img/services/icon/it-service-3.png",
        title: `Angular`,
        des: `Take advantage of Angular’s powerful framework to create high-performance web applications. We combine our technical expertise with Angular’s feature-rich ecosystem to deliver efficient and responsive solutions.
`,
        counter: "01",
        delay: ".3s"
    },

]

const ServiceArea = () => {
    return (
        <>
            <div className="seo-service-area pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title-wraper text-center">
                                <div className="tp-section">
                                    <h2 className="tp-section__title seagreen-text-color wow tpfadeUp" data-wow-delay=".3s">{title}
                                    </h2>
                                    <p className="text-greyv wow tpfadeUp" data-wow-delay=".4s">{description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="seo-service">
                        <div className="row">

                            {
                                service_data.slice(7, 11).map((item, i) =>
                                    <div key={i} className="col-xl-3 col-lg-6">
                                        <div className="seo-service-item text-center wow tpfadeUp" data-wow-delay={item.delay}>
                                            <div className="seo-service-item__thumb mb-35">
                                                <img src={item.img} alt="theme-pure" />
                                            </div>
                                            <h3 className="seo-service-item__title mb-20"><a href="#">{item.title}</a></h3>
                                            <p className="mb-45">{item.des}</p>
                                            <a href="#" className="seo-service-btn">Details <i className="fal fa-long-arrow-right"></i></a>
                                        </div>
                                    </div>

                                )
                            }
                        </div>
                    </div>
                    <p>We pride ourselves on crafting exceptional web experiences across industries using these cutting-edge technologies. Get in touch to elevate your next web app project!
                    </p>
                </div>
            </div>
        </>
    );
};

export default ServiceArea;