import Accordion from "@/src/common/accordion";
import React from "react";

const accordion_data = [
  {
    id: 1,
    question: `What is a web application? 
`,
    answer: `A web application is like a super-charged website. It's interactive, functional, and works on any internet-enabled device without needing to be downloaded. Think about tools like Google Docs or online banking platforms—they're all web apps designed to make life smoother. 
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
    question: `Are web apps secure? 
`,
    answer: `Great question! Security is a top priority for us. When properly developed, web apps can meet even the highest standards of security. From encrypted data to multi-factor authentication, we build safeguards to protect your users and their information. 
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
    question: `Can web apps handle large-scale projects? 
`,
    answer: `Absolutely. Web apps aren’t just for small audiences or lightweight tasks. They're capable of handling everything from massive e-commerce platforms with thousands of users to enterprise-level solutions managing complex systems. 
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
    question: `Are web apps only suited to complex, large-scale projects? 
`,
    answer: `Not at all! Web apps fit all kinds of needs, small or large. Whether you're looking to build a simple task tracker for your startup or a powerful analytics platform, web applications adapt to your specific goals. 
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
    question: `How much does it cost to develop a web application? 
`,
    answer: `It really depends on the scope of your project. Complexity, features, and custom design all factor into the overall cost. The great news is that web apps offer incredible return on investment, especially when tailored perfectly to your business needs. 
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
    question: `Is it challenging to maintain and update a web app? 
`,
    answer: `Not with the right development team (like ours!) by your side. We create web apps that are easy to maintain and flexible for updates. Plus, with cloud technology growing, updates can often be rolled out seamlessly without disruption to your users. 
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
                    Some Q &Answer
                  </h2>
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
