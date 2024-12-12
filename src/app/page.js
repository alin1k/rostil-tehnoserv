import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ClipboardList,
  Package,
  Truck,
  User,
} from 'lucide-react';
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">
            RostilThenoserv
          </CardTitle>
          <CardDescription>
            {new Date().toDateString()}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-row justify-between gap-3">
            <Link href="/oferte" className="flex flex-col items-center rounded-xl p-2 hover:cursor-pointer hover:bg-accent">
              <ClipboardList/>
              <p className="text-lg font-semibold">Oferte</p>
              <span>0</span>
            </Link>
            <Link href="/produse" className="flex flex-col items-center rounded-xl p-2 hover:cursor-pointer hover:bg-accent">
              <Package/>
              <p className="text-lg font-semibold">Produse</p>
              <span>0</span>
            </Link>
            <Link href="/clienti" className="flex flex-col items-center rounded-xl p-2 hover:cursor-pointer hover:bg-accent">
              <User/>
              <p className="text-lg font-semibold">Clienti</p>
              <span>0</span>
            </Link>
            <Link href="/furnizori" className="flex flex-col items-center rounded-xl p-2 hover:cursor-pointer hover:bg-accent">
              <Truck/>
              <p className="text-lg font-semibold">Furnizori</p>
              <span>0</span>
            </Link>
          </div> 
        </CardContent>
      </Card>
    </div>
  );
}
