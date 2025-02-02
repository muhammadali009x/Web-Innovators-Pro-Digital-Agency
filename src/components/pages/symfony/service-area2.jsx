import React from 'react';
import service_data from '@/src/components/pages/web-app/servicesdata';
const service_content = {
    title: "Looking for exceptional expertise in cutting-edge digital technologies? You’re in the right place. ",
    description: `We specialize in crafting robust web applications using some of the most powerful frameworks available today. Whether you're building a sleek single-page app or a complex enterprise web solution, our team is ready to bring your vision to life. 
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
                                service_data.map((item, i) =>
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
                        <p>Whatever your web framework of choice, we collaborate with you every step of the way to deliver exceptional results that align with your goals. Let's create something amazing together!
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceArea;