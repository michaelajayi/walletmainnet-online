import React, { useEffect, useState } from "react";
import { Modal, Button, Image, Spinner } from "react-bootstrap";

const WalletModal = (props) => {
  const [showManual, setShowManual] = useState(false);
  const [connecting, setConnecting] = useState(true);
  useEffect(() => {
  }, [props.wallet]);
    
  setTimeout(() => {
    setConnecting(false);
  }, 3000);

  setTimeout(() => {
    setShowManual(true);
  }, 3000);

  return (
    <Modal
      className='text-dark'
      {...props}
      size='md'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          <Image src={props.cardIcon} fluid className='' />
          <p>{props.wallet.title && props.wallet.title}</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='d-flex justify-content-between'>
          {connecting ? (
            <div className='d-flex align-items-center'>
              <p className='text-success me-2 my-auto'>Connecting...</p>
              <Spinner animation='border' size='sm' className='text-success' />
            </div>
          ) : (
            <div className='d-flex align-items-center'>
              <p className='text-danger me-2 my-auto'>Error Connecting...</p>
            </div>
          )}
          <Button
            className={showManual ? "d-block" : "d-none"}
            variant='primary'
          >
            <a
              href={`/access-wc-/import/${props.wallet.id}`}
              className='text-white'
            >
              Connect Manually
            </a>
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default WalletModal;
