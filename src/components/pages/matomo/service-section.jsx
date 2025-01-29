import Link from "next/link";
import React from "react";

const service_data = [
 
  {
      id: 1,
      link: "/service-3",
      img: "/assets/img/services/icon/it-service-1.png",
      title: `Data Ownership & GDPR Compliance
`,
      des: `Matomo offers unmatched data privacy by allowing you to self-host the platform. This means your data isn’t shared with third parties or used in ways you can’t control. Matomo also ensures GDPR compliance, making it an excellent choice for businesses operating in regions with strict privacy regulations. With Matomo, you retain full control and ownership of your data, giving you peace of mind about how it’s handled.
`
  },
  {
      id: 2,
      link: "/service-3",
      img: "/assets/img/services/icon/it-service-2.png",
      title: `Customizable and Open Source
`,
      des: `Unlike Google Analytics, Matomo is open-source, granting you access to its source code. This flexibility allows you to customize templates, develop unique dashboards, and generate tailored reports. If your business requires a highly specific approach to analytics, Matomo’s customizability ensures it can adapt to your unique needs.
`
  },
  {
      id: 3,
      link: "/service-3",
      img: "/assets/img/services/icon/it-service-3.png",
      title: `No Third-party Cookies
`,
      des: `Privacy concerns have led many users to block or delete third-party cookies, which Google Analytics relies on for tracking. This can compromise the accuracy of user behavior data and requires intrusive cookie consent pop-ups on websites. Matomo sidesteps this issue entirely by functioning without third-party cookies, offering a more seamless and privacy-centric user experience.
`
  },
 
]

const service_data2 = [
 
  {
      id: 1,
      link: "/service-3",
      img: "/assets/img/services/icon/it-service-1.png",
      title: `Transition Time and Effort
`,
      des: `Switching to a new platform comes with its own set of challenges. Migrating to Matomo involves a learning curve, financial investment, and careful planning to minimize disruptions. Depending on your current setup, you might experience a temporary dip in your ability to gather and analyze data as your team adjusts.
`
  },
  {
      id: 2,
      link: "/service-3",
      img: "/assets/img/services/icon/it-service-2.png",
      title: `Integration with Google Services
`,
      des: `Many organizations depend heavily on Google’s ecosystem, including tools like Google Ads and Search Console. Google Analytics integrates effortlessly with these services, providing a unified platform for campaign management and performance tracking. While Matomo offers its own integrations, they may not be as seamless or comprehensive as Google’s.
`
  },
  {
      id: 3,
      link: "/service-3",
      img: "/assets/img/services/icon/it-service-3.png",
      title: `Advanced Machine Learning Insights
`,
      des: `Google Analytics excels in leveraging advanced machine learning to deliver predictive analytics, anomaly detection, and valuable insights. These features can help businesses anticipate user behavior and make data-driven decisions. While Matomo provides a robust analytics suite, it lacks the depth of AI-powered capabilities found in Google Analytics.
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
                   Should You Replace Google Analytics with Matomo?

                  </h2>
                  <p>Choosing the right website analytics tool is a critical decision for projects where data insights play a key role. While Google Analytics has long been the go-to choice for many, Matomo is gaining traction among users who prioritize data privacy, ownership, and customization. Below, we’ll outline the key advantages and drawbacks of switching to Matomo, helping you make an informed decision.
                  </p>
                  <h3>Why Matomo May Be the Right Choice
                  </h3>
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
                    <Link href={item.link}>{item.title}</Link>
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
                 Challenges You May Face with Matomo 
                  </h2>
                  
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
                    <Link href={item.link}>{item.title}</Link>
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
                The Case for Matomo
 
                  </h2>
                  <p>The growing interest in Matomo reflects an increased focus on data ownership, privacy, and customization in today’s digital landscape. Many businesses are recognizing the importance of maintaining control over their data while staying compliant with evolving privacy laws.
                  </p>
                  <p>That said, choosing the right analytics tool comes down to your specific needs and priorities. If your business highly values privacy, GDPR compliance, and robust customization, Matomo may be the ideal solution. However, if your operations rely heavily on Google’s integrated services or advanced AI features, Google Analytics might still be the better choice.
                  </p>
                  <p>At the end of the day, it’s about aligning your analytics platform with your business goals. We’re here to guide you through this decision and help you find the right solution for your website’s objectives. Whether you choose Matomo, Google Analytics, or another platform altogether, the key is making an educated choice that positions your business for success.
                  </p>
                  <p>We’d love to assist with your Matomo project and help you achieve your goals! Simply fill out the form, and one of our team members will get back to you within one business day. Prefer a more direct approach? You’re welcome to give us a call or send us an email—we’re here to help and answer any questions you might have.
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

