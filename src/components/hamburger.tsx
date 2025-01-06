"use client"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"
import { RxHamburgerMenu } from "react-icons/rx"

const SHEET_SIDES = ["left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button >{<RxHamburgerMenu />}
            </Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>RUNO</SheetTitle>
              <div>
            <ul className="flex flex-col text-sm md:text-base gap-2">
               <li> <Link href={"/"}>Home </Link></li>
               <li> <Link href={"/about"}>About </Link></li>
               <li> <Link href={"/article"}>Articles </Link></li>
               <li> <Link href={"/contact"}>Contact us </Link></li>
            </ul>
         </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
