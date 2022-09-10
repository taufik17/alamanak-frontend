/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import axios from "axios";
import { Button, Form, Alert } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import FormTitle from "../atoms/formTitle";
import * as Type from "../../redux/auth/type";
import { Navigate } from "react-router-dom";

function FormLogin(props) {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  
  const [isError, setIsError] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (auth?.token != null) {
      window.location.href = "/";
    }
  }, []);

  const handleLogin = () => {
    setIsLoading(true);
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        setIsError(false);
        dispatch({
          type: Type.SET_AUTH,
          payload: {
            token: res?.data?.token,
            user: res?.data?.user,
          },
        });
        localStorage.setItem("token_almnk", res?.data?.token);
        window.location.href = "/";
      })
      .catch((err) => {
        setIsError(true);
        setErrorMsg(err?.response?.data?.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="col-sm-6 pt-15">
      <div className="px-5 py-5">
        <FormTitle title="Welcome" desc="Log in into your exiting account" />
        <hr className="div-login" />
        {isError ? <Alert variant="danger">{errorMsg}</Alert> : null}

        <Form onSubmit={(e) => e.preventDefault()}>
          <Form.Group className="mb-3">
            <Form.Label>E-Mail</Form.Label>
            <Form.Control
              type="email"
              size="lg"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              size="lg"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="I agree to terms & conditions" />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button
              type="submit"
              size="md"
              className="btn-login"
              disabled={isLoading}
              onClick={handleLogin}
            >
              {isLoading ? "Loading..." : "Log in"}
            </Button>
            <small className="forgot-text">Forgot Password ?</small>
          </div>

          <p>Don’t have an account? Sign Up</p>
        </Form>
      </div>
    </div>
  );
}

export default FormLogin;
