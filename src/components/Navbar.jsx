import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import {
  ClipboardList,
  Package,
  Truck,
  User,
  Settings
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';


export default function Navbar() {
  return (
    <div className='py-4 px-24 flex justify-between border border-bottom'>
      <Link href='/'><Image src="/images/RostilLogoBun.png" alt="logo" width={225} height={50} /></Link>
      <div className='flex items-center gap-5'>
        <Link href="/oferte" className="hover:cursor-pointer hover:bg-accent rounded-xl p-2 flex gap-1">
          <ClipboardList className='scale-75' />
          <span>Oferte</span>
        </Link>
        <Link href="/produse" className="hover:cursor-pointer hover:bg-accent rounded-xl p-2 flex gap-1">
          <Package className='scale-75' />
          <span>Produse</span>
        </Link>
        <Link href="/furnizori" className="hover:cursor-pointer hover:bg-accent rounded-xl p-2 flex gap-1">
          <Truck className='scale-75' />
          <span>Furnizori</span>
        </Link>
        <Link href="/clienti" className="hover:cursor-pointer hover:bg-accent rounded-xl p-2 flex gap-1">
          <User className='scale-75' />
          <span>Clienți</span>
        </Link>
        <Link href="/setari">
          <Button variant='outline' size='icon'>
            <Settings />
          </Button>
        </Link>

      </div>
    </div>
  )
}
