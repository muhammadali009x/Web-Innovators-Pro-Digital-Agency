import Link from "next/link";
import React from "react";

const service_data = [

  {
    id: 1,
    link: "/service-3",
    img: "/assets/img/services/icon/it-service-1.png",
    title: `Efficient Content Management
`,
    des: `Drupal’s core system is designed to handle complex content management tasks seamlessly. With tools to create, organize, and display a wide variety of content types, Drupal excels in crafting highly structured, dynamic websites. One of its standout features is its taxonomy system, which supports complex content architectures. This makes it ideal for projects that demand advanced organization and improved content searchability.
`
  },
  {
    id: 2,
    link: "/service-3",
    img: "/assets/img/services/icon/it-service-2.png",
    title: `Advanced User Roles and Permissions
`,
    des: `When it comes to managing user access, Drupal is a top contender. It offers extremely granular control over roles and permissions, allowing administrators to tailor access levels for different user groups. Whether you’re managing a large editorial team or a site with distinct user access requirements, Drupal provides the flexibility and security you need.
`
  },
  {
    id: 3,
    link: "/service-3",
    img: "/assets/img/services/icon/it-service-3.png",
    title: `Dedicated Developer Community
`,
    des: `While Drupal’s community may not match the size of WordPress’s, it is known for being highly engaged and committed to improving the platform. This dedication results in regular updates, security enhancements, and a wide array of modules (Drupal’s term for plugins) to extend functionality. No matter your project, you’ll likely find a module—or developer support—tailored to your needs.
`
  },

]


const service_data2 = [

  {
    id: 1,
    link: "/service-3",
    img: "/assets/img/services/icon/it-service-1.png",
    title: `Steep Learning Curve
`,
    des: `Drupal’s advanced features and flexibility come at a cost—complexity. For users who are accustomed to more intuitive interfaces, the learning curve can feel steep. To fully utilize its capabilities, a higher level of technical expertise is often required compared to platforms like WordPress.
`
  },
  {
    id: 2,
    link: "/service-3",
    img: "/assets/img/services/icon/it-service-2.png",
    title: `Performance Optimization
`,
    des: `Straight out of the box, Drupal can be resource-intensive, especially on shared hosting environments. To achieve optimal performance, you’ll often need to fine-tune server settings and Drupal configurations. This process requires technical knowledge and might not be as straightforward as other CMS platforms designed for quicker, hassle-free setups.
`
  },
  {
    id: 3,
    link: "/service-3",
    img: "/assets/img/services/icon/it-service-3.png",
    title: `Theme and Layout Customization
`,
    des: `Drupal’s out-of-the-box themes may not provide the same level of visual flexibility as some of its competitors. Achieving specific layouts often requires custom development, making it less suitable for projects where design flexibility and ease-of-use are priorities. Platforms like WordPress or Contao have broader selections of ready-made themes and offer more user-friendly tools for creating custom layouts.
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
                    Is Drupal the Right Choice for You?
                  </h2>
                  <p>Choosing the right content management system (CMS) for your digital project is a critical decision that can shape the success of your online presence. At our agency, we’ve worked with Drupal for over a decade and have consistently seen it deliver robust results. However, as with any technology, it’s essential to approach this decision with a balanced understanding of its strengths and weaknesses. Below, we provide an in-depth look at what makes Drupal stand out and when you might consider alternatives.
                  </p>
                  <h3>Key Features That Differentiate Drupal
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row it-sv-counter">
            {service_data.slice(0, 3).map((item, i) => (
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
                    Situations Where Alternatives Might Be Better

                  </h2>
                  <p>Despite its notable strengths, Drupal does come with some challenges, which might make other CMS platforms a more suitable choice depending on your project.
                  </p>

                </div>
              </div>
            </div>
          </div>

          <div className="row it-sv-counter">
            {service_data.slice(0, 3).map((item, i) => (
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
                    Helping You Make an Informed Decision
                  </h2>
                  <p>At our agency, we prioritize guiding our clients with an unbiased and comprehensive evaluation to ensure they select the best CMS for their specific needs. Whether you’re drawn to Drupal’s unmatched flexibility and powerful features or might benefit from a simpler, more intuitive platform, the key is aligning the tool with your project’s requirements and long-term goals.
                  </p>
                  <p>Need help deciding if Drupal is the right fit for your digital project? Reach out to our expert team for tailored advice and insights—it’s our mission to make your digital vision a reality.
                  </p>
                  <p>Looking to get started on your Drupal project? We'd love to hear from you! Simply fill out the form with some details about your goals, and our team will be in touch within one business day to discuss next steps.
                  </p>
                  <p>Prefer a more direct approach? Feel free to call us or send us an email—we're here to help and answer any questions you may have about turning your vision into a seamless Drupal solution. Let's make your project a success!
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

