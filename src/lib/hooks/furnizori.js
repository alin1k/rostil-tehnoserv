import { useState, useEffect } from "react";

export const useFurnizor = () => {
  const [furnizor, setFurnizor] = useState([]);

  useEffect(() => {
    const storedFurnizori = localStorage.getItem("furnizori");
    if (storedFurnizori) {
      setFurnizor(JSON.parse(storedFurnizori));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("furnizori", JSON.stringify(furnizor));
  }, [furnizor]);

  function handleAddFurnizor(
    nume,
    adresa,
    email,
    setNume,
    setAdresa,
    setEmail,
    setNumeError,
    setAdresaError,
    setEmailError
  ) {
    let isValid = true;

    setNumeError("");
    setAdresaError("");
    setEmailError("");

    if (!nume) {
      setNumeError("Numele furnizorului este obligatoriu.");
      isValid = false;
    }

    if (!adresa) {
      setAdresaError("Adresa furnizorului este obligatorie.");
      isValid = false;
    }

  
    if (!email) {
      setEmailError("Website-ul furnizorului trebuie să fie valid.");
      isValid = false;
    }

    if (isValid) {
      const newFurnizor = {
        fNume: nume,
        fAdresa: adresa,
        fEmail: email,
      };
      setFurnizor((f) => [...f, newFurnizor]);

  
      setNume("");
      setAdresa("");
      setEmail("");
    }
  }

  return {
    furnizor,
    setFurnizor,
    handleAddFurnizor,
  };
};

export const useFurnizorInputs = () => {
  const [nume, setNume] = useState("");
  const [email, setEmail] = useState("");
  const [adresa, setAdresa] = useState("");

  const [numeError, setNumeError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [adresaError, setAdresaError] = useState("");

  function handleNume(event) {
    setNume(event.target.value);
  }

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handleAdresa(event) {
    setAdresa(event.target.value);
  }

  return {
    nume,
    setNume,
    email,
    setEmail,
    adresa,
    setAdresa,
    numeError,
    setNumeError,
    emailError,
    setEmailError,
    adresaError,
    setAdresaError,
    handleNume,
    handleEmail,
    handleAdresa,
  };
};
