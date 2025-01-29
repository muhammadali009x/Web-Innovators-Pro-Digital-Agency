import React from 'react';

const service_content = {
    title: "Expert CMS Solutions Tailored to Your Business Needs",
    description: `Looking for expertise in other CMS platforms? Our team is skilled in delivering tailored solutions using a variety of content management systems to meet your unique business needs. 
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
        des: `A trusted WordPress agency offering custom themes, plugins, and robust website solutions that align with your goals. `
    },
    {
        id: 2,
        link: "/service-3",
        img: "/assets/img/services/icon/it-service-2.png",
        title: `Drupal`,
        des: `A professional Drupal agency delivering scalable and secure websites, ideal for complex and dynamic requirements. `
    },
    {
        id: 3,
        link: "/service-3",
        img: "/assets/img/services/icon/it-service-3.png",
        title: `Joomla`,
        des: ` Expert Joomla services to create versatile and user-friendly websites, perfect for businesses of any size.`
    },

    // service home 5
    {
        id: 4,
        icon: "flaticon-diaphragm",
        link: "#",
        img: "/assets/img/services/icon/it-service-3.png",
        title: "Flytographer",
        des: <>Photographer is someone who takes photographs.</>,
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

                                    <p>We specialize in the following CMS platforms:
                                    </p>
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
                </div>
            </div>
        </>
    );
};

export default ServiceArea;