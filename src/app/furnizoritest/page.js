"use client";

import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";
import { useEffect } from "react";
<RiDeleteBin6Line className="w-full" onClick={() => removeFurnizor(index)}></RiDeleteBin6Line>
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
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

const furnizori = [
    {
        cod: "INV001",
        nume: "Paid",
        adresa: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        cod: "INV002",
        nume: "Pending",
        adresa: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        cod: "INV003",
        nume: "Unpaid",
        adresa: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        cod: "INV004",
        nume: "Paid",
        adresa: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        cod: "INV005",
        nume: "Paid",
        adresa: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        cod: "INV006",
        nume: "Pending",
        adresa: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        cod: "INV007",
        nume: "Unpaid",
        adresa: "$300.00",
        website: "Credit Card",
    },
]

export default function TableDemo() {
    return (
        <Table>

            <TableHeader>
                <TableRow>
                    <TableHead className="w-[150px]">Nume Furnizor</TableHead>
                    <TableHead className="text-center">Adresă furnizor</TableHead>
                    <TableHead className="text-center">Website Furnizor</TableHead>
                    <TableHead className="text-right w-[70px]">Actiuni</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {furnizori.map((furnizor) => (
                    <TableRow key={furnizor.cod}>
                        <TableCell className="text-center">{furnizor.nume}</TableCell>
                        <TableCell className="text-center">{furnizor.adresa}</TableCell>
                        <TableCell className="text-center">{furnizor.website}</TableCell>
                        <TableCell className="text-center">
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <Ellipsis className='hover:bg-border rounded-full' />
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
                                        <span>Sterge</span>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
