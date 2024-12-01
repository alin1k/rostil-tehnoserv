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
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';


export default function Navbar() {
  return (
    <div className='py-4 px-24 flex justify-between border border-bottom'>
      <Link href='/'><Image src="/static/images/rostil_logo.png" alt="logo" width={225} height={50} /></Link>
      <div className='flex items-center gap-5'>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <span className="font-medium">Actiuni</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent>

            <Link href="/oferte">
              <DropdownMenuItem className="hover:cursor-pointer">
                <ClipboardList />
                <span>Oferte</span>
              </DropdownMenuItem>
            </Link>
            <Link href="/produse">
              <DropdownMenuItem className="hover:cursor-pointer">
                <Package />
                <span>Produse</span>
              </DropdownMenuItem>
            </Link>

            <Link href="/furnizori">
              <DropdownMenuItem className="hover:cursor-pointer">
                <Truck />
                <span>Furnizori</span>
              </DropdownMenuItem>
            </Link>

            <Link href="/clienti">
              <DropdownMenuItem className="hover:cursor-pointer">
                <User />
                <span>Clienți</span>
              </DropdownMenuItem>
            </Link>

          </DropdownMenuContent>
        </DropdownMenu>
        <span className="font-medium">Setări</span>
      </div>
    </div>
  )
}
