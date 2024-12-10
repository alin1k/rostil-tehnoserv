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

  function handleAdaugare(nume, telefon, email, setNume, setTelefon, setEmail) {
    if (nume === "" || telefon === "" || email === "")
      alert("spatii necompletate")

    else {
      const newClient = {
        cNume: nume,
        cEmail: email,
        cTelefon: telefon
      };

      setClient(c => [...c, newClient])
    }

    setNume("");
    setTelefon("");
    setEmail("");
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
    handleEmail
  }
}