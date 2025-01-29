 import React from 'react';


const promotion_content = {
    img_1: "/assets/img/promotion/law-book-1.jpg",
    img_2: "/assets/img/promotion/law-book-2.jpg",
    title: `Are you searching for a reliable partner to bring your next digital project to life? 
`, des: `Web apps are changing the game in how businesses connect with their customers. They’re dynamic, versatile, and built to adapt. With instant updates and responsive designs, web apps create intuitive user experiences across all devices. Whether you’re managing breaking news, offering rides, or providing tailored services, a well-developed web app ensures lightning-fast access and unmatched reliability. `,
    des2: `Take a page from industry leaders like CNN, The New York Times, and Uber—these corporations leverage web apps to immerse their users and stay ahead of the curve. Imagine what a thoughtfully designed web app could do for your business. `,
    des3: `We bring both expertise and passion to web app development, supporting projects small and large. From strategy to deployment, we’re here to help you create digital solutions that deliver real results. Our team works across a range of cutting-edge technologies, ensuring your vision is not just a goal but a reality. `,
    des4: `Ready to revolutionize how your business interacts online? Let's build something exceptional together.`


}

const { img_1, img_2, title, des, des2, des3, des4 } = promotion_content

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
                                    <p className="text-lily wow tpfadeUp"> In the digital age, the platform supporting your online presence is just as pivotal as the content it delivers. Whether you’re envisioning a dynamic website, an innovative web application, or customized integrations tailored to your needs, our team excels in leveraging the tools and technologies that will help realize your vision.
                                    </p>
                                    <p className="text-lily wow tpfadeUp"> With over 20 years of experience, our agency has gained the trust of numerous businesses across the US to create impactful digital experiences. We have a deep understanding of a broad spectrum of platforms and technologies, and we’re committed to aligning our expertise with your goals to achieve results that stand out. Our capabilities extend across the following technologies and beyond, bringing versatility and precision to each project we undertake.
                                    </p>
                                    <p className="text-lily wow tpfadeUp"> Partner with us to craft a digital presence that not only represents your vision but also ensures exceptional user experiences.
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