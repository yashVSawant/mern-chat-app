import React, { useState } from "react";

import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Row,
  ToggleButton,
} from "react-bootstrap";
import AuthForm from "./AuthForm";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [radioValue, setRadioValue] = useState("1");
  const loginHandler = (user) => {
    console.log(user);
  };
  const signupHandler = (user) => {
    console.log(user);
  };
  return (
    <Container className="p-5">
      <Row>
        <ButtonGroup>
          <ToggleButton
            key="1"
            id="radio-2"
            type="radio"
            variant="outline-primary"
            name="radio"
            value="1"
            checked={radioValue === "1"}
            onClick={() => {
              setIsLogin(true);
              setRadioValue("1");
            }}
          >
            Login
          </ToggleButton>
          <ToggleButton
            key="2"
            id="radio-2"
            type="radio"
            variant="outline-primary"
            name="radio"
            value="2"
            checked={radioValue === "2"}
            onClick={() => {
              setIsLogin(false);
              setRadioValue("2");
            }}
          >
            Signup
          </ToggleButton>
        </ButtonGroup>
      </Row>
      <Row>
        <Col className="p-3">
          {isLogin && <AuthForm auth="login" onSubmitForm={loginHandler} />}
          {!isLogin && <AuthForm auth="signup" onSubmitForm={signupHandler} />}
        </Col>
      </Row>
    </Container>
  );
}

export default Auth;
