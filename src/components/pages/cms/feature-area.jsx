import Link from "next/link";
import React from "react";


const feature_data = [
  {
    id: 1,
    icon: "/assets/img/icons/app-fea-icon-1.png",
    title: `We’re Specialists 
`,
    des: `With years of dedicated experience, we’ve developed a deep understanding of a wide range of CMS platforms. Whether it’s crafting engaging user interfaces or leveraging advanced backend functionalities, our mastery enables us to utilize each CMS platform’s best features to create powerful, scalable, and SEO-optimized websites that drive results. Our expertise allows us to understand the nuances and strengths of these platforms, ensuring we tailor every project to exceed expectations.
` },
  {
    id: 2,
    icon: "/assets/img/icons/app-fea-icon-2.png",
    title: `We’re Adaptable 
`,
    des: `No two businesses are the same, and your website should reflect what makes yours unique. Whether you need custom plugins, specialized functionalities, or a distinctive layout that aligns with your brand identity, our dedicated team is committed to delivering bespoke solutions tailored specifically to your business objectives. We take the time to understand your goals, ensuring every element of your website contributes to a seamless user experience and embodies your brand’s uniqueness.
` },
  {
    id: 3,
    icon: "/assets/img/icons/app-fea-icon-3.png",
    title: `We’re Flexible 
`,
    des: `Our expertise spans beyond a single CMS platform. We are proficient in Drupal, Contao, WordPress, and Joomla—along with tools like Laravel and React for web apps and custom frameworks. This versatility enables us to guide you toward the platform that best meets your project’s unique needs. Whether you’re looking for a flexible content management solution or a robust custom application, we’ll provide strategic insights into the options available, ensuring your technology stack is the perfect fit for your goals.
`   },
  {
    id: 4,
    icon: "/assets/img/icons/app-fea-icon-4.png",
    title: `We’re Transparent 
`,
    des: `Transparency is one of our core principles. From the initial consultation through development and launch, we maintain open and consistent communication. You won’t be left in the dark—we make it a priority to involve you in every step of the process, from brainstorming ideas to reviewing progress. By fostering collaboration and accountability, we ensure that every project we undertake aligns with your vision and surpasses your expectations.
`},
  {
    id: 5,
    icon: "/assets/img/icons/app-fea-icon-4.png",
    title: `We’re Here for You 
`,
    des: `Our commitment to your business doesn’t end at project completion. We aim to build long-term partnerships through ongoing support and maintenance, ensuring your website stays updated with the latest features and security measures. Whether you need technical assistance or guidance as your website evolves, our team is dedicated to keeping your digital presence running smoothly, empowering you to focus on what you do best—growing your business. 
`},
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
                    How Are We Different from Other CMS Agencies?

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
          <p>Partner with us to unlock intelligent CMS solutions custom-built for your goals. Reach out today to discuss how we can take your digital presence to the next level.
          </p>
        </div>
      </div>
    </>
  );
};

export default FeatureArea;
