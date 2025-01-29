import Accordion from "@/src/common/accordion";
import React from "react";

const accordion_data = [
  {
    id: 1,
    question: `What is Matomo? 
`,
    answer: `Matomo is an open-source analytics platform designed to provide comprehensive insights into user behavior while prioritizing privacy. It serves as a versatile alternative to tools like Google Analytics, offering website owners total control over their data.
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
    question: `Does Matomo ensure user data privacy? 
`,
    answer: `Yes, Matomo is built with user privacy as a core principle. It allows organizations to own their data completely, ensuring compliance with regulations such as GDPR, HIPAA, and others. Privacy-friendly features like anonymized tracking ensure that user information is handled responsibly.
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
    question: `Can I transition from Google Analytics to Matomo? 
`,
    answer: `Absolutely. Matomo provides an intuitive migration tool that helps you seamlessly transfer your historical data from Google Analytics. You can continue gaining analytical insights without disruption while benefiting from enhanced privacy and control.
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
    question: `Is Matomo suitable for both small and large websites? 
`,
    answer: `Yes, Matomo is designed to scale with your needs, whether you manage a small blog or an enterprise-level website. With robust functionality and flexibility, it caters to a wide variety of businesses and use cases.
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
    question: `What does it mean that Matomo is “self-hosted,” and why is it significant? 
`,
    answer: `With the self-hosted option, you install and maintain Matomo on your own servers, giving you complete ownership of your analytics data. This eliminates reliance on third parties, reduces data exposure risks, and increases compliance control.
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
    question: `Does Matomo require intensive maintenance? 
`,
    answer: `While Matomo does require some level of regular updates and monitoring, it is generally straightforward to maintain. Comprehensive documentation and active support communities make the process manageable for users with varying technical expertise.
By offering clarity, precision, and user focus, Matomo gives you everything you need to make data-informed decisions, with your privacy and security in mind.
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
                  Common Questions Answered by Matomo Developers

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
            
          </div>
        </div>
      </div>
    </>
  );
};

export default AppFaqArea;
