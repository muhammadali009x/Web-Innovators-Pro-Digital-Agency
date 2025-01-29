import React from 'react';

const service_content = {
    title: "Boost Your Digital Presence with Expert Services",
    description: `Looking to enhance your digital presence in other areas? We’ve got you covered with a range of expert services designed to meet your needs:
`}
const { title, description } = service_content

const service_data = [


    // service data home 2
    {
        id: 1,
        link: "/service-3",
        img: "/assets/img/services/icon/it-service-1.png",
        title: `Accessibility 
`,
        des: `We specialize in creating inclusive digital experiences that ensure your website or application is easy to use for everyone. From audits to development, our team will help you achieve and maintain compliance with accessibility standards.
`
    },
    {
        id: 2,
        link: "/service-3",
        img: "/assets/img/services/icon/it-service-2.png",
        title: `CMS Development 
`,
        des: `Need a reliable Content Management System? Our CMS development services ensure you get a seamless platform, whether you're updating content, managing users, or scaling your digital presence. 
`
    },
    {
        id: 3,
        link: "/service-3",
        img: "/assets/img/services/icon/it-service-3.png",
        title: `Web Development 
`,
        des: `Our web development team builds fast, secure, and visually captivating websites tailored to your business. From simple landing pages to complex applications, we bring your ideas to life. 
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
                    <p>Explore these services and discover how we can support your digital growth. Contact us today to learn more!
                    </p>
                </div>
            </div>
        </>
    );
};

export default ServiceArea;