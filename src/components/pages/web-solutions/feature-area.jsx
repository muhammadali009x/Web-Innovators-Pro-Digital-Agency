import Link from "next/link";
import React from "react";


const feature_data = [
  {
    id: 1,
    icon: "/assets/img/icons/app-fea-icon-1.png",
    title: `We’re Specialists
`,
    des: `Our team brings years of experience and an intricate understanding of a broad array of technologies. By mastering diverse architectures, we don’t just adapt to frameworks and CMS platforms—we unlock their full potential. This expertise enables us to create powerful, scalable websites tailored to meet your unique requirements, ensuring every project is as robust as it is dynamic.
`},
  {
    id: 2,
    icon: "/assets/img/icons/app-fea-icon-2.png",
    title: `We’re Adaptable
`,
    des: `We recognize that your business is one of a kind, and your website should reflect that. Whether you need custom plugins, specialized functionalities, or distinctive layouts, our skilled team excels at developing solutions specifically designed to meet your goals. Through a detailed discovery process, we partner with you to craft a website that aligns seamlessly with your needs.
`},
  {
    id: 3,
    icon: "/assets/img/icons/app-fea-icon-3.png",
    title: `We’re Flexible
`,
    des: `Our expertise spans an extensive list of technologies. From mastering CMS platforms like WordPress, Drupal, Contao, and Joomla to building with web apps and frameworks like Laravel and React, we bring agility to each project. Our team works closely with you to evaluate the strengths of each platform, advising on the most effective tools to achieve your vision with precision.
`},
  {
    id: 4,
    icon: "/assets/img/icons/app-fea-icon-4.png",
    title: `We’re Transparent
`,
    des: `Our approach prioritizes open and honest communication every step of the way. From initial planning to final delivery, we ensure you’re actively involved in the process. By understanding your inputs and sharing insights about our methods, we aim to be more than a service provider—we strive to be your trusted digital collaborator, dedicated to maximizing the success of your project.
`},
  {
    id: 5,
    icon: "/assets/img/icons/app-fea-icon-4.png",
    title: `We’re Here for You
`,
    des: `Our commitment doesn’t end with the launch. We believe that every website deserves ongoing care and attention, which is why we offer continuous support and maintenance services. From implementing the latest security updates to introducing new features, we help your website evolve alongside your business, ensuring it remains cutting-edge and fully optimized over time.
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
                    How Are We Different From Other Web Agencies?

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
          <p>By partnering with us, you’ll gain not just a service provider but a team of dedicated experts committed to your success. Let's create something exceptional together.
          </p>
        </div>
      </div>
    </>
  );
};

export default FeatureArea;
