"use client";

import { useFurnizor, useFurnizorInputs } from "@/lib/hooks/furnizori";
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

function Furnizori() {

    const {
        furnizor,
        handleAddFurnizor,
        removeFurnizor
    } = useFurnizor()
    
    const {
        nume, setNume,
        email, setEmail,
        adresa, setAdresa,
        handleNume,
        handleEmail,
        handleAdresa,
        numeError, setNumeError,
        adresaError, setAdresaError,
        emailError, setEmailError
    } = useFurnizorInputs();

    return (
        <>
         <div className="flex justify-center items-center mb-9">
    <div className="border-2 border-black p-4 w-[450px] mt-4 shadow-2xl">

        <p className="text-center text-4xl mt-2">Adăugare Furnizor</p>

        <div className="px-5 py-8 flex flex-col w-[320px]">
            <p>Nume furnizor:</p>
            <input
                onChange={(e) => setNume(e.target.value)}
                placeholder="Adăugați numele furnizorului"
                value={nume}
                maxLength={50}
                required
                className={`mt-2 mb-8 border-b ${numeError ? 'border-red-500' : 'border-gray-500'} ${numeError ? 'placeholder-red-500' : ''} focus:outline-none`}
            />

            <p>Adresă furnizor:</p>
            <input
                onChange={(e) => setAdresa(e.target.value)}
                placeholder="Adăugați adresa furnizorului"
                value={adresa}
                maxLength={50}
                required
                className={`mt-2 mb-8 border-b ${adresaError ? 'border-red-500' : 'border-gray-500'} ${adresaError ? 'placeholder-red-500' : ''} focus:outline-none`}
            />

            <p>Website furnizor:</p>
            <input
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Adăugați website-ul furnizorului"
                value={email}
                maxLength={50}
                type="url"
                required
                className={`mt-2 border-b ${emailError ? 'border-red-500' : 'border-gray-500'} ${emailError ? 'placeholder-red-500' : ''} focus:outline-none`}
            />
        </div>

        <button
            onClick={() => handleAddFurnizor(nume, adresa, email, setNume, setAdresa, setEmail, setNumeError, setAdresaError, setEmailError)}
            className="w-full bg-black py-2 rounded-2xl text-white transform transition-all duration-200 active:scale-95 ease-out"
        >
            Adăugare în listă
        </button>
    </div>
</div>

            <div className="flex justify-center items-center">
                {furnizor.length === 0 ? (
                    <p className="text-center text-lg">Tabelul nu are informații introduse.</p>
                ) : (
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[150px] text-center">Nume furnizor</TableHead>
                                <TableHead className="text-center">Adresă furnizor</TableHead>
                                <TableHead className="text-center">Website furnizor</TableHead>
                                <TableHead className="text-right w-[70px]">Acțiuni</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {furnizor.map((furnizor, index) => (
                                <TableRow key={index}>
                                    <TableCell className="text-center">{furnizor.fNume}</TableCell>
                                    <TableCell className="text-center">{furnizor.fAdresa}</TableCell>
                                    <TableCell className="text-center">{furnizor.fEmail}</TableCell>
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
                                                        onClick={() => removeFurnizor(index)}
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
            </div>
        </>
    );
}

export default Furnizori;
