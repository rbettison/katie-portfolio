'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Header() {

    let pathname = usePathname();
    return (
        <div className="text-white bg-mainText-100 w-74 flex flex-row drop-shadow-md justify-evenly p-4 text-md border rounded-full border-white mt-8 divide-x">
            <Link href={"/"} className={pathname.endsWith("/") ? "font-bold px-1" : "px-1"}>KN</Link>
            <Link href={"/services"} className={pathname.includes("services") ? "font-bold px-1" : "px-1"}>Services</Link>
            <Link href={"/portfolio"} className={pathname.includes("portfolio") ? "font-bold px-1" : "px-1"}>Portfolio</Link>
            <Link href={"/contact"} className={pathname.includes("contact") ? "font-bold px-1" : "px-1"}>Contact</Link>
        </div>
    );
}