import { React } from "react";
import { Form } from "react-bootstrap";

const inputText = (props) => {
  const { label, type, placeholder } = props;
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>{label}</Form.Label>
        <Form.Control type={type} size="lg" placeholder={placeholder} />
      </Form.Group>
    </>
  );
};

export default inputText;
