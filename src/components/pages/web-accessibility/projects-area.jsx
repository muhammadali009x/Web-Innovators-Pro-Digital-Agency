import ImagePopup from '@/src/Modals/ImagePopup';
import Link from 'next/link';
import React, { useState } from 'react';


const project_data = [
   {
      id: 1,
      img: " ",
      sub_title: "Product Design, UI, UX",
      title: `Building an Industry-Level Career Portal for msg systems | 2020
`, des: `We collaborated with msg systems to design and develop an industry-level career portal tailored to their recruitment needs. The project involved creating a user-friendly platform that streamlined job postings, application tracking, and candidate management. By incorporating intuitive navigation and advanced filtering options, we ensured that both the HR teams and potential applicants could easily access and utilize the system. The end result was a robust, scalable solution that aligned perfectly with msg systems' operational goals.
`,
      link: "/portfolio-details",
      col: "col-lg-8",
      project_cls: "tp-project__item"
   },
   {
      id: 2,
      img: " ",
      sub_title: "UX, Consultancy",
      title: `Large-scale Migration to Joomla with Matomo Tracking | 2019
`, des: `For this project, we executed a large-scale migration to Joomla, transitioning an extensive amount of content from their existing system while maintaining data integrity and structure. To provide enhanced analytics capabilities, we integrated Matomo tracking within the Joomla platform, enabling the organization to monitor user engagement and track performance metrics effectively. Our team ensured a seamless transition, prioritizing minimal disruptions to the client’s operations while delivering a secure and optimized platform for long-term use.
`,
      link: "/portfolio-details",
      col: "col-lg-4",
      project_cls: "tp-bs-project__item"
   },


]
const ProjectsArea = () => {


   // photoIndex
   const [photoIndex, setPhotoIndex] = useState(0);

   // image open state
   const [isOpen, setIsOpen] = useState(false);

   // handleImagePopup
   const handleImagePopup = (i) => {
      setPhotoIndex(i);
      setIsOpen(true);
   };

   //  images
   const img = project_data.map((item) => item.img);



   return (
      <>
         <div className="tp-bs-project pt-180 pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <div className="section-title-wraper">
                        <div className="tp-section">
                           <span className="tp-section__subtitle white-bg mb-15 wow tpfadeUp"><i className="before-border"></i> Portfolio</span>
                           <h2 className="tp-section__title mb-80 wow tpfadeUp" data-wow-delay=".3s">Our Recent Projects.</h2>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row">
                  {project_data.map((item, i) =>
                     <div key={i} className={item.col}>
                        <div className={`${item.project_cls} mb-65 wow tpfadeUp`}>
                           <div className="tp-bs-project__img w-img fix mb-35">
                              <img src={item.img} alt="" />
                           </div>
                           <div className="tp-bs-project__details wow tpfadeUp">
                               {/* <span className="mb-10 d-inline-block"> <a href="#">{item.sub_title}</a></span> */}
                              <h3 className="tp-bs-project__title">{item.title}</h3>
                              <p>{item.des}</p>
                           </div>
                        </div>
                     </div>
                  )
                  }

               </div>
               <div className="row">
                  <div className="col-12">
                     <div className="project-more-btn">
                        <Link href="/portfolio" className="tp-common-btn tp-btn-hover alt-color">more works
                           <span>
                              <i className="fal fa-long-arrow-right"></i>
                              <i className="fal fa-long-arrow-right"></i>
                           </span>
                           <b></b>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* image light box start */}
         {isOpen && (
            <ImagePopup
               images={img}
               setIsOpen={setIsOpen}
               photoIndex={photoIndex}
               setPhotoIndex={setPhotoIndex}
            />
         )}
         {/* image light box end */}
      </>
   );
};

export default ProjectsArea;