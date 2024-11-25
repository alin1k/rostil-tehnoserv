import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent
} from "./ui/dropdown-menu"
import { 
  ClipboardList,
  Package,
  Truck,
  User,
} from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className='py-4 px-24 flex justify-between border border-bottom'>
      <Link href='/'>RostilThenoServ</Link>
      <div className='flex gap-5'>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <span>Actiuni</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <ClipboardList/>
                <span>Oferte</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>
                    <Link href="/oferte/adauga">Adaugă Oferte</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/oferte">Vizualizează Oferte</Link>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <Package/>
                <span>Produse</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>
                    <span>Adaugă Produse</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Vizualizează Produse</span>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <Truck/>
                <span>Furnizori</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>
                    <span>Adaugă Furnizor</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Vizualizează Frunizorii</span>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <User/>
                <span>Clienți</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>
                    <span>Adaugă Client</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Vizualizează Clienții</span>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>
        <p>Setari</p>
      </div>
    </div>
  )
}
