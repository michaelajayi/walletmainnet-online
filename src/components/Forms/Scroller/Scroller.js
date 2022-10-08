import React, { useCallback, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./Scroller.css";
import ScrollerItem from "./ScrollerItem";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import axios from "axios";

// import Swiper styles
import "swiper/css";

const Scroller = () => {
  const [cryptoData, setCryptoData] = useState([]);

  const fetchWallets = useCallback(async () => {
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
      );
      setCryptoData(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  }, []);

  useEffect(() => {
    fetchWallets();
  }, [fetchWallets]);

  return (
    <Container
      fluid
      className='scroller__wrapper px-0 d-flex align-items-center justify-content-start'
    >
      <div className='first__scroll d-flex'>
        {cryptoData.map((data) => (
          <ScrollerItem data={data} key={data.name} />
        ))}
      </div>
      <div className='second__scroll d-flex'>
        {cryptoData.map((data) => (
          <ScrollerItem data={data} key={data.name} />
        ))}
      </div>
    </Container>
  );
};

export default Scroller;
