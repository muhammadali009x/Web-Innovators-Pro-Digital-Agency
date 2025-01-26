 import React from 'react';

const service_content = {
    title: "Enhance Your Digital Presence with Our Additional Services",
    description: `Looking for additional services to elevate your digital presence? Here's how we can help:
`
}
const { title, description } = service_content
const service_data = [


    // service data home 2
    {
        id: 1,
        link: "/service-3",
        img: "/assets/img/services/icon/it-service-1.png",
        title: `Matomo Analytics 
`,
        des: `Gain deeper insights into your website’s performance with Matomo, a powerful analytics platform focused on privacy and accuracy. We provide tailored Matomo solutions to help you make data-driven decisions confidently.
`
    },
    {
        id: 2,
        link: "/service-3",
        img: "/assets/img/services/icon/it-service-2.png",
        title: `CMS Development 
`,
        des: `Whether you need a robust WordPress site or a custom CMS solution, our expert team delivers seamless content management systems to meet the unique needs of your business.
`
    },
    {
        id: 3,
        link: "/service-3",
        img: "/assets/img/services/icon/it-service-3.png",
        title: `Web Development 
`,
        des: `From dynamic web platforms to custom web applications, we specialize in building user-friendly and visually stunning digital experiences that align with your goals and brand identity.
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
                    <p>Discover how these services can complement your business, providing innovative solutions to your digital challenges. Get in touch with us today!
                    </p>
                </div>
            </div>
        </>
    );
};

export default ServiceArea;