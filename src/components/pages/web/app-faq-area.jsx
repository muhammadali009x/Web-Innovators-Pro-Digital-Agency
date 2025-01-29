import Accordion from "@/src/common/accordion";
import React from "react";

const accordion_data = [
  {
    id: 1,
    question: `What is a Content Management System (CMS)?
`,
    answer: `A CMS is a software platform that allows users to create, manage, and modify content on a website without needing extensive technical knowledge. Popular examples include WordPress, Drupal, and Joomla. A good CMS simplifies the management of your digital content, enabling you to focus on the message rather than the code.
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
    question: `How do I choose the right CMS or framework for my project?
`,
    answer: <>The best CMS or framework depends on your project’s specific needs, such as functionality, scalability, and user experience. For example:
      <ul><li>For simple blogs or small websites, WordPress is often a strong choice due to its ease of use and large plugin ecosystem.
      </li><li>For enterprise-level projects with custom requirements, a framework like Laravel or Symfony can offer more flexibility.
        </li></ul>We help assess your requirements and guide you to the most suitable solution for your goals.
    </>,
    accordion_id: "faq2",
    collapsed: "collapsed",
    data_bs_target: "#collapseTwo",
    aria_expanded: false,
    aria_controls: "collapseTwo",
    show: "",
  },
  {
    id: 3,
    question: `What are the benefits of web apps?
`,
    answer: <>Web apps offer several distinct advantages:
      <ul>
        <li><strong>Accessibility:</strong>They run seamlessly on browsers across devices, eliminating the need for downloads.
        </li>
        <li><strong>Scalability:</strong>Easily adaptable to growing business needs.
        </li>
        <li><strong>Custom Features:</strong>Tailored to provide specific functionalities that enhance user experience.</li>
      </ul>If you're looking to engage users with interactive and responsive features, a web app might be the perfect fit.
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
    question: `How does the web framework impact my project?
`,
    answer: `The choice of a web framework determines how efficiently your project is developed and maintained. Frameworks like React, Angular, and Vue.js enable dynamic, fast-loading interfaces, while backend frameworks like Django or Laravel ensure robust data management and system functionality. Choosing the right framework can also impact scalability, performance, and future updates.
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
    question: `Can I make my existing website accessible to all users?
`,
    answer: <>Yes, your website can be retrofitted to meet accessibility standards such as WCAG (Web Content Accessibility Guidelines). This process involves:
      <ul>
        <li>Conducting an accessibility audit to identify barriers.
        </li>
        <li>Implementing design and code changes to improve functionality for users with disabilities.
        </li>
      </ul>Accessibility is not just about compliance but also about creating an inclusive experience for all visitors to your website.
    </>,
    accordion_id: "faq6",
    collapsed: "collapsed",
    data_bs_target: "#collapse6",
    aria_expanded: false,
    aria_controls: "collapse6",
    show: "",
  },




  //////////
  {
    id: 6,
    question: `How can analytics help improve my web presence?
`,
    answer: <>Analytics tools like Google Analytics or Hotjar provide insights into user behavior on your website. You can track:
      <ul>

        <li> Pages your visitors interact with most.
        </li><li>Drop-off points in the user journey.
        </li><li>User demographics like location or device type.
        </li></ul>
        This data helps refine strategies to enhance engagement, optimize navigation, and increase conversions.

        </>,
    accordion_id: "faq6",
    collapsed: "collapsed",
    data_bs_target: "#collapse6",
    aria_expanded: false,
    aria_controls: "collapse6",
    show: "",
  }, {
    id: 6,
    question: `Is it possible to migrate from one CMS or framework to another?
`,
    answer: <>Yes, migration is possible and often necessary for growth. Whether moving from WordPress to Drupal or transitioning to a custom-built framework, the migration process involves:
<ul>
        <li>Carefully exporting and importing content.
        </li>
        <li>Rebuilding any custom functionalities.
        </li>
        <li>Testing to ensure a seamless transition. 
        </li>
      </ul>Our team ensures that your data and website functionality remain intact during the process.
      </>,
    accordion_id: "faq6",
    collapsed: "collapsed",
    data_bs_target: "#collapse6",
    aria_expanded: false,
    aria_controls: "collapse6",
    show: "",
  }, {
    id: 6,
    question: `How customizable are web solutions, from CMS to frameworks?
`,
    answer: <>Modern CMS platforms and frameworks offer vast customizability to match your unique business needs. From tailored plugins and APIs to entirely bespoke components, the sky's the limit. Leveraging open-source tools or building from scratch, our expertise ensures your web solution performs exactly as desired.
</>,
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
              className="col-xl-5 col-lg-6 wow tpfadeUp"
              data-wow-delay=".4s"
            >
              <div className="section-title-wraper">
                <div className="tp-section">
                  <span className="tp-section__subtitle mb-15 shadow-none text-cornblue p-0 change-icon-size">
                    <i className="far fa-circle"></i>
                    FAQ
                  </span>
                  <h2 className="tp-section__title mb-30 text-mirage">
                    Common Questions to Our Web Agency

                  </h2>
                  <p>At [Your Web Agency Name], we often receive questions from clients eager to make informed decisions about their digital projects. Here are detailed answers to some of the most frequent inquiries:
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
            <p>Have more questions? Don’t hesitate to reach out. We’re here to provide clarity and guide you toward the best digital choices for your business.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppFaqArea;
