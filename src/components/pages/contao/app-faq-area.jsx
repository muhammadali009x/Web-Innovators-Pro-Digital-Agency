import Accordion from "@/src/common/accordion";
import React from "react";


const accordion_data = [
  {
    id: 1,
    question: `Is Contao suitable for smaller or larger web projects? 
`,
    answer: `Contao is a highly versatile Content Management System (CMS), making it a great choice for projects of various scales. Whether you're building a simple website for a local business or managing a complex, large-scale enterprise platform, Contao provides the flexibility and scalability to accommodate your needs. Its modular structure allows for incremental growth, ensuring the CMS evolves alongside your projects.
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
    question: `What is the Contao Extension List? 
`,
    answer: `The Contao Extension List is a dedicated repository of add-ons and plugins designed to extend the functionality of the CMS. These extensions are created by a vibrant community of developers and provide features such as custom forms, advanced SEO tools, and social media integrations. This list ensures that developers have access to a wide range of tools to tailor a Contao website to specific requirements.
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
    question: `How secure is Contao? 
`,
    answer: `Security is one of Contao's key strengths. The platform is built with a strong focus on stability and protection against vulnerabilities, including XSS (Cross-Site Scripting) and SQL injections. Regular updates and a transparent release cycle keep the system secure. Additionally, Contao’s core team actively monitors and addresses security concerns, providing peace of mind for clients and developers alike.
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
    question: `Can Contao handle high-traffic websites? 
`,
    answer: `Absolutely. Contao is optimized for performance, making it capable of supporting high-traffic websites without compromising speed or user experience. Features such as caching, database optimization, and compatibility with Content Delivery Networks (CDNs) enable Contao to maintain consistent performance under heavy user loads.
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
    question: `How much does a website developed with Contao cost? 
`,
    answer: `The cost of a Contao-developed website varies based on the project’s complexity, features, and customization needs. Simpler projects with basic features tend to be more affordable, while large-scale, feature-rich platforms require a greater investment. We’d be happy to discuss your individual requirements to provide a detailed cost estimate.
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
    question: `Is Contao user-friendly? 
`,
    answer: `Yes, Contao is designed with usability in mind. Its intuitive backend allows even non-technical users to easily manage and update content. The user interface is clean and logically organized, which reduces the learning curve for teams working with the CMS. Combined with robust documentation and a supportive developer community, Contao ensures that users of all experience levels can make the most of the platform.
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
                    Common Questions About Contao as a Web Development Agency

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
            <p>Have more questions about Contao or how it could complement your web project? Get in touch with our team to explore how we can help elevate your online presence with this powerful CMS.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppFaqArea;
