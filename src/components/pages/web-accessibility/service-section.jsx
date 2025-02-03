import Link from "next/link";
import React from "react";

const local_service_data = [


  // service data home 2
  {
    id: 1,
    link: "/service-3",
    img: "/assets/img/services/icon/it-service-1.png",
    title: `Enhanced Brand Image & Reputation 
`,
    des: `By committing to accessibility, your business positions itself as socially responsible and inclusive. This proactive approach not only portrays your brand in a positive light but also fosters trust and loyalty among a wider audience, including individuals with disabilities. A well-regarded reputation can ultimately lead to stronger customer relationships and increased advocacy for your business. 
`
  },
  {
    id: 2,
    link: "/service-3",
    img: "/assets/img/services/icon/it-service-2.png",
    title: `Expanded Audience Reach 
`,
    des: `An accessible digital presence means your website or app can be used by a much broader range of people, including the millions globally who live with disabilities. This inclusivity ensures more users can engage with your platform, leading to increased conversions, customer satisfaction, and loyalty. By catering to a wider audience, you broaden your reach and open the door to previously untapped markets. 
`
  },
  {
    id: 3,
    link: "/service-3",
    img: "/assets/img/services/icon/it-service-3.png",
    title: `Legal Compliance & Risk Reduction 
`,
    des: `Depending on your location and industry, web accessibility may not just be a choice but a legal necessity. For instance, in the United States, the Americans with Disabilities Act (ADA) requires many businesses to ensure their digital platforms are accessible. Compliance can help you avoid legal disputes, hefty penalties, and reputational damage. Proactively addressing accessibility safeguards your business while demonstrating integrity.
`
  },


]


const local_service_data2 = [


  // service data home 2
  {
    id: 1,
    link: "/service-3",
    img: "/assets/img/services/icon/it-service-1.png",
    title: `Content & Media Adaptability 
`,
    des: `Ensure your website’s content is perceivable by everyone. This includes offering text alternatives for images, providing captions or subtitles for videos, and ensuring your content adapts seamlessly to different devices and screen orientations. By making text, images, and multimedia accessible, you ensure all users—regardless of ability—can engage with your website. 
`
  },
  {
    id: 2,
    link: "/service-3",
    img: "/assets/img/services/icon/it-service-2.png",
    title: `Interactive Element Accessibility 
`,
    des: `From forms to buttons, ensure all interactive features on your site are usable by individuals, including those relying on assistive technologies like screen readers or keyboard navigation. For example, design concise forms with logical layouts and ensure clickable elements are labeled appropriately. These small steps make your site more user-friendly for everyone.
`
  },
  {
    id: 3,
    link: "/service-3",
    img: "/assets/img/services/icon/it-service-3.png",
    title: `Consistent & Predictable Navigation 
`,
    des: `An accessible website prioritizes a smooth user experience by providing predictable and clear navigation. Features like breadcrumbs, skip-to-content links, and well-structured headings make your site easier to explore. Logical and consistent navigation not only assists users with disabilities but enhances usability for all visitors.
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
                    Should You Invest in Web Accessibility?

                  </h2>
                  <p>Deciding whether to prioritize web accessibility is an important consideration for any business. Beyond being the right thing to do, accessibility offers tangible benefits for your brand and bottom line. Equally, it’s important to understand what’s involved in creating an accessible site. Here, we’ll walk you through both the advantages and the key tasks required to achieve accessibility.
                  </p>
                  <h3>Benefits of Prioritizing Web Accessibility
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row it-sv-counter">
            {local_service_data.map((item, i) => (
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
                    Key Tasks for Achieving Accessibility


                  </h2>
                  <p>Making your digital platforms accessible involves a focused effort across several areas. Below are the main components to address:
                  </p>

                </div>
              </div>
            </div>
          </div>
          <div className="row it-sv-counter">
            {local_service_data2.map((item, i) => (
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
                    Why Accessibility Matters

                  </h2>
                  <p>Investing in web accessibility is both an ethical choice and a practical business strategy. It reflects your company’s values, strengthens your brand, and builds trust. Additionally, it ensures your website welcomes every user, fosters inclusivity, and protects your business from non-compliance risks.
                  </p>
                  <p>At the same time, accessible design drives customer satisfaction and enhances the overall user experience. By making your digital platforms open to everyone, you position your business as an innovator and leader in inclusivity—aligning your goals with a growing global demand for equal access to digital content.
                  </p>

                </div>
              </div>
            </div>
          </div>


          <div className="row">
            <div className="col-12">
              <div className="section-title-wraper pb-55">
                <div className="tp-section text-center">

                  <h2
                    className="tp-section__title vogue-text-color wow tpfadeUp"
                    data-wow-delay=".3s"
                  >
                   Start Your Accessibility Journey 


                  </h2>
             <p>Choosing web accessibility is a step toward a stronger, more inclusive digital presence. We’re here to help you assess the specific benefits for your business and guide you through the process of implementation. Together, we’ll ensure your website meets accessibility standards while aligning with your business objectives and customer needs.
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

