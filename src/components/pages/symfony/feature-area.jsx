import Link from "next/link";
import React from "react";


const feature_data = [
  {
    id: 1,
    icon: "/assets/img/icons/app-fea-icon-1.png",
    title: `We’re Specialists 
`,
    des: `Symfony is more than just a framework to us—it's our foundation. With years of experience and a comprehensive understanding of its architecture, we know how to push Symfony to its full potential. This means developing robust, scalable, and SEO-friendly web applications that don't just meet your needs—they exceed your expectations.
`
  },
  {
    id: 2,
    icon: "/assets/img/icons/app-fea-icon-2.png",
    title: `We’re Flexible 
`,
    des: `Every project is unique, and we thrive on crafting solutions as distinctive as your goals. Need a custom bundle? A specific functionality? A UI that grabs attention? Our team brings unmatched creativity and technical expertise to deliver tailored solutions. Your Symfony application won’t just perform seamlessly—it’ll set the standard in your industry.
`
  },
  {
    id: 3,
    icon: "/assets/img/icons/app-fea-icon-3.png",
    title: `We’re Knowledgeable 
`,
    des: `When it comes to technology, we're not one-dimensional. While Symfony is our specialty, we have solid expertise in other frameworks like Laravel, React, Angular, and Vue.js. We’re also well-versed in CMS platforms like Drupal, WordPress, Contao, and Joomla. Whether you're curious about which technology suits your project best or eager to explore alternative solutions, we're here to guide you.
`
  },
  {
    id: 4,
    icon: "/assets/img/icons/app-fea-icon-4.png",
    title: <>More Compatible</>,
    des: <>Software is a collection of instructions that tell a computer how to work in the other way.</>
  },
  {
    id: 4,
    icon: "/assets/img/icons/app-fea-icon-4.png",
    title: `We’re Transparent 
`,
    des: `No confusing tech jargon, no smoke and mirrors—just an open, honest process where you're in the loop every step of the way. From brainstorming to deployment, we welcome your input and focus on clear, consistent communication. Think of us as your digital partner, working collaboratively to bring your vision to life.
`
  },
  {
    id: 4,
    icon: "/assets/img/icons/app-fea-icon-4.png",
    title: `We’re Here for You 
`,
    des: `We see the launch of your Symfony application as the beginning, not the end. Beyond delivering high-performing code, we’re committed to long-term success. Our support and maintenance services ensure your project runs smoothly, stays secure, and evolves with your needs. Whether it’s a security patch, a feature enhancement, or simply a helping hand, we’re just a call away.
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
                    How Are We Different from Other Symfony Agencies?

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
          <p>Experience the difference with a Symfony agency that’s not just talented but invested in your success. Together, we’ll build something exceptional.
          </p>
        </div>
      </div>
    </>
  );
};

export default FeatureArea;
