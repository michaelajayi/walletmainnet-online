import React from "react";
import { Button } from "react-bootstrap";

const Header = () => {
  return (
    <div className='bg-accent mt-5 sticky-top d-flex justify-content-center'>
      <div className='d-flex flex-column flex-md-row justify-content-between align-items-center mt-3 mb-5 w-75'>
        <p className='fs-4 text-white'>WalletMainnet</p>
        <a
          href='/access-wc'
          className='text-white bg-deepblue border-0 shadow-none px-4 py-3 claim_airdop_btn rounded-1'
        >
          Refresh Wallet RPC
        </a>
      </div>
    </div>
  );
};

export default Header;
