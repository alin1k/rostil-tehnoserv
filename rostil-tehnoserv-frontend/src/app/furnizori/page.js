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
        handleAdresa
    } = useFurnizorInputs();

    return (
        <>
            <div className="flex justify-center items-center mb-9">
                <div className="border-2 border-black p-4 w-[450px] mt-4 shadow-2xl">
                    <p className="text-center text-4xl mt-2">Adăugare Furnizor</p>
                    <div className="px-5 py-8 flex flex-col w-[320px]">
                        <p>Nume furnizor:</p>
                        <input
                            onChange={handleNume}
                            placeholder="Adăugați numele furnizorului"
                            value={nume}
                            className="mt-2 mb-8 border-b border-gray-500 focus:outline-none"
                            maxLength={50}
                        />
                        <p>Adresă furnizor:</p>
                        <input
                            onChange={handleAdresa}
                            placeholder="Adăugați adresa furnizorului"
                            className="mt-2 mb-8 border-b border-gray-500 focus:outline-none"
                            value={adresa}
                            maxLength={50}
                        />
                        <p>Website furnizor:</p>
                        <input
                            onChange={handleEmail}
                            placeholder="Adăugați website-ul furnizorului"
                            className="mt-2 border-b border-gray-500 focus:outline-none"
                            value={email}
                            maxLength={50}
                        />
                    </div>
                    <button
                        onClick={()=>handleAddFurnizor(nume, adresa, email, setNume, setAdresa, setEmail)}
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
