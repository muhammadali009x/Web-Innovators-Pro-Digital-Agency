import Accordion from "@/src/common/accordion";
import React from "react";


const accordion_data = [
  {
    id: 1,
    question: `What is a Content Management System (CMS)? 
`,
    answer: `A Content Management System, or CMS, is a platform that allows users to create, manage, and modify content on a website with minimal technical knowledge. Popular examples include WordPress, Joomla, and Drupal. We help our clients select and utilize the right CMS based on their specific needs, ensuring ease of use and scalability for their projects. 
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
    answer: `The best CMS or framework for your project depends on various factors, such as your budget, functionality needs, scalability, and long-term goals. For example, if you’re running a small blogging site, WordPress might be ideal. But if you’re building a large-scale eCommerce platform, a flexible framework like Laravel or React could be better. At our agency, we guide you through these decisions by understanding your vision and recommending the most suitable solution. 
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
    question: `What are the benefits of web apps? 
`,
    answer: `Web applications offer seamless accessibility, as they can be used on any device with a browser. They also provide improved user experiences through fast performance, mobile responsiveness, and tailored functionality. Additionally, web apps eliminate the need for downloads or installations, making them both user-friendly and cost-efficient for businesses. If you're considering a web app, we can help design one that aligns with your goals and user needs. 
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
    question: `How does the web framework impact my project? 
`,
    answer: `The web framework you choose defines the structure and functionality of your project, influencing everything from development speed to scalability. For example, frameworks like Laravel or Django offer robust functionality for complex solutions, while React or Vue.js excel in creating dynamic and highly interactive user interfaces. Choosing the right framework ensures your project stays future-proof and efficient, and our technical experts can help you make that choice strategically. 
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
    question: `Can I make my existing website accessible to all users?`,
    answer: `Absolutely. Ensuring your website is accessible is not only a legal and ethical responsibility but also broadens your audience by making your site usable for individuals with disabilities. We provide services like auditing your site for accessibility standards (such as WCAG) and implementing solutions like alt-text for images, keyboard navigability, and screen reader integration. Accessibility retrofitting is one of our expertise areas. 
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
    question: `How can analytics help improve my web presence? 
`,
    answer: `Website analytics tools, such as Google Analytics, provide valuable insights into your audience’s behavior, including what content they prefer, how they find your website, and where you may be losing traffic. Using analytics, you can optimize your content, improve user experience, and enhance conversions. Our agency helps you interpret these metrics and implement evidence-based improvements in your digital strategy. 
`,
    accordion_id: "faq6",
    collapsed: "collapsed",
    data_bs_target: "#collapse6",
    aria_expanded: false,
    aria_controls: "collapse6",
    show: "",
  },
  /////////


  {
    id: 6,
    question: `Is it possible to migrate from one CMS or framework to another? 
`,
    answer: `Yes, migrating a website from one CMS or framework to another is entirely feasible but requires careful planning to avoid disruptions. Whether it's moving from WordPress to Drupal or transitioning to a more modern framework like Gatsby or Next.js, our migration services ensure a seamless transfer of your data, design, and functionality while maintaining high performance. 
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
    question: `How customizable are web solutions, from CMS to frameworks? 
`,
    answer: `Web solutions are highly customizable to fit your business’s specific needs. CMS platforms can be extended with plugins and themes, while frameworks allow for nearly unlimited customization through dedicated development. At our agency, we balance customization with usability, delivering a web solution that reflects your unique brand while remaining efficient and accessible. 
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
                  Frequently Asked Questions to Our Web Agency  
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
            <p>If you have more questions about your next digital project, feel free to reach out! We’re here to help. 
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppFaqArea;
