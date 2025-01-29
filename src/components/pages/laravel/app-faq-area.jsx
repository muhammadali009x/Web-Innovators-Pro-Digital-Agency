import Accordion from "@/src/common/accordion";
import React from "react";


const accordion_data = [
  {
    id: 1,
    question: `What is the Laravel Package Ecosystem?
`,
    answer: `Laravel’s package ecosystem is one of its strongest features! These packages are essentially pre-built modules, tools, and libraries that help you boost functionality without starting from scratch. Need payment integration? A robust analytics dashboard? Chances are, there’s a Laravel package for that. Designed with developers in mind, this ecosystem is all about flexibility and saving time, so you can focus on building solutions that matter.
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
    question: `Is Laravel a Secure Framework?
`,
    answer: `Absolutely! Laravel puts security at the forefront with features like protection against SQL injection, cross-site scripting (XSS), and cross-site request forgery (CSRF). It also includes a strong authentication system out of the box, making it easier to safeguard your application from vulnerabilities. With Laravel, you’re not just developing faster—you’re developing smarter and safer.
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
    question: `Is Laravel Suitable for Larger Projects?
`,
    answer:`Without a doubt! Laravel is built to scale, making it an excellent choice for larger, more complex applications. Its modular systems, caching features, and excellent database migration tools ensure that your project can grow with your business. Plus, with support for queues and scheduled tasks, Laravel has you covered for enterprise-level applications.
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
    question: `Is Laravel Only for Complex, Large-Scale Projects?
`,
    answer: `Not at all! While Laravel shines in complex projects, it’s also a fantastic framework for smaller, simpler applications. Its intuitive design and built-in tools make it a developer’s dream, even for less complex applications. Plus, starting smaller doesn’t limit your options—Laravel makes it easy to scale up when needed.
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
    question: `How Much Does a Web Application Developed with Laravel Cost?
`,
    answer: `There’s no one-size-fits-all answer here. Costs depend on your project’s scope, complexity, and features. But Laravel does help developers work more efficiently, so you can often get high-quality results within a reasonable budget. Whether you need a basic application or a robust enterprise solution, we can work with you to find the right balance between cost and functionality.
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
    question: `Is Laravel Easy to Use?
`,
    answer: `Yes! Laravel is renowned for its developer-friendly nature. Its readable syntax, comprehensive documentation, and built-in tools (like Artisan CLI) make it a pleasure to work with—even for those new to PHP frameworks. Developers often describe it as fast, elegant, and incredibly intuitive.
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
                    Common Questions We Get as a Laravel Agency (Answered!) 
                  </h2>
                  <p>At our Laravel agency, we’ve heard a lot of questions from clients curious about this powerful framework. If you’ve been wondering too, we’ve broken them down for you right here, with detailed answers to get you started:
                  </p>
                </div>
              </div>
              <div
                className="accordion tp-accordion mr-20"
                id="accordionExample"
              >
                <Accordion accordion_data={accordion_data} />
              </div>
              <p>Have more questions? Curious if Laravel is the right fit for your next project? We’d love to chat and help you explore all the possibilities Laravel can offer. Reach out to us today!
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
