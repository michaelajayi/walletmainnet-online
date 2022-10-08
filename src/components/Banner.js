import React, { useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import gsap from "gsap";

const Banner = () => {
  const bannerRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "back.out(2)",
      },
    });

    tl.fromTo(
      ".header__text",
      {
        opacity: 0,
        xPercent: -100,
        stagger: 0.1,
      },
      {
        opacity: 1,
        xPercent: 0,
      }
    )
      .fromTo(
        buttonRef.current,
        {
          opacity: 0,
          yPercent: 100,
        },
        { opacity: 1, yPercent: 0 },
        "-=.5"
      )
      .fromTo(
        ".sync__button",
        {
          opacity: 0,
          yPercent: 100,
        },
        { opacity: 1, yPercent: 0 },
        "-=.5"
      );
  }, []);
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className='w-75 w-sm-100'>
        <div
          className='my-5 d-flex flex-column flex-md-row justify-content-between align-items-center banner__section w-75'
          style={{ gap: "1rem" }} //
        >
          <h1 className='fw-bold fs-700 w-50 header__text' ref={bannerRef}>
            The world's most popular crypto wallets
          </h1>
          <div className='d-flex flex-column align-items-start'>
            <p className='fs-5 text-lightblue header__text'>
              Over 76 million wallets created to buy, sell, and earn crypto.
            </p>
            <Button className='bg-brightblue shadow-none border-0 px-4 py-3 fw-bold sync__button'>
              <a href='/access-wc' className='text-white' ref={buttonRef}>
                Verify Mainnet Connection
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
