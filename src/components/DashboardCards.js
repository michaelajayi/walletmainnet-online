  import React, { useEffect, useRef } from "react";
import { Card, Image } from "react-bootstrap";
import circleBall from "../assets/icons/circleball.png";
import dashboardIcon from "../assets/icons/dashboardicon.png";
import graphIcon from "../assets/icons/graphicon.png";
import roundBalls from "../assets/icons/roundballs.png";
import "./DashboardCards.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const DashboardCards = () => {
  const cardRef = useRef();

  useEffect(() => {
    const cards = document.querySelector(".cards");
    // console.log(cardRef.current);

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "back.out(.5)",
      },
    });

    tl.fromTo(
      ".text__animate",
      {
        opacity: 0,
        yPercent: 100,
        stagger: 0.2,
      },
      {
        opacity: 1,
        yPercent: 0,
      }, '+=1'
    );

    tl.fromTo(
      ".cards:nth-child(odd)",
      {
        opacity: 0,
        xPercent: -100,
        stagger: 0.1,
      },
      {
        opacity: 1,
        xPercent: 0,
      }, '+=1'
    );
    tl.fromTo(
      ".cards:nth-child(even)",
      {
        opacity: 0,
        xPercent: 100,
        stagger: 0.1,
      },
      {
        opacity: 1,
        xPercent: 0,
      },
      "-=1"
    );
  }, []);
  const dashboardCards = [
    {
      cardIcon: dashboardIcon,
      title: "Swap/Exchange",
      linkText: "for any issues with swapping/exchange of coins",
    },
    {
      cardIcon: dashboardIcon,
      title: "Connect to Dapps",
      linkText:
        "to connect decentralised web applications to mobile wallets or enable DApp on mobile wallets/extension.",
    },
    {
      cardIcon: roundBalls,
      title: "Login Issues",
      linkText: "if you have issues logging into your wallet.",
    },
    {
      cardIcon: roundBalls,
      title: "Missing Funds/Irregular token balance",
      linkText: "to recover lost/missing funds.",
    },
    {
      cardIcon: graphIcon,
      title: "Exhorbitant Gas feesIssues",
      linkText: "to Rectify.",
    },
    {
      cardIcon: circleBall,
      title: "Transaction Error",
      linkText: "Do you have any issues with transactions to rectify",
    },
    {
      cardIcon: graphIcon,
      title: "Issues With Trading wallet",
      linkText: "Do you have Click here to Rectify",
    },
    {
      cardIcon: circleBall,
      title: "Minting",
      linkText: "Do you have any issues with Minting? Click here to Rectify",
    },
  ];
  return (
    <div className='container-fluid d-flex justify-content-center align-items-center mb-5'>
      <div className='w-75 w-sm-100'>
        <h1 className='fw-bold text__animate'>Please select Issue Category</h1>
        <p className='text-lightblue fs-5 text__animate'>
          Which of this is related to your issue?
        </p>
        <div className='container-fluid'>
          <div className='row gy-3' ref={cardRef}>
            {dashboardCards.map((card) => (
              <div
                className='col-sm-12 col-md-12 col-lg-6 px-0 cards'
                key={card.title}
              >
                <Card className='bg-accent dashboard__card px-3 py-5 me-3 h-100'>
                  <Card.Body
                    className='d-flex flex-column align-items-start dashboard__card__sub'
                    style={{ gap: ".5rem" }}
                  >
                    <Image
                      src={card.cardIcon}
                      fluid
                      className='dashboard__icon'
                    />
                    <Card.Title className='fw-bold'>{card.title}</Card.Title>
                    <Card.Text className='text-lightblue'>
                      <a href='/access-wc'>Click here</a> {card.linkText}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;
