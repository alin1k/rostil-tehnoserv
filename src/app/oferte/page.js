"use client"

import { useContext } from 'react'
import { ClientiContext } from '@/lib/context/clienti'

import {
  User,
  Calendar,
  Cross,
  Trash
} from 'lucide-react';
import { OferteContext } from '@/lib/context/oferte'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function Oferte() {
 
  const [clientiObj] = useContext(ClientiContext);
  const {client} = clientiObj;

  const [oferteObj, oferteInputs] = useContext(OferteContext);
 
  const {
    oferta: oferte,
    handleAdaugareOferta,
    removeOferta,
  } = oferteObj

  const {
    numeOferta, setNumeOferta,
    numeClient,
    handleNumeClient,
    handleNumeOferta,
  } = oferteInputs;

  return (
    <>
      <div className="flex justify-center items-center ">
        <div className="border-2 border-black p-4 w-[450px]  mb-8 mt-4 p-4 shadow-2xl ">

          <p className="text-center text-4xl mt-2">Adăugare Ofertă</p>

          <div className="px-5 py-8 flex flex-col w-[320px]">
            <p>Nume ofertă:</p>
            <input
              placeholder="Adăugați numele ofertei"
              maxLength={50}
              required
              className={`mt-2 mb-8 border-b focus:outline-none`}
              onChange={handleNumeOferta}
              value={numeOferta}
            />

            <p>Alege clientul:</p>
            <select value={numeClient} onChange={handleNumeClient} className='mt-2 border-b focus:outline-none  appearance-none bg-transparent '>
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
                <option>Nu exista clienti in baza de date</option>
              )}
            </select>
          </div>

          <button
            className="w-full bg-black py-2 rounded-2xl text-white transform transition-all duration-200 active:scale-95 ease-out"
            onClick={() => handleAdaugareOferta(numeOferta, setNumeOferta, numeClient)}
          >
            Adăugare în listă
          </button>
        </div>
      </div>

      <div className='grid grid-cols-4 gap-2'>
        {oferte.map((oferta, index)=>
          <Card key={index} className='relative'>
            <CardHeader>
              <CardTitle className="text-xl">{oferta.nume}</CardTitle>
              <CardDescription className="flex items-center -ms-1"><User className='scale-75'/> {oferta.numeClient}</CardDescription>
              <CardDescription className="flex items-center -ms-1"><Calendar className='scale-75'/> Ultima modificare: {new Date().toLocaleDateString()}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Produse: <span className='font-bold'>5</span></p>
              <p>Pret total: <span className='font-bold text-lg'>1140.50 LEI</span></p>
            </CardContent>
            <CardFooter className="grid grid-cols-2 gap-2">
              <Button variant="secondary">Edit</Button>
              <Button>Export</Button>
            </CardFooter>
            
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="absolute top-0 right-0"
                >
                  <Trash className='stroke-gray-400'/>
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Esti sigur ca vrei sa stergi oferta?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Aceasta actiune nu este reversibila iar oferta va fi stearsa permanent
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Anulare</AlertDialogCancel>
                  <AlertDialogAction onClick={()=> removeOferta(index)}>Sterge Oferta</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            
          </Card>
        )}
      </div>
    </>
  )
}



