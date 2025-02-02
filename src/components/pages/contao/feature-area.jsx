import Link from "next/link";
import React from "react";


const feature_data = [
    {
        id: 1,
        icon: "/assets/img/icons/icon_for_support_and_maintenance_generate.jpg",
        title: `Contao and GDPR: What You Need to Know 
`,
        des: `Ensuring compliance with GDPR is critical for protecting user data and avoiding significant penalties. Contao, a robust CMS platform, offers tools and features to help agencies meet these requirements. With Contao’s integrated solutions for cookie consent, data protection, and user-rights management, it’s easier than ever to align your website with GDPR standards. Curious about how your agency can implement these features effectively? Our comprehensive guide highlights how Contao prioritizes data safety and empowers businesses to stay ahead of evolving legal landscapes.
`},
    {
        id: 2,
        icon: "/assets/img/icons/contao_vs_wordpress_an_agency_s_perspective.jpg",
        title: `Contao vs WordPress: An Agency’s Perspective 
`,
        des: `When choosing a CMS, weighing the pros and cons of Contao and WordPress is essential. Our agency's experience has shown how uniquely Contao excels in flexibility, security, and scalability for more customized projects, while WordPress offers unparalleled ease of use and a vast plugin library for wider applications. This article dives deep into these differences, comparing performance, user experience, and development capabilities to guide agencies in selecting the best fit for their client’s needs. Explore our detailed insights and see which CMS suits your next project.
`},
    {
        id: 3,
        icon: "/assets/img/icons/total_cost_of_ownership_tco_understanding_web.jpg",
        title: `Total Cost of Ownership (TCO): Understanding Web Platform TCO 
`,
        des: `Cost considerations in web projects go far beyond initial development. Total Cost of Ownership (TCO) accounts for ongoing factors such as hosting, maintenance, updates, and expansion. Understanding TCO is vital for determining whether a platform aligns with your business goals. This article breaks down key components of TCO for popular platforms, highlighting how long-term costs can impact your budget and decision-making. Use our guide to make informed choices that provide greater value for your investments.
`  },
    {
        id: 4,
        icon: "/assets/img/icons/choosing_the_right_web_agency_a_guide.jpg",
        title: `Choosing the Right Web Agency: A Guide for Clients 
`,
        des: `Selecting the right web agency to bring your vision to life can feel overwhelming. From assessing technical expertise and creative alignment to understanding their approach to communication and problem-solving, there are many factors to consider. Our guide helps clients ask the right questions, evaluate agency portfolios, and identify the perfect partners for their unique projects. Discover how to collaborate effectively with a web agency to ensure your goals are met and your expectations exceeded.
`   },
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
                  Navigating CMS Choices, GDPR Compliance, and Web Platform Costs
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
        </div>
      </div>
    </>
  );
};

export default FeatureArea;
