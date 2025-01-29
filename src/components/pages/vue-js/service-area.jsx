import React from "react";




const service_data = [
  {
    id: 1,
    img: "/assets/img/services/icon/ca-sv-icon-1.png",
    title: `Custom Vue.js Applications
`,
    des: `Our experienced developers specialize in building bespoke web applications using the powerful Vue.js framework. Whether you need a lightweight interface or a feature-rich platform, we craft software designed specifically for your unique business needs. With Vue.js's simplicity and flexibility, we ensure your application delivers superior functionality and a seamless user experience.
`
  },
  {
    id: 2,
    img: "/assets/img/services/icon/ca-sv-icon-2.png",
    title: `Scalable Enterprise Solutions
`,
    des: `For large corporations aiming to innovate and grow, we deliver scalable Vue.js enterprise solutions. Our team develops tailored software capable of adapting to your business’s evolving requirements. By seamlessly integrating with your existing systems, our solutions ensure efficiency and ease of operation, enabling a smooth scaling process.
`
  },
  {
    id: 3,
    img: "/assets/img/services/icon/ca-sv-icon-3.png",
    title: `Custom Component Development
`,
    des: `Harness the full potential of Vue.js’s component-based architecture with our custom component development services. Our team designs and builds specialized components to extend functionality, offering unmatched levels of performance and interactivity. These components are tailored to your application’s specifications, ensuring an intuitive and superior user experience.
`
  },
  {
    id: 4,
    img: "/assets/img/services/icon/ca-sv-icon-3.png",
    title: `API Integration with Vue.js
`,
    des: `We enhance the capabilities of your Vue.js applications with expert API integration. Our developers are skilled in crafting functional and dependable RESTful solutions, ensuring smooth communication between systems. This enhances the versatility and connectivity of your applications, allowing you to meet a wider range of business needs.
`
  },
  {
    id: 5,
    img: "/assets/img/services/icon/ca-sv-icon-3.png",
    title: `Continuous Maintenance and Support
`,
    des: `Our commitment extends far beyond the initial development stage. We provide ongoing maintenance and support services to ensure your Vue.js applications remain secure, up-to-date, and optimized for peak performance. From addressing potential issues to rolling out updates, we are here to ensure your software always operates at its best.
`
  },
]

const service_content = {
  title: "Service",
  main_title: "Our Services",
  we_do: `Our Vue.js Development Services
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




          <div className="row align-content-center">
            <div className="col-md-8 wow tpfadeUp">
              <div className="section-title-wraper">
                <div className="tp-section">
                  <h2 className="tp-section__title mb-40">Why Choose Us?
                  </h2>
                  <p>We don’t just develop applications; we deliver solutions that empower your business. With our expertise in Vue.js, dedication to quality, and continuous support, you can trust us to bring your vision to life and keep it thriving.
                  </p>
                  <h3>Laravel and Agency Impact
                  </h3>
                  <h4>What does Laravel mean to me?
                  </h4>
                  <p>Laravel represents more than just a robust PHP framework; it encapsulates simplicity, efficiency, and scalability. For agencies working on complex web applications, Laravel provides the tools necessary to streamline development, maintain high performance, and ensure projects are delivered on time. Its rich ecosystem—like built-in routing, eloquent ORM, and elegant syntax—makes it the backbone of modern web application development. To agencies like ours, Laravel signifies a commitment to quality, adaptability, and client satisfaction.
                  </p>

                  <h3>Integrating Bootstrap with Vue.js
                  </h3>
                  <h4>Vue.js Bootstrap: Adding Bootstrap to a Vue.js Application
                  </h4>
                  <p>Integrating Bootstrap into Vue.js applications can elevate your project by marrying responsive, mobile-first design with the dynamic, component-driven functionality of Vue.js. With straightforward installation and a large library of pre-built styles and components, Bootstrap enables faster UI/UX prototyping while harmonizing with Vue.js frameworks seamlessly. We’ve seen how these two technologies, when combined, improve development efficiency and result in user-friendly applications with polished interfaces.
                  </p>

                  <h3>Leveraging Docker for Laravel Development
                  </h3>
                  <h4>Getting Started with Docker and Laravel </h4>
                  <p>Docker revolutionizes Laravel development by standardizing environments and solving compatibility issues. With Docker, you can containerize your Laravel applications to match your production setup, minimize dependencies, and streamline deployment processes. Tools like Docker Compose further simplify running services like PHP, MySQL, and Nginx together. For agencies adopting Docker, the ability to replicate environments across teams enhances collaboration, reduces onboarding times, and improves overall productivity.
                  </p>

                  <h3>Understanding Web Platform Costs </h3>
                  <h4>Total Cost of Ownership (TCO): What You Need to Know
                  </h4>
                  <p>A comprehensive understanding of Total Cost of Ownership (TCO) is essential for any business planning to invest in a web platform. TCO goes beyond upfront development costs to include maintenance, hosting, upgrades, and ongoing optimization. By taking a holistic approach, businesses can make informed decisions about long-term investments and avoid costly surprises. Our team has guided clients through detailed TCO analyses, empowering them to maximize their ROI while ensuring scalable, secure, and sustainable web platforms. </p>
                  <hr />
                  <p>Each of these topics presents critical insights for anyone working to build efficient, modern digital solutions. For your next project, choosing the right frameworks and tools like Laravel or Docker—and fully understanding costs—can be the difference between a good outcome and one that exceeds expectations.</p>
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
