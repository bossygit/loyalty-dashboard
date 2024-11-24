import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Merci, ${formData.name}! Vous êtes inscrit avec succès.`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>S'inscrire au Programme de Fidélité</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
        <div style={{ marginBottom: "10px" }}>
          <label>Nom : </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
            required
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Email : </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
            required
          />
        </div>
        <button type="submit" style={{ padding: "10px 20px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px" }}>
          S'inscrire
        </button>
      </form>
    </div>
  );
};

export default Register;
