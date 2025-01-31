import React from "react";




const service_data = [
  {
    id: 1,
    img: "/assets/img/services/icon/icon_for_custom_web_applications.jpg",
    title: `Custom Web Applications 
`,
    des: `Looking for a web application that does more than just tick boxes? Our developers specialize in creating custom Laravel software, designed to fit your unique requirements like a glove. From intuitive user interfaces to powerhouse backend functionality, we tailor every line of code to bring your vision to life. 
`
  },
  {
    id: 2,
    img: "/assets/img/services/icon/icon_for_enterprise_level_solutions.jpg",
    title: `Enterprise-Level Solutions 
`,
    des: `Big business? Big ambitions? We've got you covered. Our Laravel enterprise solutions are built to help large corporates scale seamlessly, handling complex operations with ease. We design software that integrates effortlessly with your existing systems, offering tools to streamline your workflow and propel your business forward. 
`
  },
  {
    id: 3,
    img: "/assets/img/services/icon/icon_for_custom_package_development.jpg",
    title: `Custom Package Development 
`,
    des: `Harness the power of Laravel's extensibility. Our team excels in designing and building custom Laravel packages, optimized to enhance the core framework’s functionality. The result? Flexible, scalable applications that grow with you and adapt to your evolving business needs. 
`
  },
  {
    id: 4,
    img: "/assets/img/services/icon/icon_for_seamless_api_integration.jpg",
    title: `Seamless API Integration 
`,
    des: `Connectivity is key in today’s interconnected world—and we make it happen. With deep expertise in APIs and Laravel API generator packages, our team develops RESTful solutions that enhance your application’s functionality. The outcome? Fully connected software that performs seamlessly across platforms. 
`
  },
  {
    id: 5,
    img: "/assets/img/services/icon/icon_for_ongoing_maintenance_and_support.jpg",
    title: `Ongoing Maintenance and Support 
`,
    des: `Building your Laravel application is just the beginning. We offer continuous support and maintenance to ensure your software stays updated, secure, and performing at its absolute best. Think of us as your co-pilots, ensuring smooth sailing for the long haul. 
`
  },
]

const service_content = {
  title: "Service",
  main_title: "Our Services",
  we_do: `Our Laravel Development Services 
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
                  <p>At [Your Company Name], we believe in creating cutting-edge solutions that truly meet your needs. Here's how our Laravel development services can help you grow, innovate, and scale:
                  </p>
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
          <p><strong>Choose Laravel solutions that work as hard as you do.</strong> Whether you’re launching a new idea or scaling up an enterprise, we’re here to make it happen. Let's build something great together.
          </p>
        </div>
      </div>
    </>
  );
};

export default ServiceArea;
