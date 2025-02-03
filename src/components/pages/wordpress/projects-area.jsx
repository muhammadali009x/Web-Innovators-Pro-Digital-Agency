import ImagePopup from '@/src/Modals/ImagePopup';
import Link from 'next/link';
import React, { useState } from 'react';


const project_data = [
   {
      id: 1,
      img: " ",
      sub_title: "Product Design, UI, UX",
      title: `WordPress Enhancements for Building Radar | 2023 `,
      des: `For Building Radar in 2023, we elevated the capabilities of their WordPress platform, making strategic enhancements to ensure optimal performance, usability, and scalability. This project focused on modernizing their website while maintaining a seamless user experience. Through tailored WordPress solutions, we aimed to position Building Radar as an industry leader with a reliable and efficient digital presence.
`,
      link: "/portfolio-details",
      col: "col-lg-8",
      project_cls: "tp-project__item"
   },
   {
      id: 2,
      img: " ",
      sub_title: "UX, Consultancy",
      title: `Accommodation Platform WordPress Website | 2022 
`,
      des: `Our 2022 project for an accommodation platform involved creating a fully customized WordPress website designed to elevate their booking and user management functionalities. We delivered a user-friendly site that included advanced search features, intuitive navigation, and mobile responsiveness. By integrating dynamic tools and a sleek design, this platform now provides an engaging experience for both hosts and guests.
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
                           <h2 className="tp-section__title mb-80 wow tpfadeUp" data-wow-delay=".3s">WordPress Reference Projects
                           </h2>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row">
                  {project_data.map((item, i) =>
                     <div key={i} className={item.col}>
                        <div className={`${item.project_cls} mb-65 wow tpfadeUp`}>
                           <div className="tp-bs-project__img w-img fix mb-35">
                              {/* <a href="#" onClick={() => handleImagePopup(i)} className="bs-project-popup"> */}
                                 <img src={item.img} alt="" />
                                 {/* </a> */}
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