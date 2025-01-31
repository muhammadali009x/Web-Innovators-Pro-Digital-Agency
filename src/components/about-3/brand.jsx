import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// brands_data
const brands_data = [
  {
    id: 1,
    img: "/assets/img/brand/GartnerLogo.svg.webp",
  },
  {
    id: 2,
    img: "/assets/img/brand/clutchLogo.webp",
  },
  {
    id: 3,
    img: "/assets/img/brand/ToptalLogo.webp",
  },
  {
    id: 4,
    img: "/assets/img/brand/DesignRushLogo.webp",
  },
  {
    id: 5,
    img: "/assets/img/brand/SortListLogo.webp",
  },
  {
    id: 6,
    img: "/assets/img/brand/TheMinifistLogo.webp",
  },
  {
    id: 7,
    img: "/assets/img/brand/UpCityLogo.webp",
  },
  {
    id: 8,
    img: "/assets/img/brand/GoodFirmsLogo.webp",
  },
];


const setting = {
  slidesPerView: 5,
  spaceBetween: 30,
  centeredSlides: true,
  centeredSlidesBounds: true,
  breakpoints: {
    1200: {
      slidesPerView: 5,
    },
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
};

const Brand = () => {
  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);

  return (
    <>
      <div className="tp-app-brand pt-120 pb-120 ">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="app-breand-title text-center mb-60">
                <span className="text-black fs-9">
                Top-Rated Agency for Leading Brands
                </span>
              </div>
              <div className="tp-bs-brand-slider ">
                <Swiper
                  {...setting}
                  loop={isLoop}
                  className="app-brand-slider-active ab-brand-overlay swiper-container"
                >
                  {brands_data.map((item, i) => (
                    <SwiperSlide key={i} className="tp-app-brand-item">
                      <img src={item.img} alt="theme-pure" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brand;
