import Accordion from "@/src/common/accordion";
import React from "react";



const accordion_data = [
  {
    id: 1,
    question: `How long does it take to build a website? `,
    answer: `The timeline for a website project can vary depending on its complexity, the number of pages, and the features needed. A standard website usually takes 4 to 12 weeks to complete, but this may change based on client feedback and project scope.  `,
    accordion_id: "faq1",
    collapsed: "",
    data_bs_target: "#collapseOne",
    aria_expanded: true,
    aria_controls: "collapseOne",
    show: "show",
  },
  {
    id: 2,
    question: `How much does a website cost?  `,
    answer: `Website costs depend on factors like design complexity, required features, and the platform used. Basic websites typically start at $1,000, while more advanced, custom websites can range from $2,000 to $50,000 or more.  `,
    accordion_id: "faq2",
    collapsed: "collapsed",
    data_bs_target: "#collapseTwo",
    aria_expanded: false,
    aria_controls: "collapseTwo",
    show: "",
  },
  {
    id: 3,
    question: `Do I need to provide content for my site?`,
    answer: `Yes, we usually need you to provide text, images, and videos for your website. If you need assistance, we can help by creating copy, sourcing images, and offering content strategy suggestions.  `,
    accordion_id: "faq3",
    collapsed: "collapsed",
    data_bs_target: "#collapse3",
    aria_expanded: false,
    aria_controls: "collapse3",
    show: "",
  },
  {
    id: 4,
    question: `Will my website work on mobile devices?  `,
    answer: `Absolutely! All websites we create are mobile-friendly, fully responsive, and optimized for seamless use on smartphones, tablets, and desktops.  `,
    accordion_id: "faq4",
    collapsed: "collapsed",
    data_bs_target: "#collapse4",
    aria_expanded: false,
    aria_controls: "collapse4",
    show: "",
  },
  {
    id: 5,
    question: `Can you assist with website maintenance after launch?  `,
    answer: `Yes! We provide website maintenance and support packages to keep your site updated, secure, and running smoothly. Whether it’s content updates, security patches, or design changes, we’re here to help.`,
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
