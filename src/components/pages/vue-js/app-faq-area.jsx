import Accordion from "@/src/common/accordion";
import React from "react";
const accordion_data = [
  {
    id: 1,
    question: `What Are Vue.js Components?`,
    answer: `Vue.js components are essentially reusable building blocks that make development more efficient and organized. Each component handles specific functionality or a small section of the user interface. For example, if you're building a shopping cart, you might have separate components for displaying products, managing the cart, and handling checkout. This modular approach makes it easy to develop, test, and maintain your application.
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
    question: `Is Vue.js a Secure Framework?`,
    answer: `Vue.js is inherently secure when used correctly. By default, it includes robust protections against common vulnerabilities like cross-site scripting (XSS) and injection attacks. However, security ultimately depends on how developers implement it. Proper coding practices, using plugins with care, and staying updated on security patches are critical to ensuring your application remains secure.
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
    question: ` Is Vue.js Suitable for Larger Projects?`,
    answer: `Absolutely. Vue.js is highly scalable and suitable for both small applications and large, complex systems. Its ecosystem includes tools such as Vuex for state management and Vue Router for handling intricate navigations, making it an excellent choice for enterprise-level projects. Many large companies, like Alibaba and Xiaomi, rely on Vue.js for their robust, large-scale platforms.
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
    question: `Is Vue.js Only for Simple, Small-Scale Projects? 
`,
    answer: `This is a common misconception. While it's true that Vue.js is beginner-friendly and great for small projects, dismissing it as only for small-scale use overlooks its capabilities. Vue.js offers a lightweight yet flexible architecture, which means it scales seamlessly with the complexity of your project. From single-page apps to feature-rich enterprise applications, it delivers.
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
    question: `How Much Does a Web Application Built with Vue.js Cost? 
`,
    answer: `The cost depends on several factors, including the complexity of your application, the features required, the level of customization, and the experience of the development team. Vue.js itself is an open-source framework, meaning no licensing fees, but labor for design, development, and testing constitutes most of the cost. Partnering with an experienced Vue.js agency ensures you get a solution that’s high-quality, efficient, and cost-effective.
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
    question: `Is Vue.js Easy to Use? 
`,
    answer: `Yes, Vue.js is designed with simplicity and ease of use in mind. Its learning curve is relatively gentle compared to other frameworks, thanks to its intuitive syntax and comprehensive documentation. Both beginners and experienced developers appreciate how quickly they can spin up applications with Vue.js. Additionally, its reactive data binding and clear structure make it easier to manage and update your project over time.
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
                    Common Questions We Hear as a Vue.js Agency
                  </h2>
                  <p>If you're considering Vue.js for your web application, you're probably wondering how it measures up in terms of functionality, security, and scalability. Below are some of the most common questions we receive—and our answers—to help you make an informed decision.
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
