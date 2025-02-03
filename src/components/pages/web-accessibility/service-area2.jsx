import React from 'react';
import local_service_data from '@/src/components/pages/web-app/service-data';
const service_content = {
    title: "Enhance Your Digital Presence with Our Additional Services",
    description: `Looking for additional services to elevate your digital presence? Here's how we can help:
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
                                            <h3 className="seo-service-item__title mb-20"><a href={item.link}>{item.title}</a></h3>

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