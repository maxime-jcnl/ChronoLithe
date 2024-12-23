import React, { useState } from "react";
import api from "../api";
import "./Style.css";
import Navbar from "./Navbar";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/login", { email, password });
      console.log("Connexion réussie :", response.data);
      alert(`Bienvenue ${response.data.user.firstName} ${response.data.user.lastName}`);
    } catch (error) {
      console.error("Erreur lors de la connexion :", error.response.data);
      alert("Connexion échouée. Vérifiez vos identifiants.");
    }
  };

  return (
    <div>
      <Navbar hideAuthIcon={true} />
    <div className="auth-page">
     
      <h1>Se connecter</h1>
      <form onSubmit={handleLogin} style={{ display: "inline-block", textAlign: "left" }}>
        <div>
          <label>Email :</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Mot de passe :</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Se connecter</button>
      </form>
    </div>
     </div>
  );
};

export default LoginPage;
