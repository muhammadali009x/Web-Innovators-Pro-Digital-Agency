import Accordion from "@/src/common/accordion";
import React from "react";


const accordion_data = [
  {
    id: 1,
    question: `What Are Angular Components?
`,
    answer: `Angular components are the building blocks of an Angular application. Each component manages a specific part of the UI (user interface) and encapsulates its own HTML, CSS, and logic. By structuring applications into reusable, modular components, developers can maintain clean, efficient, and scalable codebases. Think of components as the individual pieces of a puzzle that come together to form your overall application. 
`,
    accordion_id: "faq1",
    collapsed: "",
    data_bs_target: "#collapseOne",
    aria_expanded: true,
    aria_controls: "collapseOne",
    show: "show",
  },
  {
    id: 2,
    question: `Is Angular a Secure Framework? 
`,
    answer: `Yes, Angular is designed with security in mind. The framework includes built-in protections against common vulnerabilities like XSS (cross-site scripting) and CSRF (cross-site request forgery). Angular's architecture ensures data binding is secure, and it encourages developers to adopt safe coding practices. However, as with any framework, maintaining a secure application ultimately depends on adhering to best practices and regularly reviewing your code. 
`,
    accordion_id: "faq2",
    collapsed: "collapsed",
    data_bs_target: "#collapseTwo",
    aria_expanded: false,
    aria_controls: "collapseTwo",
    show: "",
  },
  {
    id: 3,
    question: `Is Angular Suitable for Larger Projects? 
`,
    answer: `Absolutely. Angular is particularly well-suited for large-scale applications due to its robust structure and extensive toolset. It includes features like dependency injection, modular architecture, and powerful CLI (Command Line Interface) tools, making it an ideal choice for enterprise applications. Large platforms requiring long-term scalability and maintainability often rely on Angular for its efficiency and performance capabilities. 
`,
    accordion_id: "faq3",
    collapsed: "collapsed",
    data_bs_target: "#collapse3",
    aria_expanded: false,
    aria_controls: "collapse3",
    show: "",
  },
  {
    id: 4,
    question: `How Much Does a Web Application Developed With Angular Cost? 
`,
    answer: `The cost of developing a web application with Angular depends on several factors, such as the complexity of the features, the design requirements, and the level of customization needed. Additionally, factors like project deadlines and the size of the development team can influence costs. If you'd like an estimate tailored to your specific project, feel free to reach out to us so we can discuss your application in detail. 
`,
    accordion_id: "faq4",
    collapsed: "collapsed",
    data_bs_target: "#collapse4",
    aria_expanded: false,
    aria_controls: "collapse4",
    show: "",
  },
  {
    id: 5,
    question: `Is Angular Easy to Use? 
`,
    answer: `While Angular offers powerful tools and capabilities, its learning curve can be steeper compared to some other frameworks. This is due to its comprehensive set of features, such as TypeScript and RxJS, which can be overwhelming for beginners. However, once developers are familiar with Angular's core concepts, they often find its structure intuitive and efficient, especially for building dynamic and complex applications. With the right guidance and resources, Angular becomes a strong asset for any development team. 
`,
    accordion_id: "faq5",
    collapsed: "collapsed",
    data_bs_target: "#collapse5",
    aria_expanded: false,
    aria_controls: "collapse5",
    show: "",
  },
  {
    id: 6,
    question: `Have More Questions? 
`,
    answer: `Our team is here to help clarify any additional questions you might have about Angular or its implementation in your project. With years of experience as an Angular agency, we can provide insights, strategies, and solutions tailored to your needs. Contact us to explore how Angular can unlock your project's full potential.
`,
    accordion_id: "faq6",
    collapsed: "collapsed",
    data_bs_target: "#collapse6",
    aria_expanded: false,
    aria_controls: "collapse6",
    show: "",
  },

]

const AppFaqArea = () => {
  return (
    <>
      <div className="tp-app-faq-area pt-120 pb-120">
        <div className="container">
          <div className="row align-items-lg-center align-items-xl-start">
            <div
              className="col-xl-12 col-lg-12 wow tpfadeUp"
              data-wow-delay=".4s"
            >
              <div className="section-title-wraper">
                <div className="tp-section">
                  <span className="tp-section__subtitle mb-15 shadow-none text-cornblue p-0 change-icon-size">
                    <i className="far fa-circle"></i>
                    FAQ
                  </span>
                  <h2 className="tp-section__title mb-30 text-mirage">
                    Frequently Asked Questions About Angular
                  </h2>
                  <p>If you're exploring Angular for your next project or simply curious about its capabilities, we've compiled answers to some of the most common questions we receive as an Angular agency. With our expertise, we aim to guide you through its features and benefits so you can make informed decisions.
                  </p>
                </div>
              </div>
              <div
                className="accordion tp-accordion mr-20"
                id="accordionExample"
              >
                <Accordion accordion_data={accordion_data} />
              </div>
            </div>
            {/* <div className="col-xl-7 col-lg-6 wow tpfadeUp">
              <div className="app-faq-img float-end">
                <img src="/assets/img/faq/app-faq-image.jpg" alt="" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AppFaqArea;
