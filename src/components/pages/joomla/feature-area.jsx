import Link from "next/link";
import React from "react";


const feature_data = [
    {
        id: 1,
        icon: "/assets/img/icons/app-fea-icon-1.png",
        title: `A Perfect Balance of Structure and Flexibility`,
        des: `  Joomla combines structure and flexibility in a way that appeals to users who need a platform that can adapt to varied use cases while still maintaining easy organization.
`   },
    {
        id: 2,
        icon: "/assets/img/icons/app-fea-icon-2.png",
        title: `Robust Core Multilingual Support`,
          des: `  Unlike some platforms that require third-party plugins for multilingual functionality, Joomla has this built right into its core. This feature provides seamless support for businesses and organizations targeting global audiences.
 ` },
    {
        id: 3,
        icon: "/assets/img/icons/app-fea-icon-3.png",
        title: `Flexible Menu Creation and Management 
`,
        des: `  The menu management system in Joomla is highly versatile, offering advanced settings and options that allow users to create complex navigation structures without hassle.
` }, 
]

const feature_data2 = [
  {
      id: 1,
      icon: "/assets/img/icons/app-fea-icon-1.png",
      title: `Limited Plugin Ecosystem `,
      des: `    While Joomla has a solid range of extensions, its plugin support doesn’t quite match the breadth and innovation seen in platforms like WordPress. For those who rely heavily on plugins to expand functionality, this can be a sticking point.
`   },
  {
      id: 2,
      icon: "/assets/img/icons/app-fea-icon-2.png",
      title: `Ecommerce Limitations `,
        des: `  Joomla isn't as strong in the ecommerce space. Competitors like WooCommerce (on WordPress) offer more tailored and robust ecommerce solutions, making them a better fit for online retailers.
` },
  {
      id: 3,
      icon: "/assets/img/icons/app-fea-icon-3.png",
      title: `Editor Interface Could Be More Intuitive`,
      des: `  The user experience (UX) in Joomla’s editor isn’t as seamless as it could be. Compared to other CMS options on the market, new users may find it takes more time to learn the ropes.
` }, 
]

const feature_data3 = [
  {
      id: 1,
      icon: "/assets/img/icons/app-fea-icon-1.png",
      title: `Resolved Issues with Joomla 4 `,
      des: `  Early challenges with Joomla 4 caused concerns shortly after its release. However, updates have resolved these issues, ensuring a smoother experience for users. 
`   },
  {
      id: 2,
      icon: "/assets/img/icons/app-fea-icon-2.png",
      title: `Joomla 5 Launch (October 2023) `,
        des: `  Joomla 5’s release has brought a range of new features and improvements, helping to restore confidence in the platform.
` },
  {
      id: 3,
      icon: "/assets/img/icons/app-fea-icon-3.png",
      title: `End of Support for Joomla 3 (August 2023) 
`,
      des: `  The discontinuation of support for Joomla 3 earlier this year marks a significant shift. Websites still running Joomla 3.x will need to migrate in order to stay secure and up to date.
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
                 Our Thoughts on Joomla

                  </h2>
                  <p>At our agency, we approach every technology with both enthusiasm and impartiality to help you make informed decisions. Joomla is an impressive content management system (CMS) with significant strengths. However, like any technology, it also comes with areas that may not meet every need. Here's a closer look at where Joomla shines and where it could improve.
                  </p>
                  <h3>Where Joomla Excels
                  </h3>
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



          <div className="row">
            <div className="col-12">
              <div className="section-title-wraper">
                <div className="tp-section text-center">
                  
                  <h2
                    className="tp-section__title mb-60 text-mirage wow tpfadeUp"
                    data-wow-delay=".3s"
                  >
                Areas Where Joomla Falls Behind


                  </h2>
                  
                </div>
              </div>
            </div>
          </div>


          <div className="row">
            {feature_data2.map((item, i) => (
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

          <div className="row">
            <div className="col-12">
              <div className="section-title-wraper">
                <div className="tp-section text-center">
                  
                  <h2
                    className="tp-section__title mb-60 text-mirage wow tpfadeUp"
                    data-wow-delay=".3s"
                  >
             Recent Developments in Joomla 


                  </h2>
                  <p>Joomla has seen some important milestones recently, both in addressing challenges and expanding its offerings. Here’s what you need to know:
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div className="row">
            {feature_data3.map((item, i) => (
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
