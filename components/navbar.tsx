import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.svg";
import { Orbitron } from "next/font/google";
import { Button } from "./ui/button";
import { Github } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const orbitron = Orbitron({ subsets: ["latin"] });

export default function Component() {
  return (
    <nav className="flex items-center justify-between p-4 bg-background">
      <div className="flex items-center space-x-2">
        <Image src={Logo} alt="Logo" width={32} height={32} className="w-8 h-8" />
        <h1 className={`text-2xl font-extrabold ${orbitron.className} bg-clip-text`}>TEXI</h1>
      </div>

      <div className="flex items-center space-x-2">
        <ThemeToggle />
        <Button asChild variant="outline">
          <Link
            href="github.com/manishdotasm/hci-texi"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center space-x-2  ${orbitron.className} `}
          >
            <Github className="w-5 h-5" />
            <span className="hidden sm:inline">GitHub</span>
          </Link>
        </Button>
      </div>
    </nav>
  );
}
