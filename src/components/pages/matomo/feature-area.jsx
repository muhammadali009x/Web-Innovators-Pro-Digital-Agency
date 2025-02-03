import Link from "next/link";
import React from "react";


const feature_data = [
  {
    id: 1,
    icon: "/assets/img/icons/icon_for_specialists.jpg",
    title: `We’re Specialists
`,
    des: `Our team brings a deep understanding of Matomo and its advanced analytics framework. This expertise allows us to design and implement powerful, user-focused analytics solutions tailored to your needs. By leveraging Matomo’s robust data insights, we help you unlock precise, actionable strategies for your business.
`},
  {
    id: 2,
    icon: "/assets/img/icons/icon_for_we_re_flexible.jpg",
    title: `We’re Flexible
`,
    des: `Flexibility is at the core of what we offer. Whether you require custom tracking configurations, detailed user behavior analysis, or seamless dashboard integrations, our team is equipped to create solutions that align perfectly with your unique objectives. We pride ourselves on delivering a bespoke approach, ensuring your Matomo setup provides valuable insights tailored to your goals.
`    },
  {
    id: 3,
    icon: "/assets/img/icons/icon_for_we_re_knowledgeable (2).jpg",
    title: `We’re Knowledgeable
`,
    des: `With extensive experience across popular CMS platforms like Drupal, WordPress, Contao, and Joomla—and frameworks such as Angular, Laravel, Symfony, and Vue.js—we can integrate Matomo with virtually any digital environment. This level of versatility means we can help you gain meaningful insights from your website or app, regardless of the underlying technologies.
` },
  {
    id: 4,
    icon: "/assets/img/icons/icon_for_we_re_transparent (2).jpg",
    title: `We’re Transparent
`,
    des: `We believe that collaboration and clear communication are fundamental to successful projects. Throughout every stage, from initial planning to final deployment, our team keeps you informed and engaged. We aim to be more than just a service provider—we strive to be your trusted digital partner, fully invested in the success of your project.
` },

  {
    id: 4,
    icon: "/assets/img/icons/icon_for_we_re_here_for_you (2) (1).jpg",
    title: `We’re Here for You
`,
    des: `Our commitment doesn’t end at implementation. We focus on building lasting relationships with our clients by offering reliable support and maintenance services. From adapting your Matomo installation to meet evolving business needs to ensuring it stays up-to-date with the latest security patches and feature upgrades, we’re here to grow alongside you and your requirements.
` },
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
                    How Are We Different From Other Agencies?

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
          <p>By choosing us, you’re partnering with an agency that prioritizes expertise, flexibility, and long-term client success.
          </p>



        </div>
      </div>
    </>
  );
};

export default FeatureArea;
