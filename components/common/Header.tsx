import Link from "next/link";
import { ModeToggle } from "./ToggleTheme";

const Header = () => {
  return (
    <header className="p-4">
      <div className="container mx-auto px-6 flex justify-between">
        <div>
          <h1 className="font-bold text-xl">PORTFOLIO</h1>
        </div>

        <nav className="flex items-center gap-x-6 text-[14px]">
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/projects"}>Projects</Link>

          <div>
            <ModeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
