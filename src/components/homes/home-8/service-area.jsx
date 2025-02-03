import Link from "next/link";
import React from "react";




const local_service_data = [
  {
    id: 1,
    img: "/assets/img/services/icon/ca-sv-icon-1.png",
    title: "Web App",
    link: '/agency/web-app',
    des: <>Our typical customer doesn’t want to be distracted by IT Services.</>
  },
  {
    id: 2,
    img: "/assets/img/services/icon/ca-sv-icon-2.png",
    title: "WordPress",
    link: '/agency/wordpress',
    des: <>Our typical customer doesn’t want to be distracted by IT Services.</>
  },
  {
    id: 3,
    img: "/assets/img/services/icon/ca-sv-icon-3.png",
    title: "Laravel",
    link: '/agency/laravel',
    des: <>Our typical customer doesn’t want to be distracted by IT Services.</>
  },
  {
    id: 4,
    img: "/assets/img/services/icon/ca-sv-icon-3.png",
    title: "Angular",
    link: '/agency/angular',
    des: <>Our typical customer doesn’t want to be distracted by IT Services.</>
  },
  {
    id: 5,
    img: "/assets/img/services/icon/ca-sv-icon-3.png",
    title: "Contao",
    link: '/agency/contao',
    des: <>Our typical customer doesn’t want to be distracted by IT Services.</>
  },
  {
    id: 6,
    img: "/assets/img/services/icon/ca-sv-icon-3.png",
    title: "Drupal",
    link: '/agency/drupal',
    des: <>Our typical customer doesn’t want to be distracted by IT Services.</>
  },
  {
    id: 7,
    img: "/assets/img/services/icon/ca-sv-icon-3.png",
    title: "Joomla",
    link: '/agency/joomla',
    des: <>Our typical customer doesn’t want to be distracted by IT Services.</>
  },
  {
    id: 8,
    img: "/assets/img/services/icon/ca-sv-icon-3.png",
    title: "Matomo",
    link: '/agency/matomo',
    des: <>Our typical customer doesn’t want to be distracted by IT Services.</>
  },
  {
    id: 9,
    img: "/assets/img/services/icon/ca-sv-icon-3.png",
    title: "Symfony",
    link: '/agency/symfony',
    des: <>Our typical customer doesn’t want to be distracted by IT Services.</>
  },
  {
    id: 10,
    img: "/assets/img/services/icon/ca-sv-icon-3.png",
    title: "React",
    link: '/agency/react',
    des: <>Our typical customer doesn’t want to be distracted by IT Services.</>
  },
  {
    id: 11,
    img: "/assets/img/services/icon/ca-sv-icon-3.png",
    title: "Vue.Js",
    link: '/agency/vue-js',
    des: <>Our typical customer doesn’t want to be distracted by IT Services.</>
  },
  {
    id: 3,
    img: "/assets/img/services/icon/ca-sv-icon-3.png",
    title: "Accessibility",
    link: '/agency/accessibility',
    des: <>Our typical customer doesn’t want to be distracted by IT Services.</>
  },
  
]

const service_content = {
  title: "Service",
  main_title: "Our Services",
  we_do: "What We Do",
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
            {local_service_data.map((item, i) => (
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
                     
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceArea;
