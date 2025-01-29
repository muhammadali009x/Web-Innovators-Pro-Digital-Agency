import React from 'react';

const service_content = {
    title: `Looking for expertise in other technologies? 
`,
    description: `Our team also specializes in web app development, working with a variety of industry-leading frameworks to bring your vision to life. Here’s how we can support you:
`
}
const { title, description } = service_content

const service_data = [


    // service data home 2
    {
        id: 1,
        link: "/service-3",
        img: "/assets/img/services/icon/it-service-1.png",
        title: `Laravel Development 
`,
        des: `Leverage the power of Laravel, a robust framework known for its elegant syntax and efficient performance. We're a skilled Laravel agency ready to build scalable, secure, and high-performing web applications tailored to your needs. 
`
    },
    {
        id: 2,
        link: "/service-3",
        img: "/assets/img/services/icon/it-service-2.png",
        title: `Symfony Development 
`,
        des: `Using the flexibility of Symfony, we develop feature-rich web applications that are adaptable and maintainable. Work with a trusted Symfony agency to deliver cutting-edge solutions for complex projects. 
`
    },
    {
        id: 3,
        link: "/service-3",
        img: "/assets/img/services/icon/it-service-3.png",
        title: `React Development 
`,
        des: `Harness the versatility of React to create interactive user interfaces and dynamic web apps. Our React team is here to craft seamless, high-performing applications that deliver exceptional user experiences. 
`
    },
    {
        id: 3,
        link: "/service-3",
        img: "/assets/img/services/icon/it-service-3.png",
        title: `Vue.js Development 
`,
        des: `Simplify your frontend development with Vue.js. As an experienced Vue.js agency, we build lightweight and intuitive applications that are dynamic and engaging. 
`
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
                      
                    </div>
                    <p>Whether you’re building from scratch or improving an existing platform, our expertise ensures a smooth and successful development process. Contact us to discuss how we can turn your ideas into reality.
                    </p>
                </div>
            </div>
        </>
    );
};

export default ServiceArea;