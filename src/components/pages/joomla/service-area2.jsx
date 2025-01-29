import service_data from '@/src/data/service-data';
import React from 'react';

const service_content = {
    title: "Why Is There a Strange GTM Tag in the Code of My Joomla Site? ",
    description: <>Search Engine & Social Media Optimization Experts</>
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
                                    <p className="text-greyv wow tpfadeUp" data-wow-delay=".4s">If you've encountered an unfamiliar GTM tag in your Joomla site's code, don’t worry—we explain why it's there and how to identify its purpose. This guide provides clear insights into understanding tracking tags and keeping your site secure.
                                    </p>
                                    <p className="text-greyv wow tpfadeUp" data-wow-delay=".4s">These resources are here to support your Joomla projects—helping you tackle common challenges and optimize your workflow. Whether you're troubleshooting an issue or looking to build a better website, explore our detailed guides and start making the most of Joomla today.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                     
                </div>
            </div>
        </>
    );
};

export default ServiceArea;