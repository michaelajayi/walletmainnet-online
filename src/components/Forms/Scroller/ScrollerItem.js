import React, { useRef, useEffect, useState, useLayoutEffect } from "react";
import { Container, Image } from "react-bootstrap";
import "./ScrollerItem.css";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

const ScrollerItem = ({ data }) => {
  const scrollRef = useRef();

  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    setWidth(scrollRef.current.offsetWidth);
  }, []);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const tl = gsap.timeline({
  //     defaults: {
  //       duration: 1,
  //       ease: "power2.out",
  //     },
  //   });

  //   tl.to(scrollRef.current, {
  //     duration: 10,
  //     x: -width,
  //     ease: "none",
  //     modifiers: {
  //       x: gsap.utils.unitize((x) => -500),
  //     },
  //     repeat: -1,
  //   });
  // }, []);

  return (
    <div
      className='d-flex align-items-center justify-content-center py-0 py-2 gap-3 scroller__item__wrapper px-3'
      ref={scrollRef}
    >
      <Image src={data.image} fluid style={{ width: "23px" }} />
      <p className='wallet__name py-0 my-0'>{data.name}</p>
      <div className='d-flex gap-1'>
        <p className='my-0 text-success up__value'>{data.high_24h}</p>
        <p className='my-0 text-danger down__value'>{`${data.low_24h.toFixed(
          2
        )} (${data.market_cap_change_percentage_24h.toFixed(2)}%)`}</p>
      </div>
    </div>
  );
};

export default ScrollerItem;
