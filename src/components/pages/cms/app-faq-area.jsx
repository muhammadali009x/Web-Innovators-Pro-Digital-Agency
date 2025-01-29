import Accordion from "@/src/common/accordion";
import React from "react";


const accordion_data = [
  {
    id: 1,
    question: `What is a Content Management System (CMS)?
`,
    answer: `A CMS is software that allows users to create, manage, and modify content on a website without needing to write extensive code. It simplifies tasks like publishing blogs, updating pages, managing media files, and more. Popular platforms like WordPress, Drupal, and Joomla are examples of CMS solutions.
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
    question: `How many CMS platforms are there?
`,
    answer: `There are hundreds of CMS platforms available, each catering to different needs and industries. These range from general-purpose systems like WordPress and Joomla to specialized platforms like Shopify for e-commerce or Adobe Experience Manager for enterprise-level solutions.
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
    question: `What kind of websites can be built with a CMS?
`,
    answer: <>A CMS can be used to build a wide array of websites, including:
 <br /> <br />
      <ul>
        <li>Blogs or personal websites
        </li>
        <li>Corporate sites
        </li>
        <li>E-commerce stores
        </li>
        <li>Portfolio sites
        </li>
        <li>Membership sites
        </li>
        <li>Educational platforms
        </li>
        <li>News portals
        </li>
      </ul>
      <br />
      Whether you need a simple website or a complex one with advanced features, a CMS can provide the required tools and flexibility.

    </>,
    accordion_id: "faq3",
    collapsed: "collapsed",
    data_bs_target: "#collapse3",
    aria_expanded: false,
    aria_controls: "collapse3",
    show: "",
  },
  {
    id: 4,
    question: `Is it easy to manage a CMS-based site?
`,
    answer: `Yes, most CMS platforms are user-friendly and designed for individuals without technical expertise. They provide intuitive dashboards, drag-and-drop interfaces, and pre-designed templates to make website management straightforward. Many also offer a robust community for tutorials and support.
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
    question: `How customizable are CMS platforms?`,
    answer: <>
    CMS platforms are highly customizable through plugins, themes, and add-ons. For instance:
    <br /><br />
    <ul>
      <li><strong>Plugins </strong>enhance functionality (e.g., SEO, analytics, forms).</li>
      <li><strong>Themes </strong>allow you to adjust the design to match your branding. </li>
      <li><strong>Custom code</strong>options are available for more advanced personalization.</li>
    </ul>
      <br />
    Developers can also leverage the platform’s framework to tailor features to unique business needs.


    </>,
    accordion_id: "faq5",
    collapsed: "collapsed",
    data_bs_target: "#collapse5",
    aria_expanded: false,
    aria_controls: "collapse5",
    show: "",
  },
  {
    id: 6,
    question: `Can a CMS facilitate workflow and collaboration?`,
    answer: `Definitely. Many CMS platforms are designed to streamline team collaboration. Features like role-based permissions, version control, and real-time editing allow team members to work together efficiently while maintaining content integrity and security.
`,
    accordion_id: "faq6",
    collapsed: "collapsed",
    data_bs_target: "#collapse6",
    aria_expanded: false,
    aria_controls: "collapse6",
    show: "",
  },

  {
    id: 6,
    question: `Is it possible to build a web app with a CMS?
`,
    answer: `Yes, modern CMS platforms can support the development of advanced web applications. With frameworks like Drupal or WordPress combined with REST APIs and custom modules, you can create interactive, dynamic applications. This makes CMS platforms increasingly popular for projects requiring robust and scalable solutions.
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
                    Common Questions About Content Management Systems (CMS)
                  </h2>
                  <p>Understanding Content Management Systems (CMS) can make a world of difference when planning or managing a website. Whether you’re new to the concept or looking to deepen your knowledge, here are detailed answers to some of the most frequently asked questions we receive as a CMS agency:</p>
                </div>
              </div>
              <div
                className="accordion tp-accordion mr-20"
                id="accordionExample"
              >
                <Accordion accordion_data={accordion_data} />
              </div>
            </div>
            
          </div>
          <h2>Moving Forward</h2>
          <p>Whether you’re considering a CMS for your first website or seeking to enhance an existing one, understanding its capabilities can set you on the path to success. For tailored guidance or to explore CMS options that best suit your needs, feel free to reach out—we’re here to help!
          </p>
        </div>
      </div>
    </>
  );
};

export default AppFaqArea;
