import { useEffect, useState } from "react";

export const useOferte = ()=>{
  const [oferta , setOferta] = useState([]);

  useEffect(() =>{
    const StoredOferte = localStorage.getItem("oferte");
    if(StoredOferte){
      setOferta(JSON.parse(StoredOferte));
    }
  }, []);

  useEffect(() =>{
    localStorage.setItem("oferte",JSON.stringify(oferta))
  }, [oferta]);
  
  function handleAdaugareOferta(numeOferta, setNumeOferta, numeClient)
  {
    if(numeOferta!=="" && numeClient !== ""){
    const newOferta = {
      nume : numeOferta,
      numeClient : numeClient
    };

    setOferta(o => [...o,newOferta]);
    setNumeOferta("")
    }
  }

  function removeOferta(index){
    setOferta(oferta.filter((n,i) => index !== i ))
  }

  return {
    oferta, setOferta,
    handleAdaugareOferta,
    removeOferta,
  }
}

export const useOferteInputs = ()=>{
  const [numeOferta,setNumeOferta] = useState("");
  const [numeClient,setNumeClient] = useState("");

  function handleNumeOferta(event){
    setNumeOferta(event.target.value);
  }

  function handleNumeClient(event){
    setNumeClient(event.target.value);
  }

  return{
    numeOferta, setNumeOferta,
    numeClient, setNumeClient,
    handleNumeClient,
    handleNumeOferta,
  }
}