'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Header() {

    let pathname = usePathname();
    return (

        <div className="font-highlightFont text-white bg-gradient-to-b to-thirdBg-100 from-mainBg-100  w-74 flex flex-row drop-shadow-md justify-evenly p-4 text-md border rounded-full border-white mt-0 sm:mt-8 divide-x">
            <Link href={"/"} className={pathname.endsWith("/") ? "font-bold px-1 hover:text-hover-100" : "px-1 hover:text-hover-100"}>KN</Link>
            <Link href={"/services"} className={pathname.includes("services") ? "font-bold px-1 hover:text-hover-100" : "px-1 hover:text-hover-100"}>Services</Link>
            <Link href={"/portfolio"} className={pathname.includes("portfolio") ? "font-bold px-1 hover:text-hover-100" : "px-1 hover:text-hover-100"}>Portfolio</Link>
            <Link href={"/contact"} className={pathname.includes("contact") ? "font-bold px-1 hover:text-hover-100" : "px-1 hover:text-hover-100"}>Contact</Link>
        </div>

    );
}