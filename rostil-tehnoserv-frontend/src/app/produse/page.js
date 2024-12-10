import React from 'react'

import products from '@/data/products.json'
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
import Image from 'next/image'

export default function Produse() {
    return (
        <div>
            <h1 className='text-xl font-bold mb-5'>Pagina de produse</h1>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[200px]">Imagine</TableHead>
                        <TableHead className="">Denumire produs</TableHead>
                        <TableHead>Descriere</TableHead>
                        <TableHead className="w-[70px] text-right">Pret</TableHead>
                        <TableHead className="text-right w-[70px]">Actiuni</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {products.map((product)=>
                        <TableRow key={product.code}>
                            <TableCell><Image src={product.img_src} width={100} height={50} className='w-100' alt={`imagine ${product.name}`}/></TableCell>
                            <TableCell>{product.name}</TableCell>
                            <TableCell>{product.description}</TableCell>
                            <TableCell className="text-right">{product.price.toFixed(2)}</TableCell>
                            <TableCell className="text-center">
                                <DropdownMenu>
                                    <DropdownMenuTrigger>
                                        <Ellipsis className='hover:bg-border rounded-full'/>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem>
                                            <BookOpenText/>
                                            <span>Detalii</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <SquarePen/>
                                            <span>Editare</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Trash/>
                                            <span>Sterge</span>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
                  
            </Table>
            
        </div>
    )
}
