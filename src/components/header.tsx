"use client"; 

 
import Link from "next/link";
import { Button } from "./ui/button";
import { FaGithub } from "react-icons/fa";

export default function Header() {
    return (
        <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-red-600">Encripte</h1>
          <nav>
            <Button variant="ghost" className="text-gray-600 hover:text-red-600">
            <Link href={"https://github.com/DevKaliper/Encripte"} target="_blank">
            <FaGithub />
            </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
    )
}