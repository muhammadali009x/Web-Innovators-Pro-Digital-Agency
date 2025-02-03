import ImagePopup from '@/src/Modals/ImagePopup';
import Link from 'next/link';
import React, { useState } from 'react';


const project_data = [
   {
      id: 1,
      img: " ",
      sub_title: "Product Design, UI, UX",
      title: `Back-office System for Online Language School | 2022 
`, des: `Our team developed a comprehensive back-office system to streamline operations for an online language school. The solution was tailored to handle student management, scheduling, and payment processing, allowing the client to focus on delivering high-quality lessons. With this system, the language school achieved greater efficiency, improved user experience for staff, and scalability to grow their offering.
`,
      link: "/portfolio-details",
      col: "col-lg-8",
      project_cls: "tp-project__item"
   },
   {
      id: 2,
      img: " ",
      sub_title: "UX, Consultancy",
      title: "Industry-Level Career Portal for msg systems | 2020 ",
      des: `We collaborated with msg systems to create a professional career portal designed to attract top talent. The portal featured advanced search functionalities, user-friendly navigation, and tools for easy application management. Our work ensured that msg systems could showcase their employer brand effectively while simplifying the hiring process for both recruiters and candidates. This project strengthened msg systems’ position as an industry leader.
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
                                  
                              <h3 className="tp-bs-project__title"> {item.title} </h3>
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