import React from "react";

const Footer = () => {
  return (
    <div className='container-fluid d-flex justify-content-center bg-deepblue'>
      <div className='w-75'>
        <div
          className='footer__section d-flex align-items-center'
          style={{ gap: "2rem" }}
        >
          <a href='/access-wc' className='text-lightblue'>
            Terms and Condition
          </a>
          <a href='/access-wc' className='text-lightblue'>
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
