import React from "react";




const service_data = [
  {
    id: 1,
    img: "/assets/img/services/icon/custom_angular_applications.jpg",
    title: `Custom Angular Applications 
`,
    des: `Leverage the expertise of our adept developers to create custom web applications tailored precisely to your business requirements. By utilizing Angular’s robust framework, we craft solutions that embody performance, scalability, and adaptability, ensuring your business is equipped with cutting-edge technology. Each application is designed to deliver results while aligning seamlessly with your objectives. 
`
  },
  {
    id: 2,
    img: "/assets/img/services/icon/scalable_enterprise_solutions.jpg",
    title: `Scalable Enterprise Solutions 
`,
    des: `Empower your organization to scale effortlessly with our Angular-based enterprise solutions. Catering specifically to the needs of large corporations, our solutions are engineered to integrate smoothly with your existing systems while optimizing efficiency. Whether expanding capabilities or streamlining operations, our team ensures every solution supports your organization's growth ambitions.
`
  },
  {
    id: 3,
    img: "/assets/img/services/icon/component_design_and_development.jpg",
    title: `Component Design and Development 
`,
    des: `Unlock the true potential of Angular’s component-based architecture with our custom-designed components. These tailored pieces, created by our expert developers, enhance the functionality and performance of your applications. Our focus on seamless integration and user-centric design ensures a highly intuitive experience for your users, meeting both aesthetic and functional standards.
`
  },
  {
    id: 4,
    img: "/assets/img/services/icon/api_integration_with_angular.jpg",
    title: `API Integration with Angular 
`,
    des: `Maximize the connectivity of your applications through the seamless integration of APIs. Backed by extensive expertise in designing and implementing RESTful solutions, our team enables your Angular applications to connect effortlessly with external systems. This ensures increased flexibility, interoperability, and a robust flow of data within your technological ecosystem.
`
  },
  {
    id: 5,
    img: "/assets/img/services/icon/ongoing_maintenance_and_support.jpg",
    title: `Ongoing Maintenance and Support 
`,
    des: `We believe that exceptional development includes comprehensive post-launch support. Our team provides continuous maintenance to ensure your Angular applications stay up-to-date, secure, and high-performing. With regular monitoring, updates, and prompt troubleshooting, we keep your technology running at its best while adapting to changing requirements.
`
  },
]

const service_content = {
  title: "Service",
  main_title: "Our Services",
  we_do: `Our Angular Development Services
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
                      {item.title}
                    </h3>
                    <p className="mb-30">{item.des}</p>
                          
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p>Partner with us to bring innovation, efficiency, and reliability to your Angular development projects. Our commitment is to equip your business with tools that deliver real value, driving sustainable success. Contact us today to explore how we can support your next project.
          </p>
        </div>
      </div>
    </>
  );
};

export default ServiceArea;
