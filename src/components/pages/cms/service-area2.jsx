import service_data from '@/src/data/service-data';
import React from 'react';

const service_content = {
    title: `Looking for expert web development tailored to your specific needs? 
`,
    description: `Our team specializes in building and optimizing websites for the most popular content management systems, ensuring robust functionality and support for your business goals. Here’s how we can help:
`
}
const { title, description } = service_content

const service_data = [


    // service data home 2
    {
        id: 1,
        link: "/service-3",
        img: "/assets/img/services/icon/it-service-1.png",
        title: `Drupal Development `,
        des: ` Our Drupal agency combines technical expertise and creative vision to craft scalable, secure, and high-performing websites for organizations of all sizes. 
`
    },
    {
        id: 2,
        link: "/service-3",
        img: "/assets/img/services/icon/it-service-2.png",
        title: `WordPress Development`,
        des: ` From blogs to enterprise-grade sites, our WordPress agency delivers custom solutions that are flexible, user-friendly, and designed to grow with your business. 
`
    },
    {
        id: 3,
        link: "/service-3",
        img: "/assets/img/services/icon/it-service-3.png",
        title: `Joomla Development `,
        des: ` With a deep understanding of Joomla's powerful features, our Joomla agency creates dynamic and engaging websites tailored to your unique needs. 
`
    },

    // service home 5
    {
        id: 4,
        icon: "flaticon-diaphragm",
        link: "#",
        img: "/assets/img/services/icon/it-service-3.png",
        title: `Contao Development `,
        des: ` Our Contao agency offers professional development services focused on creating sleek, responsive websites that provide seamless user experiences on any device. 
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
                    <p>Partner with our experienced team to bring your vision to life. Whether you need a new website or improvements to your existing platform, we’re committed to delivering exceptional results.
                    </p>
                </div>
            </div>
        </>
    );
};

export default ServiceArea;