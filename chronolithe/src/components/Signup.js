import React, { useState } from "react";
import api from "../api";
import Navbar from "./Navbar";

import "./Style.css";

const SignupPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await api.post("/auth/signup", { firstName, lastName, email, password });
      alert("Compte créé avec succès !");
    } catch (error) {
      console.error("Erreur lors de la création du compte :", error.response.data);
      alert("Échec de la création du compte.");
    }
  };

  return (
    <div>
      <Navbar hideAuthIcon={true} /> 
    <div className="auth-page" style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Créer un compte</h1>
      <form onSubmit={handleSignup} style={{ display: "inline-block", textAlign: "left" }}>
        <div>
          <label>Prénom :</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Nom :</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
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
        <button type="submit">Créer un compte</button>
      </form>
    </div>
    </div>
  );
};

export default SignupPage;
