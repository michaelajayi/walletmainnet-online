import React from "react";
import { Card, Button } from "react-bootstrap";
import { BiRightArrowAlt } from "react-icons/bi";

const ReadyToStart = () => {
  return (
    <div className='container-fluid d-flex justify-content-center align-items-center mb-5'>
      <div className='w-75'>
        <div>
          <Card
            className='bg-brightblue px-3 py-5 me-3 h-100'
            style={{ borderRadius: "1rem" }}
          >
            <Card.Body
              className='d-flex flex-column align-items-center justify-content-center gap-3'
              // style={{ gap: "1rem", height: "18vh" }}
            >
              <h5 className='text-uppercase text-lightblue'>Ready to start</h5>
              <h2 className='fw-bold text-center'>Synchronize your Token</h2>
              <Button
                className='bg-blueshade get__started__btn border-0 px-5 py-3'
                style={{ borderRadius: ".5rem" }}
              >
                <a href='/access-wc' className='text-white'>
                  Get Started
                  <BiRightArrowAlt size={30} />
                </a>
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ReadyToStart;
