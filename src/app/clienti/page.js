"use client"

import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useEffect} from "react";

function Clienti()
{
    const [client,setClient] = useState([])
    const [nume,SetNume] = useState("")
    const [telefon,setTelefon] = useState("")
    const [email,setEmail] = useState("")

    function handleClient(event){
       SetNume(event.target.value)
    };

    function handleTelefon(event){
       setTelefon(event.target.value)
    };

    function handleEmail(event){
        setEmail(event.target.value)
    };

    function handleAdaugare(){
        if(nume === "" || telefon === "" || email === "")
         alert("spatii necompletate")
        
      else {
      const newClient = {Cnume : nume,
                         Cemail : email,
                         Ctelefon : telefon};

        setClient(c => [...c , newClient]) 
      }
              
            
    SetNume("");
    setTelefon("");
    setEmail("");
   }; 

   function removeFurnizor(index)
   {
 setClient(client.filter((componenta ,i) => index !== i ))
   }

   useEffect(() => {
    const storedClienti = localStorage.getItem("clienti");
    if (storedClienti) {
        setClient(JSON.parse(storedClienti));
    }
}, []);


useEffect(() =>{
    localStorage.setItem("clienti" , JSON.stringify(client));
}, [client]);
    

    return(
        <>
        <div className="flex justify-center items-center mb-9  ">
        <div className="border-2 border-black p-4 w-[450px] mt-4 p-4 shadow-2xl ">
         
          <p className="text-center text-4xl mt-2"> Adaugare Client </p>
           
           <div className="px-5 py-8 flex flex-col w-[320px]">
              <p>Nume Client : </p>
           <input  placeholder="Adaugati numele clientului ..." value={nume} onChange={handleClient}  className=" mt-2 mb-8 border-b border-gray-500 focus:outline-none  "></input>
              <p>Telefon Client</p>
           <input  placeholder="Adaugati telefonul clientului ..." value={telefon} onChange={handleTelefon}  className=" mt-2 mb-8 border-b border-gray-500 focus:outline-none" ></input>
           
           <p>Email Client</p>
           <input placeholder="Adaugati email-ul clientului ..." value={email} onChange={handleEmail}  className=" mt-2 border-b border-gray-500 focus:outline-none" ></input>
           </div>

          <button onClick={handleAdaugare}  className="w-full bg-black py-2 rounded-2xl text-white transform transition-all duration-2gi00 active:scale-95 ease-out  ">Adaugare in lista</button>
          </div>
          </div>

          <div>

          <ul>
            {client.map((clienti,index) =>
            <li key={index} className="flex gap-36 mt-5 text- border-black border-2 p-3 w-full">
            <p>{clienti.Cnume}</p>
            <p>{clienti.Ctelefon}</p>
            <p>{clienti.Cemail}</p>
            <RiDeleteBin6Line className="w-full" onClick={() => removeFurnizor(index)}></RiDeleteBin6Line>

            </li>)}

          </ul>

          </div>
     
      </>
    );
}
export default Clienti;