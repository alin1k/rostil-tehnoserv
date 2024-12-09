import { useState, useEffect } from "react";

export const useFurnizor = ()=>{
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

  function handleAddFurnizor(nume, adresa, email, setNume, setAdresa, setEmail) {
    
      const newFurnizor = {
          fNume: nume,
          fEmail: email,
          fAdresa: adresa,
      };
      setFurnizor((f) => [...f, newFurnizor]);

      setNume("");
      setAdresa("");
      setEmail("");
    
  }

  function removeFurnizor(index) {
    setFurnizor(furnizor.filter((_, i) => index !== i));
  }

  return {
    furnizor,
    setFurnizor,
    handleAddFurnizor,
    removeFurnizor
  }
}

export const useFurnizorInputs = ()=>{
  const [nume, setNume] = useState("");
  const [email, setEmail] = useState("");
  const [adresa, setAdresa] = useState("");

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
    nume, setNume,
    email, setEmail,
    adresa, setAdresa,
    handleNume,
    handleEmail,
    handleAdresa
  }
}