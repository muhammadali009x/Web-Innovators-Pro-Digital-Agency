import React from "react";




const local_service_data = [
  {
    id: 1,
    img: "/assets/img/services/icon/ca-sv-icon-1.png",
    title: `Custom CMS Development
`,
    des: `Are you envisioning a corporate website, a dynamic publishing platform, or an interactive community hub? Our team is committed to turning your vision into a reality. We leverage the most suitable Content Management System (CMS) tailored to your specific goals, ensuring both functionality and user experience work seamlessly together. Every project is built with an eye for precision and scalability to fully meet your business needs.
`
  },
  {
    id: 2,
    img: "/assets/img/services/icon/ca-sv-icon-2.png",
    title: `Concept & Design
`,
    des: `Our expertise extends beyond technical implementation. We create captivating concepts and modern, responsive designs that ensure your website performs flawlessly across all devices and screen sizes. With a focus on usability and visual appeal, we make sure your site not only functions efficiently but looks exceptional—providing an immersive experience for your users.
`
  },
  {
    id: 3,
    img: "/assets/img/services/icon/ca-sv-icon-3.png",
    title: `CMS Selection & Migration
`,
    des: `Choosing the right CMS can be overwhelming, but we’re here to guide you every step of the way. Our team helps you determine which CMS best suits your project and handles migrations from your current platform with care, ensuring all existing content and features are transferred without disruption. Whether it’s WordPress, Drupal, Joomla, Contao, or another CMS solution, we have extensive experience across a wide range of platforms and frameworks.
`
  },
  {
    id: 4,
    img: "/assets/img/services/icon/ca-sv-icon-3.png",
    title: `Support & Maintenance
`,
    des: `Keeping your website secure, functional, and up-to-date is a top priority. From addressing security concerns to rolling out software updates, our support and maintenance services ensure that your platform remains resilient and optimized at all times. Our tailored monthly service plans provide comprehensive ongoing care, so you can focus on your work while we handle the rest.
`
  },
]

const service_content = {
  title: "Service",
  main_title: "Our Services",
  we_do: `Our CMS Development Services`,
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
            {local_service_data.map((item, i) => (
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
          <p>With our rich experience in CMS development and dedication to excellence, we aim to deliver solutions that drive your business forward. Your digital presence is in expert hands.
          </p>
        </div>
      </div>
    </>
  );
};

export default ServiceArea;
