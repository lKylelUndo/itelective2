import Link from "next/link";

const Header = () => {
  return (
    <header className="p-4">
      <div className="container mx-auto px-6 flex justify-between">
          <div>
            <h1 className="font-bold text-xl">PORTFOLIO</h1>
          </div>
    
          <nav className="space-x-6 text-[14px]">
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/projects"}>Projects</Link>
          </nav>
      </div>
    </header>
  );
};

export default Header;
