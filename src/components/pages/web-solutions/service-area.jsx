import React from "react";




const service_data = [
    {
        id: 1, 
        img: "/assets/img/services/icon/ca-sv-icon-1.png",
        title: `CMS Development 
`,
        des: `Navigating the complex world of content management systems (CMS) is one of our core strengths. Our expertise spans leading platforms such as Drupal, WordPress, Joomla, and Contao. Whether you're building a user-friendly blog or a robust, content-rich website, we strategically use the unique benefits of each platform to create personalized solutions. Each project is designed to resonate with your audience while aligning with your business goals, delivering an exceptional digital experience. 
`   },
    {
        id: 2, 
        img: "/assets/img/services/icon/ca-sv-icon-2.png",
        title: `Web App Development 
`,
        des: `Web applications are at the forefront of digital transformation, offering businesses a way to create immersive, user-focused digital experiences. Our process centers on building responsive, high-performance applications tailored to streamline your business operations. We prioritize user engagement by developing platforms that evolve alongside your clients' needs, ensuring your web app remains innovative and effective in a fast-changing digital landscape. 
`},
    {
        id: 3, 
        img: "/assets/img/services/icon/ca-sv-icon-3.png",
        title: `Frameworks & Libraries 
`,
        des: `We specialize in leveraging state-of-the-art frameworks and libraries to build solutions that are powerful, flexible, and user-focused. On the backend, we rely on the robust capabilities of Laravel and Symfony to ensure reliability and scalability. On the frontend, we use dynamic tools like React, Angular, and Vue.js to craft interactive, visually striking interfaces. Every solution is designed with care to ensure the technology serves your business objectives effectively while delivering a seamless user experience. 
`},
    {
      id: 4, 
      img: "/assets/img/services/icon/ca-sv-icon-3.png",
      title: `Web Solutions & Services 
`,
      des: `A strong digital presence is about more than just aesthetics and functionality—it’s about ensuring inclusivity and data-driven success. We are committed to making your website accessible to everyone, providing a seamless experience for all visitors by adhering to web accessibility standards. Additionally, with our expertise in Matomo analytics, we equip you with actionable insights that drive informed decision-making and enhance the effectiveness of your digital strategies. 
` },
]

const service_content ={
    title: "Service",
    main_title: "Our Services",
    we_do: `Our Web Services 
`,
    btn_text: "More Services"
}


const {title, main_title , we_do, btn_text}  = service_content

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
          <p>From development to analysis, we’re here to ensure your digital presence isn’t just functional, but impactful and inclusive.
          </p>
        </div>
      </div>
    </>
  );
};

export default ServiceArea;
