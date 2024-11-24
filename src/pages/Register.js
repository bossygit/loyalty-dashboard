import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    consent: false,
    acceptsEmails: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Merci de votre inscription !");
  };

  return (
    <div className="grid lg:grid-cols-2 lg:h-full">
      {/* Left Section */}
      <div className="flex justify-center items-center py-6 px-4 lg:py-6 sm:px-0 bg-gray-50">
        <div className="w-full space-y-4 md:space-y-6 max-w-lg xl:max-w-lg p-6">
          <h2 className="text-xl font-bold text-gray-900">Devenez membre</h2>
          <form
            className="space-y-4 md:space-y-6"
            onSubmit={handleSubmit}
          >
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block mb-1 text-sm font-medium text-gray-900"
              >
                Nom&nbsp;*
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  placeholder="Votre nom"
                  required
                />
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-medium text-gray-900"
              >
                Adresse e-mail&nbsp;*
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  placeholder="Votre e-mail"
                  required
                />
              </div>
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                name="consent"
                id="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="w-4 h-4 bg-gray-100 border border-gray-300 rounded focus:ring-primary"
              />
              <label
                htmlFor="consent"
                className="ml-2 text-sm text-gray-900"
              >
                En vous inscrivant, vous acceptez nos{" "}
                <a
                  href="/terms"
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  Conditions d'utilisation
                </a>{" "}
                et{" "}
                <a
                  href="/privacy"
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  Politique de confidentialité
                </a>
                .
              </label>
            </div>

            {/* Accept Emails Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                name="acceptsEmails"
                id="acceptsEmails"
                checked={formData.acceptsEmails}
                onChange={handleChange}
                className="w-4 h-4 bg-gray-100 border border-gray-300 rounded focus:ring-primary"
              />
              <label
                htmlFor="acceptsEmails"
                className="ml-2 text-sm text-gray-900"
              >
                Envoyez-moi des e-mails concernant les mises à jour.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary text-white py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-primary-dark focus:ring-4 focus:outline-none focus:ring-primary-light"
            >
              Créer un compte
            </button>
          </form>
          <p className="text-sm font-light text-gray-500">
            Vous avez déjà un compte ?{" "}
            <a
              href="/login"
              className="font-medium text-primary hover:underline"
            >
              Connectez-vous ici
            </a>
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex justify-center items-center py-6 px-4 bg-primary text-white lg:py-0 sm:px-0">
        <div className="max-w-md xl:max-w-xl p-6 text-center">
          <h1 className="mb-4 text-3xl font-extrabold">
            Commencez à gagner.
          </h1>
          <p className="mb-4 font-light">
            Gagnez des points, échangez des récompenses et profitez
            d'offres exclusives avec notre application de fidélité.
            Inscrivez-vous maintenant pour des avantages inégalés !
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
