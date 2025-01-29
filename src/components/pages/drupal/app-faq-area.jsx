import Accordion from "@/src/common/accordion";
import React from "react";


const accordion_data = [
  {
    id: 1,
    question: `What is the Drupal Module Directory? `,
    answer: `Think of the Drupal Module Directory as a massive library of tools that expand the capabilities of your website. Modules in this directory allow you to integrate new features, such as adding advanced search functionality, enabling multilingual support, or connecting with third-party tools like CRMs or analytics platforms. It’s a go-to resource for developers who want to customize websites with precision. 
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
    question: `Is Drupal a Secure System?`,
    answer: `Yes, Drupal is widely recognized for its robust security framework. It is actively maintained by a global community of developers and security experts who work tirelessly to address vulnerabilities and release updates promptly. Additionally, organizations like government agencies, banks, and large enterprises trust Drupal for their secure and complex web applications, a testament to its industry-leading security standards. 
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
    question: `Is Drupal Suitable for Larger Projects? `,
    answer: `Absolutely. Drupal shines when it comes to scaling for large and complex projects. Its modular architecture and enterprise-level capabilities make it ideal for managing vast amounts of content, large user bases, or high-traffic platforms. Whether you’re building an international e-commerce store or a corporate intranet, Drupal can handle the workload efficiently. 
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
    question: `Is Drupal Only for Complex, Large-Scale Projects? 
`,
    answer: `Not necessarily. While Drupal is well-suited for large-scale, sophisticated projects, its flexibility makes it just as viable for smaller websites. With the right setup and expertise, it can offer simple, clean, and powerful solutions that adapt as your business grows. Think of Drupal as a tool that evolves with your needs—both small and large. 
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
    question: `How Much Does a Website Developed with Drupal Cost?`,
    answer: `The cost of a Drupal website can vary significantly depending on the size, complexity, and customizations required for the project. For basic setups, it can be relatively affordable. However, for businesses requiring bespoke features, integrations, and scaling capability, the investment will naturally go up. We work closely with each client to provide transparent cost estimates and solutions that meet their budgets and goals. 
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
    question: `Is Drupal Easy to Use?`,
    answer: `Drupal has a steeper learning curve compared to some CMS platforms, especially for first-time users. However, this is where we come in as your Drupal agency. We ensure the backend is user-friendly and provide training to help your team confidently manage the site. Once familiarized, you’ll find Drupal to be a powerful and intuitive tool for creating and managing content. 
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
                  Common Questions We Get as a Drupal Agency 
                  </h2>
                  <p>When it comes to choosing and working with Drupal, we know you might have a lot of questions. To help, we’ve addressed some of the most commonly asked questions we receive from clients. These responses will shed light on why Drupal might be the best choice for your project and how it can meet your specific needs. 
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
            <p>If you have any other questions or would like to understand if Drupal is the right fit for your project, feel free to reach out. We’re here to guide you every step of the way. 
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppFaqArea;
