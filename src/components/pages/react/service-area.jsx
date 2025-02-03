import React from "react";




const local_service_data = [
  {
    id: 1,
    img: "/assets/img/services/icon/custom_react_applications.jpg",
    title: `Custom React Applications 
`,
    des: `When it comes to creating bespoke digital experiences, we’ve got you covered! Our skilled developers specialize in crafting custom web applications designed specifically around your needs. With React’s versatility, we build robust solutions that deliver seamless functionality and elevate user experience. Your vision, brought to life—exactly the way you imagined.
`
  },
  {
    id: 2,
    img: "/assets/img/services/icon/icon_for_scalable_enterprise_solutions (1).jpg",
    title: `Scalable Enterprise Solutions 
`,
    des: `Enterprises grow, and we make sure your software grows with you! We design tailored React-based solutions that allow corporations to scale effortlessly. Whether it’s expanding your operations or integrating new tools, our enterprise-level applications blend perfectly with existing systems while remaining flexible for future upgrades.
`
  },
  {
    id: 3,
    img: "/assets/img/services/icon/icon_for_component_design_and_development.jpg",
    title: `Component Design and Development `,
    des: `React thrives on reusability, and so do we! Our team capitalizes on React’s component-based architecture to design and develop custom components. These responsive, reusable building blocks enhance functionality, create an engaging user experience, and save time during future updates or iterations.`
  },

  {
    id: 3,
    img: "/assets/img/services/icon/api_integration_with_react (1).jpg",
    title: `API Integration with React 
`,
    des: `Enhance connectivity, boost versatility. Our team has extensive expertise in seamlessly integrating APIs with React applications. From designing functional RESTful solutions to ensuring smooth interaction between systems, we help your applications do more—and do it better.
` },
  {
    id: 3,
    img: "/assets/img/services/icon/icon_for_continuous_maintenance_and_support (1) (1).jpg",
    title: `Continuous Maintenance and Support 
`,
    des: `Building your application is only the beginning. We offer ongoing maintenance and dedicated support to keep your React applications secure, updated, and running at peak performance. Whether it’s implementing updates or troubleshooting issues, we’re here every step of the way to ensure your success.
`},

]

const service_content = {
  title: "Service",
  main_title: "What We Do",
  we_do: "Our React Development Services",
  des: `React is at the heart of cutting-edge web development, and we’re here to maximize its potential for your business. Discover how our dynamic team of developers can transform your ideas into flexible, scalable, and intuitive applications.
`,
  btn_text: "More Services"
}


const { title, main_title, we_do, btn_text, des } = service_content

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
                  <p>{des}</p>
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
                       {item.title} 
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
          <p>React isn’t just powerful—it’s limitless. With our expertise, you’ll have the tools to tackle anything. Ready to create something extraordinary? Reach out today and explore what we can build together.
          </p>
        </div>
      </div>
    </>
  );
};

export default ServiceArea;
