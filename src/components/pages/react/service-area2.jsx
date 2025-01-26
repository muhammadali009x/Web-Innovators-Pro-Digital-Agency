import React from 'react';

const service_content = {
    title: "Looking for expertise beyond just one technology? We’ve got you covered! ",
    description: `Our web app development services span a variety of powerful frameworks tailored to meet your unique needs. Whether you’re aiming to build scalable, secure platforms or sleek, user-friendly apps, our team has the skills to make it happen. 
`
}
const { title, description } = service_content
const service_data = [


    // service data home 2
    {
        id: 1,
        link: "/service-3",
        img: "/assets/img/services/icon/it-service-1.png",
        title: `Laravel`,
        des: `Build cutting-edge applications with the trusted power of this PHP framework. Our Laravel experts craft intuitive and robust web solutions with care. 
`
    },
    {
        id: 2,
        link: "/service-3",
        img: "/assets/img/services/icon/it-service-2.png",
        title: `Symfony`,
        des: `Design enterprise-grade platforms with Symfony. Its flexibility and speed make it a standout choice, and we know exactly how to harness it to its full potential. `
    },
    {
        id: 3,
        link: "/service-3",
        img: "/assets/img/services/icon/it-service-3.png",
        title: `Angular`,
        des: `Create dynamic, scalable web apps with Angular’s razor-sharp capabilities. Perfect for handling complexity without breaking a sweat.`
    },

    // service home 5
    {
        id: 4,
        icon: "flaticon-diaphragm",
        link: "#",
        img: "/assets/img/services/icon/it-service-3.png",
        title: `Vue.js`,
        des: `Sleek, elegant, and lightweight—our Vue.js developers bring modern, responsive interfaces to life. `,
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