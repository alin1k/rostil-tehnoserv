"use client"

import { createContext } from "react";
import { useFurnizor, useFurnizorInputs } from "../hooks/furnizori";

export const FurnizoriContext = createContext();

export function FurnizoriProvider({children}) {

  const furnizori = useFurnizor();
  const furnizoriInputs = useFurnizorInputs();

  return (
    <FurnizoriContext.Provider value={[furnizori, furnizoriInputs]}>
      {children}
    </FurnizoriContext.Provider>
  )
}