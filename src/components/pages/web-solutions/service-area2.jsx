import React from 'react';

const service_content = {
    title: `Looking for the right service to meet your needs? Here’s how we can help:
`,
    description: <>Search Engine & Social Media Optimization Experts</>
}
const {title, description}  = service_content

const service_data = [


    // service data home 2
    {
        id: 1,
        link: "/service-3",
        img: "/assets/img/services/icon/it-service-1.png",
        title: `Accessibility `,
        des: `We specialize in creating inclusive digital experiences that meet accessibility guidelines. Whether you need an accessibility audit, development of inclusive web designs, or retrofitting your platforms, our team has the expertise to ensure your digital content is accessible to everyone.
`
    },
    {
        id: 2,
        link: "/service-3",
        img: "/assets/img/services/icon/it-service-2.png",
        title: `Matomo Analytics 
`,
        des: `Gain deeper insights into your website's performance with our Matomo Analytics solutions. We offer comprehensive support and implementation services to help you measure, analyze, and optimize your digital strategy, all while maintaining your user privacy.
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
                    <p>Explore our services today and discover tailored solutions designed to help you succeed!
                    </p>
                </div>
            </div>
        </div>
        </>
    );
};

export default ServiceArea;