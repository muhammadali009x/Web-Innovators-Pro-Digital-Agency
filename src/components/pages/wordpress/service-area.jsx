import React from "react";




const service_data = [
    {
        id: 1, 
        img: "/assets/img/services/icon/ca-sv-icon-1.png",
        title: "Development for New and Existing WordPress Sites ",
        des: `Whether you're launching a brand-new WordPress site or need improvements for your existing one, we've got you covered. Our team specializes in creating robust, scalable, and user-friendly WordPress solutions. From initial setup to advanced customizations, we provide guidance and support for all your development needs. Whether you're managing a small blog or a large-scale business website, we ensure your site performs at its best.
`
    },
    {
        id: 2, 
        img: "/assets/img/services/icon/ca-sv-icon-2.png",
        title: `WooCommerce Website and Plugin Development 
`,
        des: `Looking to enhance your eCommerce presence? We offer customized WooCommerce development services to help you build or optimize your online store. Already running a WooCommerce site? We can improve functionality, optimize performance, or extend features with custom plugin development. If you're just starting, we can guide you through setting up your store for success, ensuring seamless integration and a smooth user experience.
`
    },
    {
        id: 3, 
        img: "/assets/img/services/icon/ca-sv-icon-3.png",
        title: `WordPress Support, Maintenance, and Repair `,
        des: `Keeping your WordPress website secure and high-performing is critical. We provide comprehensive maintenance services, including regular backups, performance optimization, and installing the latest updates. If your site is facing issues—whether from hacks, errors, or crashes—we specialize in recovery and repair to get your website back online quickly and efficiently.`
    },

    {
      id: 4, 
      img: "/assets/img/services/icon/ca-sv-icon-3.png",
      title: `Expertise in Other CMS and Web Technologies 
 `,
      des: `WordPress isn’t your only option. Our expertise extends to other popular CMS platforms such as Drupal, Joomla, and Contao, among others. Whether you need help selecting a system that suits your needs or migrating your website to a new platform, our team ensures a smooth transition and optimal results. We’re here to guide you to the right solution for your business goals.
`},
]

const service_content ={
    title: "Service",
    main_title: "Our Services",
    we_do: "WordPress Development Services Tailored for Your Needs",
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
          <p className="text-center">Contact us to learn more about how we can help you build, enhance, and maintain an exceptional digital presence!
          </p>
        </div>
      </div>
    </>
  );
};

export default ServiceArea;
