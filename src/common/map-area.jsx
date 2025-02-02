import React from "react";

const MapArea = () => {
  return (
    <>
      <div className="tp-contact-map p-relative">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2951.9344654424194!2d-71.16342362407332!3d42.27992227120051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37f3b8e6f8ecf%3A0xa67a725e910ce3b3!2sHillcrest%20St%2C%20Boston%2C%20MA%2002132%2C%20USA!5e0!3m2!1sen!2s!4v1738468436618!5m2!1sen!2s"
            style={{ border: "0px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contact-map-img">
          <img src="/assets/img/cta/contact-map-logo.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default MapArea;
