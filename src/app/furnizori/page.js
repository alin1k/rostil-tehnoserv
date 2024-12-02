"use client";

import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";
import { useEffect} from "react";


function Furnizori(){

        const [furnizor,setFurnizor] = useState([]);
        const [nume,setNume] = useState("");
        const [email,setEmail] = useState("");
        const [adresa,setAdresa] = useState("");


    function handleNume(event){
     setNume(event.target.value)
    }

    function handleEmail(event){
        setEmail(event.target.value)
    }

    function handleAdresa(event){
        setAdresa(event.target.value)
    }

    function handleAddFurnizor(){

        if(nume ==="" || email === "" || adresa === "")
            alert("spatii necompletate")
        else{

      const newFurnizor = {fNume : nume,
                           fEmail : email,
                           fAdresa : adresa};
                    
      setFurnizor(f => [...f, newFurnizor])

      setNume("");
      setAdresa("");
      setEmail("")
        }
    }

    function removeFurnizor(index){
        setFurnizor(furnizor.filter((componenta , i) => index!==i));
    }

    useEffect(() => {
        const storedFurnizori = localStorage.getItem("furnizori");
        if (storedFurnizori) {
            setFurnizor(JSON.parse(storedFurnizori));
        }
    }, []);
    

    useEffect(() =>{
        localStorage.setItem("furnizori" , JSON.stringify(furnizor));
    }, [furnizor]);

    return(
        <>
        <div className="flex justify-center items-center mb-9  ">
          <div className="border-2 border-black p-4 w-[450px] mt-4 p-4 shadow-2xl ">
           
            <p className="text-center text-4xl mt-2"> Adaugare Furnizor </p>
             
             <div className="px-5 py-8 flex flex-col w-[320px]">
                <p>Nume Furnizor : </p>
             <input onChange={handleNume} placeholder="Adaugati numele furnizorului ..." value={nume} className=" mt-2 mb-8 border-b border-gray-500 focus:outline-none  "></input>
                <p>Adresa Furnizor</p>
             <input onChange={handleAdresa} placeholder="Adaugati adresa furnizorului ..." className=" mt-2 mb-8 border-b border-gray-500 focus:outline-none" value={adresa}></input>
             
             <p>Website Furnizor</p>
             <input onChange={handleEmail} placeholder="Adaugati website-ul furnizorului ... " className=" mt-2 border-b border-gray-500 focus:outline-none" value={email} ></input>
             </div>

            <button onClick={handleAddFurnizor} className="w-full bg-black py-2 rounded-2xl text-white transform transition-all duration-2gi00 active:scale-95 ease-out  ">Adaugare in lista</button>
            </div>
        </div>
       
       <div className="flex justify-center items-center">

        <ul>
            {furnizor.map((furnizor,index) => 
            <li key={index} className="flex gap-36 mt-5 text- border-black border-2 p-3 w-full">
                
                <p className="">{furnizor.fNume}</p> 
                <p className="">{furnizor.fAdresa}</p> 
                <p className="">{furnizor.fEmail}</p>
                <RiDeleteBin6Line className="w-full" onClick={() => removeFurnizor(index)}></RiDeleteBin6Line>
                
                



            </li>)}
        </ul>
       </div>
        </>
    );
}

export default Furnizori;