import service_data from "@/src/data/service-data";
import Link from "next/link";
import React from "react";

const Service = () => {
  return (
    <>
      <div className="tp-it-service pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-wraper pb-55">
                <div className="tp-section text-center">
                  <span className="tp-section__subtitle vogue-text-color white-bg mb-15 wow tpfadeUp">
                    <i className="before-border"></i>
                    Services <i className="after-border"></i>
                  </span>
                  <h2
                    className="tp-section__title vogue-text-color wow tpfadeUp"
                    data-wow-delay=".3s"
                  >
                    Mapping Out Your Digital Project: From Vision to Reality
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


          <div className="row">
            <div className="col-12">
              <div className="section-title-wraper pb-55">
                <div className="tp-section text-center">

                  <h2
                    className="tp-section__title vogue-text-color wow tpfadeUp"
                    data-wow-delay=".3s"
                  >
                    Why Expert Guidance Matters
                  </h2>
                  <p>Navigating from concept to execution in a digital project can feel overwhelming. Each phase—from defining goals to picking the perfect technology—is filled with decisions that could shape your success. 
                  </p>
                  <p>Our experienced team is here to simplify that process and support you in creating a strategic, impactful solution. With expertise in diverse industries, we tailor advice and technology recommendations to meet your unique needs. Whether you’re launching a new platform or enhancing an existing one, we’re ready to transform your challenges into opportunities. 
                  </p>
                  <p>Contact us today to learn how we can bring your digital project to life.
                  </p>
                  <p>We’d love to hear more about your web project! Share the details by filling out our form, and our team will respond within one working day. If you prefer a more direct conversation, feel free to reach out via phone or email. We’re here to help you bring your vision to life with expert guidance and personalized support.
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

