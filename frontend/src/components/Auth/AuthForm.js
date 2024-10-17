import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";

const AuthForm = (props) => {
  const isLogin = props.auth === "login";
  const userObj = isLogin
    ? { email: "", password: "" }
    : { email: "", name: "", password: "" };
  const [user, setUser] = useState(userObj);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (
      user.password !== "" &&
      user.email !== "" &&
      (isLogin || user.name !== "")
    ) {
      props.onSubmitForm(user);
      setUser(userObj);
    } else {
      console.log("error");
    }
  };

  return (
    <section
      style={{
        width: "100%",
        height: "60vh",
        padding: "5px",
        margin: "5px",
        display: "flex",
        justifyContent: "center",
        backgroundImage: "url('favicon.ico')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Form
        style={{ width: "40%", fontWeight: "bold" }}
        onSubmit={submitFormHandler}
      >
        {!isLogin && (
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label className="fs-1">User Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter name"
              value={user.name}
              onChange={changeHandler}
            />
          </Form.Group>
        )}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fs-1">Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={user.email}
            onChange={changeHandler}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fs-1">Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={changeHandler}
          />
        </Form.Group>
        <Col sm={{ span: 10, offset: 5 }}>
          <Button variant="warning" type="submit">
            Submit
          </Button>
        </Col>
      </Form>
    </section>
  );
};

export default AuthForm;
