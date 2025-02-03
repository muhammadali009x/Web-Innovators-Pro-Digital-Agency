import React from "react";




const service_data = [
  {
    id: 1,
    img: "/assets/img/services/icon/icon_for_matomo_installation_and_setup.jpg",
    title: `Matomo Installation and Setup 
`,
    des: `Starting from scratch with Matomo can feel overwhelming, but we’re here to make it easy. Our team takes care of the entire setup process, including server installation, technical configurations, and tailored platform setup. This end-to-end service ensures you can start analyzing your users’ behavior right away without worrying about the technical complexities. 
`  },
  {
    id: 2,
    img: "/assets/img/services/icon/icon_for_google_analytics_to_matomo_migration.jpg",
    title: `Google Analytics to Matomo Migration 
`,
    des: `Looking to break free from Google Analytics? Our specialized migration service ensures a smooth and secure transition to Matomo. We meticulously transfer high-level metrics and historical data, so you can retain valuable context while beginning your analytics journey with Matomo. The process is designed to minimize disruptions, ensuring your data remains accessible and actionable. 
` },
  {
    id: 3,
    img: "/assets/img/services/icon/icon_for_matomo_tag_manager_configuration.jpg",
    title: `Matomo Tag Manager Configuration 
`,
    des: `Forget the hassle of manually adding tags to your website. Our team can configure Matomo Tag Manager so you can easily add both standard and custom tags without modifying your source code. This streamlined approach offers flexibility, saves time, and eliminates the need for complex coding, allowing you to focus on what matters most—understanding your audience. 
` },
  {
    id: 4,
    img: "/assets/img/services/icon/icon_for_custom_report_configuration.jpg",
    title: `Custom Report Configuration 
`,
    des: `Generic reports don’t meet the unique needs of every business—that’s why we create tailored solutions. With Matomo, we build custom dashboards that align with your goals and highlight the data that matters most. Whether it’s insights into user behavior, campaign performance, or conversion tracking, our reports provide the metrics you need for informed decision-making. 
`},
  {
    id: 5,
    img: "/assets/img/services/icon/icon_for_continuous_support_and_training.jpg",
    title: `Continuous Support and Training 
`,
    des: `Launching your Matomo platform is just the beginning. We provide ongoing support and training to keep your analytics running smoothly long after launch. From regular updates and maintenance to guidance on navigating the platform, our team ensures your Matomo installation remains optimized, secure, and easy to use. With our continuous support, you’ll always have a reliable partner to help you leverage analytics to its fullest potential. 
` },
]

const service_content = {
  title: "Service",
  main_title: "Our Services",
  we_do: `Our Matomo Analytics Services 
`,
  btn_text: "More Services"
}


const { title, main_title, we_do, btn_text } = service_content

const ServiceArea = () => {
  return (
    <>
      <div
        className="ca-service-area theme-bg-7 pt-120 pb-90"
        style={{
          backgroundImage: `url(/assets/img/services/ca-sv-pattern-bg.png)`,
        }}
      >
        <div className="container">
          <div className="row align-content-center">
            <div className="col-md-8 wow tpfadeUp">
              <div className="section-title-wraper">
                <div className="tp-section">
                  <span className="tp-section__bigtitle">{title}</span>
                  <span className="tp-section__subtitle shadow-none text-rgb mb-15 p-0">
                    {main_title}
                  </span>
                  <h2 className="tp-section__title mb-40">{we_do}</h2>
                </div>
              </div>
            </div>
            <div className="col-md-4 wow tpfadeUp">
              {/* <div className="ca-service-btn-wrapper float-md-end mb-75">
                <a href="#" className="tp-white-btn-rgb">
                  {btn_text}
                  <span className="ml-10">
                    <i className="fal fa-long-arrow-right"></i>
                    <i className="fal fa-long-arrow-right"></i>
                  </span>
                </a>
              </div> */}
            </div>
          </div>
          <div className="row">
            {service_data.map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div
                  className="ca-service-wrapper mb-30 wow tpfadeUp"
                  data-wow-delay=".4s"
                >
                  <div className="ca-service__item text-center aos-init aos-animate">
                    <div className="law-servicce__item-img mb-35">
                      <img src={item.img} alt="" />
                    </div>
                    <h3 className="ca-service__item-title mb-20">
                      <a href="#">{item.title}</a>
                    </h3>
                    <p className="mb-30">{item.des}</p>
                    {/* <a href="#" className="read-btn">
                      Read More <i className="fal fa-long-arrow-right"></i>
                    </a> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p>Partner with us to make your analytics smarter, simpler, and more effective.
          </p>



          <div className="row align-content-center">
            <div className="col-md-8 wow tpfadeUp">
              <div className="section-title-wraper">
                <div className="tp-section"> 
                  <h2 className="tp-section__title mb-40">Why do we believe so strongly in Matomo?
                  </h2>
                  <p>For years, our co-owner, Michael, relied heavily on Google Analytics to manage data and glean insights. However, as concerns over data privacy in the U.S. grew—and with the limitation of not being able to export raw data—Michael knew it was time to look for an alternative. That search led him to Matomo, a platform that offered a fresh perspective on analytics and addressed these very challenges.
                  </p>
                  <p>The transition to Matomo wasn’t without its hurdles; there was a learning curve at first. But over time, it has proven to be an invaluable tool. Matomo provides unparalleled levels of control and flexibility, enabling advanced data analysis that was unattainable with other platforms. It has empowered us to go deeper into our data and uncover actionable insights.
                  </p>
                  <p>One particularly exciting development has been our experimentation with integrating Matomo’s data into ChatGPT. This combination has allowed us to unlock even more profound understandings and possibilities.
                  </p>
                  <p>At its core, Matomo aligns with our commitment to data privacy, freedom, and uncovering insights that empower better decisions. For us, it’s more than just an analytics platform—it’s a critical tool that shapes how we serve our clients and innovate within our agency.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default ServiceArea;
