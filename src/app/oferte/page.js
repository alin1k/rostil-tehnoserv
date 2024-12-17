"use client"

import { useContext, useState } from 'react'
import { ClientiContext } from '@/lib/context/clienti'
import { cn } from "@/lib/utils"

import {
  User,
  Calendar,
  Trash,
  Check, 
  ChevronsUpDown, 
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
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from '@/components/ui/input';
import { Label } from "@/components/ui/label"
import Link from 'next/link';

export default function Oferte() {
 
  const [clientiObj] = useContext(ClientiContext);
  const {client: clienti} = clientiObj;

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

  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  return (
    <>
      <h1 className='font-bold text-xl mb-5'>Gestionare Oferte</h1>

      <div className='grid grid-cols-4 gap-2'>
        <Card>
          <CardHeader>
            <CardTitle>Adăugare ofertă</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div >
                <Label htmlFor="numeOferta">Nume ofertă</Label>
                <Input id="numeOferta"
                  placeholder="Ex: Ofertă pentru Ion"
                  value={numeOferta}
                  onChange={handleNumeOferta}
                  maxLength={50}
                  required />
              </div>
              <div>
                {clienti.length? 
                  <Popover open={open} onOpenChange={setOpen} id="numeClient">
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-full justify-between"
                      >
                        {value
                          ? clienti.find((client) => client.cNume === value)?.cNume
                          : "Alege client..."}
                        <ChevronsUpDown className="opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0">
                      <Command>
                        <CommandInput placeholder="Caută client..." />
                        <CommandList>
                          <CommandEmpty>Nici un client găsit</CommandEmpty>
                          <CommandGroup>
                            {clienti.map((client, index) => (
                              <CommandItem
                                key={"client" + index}
                                value={client.cNume}
                                onSelect={(currentValue) => {
                                  setValue(currentValue === value ? "" : currentValue)
                                  setOpen(false)
                                }}
                              >
                                {client.cNume}
                                <Check
                                  className={cn(
                                    "ml-auto",
                                    value === client.cNume ? "opacity-100" : "opacity-0"
                                  )}
                                />
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                :
                  <>
                    <Input disabled placeholder="Nu este nici un client adăugat"/>
                    <Link href="/clienti" asChild>
                      <Button className="mt-2">
                        Adaugă un client
                      </Button>
                    </Link>
                  </>
                }
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
                className="w-full"
                onClick={() => handleAdaugareOferta(numeOferta, setNumeOferta, value)}
                type="submit"
            >
              Adăugare
            </Button>
          </CardFooter>
        </Card>
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



