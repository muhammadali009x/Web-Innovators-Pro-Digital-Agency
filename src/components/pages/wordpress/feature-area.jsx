import Link from "next/link";
import React from "react";


const feature_data = [
    {
        id: 1,
        icon: "/assets/img/icons/extensive_plugin_library.jpg",
        title: `Extensive Plugin Library`,
        des: ` The sheer number of plugins available enables users to achieve a wide variety of functionalities quickly and efficiently, making WordPress a highly flexible and customizable platform.
`
    },
    {
        id: 2,
        icon: "/assets/img/icons/ecommerce_compatibility.jpg",
        title: `Ecommerce Compatibility `,
        des: ` Thanks to WooCommerce, WordPress has established itself as a strong contender for ecommerce projects, providing a seamless and cost-effective solution for businesses of all sizes to sell online.
`
    },
    {
        id: 3,
        icon: "/assets/img/icons/intuitive_content_editing.jpg",
        title: `Intuitive Content Editing`,
        des: ` The Gutenberg editor offers a fast, user-friendly experience, allowing content creators to build and edit pages with ease, even without technical expertise.
`
    },
    {
        id: 4,
        icon: "/assets/img/icons/icon_for_community_support.jpg",
        title: `Community Support 
`,
        des: ` One of WordPress's greatest assets is its robust community. Developers, designers, and users worldwide contribute to its continuous improvement, offering guidance, tools, and solutions to common challenges.
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
                 Our Thoughts on WordPress

                  </h2>
                  <p>At our agency, we enjoy working with WordPress and recognize its versatility and strengths. However, part of our role is to provide unbiased guidance, evaluating where technologies excel and where they might not be the best fit. Here's our detailed perspective on WordPress.
                  </p>
                  <h3>Where WordPress Shines
                  </h3>
                  <p>WordPress has become a leading choice for many businesses, and for good reason. Here are some standout areas where it excels:
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
