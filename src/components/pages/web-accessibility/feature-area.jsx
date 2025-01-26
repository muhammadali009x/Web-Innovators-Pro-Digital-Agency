import Link from "next/link";
import React from "react";


const feature_data = [
  {
    id: 1,
    icon: "/assets/img/icons/app-fea-icon-1.png",
    title: `We’re Specialists 
`,
    des: `Our team boasts years of hands-on experience and an in-depth understanding of web accessibility standards and best practices. This expertise empowers us to design and develop digital solutions that are not just compliant but highly inclusive. We strive to ensure that every user, regardless of ability, can seamlessly interact with your website or app, making navigation effortless and engagement exceptional.
`
  },
  {
    id: 2,
    icon: "/assets/img/icons/app-fea-icon-2.png",
    title: `We’re Diligent 
`,
    des: `Staying informed is a priority for us. By keeping up to date with U.S. accessibility regulations, we ensure your digital platform meets—and often exceeds—legal requirements. Beyond compliance, our focus on accessibility enhances the user experience for everyone, helping you provide an inclusive interface while mitigating any potential legal risks.
`
  },
  {
    id: 3,
    icon: "/assets/img/icons/app-fea-icon-3.png",
    title: `We’re Knowledgeable 
`,
    des: `We understand that every platform is distinct. Whether your website or app is built on a CMS like Drupal, WordPress, Contao, or Joomla, or frameworks like Angular, Laravel, Symfony, or Vue.js, we bring the technical expertise needed to ensure universal accessibility. No matter your technological base, inclusive design and functionality remain our standard.
`
  },
  {
    id: 4,
    icon: "/assets/img/icons/app-fea-icon-4.png",
    title: `We’re Transparent 
`,
    des: `We believe that open communication is key to building successful partnerships. From the initial consultation to the final delivery, you’ll be informed at every step. By fostering collaboration, we ensure that the end result aligns perfectly with your needs and vision.
`
  },
  {
    id: 4,
    icon: "/assets/img/icons/app-fea-icon-4.png",
    title: `We Genuinely Care 

`,
    des: `Accessibility isn’t just what we do—it’s what defines us. Our commitment stems from a belief that digital content should be available to everyone. That’s why we go beyond the launch of your platform, offering ongoing support to maintain and improve its accessibility as technology evolves and your audience grows.
`
  },
]


const FeatureArea = () => {
  return (
    <>
      <div className="tp-app-feature theme-bg-3 pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-wraper">
                <div className="tp-section text-center">
                  <span
                    className="tp-section__subtitle mb-15 shadow-none text-cornblue p-0 change-icon-size wow tpfadeUp"
                    data-wow-delay=".4s"
                  >
                    <i className="far fa-circle"></i>
                    Core Features
                    <i className="far fa-circle"></i>
                  </span>
                  <h2
                    className="tp-section__title mb-60 text-mirage wow tpfadeUp"
                    data-wow-delay=".3s"
                  >
                    How Are We Different?

                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {feature_data.map((item, i) => (
              <div key={i} className="col-lg-6 col-12">
                <div
                  className="app-feature-box d-flex white-bg p-relative wow tpfadeUp"
                  data-wow-delay=".3s"
                >
                  <div className="app-feature-box-icon">
                    <img src={item.icon} alt="iclud" />
                  </div>
                  <div className="app-feature__info">
                    <h4 className="app-feature__title text-mirage">
                      <Link href="/service-2">{item.title}</Link>
                    </h4>
                    <span>{item.des} </span>
                  </div>
                  <div className="app-feature__arrow">
                    <span>
                      <a href="#">
                        <i className="fal fa-long-arrow-right"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p>When you work with us, you’re partnering with a team that values inclusion, innovation, and the people who will benefit from your accessible digital presence.
          </p>

          <h2>Are you searching for an agency with proven expertise in accessibility?
          </h2>
          <p>We specialize in creating inclusive digital experiences that meet established accessibility standards. Our team offers comprehensive services, including audits, development, and retrofitting, to ensure your website or app is accessible to everyone.
          </p>
          <p>Whether you're launching a new project or improving an existing platform, we bring deep knowledge and real-world experience to help you craft a digital presence that welcomes all users. Let's work together to build a more inclusive web.
          </p>
        </div>
      </div>
    </>
  );
};

export default FeatureArea;
