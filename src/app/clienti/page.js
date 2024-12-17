"use client"

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
import { useContext } from "react";
import { ClientiContext } from "@/lib/context/clienti";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
function Clienti() {

  const [clientObj, clientInputs] = useContext(ClientiContext);

  const { client, handleAdaugare, removeClient } = clientObj;
  const {
    nume, setNume,
    telefon, setTelefon,
    email, setEmail,
    handleClient,
    handleTelefon,
    handleEmail,
    numeError, setNumeError,
    telefonError, setTelefonError,
    emailError, setEmailError,
  } = clientInputs;

  return (
    <>

      {/* <div className="flex justify-center items-center mb-9">
        <div className="border-2 border-black p-4 w-[450px] mt-4 p-4 shadow-2xl ">

          <p className="text-center text-4xl mt-2">Adăugare Client</p>

          <div className="px-5 py-8 flex flex-col w-[320px]">
            <p>Nume client:</p>
            <input
              placeholder="Adăugați numele clientului"
              value={nume}
              onChange={handleClient}
              maxLength={50}
              required
              className={`mt-2 mb-8 border-b ${numeError ? 'border-red-500' : 'border-gray-500'} ${numeError ? 'placeholder-red-500' : ''} focus:outline-none`}
            />


            <p>Telefon client:</p>
            <input
              placeholder="Adăugați telefonul clientului"
              value={telefon}
              onChange={handleTelefon}
              maxLength={50}
              type="number"
              required
              className={`mt-2 mb-8 border-b ${telefonError ? 'border-red-500' : 'border-gray-500'} ${telefonError ? 'placeholder-red-500' : ''} focus:outline-none`}
            />


            <p>Email client:</p>
            <input
              placeholder="Adăugați email-ul clientului"
              value={email}
              onChange={handleEmail}
              maxLength={50}
              type="email"
              required
              className={`mt-2 border-b ${emailError ? 'border-red-500' : 'border-gray-500'} ${emailError ? 'placeholder-red-500' : ''} focus:outline-none`}
            />

          </div>

          <button
            onClick={() => handleAdaugare(nume, telefon, email, setNume, setTelefon, setEmail, setNumeError, setTelefonError, setEmailError)}
            className="w-full bg-black py-2 rounded-2xl text-white transform transition-all duration-200 active:scale-95 ease-out"
          >
            Adăugare în listă
          </button>
        </div>
      </div> */}

      <Dialog>
        <DialogTrigger asChild>
          <Button>Adaugă client</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Adăugare client</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div >
              <Label htmlFor="numeclient">Nume client</Label>
              <Input id="numeclient"
                placeholder="Introduceți numele clientului"
                value={nume}
                onChange={handleClient}
                maxLength={50}
                required />
            </div>
            <div>
              <Label htmlFor="telefonclient">Număr de telefon client</Label>
              <Input id="telefonclient"
                placeholder="Introduceți numărul de telefon al clientului"
                value={telefon}
                onChange={handleTelefon}
                maxLength={50}
                type="number"
                required />
            </div>
            <div>
              <Label htmlFor="emailclient">Adresă de email client</Label>
              <Input id="emailclient"
                placeholder="Introduceți email-ul clientului"
                value={email}
                onChange={handleEmail}
                maxLength={50}
                type="email"
                required />
            </div>
          </div>
          <DialogFooter>
            <Button
              onClick={() => handleAdaugare(nume, telefon, email, setNume, setTelefon, setEmail, setNumeError, setTelefonError, setEmailError)}
              type="submit"
            >
              Adăugare
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div>

        <ul>
          {client.length === 0 ? (
            <p className="text-center text-lg">Nu există clienți adăugați.</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[150px] text-center">Nume client</TableHead>
                  <TableHead className="text-center">Telefon client</TableHead>
                  <TableHead className="text-center">Email client</TableHead>
                  <TableHead className="text-right w-[70px]">Acțiuni</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {client.map((client, index) => (
                  <TableRow key={index}>
                    <TableCell className="text-center">{client.cNume}</TableCell>
                    <TableCell className="text-center">{client.cTelefon}</TableCell>
                    <TableCell className="text-center">{client.cEmail}</TableCell>
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
                              onClick={() => removeClient(index)}
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
  );
}
export default Clienti;
