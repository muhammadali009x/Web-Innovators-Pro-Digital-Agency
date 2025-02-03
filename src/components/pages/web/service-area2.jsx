 import React from 'react';


const local_service_data = [


    // service data home 2
    {
        id: 1,
        link: "/service-3",
        img: "/assets/img/services/icon/it-service-1.png",
        title: `Drupal Development Services `,
        des: ` Gain a robust, secure, and scalable site with our Drupal development expertise. We create tailored solutions for businesses of all sizes.
`
    },
    {
        id: 2,
        link: "/service-3",
        img: "/assets/img/services/icon/it-service-2.png",
        title: `WordPress Solutions 
`,
        des: ` From plug-in development to theme customization, our WordPress agency offers comprehensive services to help you create a dynamic and user-friendly website.
`
    },
    {
        id: 3,
        link: "/service-3",
        img: "/assets/img/services/icon/it-service-3.png",
        title: `Joomla Development 
`,
        des: ` Power your content management needs with our Joomla services, creating websites that combine flexibility with outstanding performance.
`
    },

    // service home 5
    {
        id: 4,
        icon: "flaticon-diaphragm",
        link: "#",
        img: "/assets/img/services/icon/it-service-3.png",
        title: `Contao Expertise 
`,
        des: ` Leverage Contao for fast, high-quality website creation backed by our agency’s experience in design and implementation.
`,
        counter: "01",
        delay: ".3s"
    },
    {
        id: 5,
        icon: "flaticon-mountains",
        link: "#",
        img: "/assets/img/services/icon/it-service-3.png",
        title: `Laravel Applications 
`,
        des: ` Build modern, efficient, and customized web apps with our Laravel development services, delivering seamless user experiences.
`,
        counter: "02",
        delay: ".4s"
    },
    {
        id: 6,
        icon: "flaticon-camera",
        link: "#",
        img: "/assets/img/services/icon/it-service-3.png",
        title: `Symfony Development 
`,
        des: ` Develop complex, high-performance applications with the reliability and scalability offered by our Symfony services.
`,
        counter: "03",
        delay: ".5s"
    },
    {
        id: 7,
        icon: "flaticon-forest",
        link: "#",
        img: "/assets/img/services/icon/it-service-3.png",
        title: `React.js Development 
`,
        des: ` Develop responsive, intuitive front-end interfaces with our React expertise, delivering exceptional performance across devices.
`,
        counter: "03",
        delay: ".5s"
    },


    // service home 10
    {
        id: 8,
        icon: "/assets/img/services/seo-sv-img-1.jpg",
        link: "#",
        img: "/assets/img/services/seo-sv-img-1.jpg",
        title: `Angular Development 
`,
        des: ` Our Angular agency ensures fast, dynamic web applications built to enhance user interactions and support your business goals.
`,
        counter: "",
        delay: ".3s"
    },

]

const service_content = {
    title: `Are you looking for expertise in cutting-edge web development? 
`,
    description: `Our team specializes in crafting and optimizing websites and applications across a variety of modern technologies. Here’s how we can help elevate your digital presence:
`
}
const { title, description } = service_content


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
                                local_service_data.map((item, i) =>
                                    <div key={i} className="col-xl-3 col-lg-6">
                                        <div className="seo-service-item text-center wow tpfadeUp" data-wow-delay={item.delay}>
                                            <div className="seo-service-item__thumb mb-35">
                                                <img src={item.img} alt="theme-pure" />
                                            </div>
                                            <h3 className="seo-service-item__title mb-20"><a href="#">{item.title}</a></h3>
                                             
                                        </div>
                                    </div>

                                )
                            }
                        </div>
                        <p>Whether it’s optimizing your platform, building from scratch, or enhancing an existing system, we bring a personalized approach to every project. Trust our expertise across these technologies to transform your digital goals into reality. Reach out today for tailored solutions that deliver measurable impact!
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceArea;