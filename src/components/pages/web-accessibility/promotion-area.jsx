import React from 'react';


const promotion_content = {
    img_1: "/assets/img/promotion/law-book-1.jpg",
    img_2: "/assets/img/promotion/law-book-2.jpg",
    title: `   Make Your Digital Presence Accessible to Everyone 
`,
    des: `Does your website or app cater to all users? Accessibility is more than just a feature—it's an essential aspect of creating digital platforms that provide equal experiences for everyone, including individuals with disabilities. 
`,
    des2: `For businesses in the US and globally, ensuring access isn’t just a best practice but frequently a legal necessity. Many leading organizations prioritize accessibility not only to comply with regulations but because it expands their reach, improves usability for all users, and reflects strong ethical values. 
`,
    des3: `Our team draws on years of expertise in designing, auditing, and retrofitting websites and apps to meet global accessibility standards. We understand that accessibility requires technical knowledge, careful attention to detail, and a commitment to inclusivity. Our process ensures your platform supports diverse user needs while maintaining ease and functionality. 
`,
}

const { img_1, img_2, title, des, des2, des3 } = promotion_content

const PromotionArea = () => {
    return (
        <>
            <div className="law-promotion-area wine-bg pt-100 pb-90 p-relative">
                <div className="container">
                    <div className="row align-items-xl-center">
                        {/* <div className="col-xl-6 col-lg-5">
                        <div className="law-promotion-books mb-20">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="law-book text-xl-end mr-10 wow tpfadeUp" data-wow-delay=".4s" data-tilt="" data-tilt-perspective="2000">
                                        <img src={img_1} alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="law-book wow tpfadeUp" data-wow-delay=".3s">
                                        <img src={img_2} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
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
                                </div>
                            </div>


                            <div className="section-title-wraper">
                                <div className="tp-section">
                                    <h2 className="tp-section__title text-white mb-10 text-uppercase wow tpfadeUp"> What We Offer
                                    </h2>
                                    <p>With our extensive experience, we provide tailored solutions that make your digital platforms compliant, effective, and welcoming to all. Our team works with various technologies, including but not limited to:
                                    </p>
                                    <ul>
                                        <li><strong>Content Management Systems</strong> WordPress, Drupal, Joomla</li>
                                        <li><strong>Frameworks</strong> Frameworks</li>
                                        <li><strong>Front-End Technologies</strong> React, Angular, Vue.js
                                        </li>
                                    </ul>
                                    <p>Whether you need a full redesign or adjustments to existing structures, we’re here to guide you through every step of the process.
                                    </p>
                                    <p><strong>Make your digital presence work for everyone.</strong> Contact us today to learn how we can help make your website or app inclusive, user-friendly, and widely accessible.</p>
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