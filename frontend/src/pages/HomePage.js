import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Auth from "../components/Auth/Auth";
import { useAuthContext } from "../context/AuthProvider";

const HomePage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthContext();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/chat");
    }
  }, [isAuthenticated, navigate]);
  return (
    <Container>
      <Auth />
    </Container>
  );
};

export default HomePage;
