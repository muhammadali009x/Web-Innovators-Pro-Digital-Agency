import React from 'react';

const service_content = {
    title: "Looking for exceptional expertise in cutting-edge digital technologies? You’re in the right place. ",
    description: `We specialize in crafting robust web applications using some of the most powerful frameworks available today. Whether you're building a sleek single-page app or a complex enterprise web solution, our team is ready to bring your vision to life. 
`
}
const { title, description } = service_content

const service_data = [


    // service data home 2
    {
        id: 1,
        link: "/service-3",
        img: "/assets/img/services/icon/it-service-1.png",
        title: "Laravel Development ",
        des: `Harness the power and flexibility of Laravel with our team of skilled developers. We design secure, scalable, and feature-rich web applications tailored to your needs. 
`
    },
    {
        id: 2,
        link: "/service-3",
        img: "/assets/img/services/icon/it-service-2.png",
        title: `React Development 
`,
        des: `Looking to create interactive, high-performance user interfaces? Our React experts will help you build seamless, responsive web apps that stand out. 
`
    },
    {
        id: 3,
        link: "/service-3",
        img: "/assets/img/services/icon/it-service-3.png",
        title: `Angular Development 
`,
        des: `For dynamic web applications that combine speed and scalability, we provide Angular development services that ensure optimal performance. 
`
    },

    // service home 5
    {
        id: 4,
        icon: "flaticon-diaphragm",
        link: "#",
        img: "/assets/img/services/icon/it-service-3.png",
        title: `Vue.js Development 
`,
        des: `With Vue.js, simplicity meets sophistication. Our team delivers lightweight, efficient solutions to create visually stunning and highly interactive user experiences. 
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
                        <p>Whatever your web framework of choice, we collaborate with you every step of the way to deliver exceptional results that align with your goals. Let's create something amazing together!
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceArea;