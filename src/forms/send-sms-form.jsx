import React from "react";

const SendSmsForm = () => {
  return (
    <>
      <form action="https://formspree.io/f/xvgpdwyr" method="POST">
        <div className="row">
          <div className="col-lg-6">
            <div className="input-item">
              <span>
                <i className="fas fa-user"></i>
              </span>
              <input type="text" name="fullName" placeholder="Full name" required />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="input-item">
              <span>
                <i className="fas fa-envelope-open"></i>
              </span>
              <input type="email" name="email" placeholder="Email address" required />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="input-item">
              <span>
                <i className="fas fa-phone"></i>
              </span>
              <input type="tel" name="phone" placeholder="Phone" required />
            </div>
          </div>
          
          <div className="col-12">
            <div className="input-item-textarea">
              <span>
                <i className="fas fa-pen"></i>
              </span>
              <textarea name="message" placeholder="Message" required></textarea>
            </div>
            <button type="submit" className="it-cta-form-submit border-0">
              Submit Request
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SendSmsForm;
