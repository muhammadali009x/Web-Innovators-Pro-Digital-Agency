import Link from "next/link";
import React from "react";


const feature_data = [
  {
    id: 1,
    icon: "/assets/img/icons/icon_for_we_re_specialists.jpg",
    title: `We’re specialists 
`,
    des: `Our team lives and breathes web app development. With an in-depth understanding of the complexities involved, we’re here to create dynamic, user-focused applications that don’t just meet expectations—they raise the bar. Every line of code we write is crafted with your end user in mind.
`
  },
  {
    id: 2,
    icon: "/assets/img/icons/icon_for_we_re_adaptable.jpg",
    title: `We’re adaptable 
`,
    des: `From progressive web apps (PWAs) that function seamlessly across devices to single-page applications (SPAs) designed for speed, we tailor each solution to your specific goals. Need a feature-packed user dashboard? Done. Our customized approach ensures your web app is as unique as your vision—distinct, functional, and impactful.
`
  },
  {
    id: 3,
    icon: "/assets/img/icons/icon_for_we_re_knowledgeable.jpg",
    title: `We’re knowledgeable 
`,
    des: <>Frameworks, CMS platforms, tech stacks—you name it, we’ve got it covered. Whether it’s  <Link href="/agency/react" className="text-decoration-underline text-black">React</Link>, <Link href="/agency/angular" className="text-decoration-underline text-black">Angular</Link>, <Link href="/agency/Vue-js" className="text-decoration-underline text-black">Vue.js</Link>, or <Link href="/agency/laravel" className="text-decoration-underline text-black">Laravel</Link>, we have hands-on experience building with a variety of tools. We’re equally skilled with CMS platforms like <Link href="/agency/wordpress" className="text-decoration-underline text-black">WordPress</Link>, <Link href="/agency/drupal" className="text-decoration-underline text-black">Drupal</Link>, <Link href="/agency/contao" className="text-decoration-underline text-black">Contao</Link>, and <Link href="/agency/joomla" className="text-decoration-underline text-black">Joomla</Link>. Not sure what technology suits your project best? We’ll guide you through the options, breaking down the pros and cons, so you make informed decisions.
    </>
  },
  {
    id: 4,
    icon: "/assets/img/icons/icon_for_we_re_transparent.jpg",
    title: `We’re transparent 
`,
    des: `Openness is the foundation of our process. Collaboration is key, and we keep you involved at every step of the development cycle—through regular updates, feedback loops, and clear communication. Consider us your digital ally, working alongside you to bring your ideas to life and ensuring your project’s success.
`
  },
  {
    id: 5,
    icon: "/assets/img/icons/icon_for_we_re_here_for_you.jpg",
    title: `We’re here for you 
`,
    des: `Our relationship with you doesn’t stop at launch. Your new web app will need maintenance and constant care to stay secure, functional, and top of its game. That’s why we offer long-term support services and ongoing updates, giving you peace of mind knowing we’re always in your corner. 
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
                  {/* <span
                    className="tp-section__subtitle mb-15 shadow-none text-cornblue p-0 change-icon-size wow tpfadeUp"
                    data-wow-delay=".4s"
                  >
                    <i className="far fa-circle"></i>
                    Our Activities
                    <i className="far fa-circle"></i>
                  </span> */}
                  <h2
                    className="tp-section__title mb-60 text-mirage wow tpfadeUp"
                    data-wow-delay=".3s"
                  >
                    How are we different from other web app agencies?
                  </h2>
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
                      {/* <Link href="/service-2">{item.title}</Link> */}
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
          <p className="text-center">This isn’t just a service; it’s a partnership. And we’re committed to your success.
          </p>
        </div>
      </div>
    </>
  );
};

export default FeatureArea;
