import Link from "next/link";

export default function Header() {
    return (
      <ul className="flex justify-center space-x-20 p-4 bg-gray-200">
        <Link href="/"><li className="hover:text-blue-500 cursor-pointer">Home</li></Link>
        <Link href="/about"><li className="hover:text-blue-500 cursor-pointer">About</li></Link>
        <Link href="/projects"><li className="hover:text-blue-500 cursor-pointer">Projects</li></Link>
        <Link href="/contact"><li className="hover:text-blue-500 cursor-pointer">Contact</li></Link>
      </ul>
    );
  }
  