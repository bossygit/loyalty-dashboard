const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connecter à MongoDB
mongoose.connect("mongodb://localhost:27017/loyaltyApp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Modèle utilisateur
const User = mongoose.model("User", {
  name: String,
  email: String,
  password: String,
});

// Générer un mot de passe aléatoire
const generatePassword = () => {
  return Math.random().toString(36).slice(-8);
};

// Route pour l'inscription
app.post("/register", async (req, res) => {
  const { name, email } = req.body;

  // Vérifier si l'utilisateur existe déjà
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "Utilisateur déjà inscrit." });
  }

  // Générer un mot de passe et enregistrer l'utilisateur
  const password = generatePassword();
  const newUser = new User({ name, email, password });
  await newUser.save();

  // Envoyer l'email avec le mot de passe
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "bienvenukitutu@gmail.com",
      pass: "T$sBcPn4%ggg#Gqe", // Utilisez des secrets ou des variables d'environnement
    },
  });

  const mailOptions = {
    from: "bienvenukitutu@gmail.com",
    to: email,
    subject: "Bienvenue à notre programme de fidélité",
    text: `Bonjour ${name},\n\nVotre inscription a été réalisée avec succès. Votre mot de passe est : ${password}\n\nMerci de votre confiance !`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ message: "Erreur lors de l'envoi de l'email." });
    }
    res.status(200).json({ message: "Utilisateur enregistré et email envoyé." });
  });
});

app.listen(5000, () => {
  console.log("Serveur démarré sur le port 5000");
});
