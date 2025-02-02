import Link from "next/link";
import React from "react";


const feature_data = [
  {
    id: 1,
    icon: "/assets/img/icons/we_re_specialists (1).jpg",
    title: `We’re Specialists 
`,
    des: `Our team possesses an unparalleled understanding of Angular and its architecture. This expertise enables us to harness Angular’s full potential to create web applications that are robust, scalable, and SEO-friendly. By deeply integrating its features, we ensure your application performs seamlessly and delivers exceptional results tailored to your unique requirements.
` },
  {
    id: 2,
    icon: "/assets/img/icons/we_re_flexible (1).jpg",
    title: `We’re Flexible 
`,
    des: `Every business has distinct needs, and we’re here to meet yours. Whether it’s developing custom modules, implementing unique functionalities, or building distinctive UI components, our team crafts solutions that align perfectly with your objectives. This approach guarantees a personalized Angular application that not only stands out but also optimally supports your goals.
` },
  {
    id: 3,
    icon: "/assets/img/icons/we_re_knowledgeable (1).jpg",
    title: `We’re Knowledgeable 
`,
    des: `While Angular is our forte, our expertise doesn’t stop there. We are proficient in other technologies such as Laravel, Symfony, React, Vue.js, and CMS platforms like Drupal, WordPress, Joomla, and Contao. Our extensive experience allows us to evaluate your project’s unique needs and recommend the most effective technology for your vision, ensuring your solution is built on a strong, versatile foundation.
`},
  {
    id: 4,
    icon: "/assets/img/icons/transparent (1).jpg",
    title: `We’re Transparent 
`,
    des: `Transparency and trust form the backbone of our working process. From initial concept to project completion, we maintain open communication and keep you involved at every step. Our goal is to build a true partnership, ensuring we’re fully aligned with your needs and committed to the success of your project.
`},
  {
    id: 5,
    icon: "/assets/img/icons/we_re_here_for_you (1) (1).jpg",
    title: `We’re Here For You 
`,
    des: `Our dedication doesn’t stop once your project is delivered. We are committed to building lasting relationships and offer comprehensive support and maintenance services. This includes regular updates, security patches, and feature enhancements to ensure your Angular application performs at its peak, remains secure, and evolves with your business.
`},
]

const feature_data2 = [
  {
    id: 1,
    icon: "/assets/img/icons/comprehensive_framework.jpg",
    title: `Comprehensive Framework
`,
    des: `Angular is a complete, all-in-one framework designed for complex, high-performing applications. Its built-in tools handle a wide variety of development needs, including backend communication, form processing, and advanced UI animations. With Angular, you gain access to everything required for modern application development without relying heavily on third-party tools.
` },
  {
    id: 2,
    icon: "/assets/img/icons/typescript_based_development.jpg",
    title: `TypeScript-Based Development
`,
    des: `Angular is built on TypeScript, a statically typed version of JavaScript. TypeScript helps developers write more reliable, maintainable code by catching errors early in the development process and providing advanced features like type definitions. This can lead to fewer runtime issues, improved performance, and a faster workflow.
` },
  {
    id: 3,
    icon: "/assets/img/icons/strong_community_and_support_network.jpg",
    title: `Strong Community and Support Network
`,
    des: `Backed by Google and supported by a large, vibrant community, Angular benefits from continual updates, a rich ecosystem of libraries, and a wealth of resources. Developers can rely on active forums, detailed documentation, and readily available libraries to streamline their workflows.
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
                    How Are We Different From Other Angular Agencies?

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
          <p>At our core, we are more than just developers – we are your partners in bringing your vision to life. With our broad expertise, adaptable approach, and unwavering support, we are here to help you achieve the extraordinary with Angular.
          </p>






          <div className="row">
            <div className="col-12">
              <div className="section-title-wraper">
                <div className="tp-section text-center">
                  <h2
                    className="tp-section__title mb-60 text-mirage wow tpfadeUp"
                    data-wow-delay=".3s"
                  >
                    Is Angular the Right Choice for Your Project?
                  </h2>
                  <p>Choosing the right framework for your digital project is a pivotal decision that greatly impacts its development and long-term success. With extensive experience in Angular, we’re intimately familiar with its strengths and potential limitations. This guide takes a closer look at Angular's key features and discusses when you might want to consider alternative solutions.
                  </p>

                  <h3
                    className="tp-section__title mb-60 text-mirage wow tpfadeUp"
                    data-wow-delay=".3s"
                  >
                    What Sets Angular Apart?
                  </h3>
                  <p>Angular stands out among frameworks for its wide-ranging capabilities and robust ecosystem. Here are some of the features that make it a powerful choice for building applications:
                  </p>

                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {feature_data2.map((item, i) => (
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









        </div>
      </div>
    </>
  );
};

export default FeatureArea;
