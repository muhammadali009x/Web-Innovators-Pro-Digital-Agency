import Link from "next/link";
import React from "react";


const feature_data = [
  {
    id: 1,
    icon: "/assets/img/icons/app-fea-icon-1.png",
    title: `We’re Specialists `,
    des: `Our expertise in Vue.js runs deep. With an in-depth understanding of its architecture, we maximize its full potential to craft web applications that are robust, scalable, and optimized for SEO. This means you’ll get a high-performing application built with precision and best practices.
`  },
  {
    id: 2,
    icon: "/assets/img/icons/app-fea-icon-2.png",
    title: `We’re Flexible `,
    des: `Every business has unique needs, and we’re here to accommodate them. Whether you need specific functionality, tailored components, or a distinctive user interface, our team specializes in building solutions that align perfectly with your objectives. Our custom approach ensures that your Vue.js application not only meets your requirements but exceeds expectations.
`  },
  {
    id: 3,
    icon: "/assets/img/icons/app-fea-icon-3.png",
    title: `We’re Knowledgeable `,
    des: `Our expertise doesn’t end with Vue.js. We bring a wealth of experience in other frameworks such as Angular, React, Symfony, and Laravel, as well as CMS platforms like Drupal, WordPress, Contao, and Joomla. We’re happy to discuss the strengths of each technology, guiding you to choose the solution that best fits your project’s goals and long-term vision.
`  },
  {
    id: 4,
    icon: "/assets/img/icons/app-fea-icon-4.png",
    title: `We’re Transparent 
`,
    des: `Transparency is at the heart of how we work. We believe in open communication at every stage of the development process. From planning to launch, you’ll have a clear view of our processes and progress. Our goal is to be your trusted digital partner, working closely with you to ensure that your project succeeds at every level.
` },
  {
    id: 5,
    icon: "/assets/img/icons/app-fea-icon-4.png",
    title: `We’re Here for You `,
    des: `Building lasting relationships with our clients is a priority for us. Beyond delivering your Vue.js application, we provide long-term support and maintenance services to ensure your project maintains peak performance. From applying the latest security patches to rolling out feature upgrades, we’ll keep your application running smoothly and up to date.`
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

                  <h2
                    className="tp-section__title mb-60 text-mirage wow tpfadeUp"
                    data-wow-delay=".3s"
                  >
                    How Are We Different From Other Vue.js Agencies?
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
                      <Link href="/service-2">{item.title}</Link>
                    </h4>
                    <span>{item.des} </span>
                  </div>
                  <div className="app-feature__arrow">
                    <span>
                      <a href="#">
                        <i className="fal fa-long-arrow-right"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p>Working with us means choosing a team that’s not just experienced but also invested in your success—every step of the way.</p>
        </div>
      </div>
    </>
  );
};

export default FeatureArea;
