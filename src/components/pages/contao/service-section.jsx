 import Link from "next/link";
import React from "react";

const service_data = [


  // service data home 2
  {
      id: 1,
      link: "/service-3",
      img: "/assets/img/services/icon/we_re_specialists (2).jpg",
      title: `We’re Specialists
`,
      des: `Our expertise in Contao goes far beyond the basics. We understand the system’s architecture inside and out, and we know how to maximize its features to build websites that are not only powerful but also scalable and SEO-friendly. Whether you’re looking for superior performance or user engagement, we bring a depth of understanding that ensures exceptional results.
`
  },
  {
      id: 2,
      link: "/service-3",
      img: "/assets/img/services/icon/we_re_adaptable.jpg",
      title: `We’re Adaptable
`,
      des: `Your goals and vision are unique, and so should be your website. Whether you need custom-built modules, specific functionalities, or creative layout elements, our dedicated team specializes in designing tailored solutions that align perfectly with your objectives. Every aspect of your Contao website will be crafted to help you stand out and engage your audience effectively.
`
  },
  {
      id: 3,
      link: "/service-3",
      img: "/assets/img/services/icon/we_re_specialists (2).jpg",
      title: `We’re Knowledgeable
`,
      des: `While Contao is our specialty, our expertise extends beyond it. We have considerable experience with other CMS options, such as WordPress, Drupal, and Joomla, as well as frameworks like React and Laravel. If you’re uncertain about the right platform for your needs, we’ll guide you through the strengths and weaknesses of each, helping you make an informed decision that aligns with your vision and business model.
`
  },

  // service home 5
  {
      id: 4,
      icon: "flaticon-diaphragm",
      link: "#",
      img: "/assets/img/services/icon/it-service-3.png",
      title: `We’re Transparent
`,
      des: `Transparency is at the core of how we work. From beginning to end, we maintain clear and open communication while involving you in all key steps of your project. Whether it’s discussing timelines, providing regular updates, or explaining our processes, we aim to be your trusted digital partner—fully committed to making your project a success.
`,
      counter: "01", 
      delay: ".3s"
  },
  {
      id: 5,
      icon: "flaticon-mountains",
      link: "#",
      img: "/assets/img/services/icon/it-service-3.png",
      title: `We’re Here for You
`,
      des: `The relationships we build with our clients don’t end with the launch of your website. We are committed to forming long-term partnerships by offering comprehensive support and maintenance services. From keeping your Contao website secure with the latest updates and patches to enhancing existing features, our continuous support ensures your website evolves with your needs and remains performative over time.
`,
      counter: "02", 
      delay: ".4s"
  }, 


]

const service_data2 = [


  // service data home 2
  {
      id: 1,
      link: "/service-3",
      img: "/assets/img/services/icon/icon_for_scalability_and_performance.jpg",
      title: `Scalability and Performance
`,
      des: `Contao is designed for efficiency with its lean architecture and optimized coding. These qualities enable it to manage large amounts of content while maintaining smooth performance. Whether you're developing a small business website or scaling up to a more complex enterprise-level project, Contao's scalability makes it a versatile option.
`
  },
  {
      id: 2,
      link: "/service-3",
      img: "/assets/img/services/icon/icon_for_built_in_seo_and_analytics.jpg",
      title: `Built-in SEO and Analytics`,
      des: `Unlike many CMS platforms that require third-party plugins or extensions, Contao offers built-in SEO tools and analytics. This means you can optimize your site for search engines and monitor its performance straight out of the box. These features save time and ensure your website gets the visibility it deserves without the need for extensive configuration.
`
  },
  {
      id: 3,
      link: "/service-3",
      img: "/assets/img/services/icon/icon_for_accessibility_and_gdpr_compliance.jpg",
      title: `Accessibility and GDPR Compliance`,
      des: `Accessibility is a key strength of Contao. The CMS meets essential Web Accessibility Initiative (WAI) requirements, ensuring that your website accommodates users with different abilities. On top of this, Contao offers GDPR compliance tools to help your business meet data privacy regulations without complicated setups. This combination ensures your website is both inclusive and compliant with current legal standards.
`
  }, 

]


