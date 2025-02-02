import Link from "next/link";
import React from "react";


const feature_data = [
  {
    id: 1,
    icon: "/assets/img/icons/app-fea-icon-1.png",
    title: `We’re Specialists 
`,
    des: `With years of experience under our belt, we specialize in delivering robust, scalable websites by leveraging a diverse range of technologies. Our in-depth understanding of various architectures allows us to choose and implement the best features and capabilities of each framework and CMS. Whether it’s an enterprise-level solution or a performance-driven platform, we ensure every piece of technology works cohesively to create a powerful digital experience.
` },
  {
    id: 2,
    icon: "/assets/img/icons/app-fea-icon-2.png",
    title: `We’re Adaptable 
`,
    des: `No two businesses are the same, and neither should their websites be. We listen, collaborate, and craft tailored solutions that align perfectly with your business objectives. From custom plugins to unique layout elements or advanced functionalities, our team of experts takes the time to build a digital presence that reflects your brand and meets your precise needs.
`},
  {
    id: 3,
    icon: "/assets/img/icons/app-fea-icon-3.png",
    title: `We’re Flexible 
`,
    des: `Our expertise spans across a wide array of CMS platforms—such as Drupal, Contao, WordPress, and Joomla—and modern frameworks like Laravel and React. By being technology-agnostic, we assess the strengths of each platform and guide you toward the one that best supports your project’s requirements. Whether you’re envisioning a performant web app or a flexible content management system, we’re here to offer guidance, recommendations, and implementation tailored to your vision.
` },
  {
    id: 4,
    icon: "/assets/img/icons/app-fea-icon-4.png",
    title: `We’re Transparent 
`,
    des: `We believe that collaboration is key to success. That’s why transparency drives everything we do. From initial discussions to final delivery, we ensure you are part of every phase of development. Our open communication ensures you are always informed and feel confident in the direction of your project. Think of us as your digital partner—fully invested in the success of your business.
` },
  {
    id: 5,
    icon: "/assets/img/icons/app-fea-icon-4.png",
    title: `We’re Here for You 
`,
    des: `Our commitment doesn’t end at project delivery. We believe in fostering long-term relationships with our clients and are dedicated to ensuring your website continues to perform at its best even after launch. Our support and maintenance services include everything from implementing the latest security updates to introducing new features that keep your platform current. With us by your side, your digital presence will remain as cutting-edge as the day it launched. 
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
                    How Are We Different From Other Web Agencies?

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
          <p>That’s what makes us unique—not just experts in web development, but your dedicated partner in digital growth.
          </p>
        </div>
      </div>
    </>
  );
};

export default FeatureArea;
