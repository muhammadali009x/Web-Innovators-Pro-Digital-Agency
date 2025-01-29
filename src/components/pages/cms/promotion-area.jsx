import React from 'react';


const promotion_content = {
    img_1: "/assets/img/promotion/law-book-1.jpg",
    img_2: "/assets/img/promotion/law-book-2.jpg",
    title: `Choosing the Right CMS for a Powerful Online Presence`,
    des: <>S Hossain & Associates is a full service law firm in Bangladesh and
        has adequate
        knowledge, expertise, lawyers, consultants and logistics to undertake any legal a
        full
        service law firm in Dhaka that has been ranked.</>,
}

const { img_1, img_2, title, des } = promotion_content

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
                                    <p className="text-lily wow tpfadeUp"> Are you looking to develop a CMS-based website or app that stands out and delivers a seamless user experience? Selecting the right Content Management System (CMS) is critical in building a powerful online presence tailored to your specific needs.
                                    </p>
                                    <p className="text-lily wow tpfadeUp">A CMS serves as the backbone of your digital platform, enabling businesses to efficiently manage, update, and customize content. Whether you're creating a dynamic website, launching a feature-rich app, or incorporating custom functionalities, the importance of choosing the right CMS cannot be overstated. Each platform offers unique strengths:
                                    </p>

                                    <ul>
                                        <li><strong>WordPress</strong>
                                            Renowned for its flexibility and extensive plugin ecosystem, making it ideal for small businesses and content-heavy sites.</li>
                                        <li><strong>Drupal</strong>
                                            Known for its robustness and scalability, Drupal is perfect for complex websites requiring high security and advanced functionalities.</li>
                                        <li><strong>Joomla</strong>A versatile CMS offering customizable solutions for both beginners and professionals.</li>
                                        <li><strong>Contao</strong> Praised for its user-friendly approach, Contao simplifies content management without sacrificing capability.</li>
                                    </ul>

                                    <p className="text-lily wow tpfadeUp">Global icons like Harvard University (WordPress), The New Yorker (Drupal), and NASA (Joomla) exemplify the successful use of CMS platforms to create impactful online presences </p>

                                    <h2 className="tp-section__title text-white mb-10 text-uppercase wow tpfadeUp"> Transforming Your Vision with Expert CMS Solutions</h2>

                                    <p>With over 20 years of experience working with clients across the US, we specialize in implementing these leading CMS platforms to bring your vision to life. Our expertise lies in understanding your unique goals and leveraging the strengths of the chosen CMS to craft a dynamic digital experience that resonates with your audience. From inception to launch, we align ourselves with your objectives, ensuring a smooth and professional outcome.
                                    </p>

                                    <p>We’re here to guide you in every step of your CMS project and help you create a digital solution that combines technical excellence with user-centric design.
                                    </p>

                                    <a href="#" className="tp-red-btn tp-btn-hover alt-bg-white wow tpfadeUp" data-wow-delay=".3s">
                                        download now
                                        <span className="ml-10 wow tpfadeUp">
                                            <i className="fal fa-long-arrow-right"></i>
                                            <i className="fal fa-long-arrow-right"></i>
                                        </span>
                                        <b></b>
                                    </a>
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