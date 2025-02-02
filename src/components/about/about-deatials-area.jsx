import React from 'react';


const about_details_content = {
   title: <>With experience from top companies</>,

   info_2000_title: <>We got featured from <span>Awwrds </span></>,

   info_2000: <>Shall over firmament, above there won't image wherein winged moveth twoes
      heaven green, the whose had so let evening forth together given form make. Red
      moved years face our may male female.</>,

   info_2010_title: <>We got featured from <span>Themeforest</span></>,
   info_2010: <>Shall over firmament, above there won't image wherein winged moveth twoes
      heaven green, the whose had so let evening forth together given form make. Red
      moved years face our may male female.</>,

   info_2018_title: <>We got featured from <span>buyers</span></>,
   info_2018: <>Shall over firmament, above there won't image wherein winged moveth twoes
      heaven green, the whose had so let evening forth together given form make. Red
      moved years face our may male female.</>,


   info_2022_title: <>We got featured from <span>Your</span></>,
   info_2022: <>Shall over firmament, above there won't image wherein winged moveth twoes
      heaven green, the whose had so let evening forth together given form make. Red
      moved years face our may male female.</>,

}

const {
   title,
   info_2000_title,
   info_2000,
   info_2010_title,
   info_2010,
   info_2018_title,
   info_2018,
   info_2022_title,
   info_2022 } = about_details_content


const AboutDeatialsArea = () => {
   return (
      <>
         <div className="tp-about-deatials-service theme-bg pt-120 pb-90">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 wow tpfadeUp">
                     <div className="tp-about-sv-content">
                        <h3 className="tp-section__title wow tpfadeUp mb-10">What to Expect When Working with Us
                        </h3>
                        <p>When you work with HV Digital, it’s more than just a project. We focus on building a meaningful relationship. From the initial consultation to project completion, our team is dedicated to understanding your goals and delivering solutions that exceed expectations.
                        </p>
                     </div>
                     <div className="tp-ab-sv-tabs mb-30">

                        <div className="tab-content" id="pills-tabContent">
                           <div className="tab-pane fade show active" id="pills-2000" role="tabpanel" aria-labelledby="2000">
                              <div className="tp-ab-sv-tabs-content">
                                 <h3 className="tp-ab-sv-tabs-title">Owner-Managed & Hands-On
                                 </h3>
                                 <p>Leadership at HV Digital isn’t just about overseeing work—it’s about being actively involved. This hands-on approach ensures quality and consistency in every project.
                                 </p>
                              </div>

                              <div className="tp-ab-sv-tabs-content">
                                 <h3 className="tp-ab-sv-tabs-title">Ready to Bring Your Ideas to Life?
                                 </h3>
                                 <p>At HV Digital, we turn concepts into reality. Whether you need a sleek website or a powerful web application, we’re here to make it happen—and we’re ready to do it with openness, expertise, and a collaborative spirit.
                                 </p>
                                 <p>Get in touch today to see how we can help your next digital project succeed.
                                 </p>
                              </div>

                           </div>

                        </div>
                     </div>
                     
                  </div>
                  <div className="col-xl-6 wow tpfadeUp">
                     <div className="about-sv-img">
                        <img src="/assets/img/services/about-service.jpg" alt="" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default AboutDeatialsArea;