import React from 'react';

const service_content = {
    title: "Unlock Your Web Potential with Expert CMS Solutions",
    description: `Looking to expand your technology options? Our expertise extends across a variety of CMS platforms, ensuring that your web projects are handled with precision and care. Here are some of the additional CMS solutions we specialize in:
`
}
const { title, description } = service_content

const service_data = [


    // service data home 2
    {
        id: 1,
        link: "/service-3",
        img: "/assets/img/services/icon/it-service-1.png",
        title: `WordPress`,
        des: `Tap into our deep experience as a WordPress agency to create flexible, scalable, and user-friendly websites tailored to your needs. `
    },
    {
        id: 2,
        link: "/service-3",
        img: "/assets/img/services/icon/it-service-2.png",
        title: `Joomla`,
        des: `Partner with our Joomla agency to build robust web applications and dynamic websites that stand out. `
    },
    {
        id: 3,
        link: "/service-3",
        img: "/assets/img/services/icon/it-service-3.png",
        title: `Contao`,
        des: `Leverage our knowledge of Contao to develop streamlined and efficient solutions for your business or organization. `
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
                                             
                                        </div>
                                    </div>

                                )
                            }
                        </div>
                    </div>
                    <p>With our knowledge and hands-on approach, we’re here to guide you every step of the way, no matter the platform. Reach out to learn how we can optimize your CMS for success.
                    </p>
                </div>
            </div>
        </>
    );
};

export default ServiceArea;