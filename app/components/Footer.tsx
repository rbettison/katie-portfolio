import Link from "next/link";

export default function Footer() {
    return (
        <div className="text-white w-96 flex flex-row drop-shadow-md justify-evenly p-4 pb-16 text-2xl divide-x">
            <Link href={"/contact"}>Get in touch</Link>
            <Link href={"/"} className="pl-12">KN</Link>
        </div>
    )
}