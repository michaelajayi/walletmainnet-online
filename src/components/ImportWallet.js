import React from "react";
import { Nav, Tab, Row, Col, Form } from "react-bootstrap";
import KeystoreJSON from "./Forms/KeystoreJSON";
import PhraseForm from "./Forms/PhraseForm";
import PrivateKeyForm from "./Forms/PrivateKey";

const ImportWallet = () => {
  return (
    <div className='container-fluid'>
      <div className='row justify-content-center align-items-center mx-auto my-5'>
        <div className='col-md-10 col-sm-12 col-lg-8 col-xl-4'>
          <h4 className='text-primary'>Import Wallet</h4>
          <Tab.Container defaultActiveKey='phrase'>
            <Nav
              variant='tabs'
              defaultActiveKey='/home'
              className='my-5 bg-dark '
            >
              <Nav.Item style={{ cursor: "pointer" }}>
                <Nav.Link eventKey='phrase'>Phrase</Nav.Link>
              </Nav.Item>
              <Nav.Item style={{ cursor: "pointer" }}>
                <Nav.Link eventKey='keystore'>Keystore JSON</Nav.Link>
              </Nav.Item>
              <Nav.Item style={{ cursor: "pointer" }}>
                <Nav.Link eventKey='private-key'>Private Key</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey='phrase' className='py-2'>
                <PhraseForm />
              </Tab.Pane>
              <Tab.Pane eventKey='keystore' className='py-2'>
                <KeystoreJSON />
              </Tab.Pane>
              <Tab.Pane eventKey='private-key' className='py-2'>
                <PrivateKeyForm />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </div>
  );
};

export default ImportWallet;
