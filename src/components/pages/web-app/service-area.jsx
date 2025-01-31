import React from "react";




const service_data = [
  {
    id: 1,
    img: "/assets/img/services/icon/custom_web_applications_icon (1).jpg",
    title: "Custom Web Applications",
    des: `Tired of one-size-fits-all solutions? Our custom web applications are built uniquely for you. Our team of skilled developers takes pride in crafting apps that align perfectly with your business needs. Whether you're looking for robust functionality, a user-friendly interface, or a platform that caters to the specific demands of your industry, we've got you covered. Your vision, combined with our expertise, results in web applications that truly work for your business.
`
  },
  {
    id: 2,
    img: "/assets/img/services/icon/icon_for_robust_enterprise_solutions.jpg",
    title: "Robust Enterprise Solutions",
    des: `Big business? Small business? Somewhere in between? No matter your size, we deliver enterprise-grade solutions tailored to your organization’s needs. Integration doesn’t have to be a headache—we design systems to seamlessly blend into your existing infrastructure. And because every business evolves, our solutions are scalable, ensuring they grow and adapt alongside you. Empower your business to handle today’s challenges and tomorrow’s opportunities.`
  },
  {
    id: 3,
    img: "/assets/img/services/icon/icon_for_dynamic_user_interface_design (1).jpg",
    title: "Dynamic User Interface Design",
    des: `A first impression is everything, and your web app’s user interface can make or break it. Our design team understands the importance of keeping users engaged from the moment they arrive. We develop dynamic, visually striking, yet intuitive interfaces that make navigating your app enjoyable. Whether you're captivating new users or inviting returning ones back for more, we make sure your UI keeps them involved and satisfied every step of the way.`
  },
  {
    id: 4,
    img: "/assets/img/services/icon/icon_for_seamless_api_integrations.jpg",
    title: "Seamless API Integrations",
    des: `Today’s digital landscape demands connectivity, not limits. We make sure your web apps are ready to interact efficiently with external services by providing seamless API integrations. From payment processing to third-party data services, we ensure functionality is enhanced across the board. With a proven track record of working with diverse APIs, our team ensures your digital tools are as versatile as you need them to be.
`
  },
  {
    id: 5,
    img: "/assets/img/services/icon/icon_for_continuous_maintenance_and_support (1).jpg",
    title: "Continuous Maintenance and Support",
    des: `Building your web app is just the beginning. Our commitment to your success extends far beyond launch day. We offer comprehensive maintenance and support services to ensure your app remains secure, fast, and up to date. From implementing new features to optimizing performance, our team works hard to ensure your app consistently delivers its best. Rest easy knowing there's a partner ready to support your long-term goals. `
  },
]

const service_content = {
  title: "Service",
  main_title: "What We Do",
  we_do: "Our Web App Development Services",
  btn_text: "More Services",
  des: ` Whether you’re building your digital presence or upgrading your existing platform, we combine expertise, creativity, and care to deliver web apps that make an impact. Your web app deserves to be more than functional; it should be extraordinary.`
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
          <p className="text-center fs-50">{des}</p>
        </div>
      </div>
    </>
  );
};

export default ServiceArea;
