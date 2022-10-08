import React, { useEffect, useRef } from "react";
import { Image } from "react-bootstrap";
import WalletFoldPhone from "../assets/images/wallet-fold-phone.png";
import gsap from "gsap";
import "./ImageContainer.css";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const ImageContainer = () => {
  const imageRef = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // const tl = gsap.timeline({
    //   defaults: {
    //     duration: 1,
    //     ease: "back.out(1)",
    //   },
    // });

    // gsap.fromTo(
    //   imageRef.current,
    //   {
    //     scrollTrigger: {
    //       trigger: imageRef.current,
    //       start: "top 300px",
    //       // endTrigger: imageRef.current,
    //       end: "top 100px",
    //       markers: true,
    //       scrub: true,
    //       // toggleActions: "restart pause reverse pause",
    //     },
    //   },
    //   {
    //     opacity: 0,
    //     // yPercent: 100,
    //     duration: 2,
    //     ease: "back.out(1)",
    //   },
    //   {
    //     // yPercent: 0,
    //     opacity: 1,
    //   }
    // );
    gsap.fromTo(
      imageRef.current,
      {
        opacity: 0,
        yPercent: 100,
        ease: "power2.easeOut",
      },
      {
        yPercent: 0,
        opacity: 1,
      },
      "+=1"
    );
  });
  return (
    <div className='container-fluid d-flex align-items-center justify-content-center'>
      <div className='w-75 d-flex'>
        <Image
          src={WalletFoldPhone}
          fluid
          width='60%'
          className='intro__image'
          ref={imageRef}
        />
      </div>
    </div>
  );
};

export default ImageContainer;
