import Link from "next/link";
import React from "react";

// footer_links data
const footer_links = [
  {
    id: 1,
    title: "Services",
    col: "col-xl-3",
    id: "company",
    links: [
      

      { title: "Accessibility", link: "/" }, 
      { title: "Angular", link: "/" }, 
      { title: "Contao", link: "/" }, 
      { title: "Drupal", link: "/" }, 
      { title: "Joomla", link: "/" }, 
      { title: "Laravel", link: "/" }, 
      { title: "Matomo", link: "/" }, 
      { title: "Symfony", link: "/" }, 
      { title: "Web Apps", link: "/" }, 
      { title: "WordPress", link: "/" }, 
      { title: "React", link: "/" }, 
      { title: "Vue.js", link: "/" },   
    ],
  },
  {
    id: 2,
    title: "Company",
    col: "col-xl-2",
    id: "company",
    links: [
      { title: "Work", link: "/about" },  
      { title: "About", link: "/about" },  
      { title: "Contact", link: "/privacy-policy" },   
      
    ],
  },
];

const CommonFooter = () => {
  return (
    <>
      {footer_links.map((item, i) => (
        <div key={i} className={`${item.col} col-md-6`}>
          <div className="tp-footer__widget mb-40">
            <h3 className="tp-footer__widget-title mb-35">{item.title}</h3>
            <ul id={item.id}>
              {item.links?.map((link, id) => (
                <li key={id}>
                  <a href={link.link}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default CommonFooter;







// copy right text
const footer_content = {
  copy_right_info:  <> Copyright & Design By <a href="#">@Theme Pure</a> - {new Date().getFullYear()} </>,
};

const { copy_right_info } = footer_content;

export const FooterCopyRight = ({style_3, style_7, style_9}) => {
  return (
    <> 
      <div className={`tp-footer__bottom pt-25 pb-25 ${style_3 ? "da-ft-copyright-bg" : ""} ${style_7 ? "law-footer__bottom red-bg"  :''} ${style_9 ? "ha-footer-copyright" : ""}`}>  
        <div className="row align-items-center">
          <div className="col-md-8 col-12">
            <div className={`tp-copyrigh-text ${style_3 ? "" : "text-center text-md-start"}`}>
              <span>{copy_right_info}</span>
            </div>
          </div>
          <div className="col-md-4 d-none d-md-block">
            <div className="tp-footer-menu text-end">
              <ul>
                <li>
                  <Link href="/faq">FAQ</Link>
                </li>
                {/* <li>
                  <Link href="/about">Insights</Link>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
