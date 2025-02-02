import React from 'react';


const promotion_content = {
    img_1: "/assets/img/promotion/law-book-1.jpg",
    img_2: "/assets/img/promotion/law-book-2.jpg",
    title: `Mastering Scalable Web Applications with Angular`,
    des: `Are you looking to build a scalable web application with Angular? Whether you're embarking on your first project or are a seasoned developer aiming to tackle more complex challenges, Angular offers the perfect solution for modern web applications.
`,
    des2: `Angular, an open-source framework developed and maintained by Google, has been shaping the digital landscape since 2010. Its core strength lies in enabling the creation of large-scale, high-performance web applications capable of meeting the dynamic needs of enterprises. It’s no surprise that leading companies like Netflix, IBM, and Microsoft rely on Angular to power their robust digital solutions. Its versatility and efficiency make it a top choice for building fast, responsive, and feature-rich applications.
`,
    des3: `At our agency, we specialize in Angular development and have amassed extensive experience in designing scalable architectures and delivering tailored solutions. Our expertise spans projects of all sizes, from smaller applications that require precision and speed to enterprise-level platforms handling complex demands.
`,
}

const { img_1, img_2, title, des, des2, des3 } = promotion_content

const PromotionArea = () => {
    return (
        <>
            <div className="law-promotion-area wine-bg pt-100 pb-90 p-relative">
                <div className="container">
                    <div className="row align-items-xl-center">

                        <div className="col-xl-12 col-lg-12">
                            <div className="section-title-wraper">
                                <div className="tp-section">
                                    <h2 className="tp-section__title text-white mb-10 text-uppercase wow tpfadeUp"> {title}</h2>
                                    <p className="text-lily wow tpfadeUp"> {des}</p>
                                    <p className="text-lily wow tpfadeUp"> {des2}</p>
                                    <p className="text-lily wow tpfadeUp"> {des3}</p>
                                    {/* <a href="#" className="tp-red-btn tp-btn-hover alt-bg-white wow tpfadeUp" data-wow-delay=".3s">
                                        download now
                                        <span className="ml-10 wow tpfadeUp">
                                            <i className="fal fa-long-arrow-right"></i>
                                            <i className="fal fa-long-arrow-right"></i>
                                        </span>
                                        <b></b>

                                    </a> */}
                                    <p style={{ color: 'white' }}>When you partner with us, you’ll benefit from:
                                    </p>
                                    <ul style={{ color: 'white' }}>
                                        <li><strong>Strategic Guidance:</strong> We work closely with you to understand your business goals and craft solutions aligned with your objectives.</li>
                                        <li><strong>Technical Expertise:</strong> Leverage our deep knowledge of Angular to create applications equipped with smooth user experiences, efficient performance, and scalable structures.
                                        </li>
                                        <li><strong>Reliable Support:</strong> From the initial development phase to long-term maintenance, we’re here to guide you through every step of the process.</li>

                                    </ul>
                                    <p>Whether you’re envisioning a custom dashboard, an e-commerce platform, or any other dynamic web application, our team is here to help you achieve exceptional results with Angular. Let's turn your ideas into reality with precision, expertise, and a steadfast commitment to your success.
                                    </p>
                                    <p>Talk to us today and discover how we can bring your Angular project to life!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ring-1">
                    <img src="/assets/img/promotion/ring.png" alt="" />
                    <div className="ring-2">
                        <img src="/assets/img/promotion/sm-ring.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default PromotionArea;