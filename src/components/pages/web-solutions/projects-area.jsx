import ImagePopup from '@/src/Modals/ImagePopup';
import Link from 'next/link';
import React, { useState } from 'react';

const project_data = [
   {
      id: 1,
      img: "/assets/img/project/project-1.jpg",
      sub_title: "Product Design, UI, UX",
      title: `Building an Industry-Level Career Portal for msg systems (2020) 
`, des: `Our team collaborated with msg systems to design and implement an industry-level career portal aimed at transforming their talent acquisition process. The portal offered an enhanced user experience and integrated robust functionalities such as advanced job filtering, seamless application processes, and a mobile-friendly interface. By focusing on scalability and efficiency, the platform supports msg systems in attracting top-tier professionals across various industries.
`,
      link: "/portfolio-details",
      col: "col-lg-8",
      project_cls: "tp-project__item"
   },
   {
      id: 2,
      img: "/assets/img/project/project-2.jpg",
      sub_title: "UX, Consultancy",
      title: `Large-Scale Migration to Joomla with Matomo Tracking (2019) 
`, des: `We undertook a complex migration project to transition a high-traffic website to Joomla while incorporating Matomo analytics for precise tracking. This involved migrating extensive datasets, optimizing website performance, and seamlessly integrating tracking capabilities to deliver actionable insights. Our expertise ensured a smooth transition with minimal downtime, enabling the client to maintain operational continuity and improve visitor engagement post-migration.
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
                              <a href="#" onClick={() => handleImagePopup(i)} className="bs-project-popup">
                                 <img src={item.img} alt="" /></a>
                           </div>
                           <div className="tp-bs-project__details wow tpfadeUp">
                              <span className="mb-10 d-inline-block"> <a href="#">{item.sub_title}</a></span>
                              <h3 className="tp-bs-project__title"><Link href={item.link}>{item.title}</Link></h3>
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
                        <Link href="/portfolio-3" className="tp-common-btn tp-btn-hover alt-color">more works
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