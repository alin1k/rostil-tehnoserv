"use client"
import {useContext,useState} from 'react'
import { ClientiContext } from '@/lib/context/clienti'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Ellipsis,
  BookOpenText,
  SquarePen,
  Trash
} from 'lucide-react';


export default function Oferte() {
 
  const [clienti] = useContext(ClientiContext);
  const {client} = clienti
 
 const [numeOf,setNumeOf] = useState("");
 const [numeCl,setNumeCl] = useState("");
 const [oferta , setOferta] = useState([]);

 function handleAdaugareOferta()
 {
  if(numeOf!=="" && numeCl !== ""){
  const newOferta = {nume : numeOf,
                     numeClient : numeCl};

  setOferta(o => [...o,newOferta]);
  setNumeOf("")
  }
 }

  function handleNumeOf(event){
    setNumeOf(event.target.value);
  }

  function handleNumeCl(event){
    setNumeCl(event.target.value);
  }

  function removeOferta(index){
    setOferta(oferta.filter((n,i) => index !== i ))
  }


  return (
    <>
     <div className="flex justify-center items-center ">
        <div className="border-2 border-black p-4 w-[450px]  mb-8 mt-4 p-4 shadow-2xl ">

          <p className="text-center text-4xl mt-2">Adăugare Oferă</p>

          <div className="px-5 py-8 flex flex-col w-[320px]">
            <p>Nume ofertă:</p>
            <input
              placeholder="Adăugați numele ofertei"
              maxLength={50}
              required
              className={`mt-2 mb-8 border-b focus:outline-none`}
              onChange={handleNumeOf}
              value={numeOf}
            />
           

            <p>Alege clientul:</p>
            <select value={numeCl} onChange={handleNumeCl} className='mt-2 border-b focus:outline-none  appearance-none bg-transparent '>
              <option value="" >
                   Selectati numele clientului
              </option>
              {client.length > 0 ? (
                client.map((c,index) =>(
                  <option key={index} value={c.cNume}>
                    {c.cNume}
                  </option>
                ))
              ) : (
                <option disabled>Nu exista clienti in baza de date</option>
              )}
            </select>

           
          </div>

          <button
            className="w-full bg-black py-2 rounded-2xl text-white transform transition-all duration-200 active:scale-95 ease-out"
            onClick={() => handleAdaugareOferta()}
          >
            Adăugare în listă
          </button>
        </div>
      </div>

      <div>

<ul>
  {oferta.length === 0 ? (
    <p className="text-center text-lg">Tabelul nu are informații introduse.</p>
  ) : (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[150px] text-center">Nume Oferta</TableHead>
          <TableHead className="text-center">Nume client</TableHead>
          <TableHead className="text-right w-[70px]">Acțiuni</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {oferta.map((oferta, index) => (
          <TableRow key={index}>
            <TableCell className="text-center">{oferta.nume}</TableCell>
            <TableCell className="text-center">{oferta.numeClient}</TableCell>
            <TableCell className="text-center">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Ellipsis className="hover:bg-border rounded-full" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <BookOpenText />
                    <span>Detalii</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <SquarePen />
                    <span>Editare</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Trash />
                    <span
                      className="hover:cursor-pointer"
                      onClick={() => removeOferta(index)}
                    >
                      Șterge
                    </span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )}

</ul>

</div>
    </>
  )
}



