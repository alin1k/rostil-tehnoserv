'use client';

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "./ui/dialog"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Button } from "./ui/button"

import { useContext } from "react";
import { FurnizoriContext } from "@/lib/context/furnizori";

export default function EditFurnizorDialog({openEdit, setOpenEdit, furnizor}) {

  const [furnizorObj, furnizorInputs] = useContext(FurnizoriContext);

  const {
    nume, setNume,
    email, setEmail,
    adresa, setAdresa,
    numeError, setNumeError,
    adresaError, setAdresaError,
    emailError, setEmailError
  } = furnizorInputs;

  const {editFurnizor} = furnizorObj;

  return (
    <Dialog open={openEdit} onOpenChange={setOpenEdit}>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Editare furnizor</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-4 py-4">
                <div>
                    <Label htmlFor="numefurnizor">Nume furnizor:</Label>
                    <Input id="numefurnizor"
                        onChange={(e) => setNume(e.target.value)}
                        placeholder="SC Corporatie SRL"
                        value={nume}
                        maxLength={50}
                        required 
                        className={`${numeError ? 'border-red-500' : 'border-gray-500'}`}
                    />
                </div>
                <div>
                    <Label htmlFor="adresafurnizor">Adresă furnizor:</Label>
                    <Input id="adresafurnizor"
                        onChange={(e) => setAdresa(e.target.value)}
                        placeholder="Brasov, Romania"
                        value={adresa}
                        maxLength={50}
                        required 
                        className={`${adresaError ? 'border-red-500' : 'border-gray-500'}`}
                    />
                </div>
                <div>
                    <Label htmlFor="websitefurnizor">Website furnizor:</Label>
                    <Input id="websitefurnizor"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="www.furnizor.ro"
                        value={email}
                        maxLength={50}
                        type="url"
                        required 
                        className={`${emailError ? 'border-red-500' : 'border-gray-500'}`}
                    />
                </div>
            </div>
            <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Close
                  </Button>
                </DialogClose>
                <Button
                    onClick={() => editFurnizor(furnizor.idnume,adresa,email,setNumeError,setAdresaError,setEmailError)}
                    type="submit"
                >
                    Adăugare
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}
