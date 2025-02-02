import Link from "next/link";
import React from "react";


const feature_data = [
  {
    id: 1,
    icon: "/assets/img/icons/app-fea-icon-1.png",
    title: `We’re Specialists 
`,
    des: `React isn’t just a skill for us—it’s our specialty. Our team lives and breathes React’s component-based architecture. This deep expertise allows us to craft dynamic, lightning-fast web applications that are intuitive to use. With React’s reusable components, we can build scalable solutions that adapt as your business grows. 
`
  },
  {
    id: 2,
    icon: "/assets/img/icons/app-fea-icon-2.png",
    title: `We’re Flexible 
`,
    des: `Every business is unique, and your React application should be, too. Whether it’s custom hooks for advanced functionality, seamless state management, or beautifully intricate UI components, we create solutions that fit your specific goals. With every project, we aim to deliver not just functionality but also standout creativity that makes your application shine. 
`
  },
  {
    id: 3,
    icon: "/assets/img/icons/app-fea-icon-3.png",
    title: `We’re Knowledgeable Across Technologies 
`,
    des: `Our skills don’t stop at React. We have significant experience with complementary frameworks like Angular, Laravel, Symfony, and Vue.js. Need a content management platform? We’re skilled in CMS solutions like Drupal, WordPress, Contao, and Joomla. Not sure which technology is the right fit? We’ll help you weigh the pros and cons so you can make an informed decision that’s best for your project. 
`
  },
  {
    id: 4,
    icon: "/assets/img/icons/app-fea-icon-4.png",
    title: `We’re Transparent 
`,
    des: `Trust and collaboration are at the heart of what we do. We involve you at every step of the development process—no surprises, no hidden agendas. Through clear and open communication, we position ourselves as your digital partner, genuinely invested in the success of your project. 
`
  },

  {
    id: 5,
    icon: "/assets/img/icons/app-fea-icon-4.png",
    title: `We’re Here for the Long Haul 
`,
    des: `Our relationship doesn’t end when the project is delivered. We’re all about building lasting partnerships. That’s why we offer comprehensive support and maintenance services to ensure your React application performs at its best. From applying the latest security patches to implementing feature enhancements, we’re here to keep things running smoothly and securely. 
`
  },
]


const FeatureArea = () => {
  return (
    <>
      <div className="tp-app-feature theme-bg-3 pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-wraper">
                <div className="tp-section text-center">
                  <span
                    className="tp-section__subtitle mb-15 shadow-none text-cornblue p-0 change-icon-size wow tpfadeUp"
                    data-wow-delay=".4s"
                  >
                    <i className="far fa-circle"></i>
                    Core Features
                    <i className="far fa-circle"></i>
                  </span>
                  <h2
                    className="tp-section__title mb-60 text-mirage wow tpfadeUp"
                    data-wow-delay=".3s"
                  >
                    Why Choose Us Over Other React Agencies?

                  </h2>
                  <p>At our core, we’re different. Here’s how:
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {feature_data.map((item, i) => (
              <div key={i} className="col-lg-6 col-12">
                <div
                  className="app-feature-box d-flex white-bg p-relative wow tpfadeUp"
                  data-wow-delay=".3s"
                >
                  <div className="app-feature-box-icon">
                    <img src={item.icon} alt="iclud" />
                  </div>
                  <div className="app-feature__info">
                    <h4 className="app-feature__title text-mirage">
                      {item.title}
                    </h4>
                    <span>{item.des} </span>
                  </div>
                  {/* <div className="app-feature__arrow">
                    <span>
                      <a href="#">
                        <i className="fal fa-long-arrow-right"></i>
                      </a>
                    </span>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
          <p>Choosing a React agency isn’t just about completing a project—it’s about finding a partner that shares your vision and pushes boundaries to help you succeed. With us, you’re choosing innovation, expertise, and a team that’s as invested in your success as you are.
          </p>
        </div>
      </div>
    </>
  );
};

export default FeatureArea;