const service_data3 = [


  // service data home 2
  {
      id: 1,
      link: "/service-3",
      img: "/assets/img/services/icon/icon_for_no_out_of_the_box_multilingual_support.jpg",
      title: `No Out-of-the-box Multilingual Support
`,
      des: `For businesses aiming to target an international audience, multilingual support can be a critical feature. Compared to Drupal or Joomla—which provide robust multilingual functionality right out of the box—Contao requires additional configuration or modules for multi-language websites. This may increase the complexity of setup and maintenance for organizations with a global reach.
`
  },
  {
      id: 2,
      link: "/service-3",
      img: "/assets/img/services/icon/icon_for_limited_e_commerce_capabilities.jpg",
      title: `Limited E-commerce Capabilities
`,
      des: `If e-commerce is central to your project, Contao may not be the ideal choice. Unlike WordPress with WooCommerce, or Drupal’s powerful e-commerce integrations, Contao offers limited e-commerce solutions that often require additional extensions. Businesses looking for a seamless and comprehensive e-commerce experience may find other platforms better suited to their needs.
`
  },
  {
      id: 3,
      link: "/service-3",
      img: "/assets/img/services/icon/icon_for_steep_learning_curve.jpg",
      title: `Steep Learning Curve`,
      des: `One of the key considerations with Contao is its usability for non-technical users. While it offers abundant customization and power, mastering its system requires time and some technical expertise. Beginners or those transitioning from more user-friendly platforms like WordPress may face a learning curve as they adapt to Contao's interface and workflows.
`
  }, 

]

const Service = () => {
  return (
    <>
      <div className="tp-it-service pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-wraper pb-55">
                <div className="tp-section text-center">
                  
                  <h2
                    className="tp-section__title vogue-text-color wow tpfadeUp"
                    data-wow-delay=".3s"
                  >
                   How Are We Different from Other Contao Agencies?

                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row it-sv-counter">
            {service_data.map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div
                  className="it-service__item mb-30 text-center wow tpfadeUp"
                  data-wow-delay=".3s"
                >
                  <div className="it-servicce__item-img mb-35">
                    <img src={item.img} alt="image-here" />
                  </div>
                  <h3 className="it-service__item-title mb-20">
                    {item.title}
                  </h3>
                  <p className="mb-0">{item.des}</p>
                </div>
              </div>
            ))}
          </div>
          <p>By choosing us, you gain a reliable partner passionate about helping you achieve both immediate and long-term digital success.
          </p>




          <div className="row">
            <div className="col-12">
              <div className="section-title-wraper pb-55">
                <div className="tp-section text-center">
                  
                  <h2
                    className="tp-section__title vogue-text-color wow tpfadeUp"
                    data-wow-delay=".3s"
                  >
                   Is Contao the Right CMS for You?

                  </h2>
                  <p>Selecting the right content management system (CMS) for your digital project is a crucial decision, and understanding both the strengths and limitations of each platform can help you make an informed choice. At our agency, we’ve worked with Contao for over a decade, and while we are big admirers of its capabilities, it’s essential to present a balanced perspective. Below, we explore the key features that make Contao stand out, as well as areas where it may fall short compared to other popular CMSs.
                  </p>
                  <h3>What Sets Contao Apart?
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="row it-sv-counter">
            {service_data2.map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div
                  className="it-service__item mb-30 text-center wow tpfadeUp"
                  data-wow-delay=".3s"
                >
                  <div className="it-servicce__item-img mb-35">
                    <img src={item.img} alt="image-here" />
                  </div>
                  <h3 className="it-service__item-title mb-20">
                    {item.title}
                  </h3>
                  <p className="mb-0">{item.des}</p>
                </div>
              </div>
            ))}
          </div>


          <div className="row">
            <div className="col-12">
              <div className="section-title-wraper pb-55">
                <div className="tp-section text-center">
                  
                  <h2
                    className="tp-section__title vogue-text-color wow tpfadeUp"
                    data-wow-delay=".3s"
                  >
                 Potential Limitations of Contao

                  </h2>
                  <p>While Contao is a powerful and reliable platform, it does have some limitations compared to other CMSs that might be worth considering based on your specific needs.
                  </p> 
                </div>
              </div>
            </div>
          </div>

          <div className="row it-sv-counter">
            {service_data3.map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div
                  className="it-service__item mb-30 text-center wow tpfadeUp"
                  data-wow-delay=".3s"
                >
                  <div className="it-servicce__item-img mb-35">
                    <img src={item.img} alt="image-here" />
                  </div>
                  <h3 className="it-service__item-title mb-20">
                    {item.title}
                  </h3>
                  <p className="mb-0">{item.des}</p>
                </div>
              </div>
            ))}
          </div>


          <div className="row">
            <div className="col-12">
              <div className="section-title-wraper pb-55">
                <div className="tp-section text-center">
                  
                  <h2
                    className="tp-section__title vogue-text-color wow tpfadeUp"
                    data-wow-delay=".3s"
                  >How to Decide?

                  </h2>
                  <p>Choosing the right CMS for your project should depend on your unique needs, priorities, and technical resources. Contao is undoubtedly a strong contender for those who value scalability, built-in functionality like SEO and accessibility, and reliable performance. However, if features like multilingual support, intuitive interfaces, or advanced e-commerce capabilities are high priorities for your business, it’s worth considering alternatives.
                  </p>
                  <p>At our agency, we aim to provide clients with unbiased recommendations tailored to their specific requirements. If you need guidance in deciding whether Contao or another CMS is the ideal fit for your project, we're here to help. Contact us today to ensure your digital project has the right tools for success.
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

export default Service;

