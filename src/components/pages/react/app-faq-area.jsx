import Accordion from "@/src/common/accordion";
import React from "react";



const accordion_data = [
  {
    id: 1,
    question: "What are React Components? ",
    answer: `At its core, React is all about components. These are the building blocks of your application and act like reusable Lego pieces. A component can be as small as a button or as complex as an entire form. Together, they create a dynamic interface where everything works seamlessly. 
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
    question: `Is React a Secure Framework? 
`,
    answer: `While React itself is designed to be secure, the responsibility doesn’t stop there. By adopting best practices like validating inputs, securing APIs, and preventing vulnerabilities (like cross-site scripting), developers can ensure applications built with React are robust and safe. 
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
    question: `Is React Suitable for Larger Projects? 
`,
    answer: `Absolutely. React works incredibly well for larger projects. Its modular component structure keeps your code organized and scalable, which is why it’s favored by giants like Facebook, Netflix, and Instagram. It’s built to handle complexity while maintaining performance. 
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
    question: `Is React Only for Complex, Large-Scale Projects? 
`,
    answer: `Not at all! The beauty of React is its flexibility. Whether you’re building a simple portfolio website or a large-scale e-commerce platform, React adapts to projects of all sizes. Its learning curve is manageable, so even smaller teams or individual developers can whip up a project with ease. 
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
    question: `How Much Does a Web Application Developed with React Cost? 
`,
    answer: `The cost varies greatly based on the scope, complexity, and features of the application. A small site might cost a few thousand dollars, whereas a complex enterprise-level app could reach much higher budgets. Keep in mind, React’s efficiency often reduces development time, saving costs in the long run. 
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
    question: `Is React Easy to Use?`,
    answer: `Yes! React is developer-friendly, especially if you’re familiar with JavaScript. Its simple syntax, active community, and endless resources make it approachable for beginners and experts alike. Plus, the extensive library ecosystem saves time on repetitive tasks.
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
                    Common Questions We Get as React Developers

                  </h2>
                  <p>Are you curious about React or considering it for your next project? We’re here to help! Here’s a deeper dive into some of the most frequently asked questions we hear about React:
                  </p>
                </div>
              </div>
              <div
                className="accordion tp-accordion mr-20"
                id="accordionExample"
              >
                <Accordion accordion_data={accordion_data} />
              </div>
              <p>Do you have a question about React that we didn’t address? Drop us a line—we’d love to chat! React isn’t just a development tool; it’s a gateway to building incredible digital experiences.
              </p>
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
