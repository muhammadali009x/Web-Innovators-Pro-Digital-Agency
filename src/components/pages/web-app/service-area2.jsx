import service_data from './servicesdata';

import React from 'react';

const service_content = {
    title: "Looking to expand your digital horizons?",
    description: `We create tailor-made solutions using some of the most versatile and powerful technologies in the industry.`
}

const {title, description}  = service_content



const ServiceArea = () => {
    return (
        <>
            <div className="seo-service-area pt-10 pb-120">
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
                                <h3 className="seo-service-item__title mb-20"><a href={item.link}>{item.title}</a></h3>
                                {/* <p className="mb-45">{item.des}</p> */}
                                {/* <a href={item.link} className="seo-service-btn">Details <i className="fal fa-long-arrow-right"></i></a> */}
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