import Link from "next/link";
import React from "react";


const feature_data = [
  {
    id: 1,
    icon: "/assets/img/icons/icon_for_we_re_specialists (1).jpg",
    title: `We’re Specialists 
`,
    des: `Our team has an exceptional depth of knowledge when it comes to Drupal. We’ve mastered the complexities of its architecture, allowing us to leverage its powerful features for your benefit. This expertise enables us to create robust, scalable, and SEO-friendly websites that not only look great but also perform seamlessly under the hood. Whether it’s a small website or a large-scale project, we deliver solutions that maximize Drupal's capabilities to serve your specific goals.
`  },
  {
    id: 2,
    icon: "/assets/img/icons/icon_for_we_re_adaptable (1).jpg",
    title: `We’re Adaptable 
`,
    des: `Your vision is unique, and your website should reflect that. Whether you’re looking for a custom module, advanced functionalities, or intricate layout designs, our team excels at creating tailored solutions that meet your specific objectives. We don’t do cookie-cutter templates—our adaptable approach ensures that your Drupal site is both highly functional and distinctive. Your brand stands out, and so does your site.
`},
  {
    id: 3,
    icon: "/assets/img/icons/icon_for_we_re_knowledgeable (1).jpg",
    title: `We’re Knowledgeable 
`,
    des: `While Drupal is our specialty, our expertise doesn’t stop there. We’re also highly experienced with other CMS platforms like WordPress, Contao, and Joomla, as well as frameworks including Laravel and Angular. This broad knowledge means we can provide you with an overview of the best technologies available, helping you determine the solution that aligns perfectly with your needs. Whether it's Drupal or another platform, we ensure that your project is built on the right foundation.
`},
  {
    id: 4,
    icon: "/assets/img/icons/icon_for_we_re_transparent (1).jpg",
    title: `We’re Transparent 
`,
    des: `Trust and collaboration are at the heart of how we work. From the very beginning of your project, we operate with full transparency—keeping lines of communication open, sharing insights on our workflows, and involving you at every important stage. We’re not just here to execute; we’re here to guide, consult, and partner with you. Think of us as your digital sparring partner, committed to giving everything we have to make your project a success.
`  },
  {
    id: 5,
    icon: "/assets/img/icons/icon_for_we_re_here_for_you (1).jpg",
    title: `We’re Here for You 
`,
    des: `Our support doesn’t end when your website goes live. We foster lasting relationships with our clients by offering ongoing support and maintenance services. From implementing the latest security patches to deploying feature updates or responding to your evolving needs, we ensure that your Drupal website keeps performing at its best over time. You can count on us to be by your side for the long haul, helping your digital presence grow and flourish.
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
                    How Are We Different from Other Drupal Agencies?

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
          <p>When you work with us, you're not just hiring a Drupal agency—you’re partnering with a dedicated team that’s invested in your success, from the first concept to years after launch.
          </p>
        </div>
      </div>
    </>
  );
};

export default FeatureArea;
