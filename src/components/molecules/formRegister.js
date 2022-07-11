import React from "react";
import { Button, Form } from "react-bootstrap";
import InputText from "../atoms/inputText";
import FormTitle from "../atoms/formTitle";

function formLogin() {
  return (
    <div className="col-sm-6 pt-15">
      <div className="px-5 py-5">
        <FormTitle
          title="Let’s Get Started !"
          desc="Create new account to access all features"
        />
        <hr className="div-login" />
        <Form>
          <InputText label="Name" type="text" placeholder="Name" />

          <InputText
            label="Email address*"
            type="email"
            placeholder="Enter email address"
          />
          <InputText
            label="Phone Number*"
            type="text"
            placeholder="08xx xxxx xxxx"
          />

          <InputText
            label="Create New Password"
            type="password"
            placeholder="Create New Password"
          />
          <InputText
            label="New Password"
            type="password"
            placeholder="New Password"
          />

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="I agree to terms & conditions" />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button type="submit" size="md" className="btn-login">
              Log in
            </Button>
          </div>

          <p clasName="pt-4">Already have account? Log in Here</p>
        </Form>
      </div>
    </div>
  );
}

export default formLogin;
