"use client"

import { createContext } from "react";
import { useClient, useClientInputs } from "../hooks/clienti";

export const ClientiContext = createContext()

export function ClientiProvider({children}) {

  const clienti = useClient();
  const clientiInputs = useClientInputs();

  return (
    <ClientiContext.Provider value={[clienti, clientiInputs]}>
      {children}
    </ClientiContext.Provider>
  )
}
