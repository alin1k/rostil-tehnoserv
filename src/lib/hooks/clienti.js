import { useState, useEffect } from "react";

export const useClient = ()=>{
  const [client, setClient] = useState([])

  useEffect(() => {
    const storedClienti = localStorage.getItem("clienti");
    if (storedClienti) {
      setClient(JSON.parse(storedClienti));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("clienti", JSON.stringify(client));
  }, [client]);

  function handleAdaugare(nume, telefon, email, setNume, setTelefon, setEmail,setNumeError,setEmailError,setTelefonError) {
    
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let valid = true;


    let isValid = true;

    // Reset error states
    setNumeError("");
    setTelefonError("");
    setEmailError("");

    // Validare pentru nume
    if (nume === "") {
      setNumeError("Numele este obligatoriu.");
      isValid = false;
    }

    // Validare pentru telefon
    if (telefon === "" ) {
      setTelefonError("Telefonul este invalid");
      isValid = false;
    }

    // Validare pentru email
    if (!regex.test(email) || email ==="") {
      setEmailError("Emailul este invalid.");
      isValid = false;
    }

    if (isValid) {
      const newClient = {
        cNume: nume,
        cEmail: email,
        cTelefon: telefon
      };

      setClient(c => [...c, newClient])

    setNume("");
    setTelefon("");
    setEmail("");
    }

  
  };

  function removeClient(index) {
    setClient(client.filter((componenta, i) => index !== i))
  }

  return {
    client,
    setClient,
    handleAdaugare,
    removeClient
  }

}

export const useClientInputs = ()=>{
  const [nume, setNume] = useState("")
  const [telefon, setTelefon] = useState("")
  const [email, setEmail] = useState("")
  const [numeError, setNumeError] = useState("");
  const [telefonError, setTelefonError] = useState("");
  const [emailError, setEmailError] = useState("");
  

  function handleClient(event) {
    setNume(event.target.value)
  };

  function handleTelefon(event) {
    setTelefon(event.target.value)
  };

  function handleEmail(event) {
    setEmail(event.target.value)
  };

  return {
    nume, setNume,
    telefon, setTelefon,
    email, setEmail,
    handleClient,
    handleTelefon,
    handleEmail,
    numeError, setNumeError,
    telefonError, setTelefonError,
    emailError, setEmailError,
  }
}