import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { AuthContext } from "../context/AuthContext";

export default function LoginPage() {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const login = auth?.login ?? (() => {});

  const handleSuccess = (userObj) => {
    
    login(userObj);
   
    navigate("/");
  };

  return (
    <main>
      <h2>Se connecter</h2>
      <LoginForm onSuccess={handleSuccess} />
    </main>
  );
}
