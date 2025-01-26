import Accordion from "@/src/common/accordion";
import React from "react";





const accordion_data = [
  {
    id: 1,
    question: `What is web accessibility? 

`,
    answer: `Web accessibility ensures that websites, apps, and other digital tools are designed and built so that people with disabilities can use them effectively. It involves removing barriers to interactions and access, enabling everyone to browse, shop, work, and engage online without limitations.
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
    question: `Why is web accessibility important for businesses? 
`,
    answer: `Inclusive design is not just about compliance; it's a smart business strategy. By making your website accessible, you open your doors to a larger audience, including millions of people with disabilities. This can improve customer satisfaction, boost your brand reputation, and even give you a competitive edge. Additionally, many countries have regulations requiring businesses to meet accessibility standards.
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
    question: `Does web accessibility benefit users without disabilities? 
`,
    answer: `Absolutely. Accessible design often improves overall usability. Features like clear navigation, captions on videos, or responsive design don’t just help users with disabilities—they cater to everyone. For example, captions can be useful in noisy environments or for people who don’t speak the video's language fluently, and simple, intuitive layouts make it easier for all users to find what they need quickly.
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
    question: `Can an existing website or app be made accessible? 
`,
    answer: `Yes, accessibility can be implemented into an existing website or app. Through an accessibility audit, experts can identify areas for improvement and recommend necessary updates, such as adjusting color contrasts, adding alt text to images, or improving keyboard navigation. Retrofitting may take time and investment, but the outcome ensures an inclusive experience for all users.
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
    question: `Are there standards or guidelines for web accessibility? 
`,
    answer: `Yes, the Web Content Accessibility Guidelines (WCAG) are the international benchmark for web accessibility. These guidelines provide detailed requirements to ensure accessibility for individuals with vision, hearing, mobility, and cognitive impairments. WCAG has different levels of compliance (A, AA, AAA) to match varying accessibility goals.
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
    question: `Are there US-specific standards or guidelines for web accessibility? 
`,
    answer: `Yes, in the United States, accessibility guidelines often align with WCAG, but businesses also need to consider the Americans with Disabilities Act (ADA) and Section 508 of the Rehabilitation Act. These laws emphasize the importance of making public-facing websites, workplace tools, and government platforms accessible to everyone.
`,
    accordion_id: "faq3",
    collapsed: "collapsed",
    data_bs_target: "#collapse6",
    aria_expanded: false,
    aria_controls: "collapse6",
    show: "",
  },


  {
    id: 6,
    question: `How will accessibility affect my brand and reputation? 
`,
    answer: `Web accessibility is a reflection of your company's inclusivity and values. A commitment to accessibility shows your audience that you care about their needs and strive to create an inclusive environment. Organizations that prioritize accessibility often see enhanced public trust, stronger customer loyalty, and positive brand perception.
`,
    accordion_id: "faq3",
    collapsed: "collapsed",
    data_bs_target: "#collapse7",
    aria_expanded: false,
    aria_controls: "collapse7",
    show: "",
  },
  {
    id: 6,
    question: `Does ensuring web accessibility complicate the design or functionality of a site? 
`,
    answer: `Not at all. Good accessibility design often enhances usability and simplicity. While accessibility requirements might introduce some changes, they rarely conflict with aesthetic appeal or modern functionality. By following best practices, you can create an experience that is both visually appealing and effective for all users.
`,
    accordion_id: "faq3",
    collapsed: "collapsed",
    data_bs_target: "#collapse8",
    aria_expanded: false,
    aria_controls: "collapse8",
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
                    Common Questions About Web Accessibility

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
            <h2>Final Thoughts
            </h2>
            <p>Web accessibility isn't just about meeting legal requirements—it’s about creating a digital space where everyone feels welcome. By addressing these common questions and integrating accessibility into your digital strategy, your business can unlock new opportunities, build a stronger brand, and contribute to a more inclusive online world.
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
