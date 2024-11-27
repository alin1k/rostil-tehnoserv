"use client";

import { useState } from "react";
import { useEffect} from "react";
function Furnizori(){

    return(
        <>
        <div className="flex justify-center items-center   ">
          <div className="border-2 border-black p-4 w-[450px] mt-4 p-4 shadow-2xl ">
           
            <p className="text-center text-4xl mt-2"> Adaugare Furnizor </p>
             
             <div className="px-5 py-8 flex flex-col w-[320px]">
                <p>Nume Furnizor : </p>
             <input placeholder="Adaugati numele furnizorului ..." className=" mt-2 mb-8 border-b border-gray-500 focus:outline-none  "></input>
                <p>Adresa Furnizor</p>
             <input placeholder="Adaugati adresa furnizorului ..." className=" mt-2 mb-8 border-b border-gray-500 focus:outline-none"></input>
             
             <p>Website Furnizor</p>
             <input placeholder="Adaugati website-ul furnizorului" className=" mt-2 border-b border-gray-500 focus:outline-none"></input>
             </div>

            <button className="w-full bg-black py-2 rounded-2xl text-white transform transition-all duration-2gi00 active:scale-95 ease-out  ">Adaugare in lista</button>
            </div>
        </div>
      
        </>
    );
}

export default Furnizori;