import React from "react";




const service_data = [
  {
    id: 1,
    img: "/assets/img/services/icon/ca-sv-icon-1.png",
    title: "Drupal Development ",
    des: `Whether you need a company website, a publishing platform, or a community site, our team specializes in delivering customized solutions built on Drupal. With years of experience, we’ll transform your unique requirements into a high-performing, user-friendly digital platform tailored to your needs.
`
  },
  {
    id: 2,
    img: "/assets/img/services/icon/ca-sv-icon-2.png",
    title: `Concept & Design 
`,
    des: `We take your ideas and bring them to life with comprehensive concepts and modern design. From visually appealing layouts to user-focused functionality, we create bespoke designs that meet even the most complex challenges. Our goal is to align every element with your vision and business objectives, ensuring a seamless and engaging experience for your audience.
`
  },
  {
    id: 3,
    img: "/assets/img/services/icon/ca-sv-icon-3.png",
    title: `CMS Selection & Migration 
`,
    des: `Not sure which CMS is the best fit for your project? We provide expert guidance to evaluate your options and help select the perfect solution. Whether you're moving to or from Drupal, we ensure a smooth migration process. Our experience with systems like WordPress, Joomla, Contao, and other frameworks allows us to approach any project with flexibility and precision.
`
  },
  {
    id: 4,
    img: "/assets/img/services/icon/ca-sv-icon-3.png",
    title: `Support & Maintenance 
`,
    des: `Ensure your website runs smoothly with our ongoing support and maintenance services. Whether you need to recover a hacked site, upgrade an outdated version of Drupal, or ensure your platform stays secure and optimized, we’ve got you covered. Our dedicated monthly service plans are designed to give you peace of mind while keeping your site future-ready.
`
  },
]

const service_content = {
  title: "Service",
  main_title: "Our Services",
  we_do: "Our Drupal Development Services",
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
              <div className="ca-service-btn-wrapper float-md-end mb-75">
                <a href="#" className="tp-white-btn-rgb">
                  {btn_text}
                  <span className="ml-10">
                    <i className="fal fa-long-arrow-right"></i>
                    <i className="fal fa-long-arrow-right"></i>
                  </span>
                </a>
              </div>
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
                    <a href="#" className="read-btn">
                      Read More <i className="fal fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p>Partner with our skilled team to achieve a high-performance digital presence backed by expertise, reliability, and innovation. Contact us to learn more about how we can help bring your project to life.
          </p>
        </div>
      </div>
    </>
  );
};

export default ServiceArea;
