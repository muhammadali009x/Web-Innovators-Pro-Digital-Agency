import React from 'react';


const promotion_content = {
    img_1: "/assets/img/promotion/law-book-1.jpg",
    img_2: "/assets/img/promotion/law-book-2.jpg",
    title: `Do you need a partner to develop a website, app, or custom extension using Contao? 
`,
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
                                    <p className="text-lily wow tpfadeUp"> Contao, an open-source platform, has evolved significantly from its beginnings as a simple content management system (CMS) for accessible websites. Today, it stands as a robust and flexible CMS, trusted by a wide range of organizations across the United States. Institutions such as the University of Massachusetts, the Midwest Library Network, and Mount Sinai Health System rely on Contao to manage their digital presence effectively.
                                    </p>
                                    <p className="text-lily wow tpfadeUp">  Its versatility allows it to support projects of all sizes and complexities, making it an excellent choice for businesses, educational institutions, healthcare systems, and more. With features designed for accessibility and advanced functionality, Contao ensures that your digital platform is both powerful and user-friendly.
                                    </p>
                                    <p className="text-lily wow tpfadeUp"> At our agency, we specialize in Contao projects and have helped organizations like yours bring their digital visions to life. From custom web development to tailored extensions, our experienced team is here to guide you every step of the way. Whether you're building something entirely new or enhancing an existing platform, we’ll deliver solutions that meet your unique needs.
                                    </p>
                                    <p className="text-lily wow tpfadeUp">Reach out today to discuss your project. Together, we’ll create a digital experience that’s accessible, reliable, and precisely aligned with your goals.
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