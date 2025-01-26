import Accordion from "@/src/common/accordion";
import React from "react";






const accordion_data = [
  {
    id: 1,
    question: `What is the Symfony Bundle System?
`,
    answer: `Think of the Symfony Bundle System as customizable building blocks for your application. Bundles allow developers to extend and reuse functionalities across multiple projects while maintaining clean and organized code. It's a flexible way to structure your application without reinventing the wheel for every new feature.
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
    question: `Is Symfony a Secure Framework?
`,
    answer: `Absolutely! Symfony is built with robust security in mind. It includes built-in features like authentication, authorization, CSRF protection, and encryption tools. Its long-term support (LTS) versions receive consistent updates, ensuring your project remains protected against evolving vulnerabilities.
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
    question: `Is Symfony Suitable for Larger Projects?
`,
    answer: `Yes, without a doubt. Symfony was designed with scalability in mind, making it an excellent choice for handling the complexities of large-scale projects. Major platforms like Spotify and e-commerce giants use Symfony for its ability to manage high-performance applications efficiently.
`,
    accordion_id: "faq3",
    collapsed: "collapsed",
    data_bs_target: "#collapseThree",
    aria_expanded: false,
    aria_controls: "collapseThree",
    show: "",
  },

  {
    id: 4,
    question: `Is Symfony Only for Complex, Large-Scale Projects?
`,
    answer: `Not at all! While Symfony is often the go-to framework for complex, feature-rich applications, it’s equally suitable for smaller projects. Its modular structure allows for flexibility, enabling you to use only the features you need, making it a great fit for projects of all sizes.
`,
    accordion_id: "faq3",
    collapsed: "collapsed",
    data_bs_target: "#collapse4",
    aria_expanded: false,
    aria_controls: "collapse4",
    show: "",
  },

  {
    id: 5,
    question: `How Much Does a Web Application Developed with Symfony Cost?
`,
    answer: `The cost of a Symfony-based web application varies depending on factors like project scope, the complexity of features, and the development team's expertise. Symfony's flexibility allows businesses to build everything from MVPs to enterprise-grade solutions, making it accessible for various budgets.
`,
    accordion_id: "faq3",
    collapsed: "collapsed",
    data_bs_target: "#collapse5",
    aria_expanded: false,
    aria_controls: "collapse5",
    show: "",
  },

  {
    id: 6,
    question: `Is Symfony Easy to Use?
`,
    answer: `Symfony has a bit of a learning curve, but developers love it for its elegance and logical structure. Once you grasp its fundamentals, its high-level tools and extensive documentation make it incredibly efficient to use. Plus, Symfony's emphasis on developer experience makes coding a joy rather than a chore!
`,
    accordion_id: "faq3",
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
                    Common Questions About Symfony as a Framework

                  </h2>
                  <p>Are you curious about working with Symfony? As a Symfony agency, we often hear these popular questions from developers and businesses alike. Let's break them down!
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
            <p>Still have questions about Symfony or its capabilities? Reach out to our team, and we’ll be happy to guide you! Symfony isn’t just a framework—it’s a gateway to building robust, scalable, and secure applications.
            </p>
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
