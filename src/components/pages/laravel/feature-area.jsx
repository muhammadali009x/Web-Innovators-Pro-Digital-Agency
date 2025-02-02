import Link from "next/link";
import React from "react";


const feature_data = [
  {
    id: 1,
    icon: "/assets/img/icons/we_re_specialists.jpg",
    title: `We’re Specialists 
`,
    des: `At the core of our expertise is an unrivaled understanding of Laravel. We don’t just use it—we know it inside out. This deep mastery allows us to unlock Laravel’s full potential, delivering web applications that are robust, scalable, and optimized for performance, including SEO. Whether it’s structuring complex architectures or leveraging Laravel’s dynamic features, we build solutions that work seamlessly for your business. 
`},
  {
    id: 2,
    icon: "/assets/img/icons/we_re_flexible.jpg",
    title: `We’re Flexible 
`,
    des: `Your business is unique, and your Laravel application should reflect that. Need custom packages? Specific functionalities? Unique UI components? Our team thrives on crafting tailored solutions that align with your goals. With this bespoke approach, we ensure your application doesn’t just meet expectations—it exceeds them, positioning your business for success. 
` },
  {
    id: 3,
    icon: "/assets/img/icons/we_re_knowledgeable.jpg",
    title: `We’re Knowledgeable 
`,
    des: `Though Laravel is our specialty, our expertise doesn’t stop there. We’re well-versed in other frameworks like Angular and React, as well as CMS platforms such as Drupal, WordPress, Contao, and Joomla. This diverse knowledge means we can evaluate your project needs holistically. Unsure about the best tech to use? We’ll help you weigh the pros and cons, ensuring you choose the most effective solution for your business. 
` },
  {
    id: 4,
    icon: "/assets/img/icons/transparent.jpg",
    title: `We’re Transparent 
`,
    des: `Transparency is at the heart of everything we do. From initial project discussions to the final delivery, you’ll be involved at every step. We’re committed to open communication and are happy to share insights into our workflows and processes. Consider us your digital partner—fully invested in the success of your project and here to ensure its smooth execution. 
`},
  {
    id: 4,
    icon: "/assets/img/icons/we_re_here_for_you (1).jpg",
    title: `We’re Here for You 
`,
    des: `Our commitment doesn’t end when the project launches. We believe in building lasting relationships with our clients. That’s why we offer ongoing support and maintenance services to keep your Laravel application running smoothly. From applying the latest security patches to implementing feature enhancements, we’re dedicated to helping your application stay up-to-date and perform at its best.
`},
]


const FeatureArea = () => {
  return (
    <>
      <div className="tp-app-feature theme-bg-3 pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-wraper">
                <div className="tp-section text-center">
                  <span
                    className="tp-section__subtitle mb-15 shadow-none text-cornblue p-0 change-icon-size wow tpfadeUp"
                    data-wow-delay=".4s"
                  >
                    <i className="far fa-circle"></i>
                    Core Features
                    <i className="far fa-circle"></i>
                  </span>
                  <h2
                    className="tp-section__title mb-60 text-mirage wow tpfadeUp"
                    data-wow-delay=".3s"
                  >
                    How We Stand Out as a Laravel Agency

                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {feature_data.map((item, i) => (
              <div key={i} className="col-lg-6 col-12">
                <div
                  className="app-feature-box d-flex white-bg p-relative wow tpfadeUp"
                  data-wow-delay=".3s"
                >
                  <div className="app-feature-box-icon">
                    <img src={item.icon} alt="iclud" />
                  </div>
                  <div className="app-feature__info">
                    <h4 className="app-feature__title text-mirage">
                       {item.title} 
                    </h4>
                    <span>{item.des} </span>
                  </div>
                  {/* <div className="app-feature__arrow">
                    <span>
                      <a href="#">
                        <i className="fal fa-long-arrow-right"></i>
                      </a>
                    </span>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
          <p>Partner with us, and see the difference Laravel specialization, flexibility, and unwavering support can make for your business.
          </p>
        </div>
      </div>
    </>
  );
};

export default FeatureArea;
