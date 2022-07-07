import React from "react";
import { Button, Form } from "react-bootstrap";
import InputText from "../atoms/inputText";

function formLogin() {
  return (
    <div className="col-sm-6 pt-15">
      <div className="px-5 py-5">
        <h4 clasName="welcome-text">Welcome</h4>
        <p clasName="desc-login">Log in into your exiting account</p>
        <hr className="div-login" />
        <Form>
          <InputText label="E-Mail" type="email" placeholder="Enter email" />

          <InputText label="Password" type="password" placeholder="Password" />

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="I agree to terms & conditions" />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button type="submit" size="md" className="btn-login">
              Log in
            </Button>
            <small className="forgot-text">Forgot Password ?</small>
          </div>

          <p>Don’t have an account? Sign Up</p>
        </Form>
      </div>
    </div>
  );
}

export default formLogin;
