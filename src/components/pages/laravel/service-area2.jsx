import React from 'react';

const service_content = {
    title: "Elevate Your Next Project with Expert Web App Development",
    description: `Are you exploring options for your next web app project? We've got you covered! At [Your Company Name], we offer top-notch web app development services using some of the most reliable and innovative web frameworks out there.
`
}
const { title, description } = service_content

const service_data = [


    // service data home 2
    {
        id: 1,
        link: "/service-3",
        img: "/assets/img/services/icon/it-service-1.png",
        title: `Symfony `,
        des: `From seamless integrations to high-performing applications, our Symfony expertise ensures robust and scalable solutions tailored to your needs.
`
    },
    {
        id: 2,
        link: "/service-3",
        img: "/assets/img/services/icon/it-service-2.png",
        title: `React `,
        des: `With a focus on dynamic and user-friendly interfaces, we use React to build applications that feel effortless, intuitive, and modern.
`
    },
    {
        id: 3,
        link: "/service-3",
        img: "/assets/img/services/icon/it-service-3.png",
        title: `Angular `,
        des: `Looking for structure and efficiency? Our Angular projects combine cutting-edge features with outstanding performance for both startups and enterprises.
`
    },

    // service home 5
    {
        id: 4,
        icon: "flaticon-diaphragm",
        link: "#",
        img: "/assets/img/services/icon/it-service-3.png",
        title: `Vue.js `,
        des: `Vue.js is all about simplicity and flexibility. We use it to craft lightweight, elegant applications with a strong focus on delivering exceptional user experiences.
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
                                service_data.map((item, i) =>
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
                        <p>No matter your project goals, our team ensures a smooth and engaging development process from start to finish. Let's create something extraordinary together!
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceArea;