import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <section>
      <div className="container px-6 mx-auto flex flex-col lg:flex-row lg:justify-between">
        <div>
          <h1 className="text-center leading-21.5 lg:mt-32 mt-12 text-7xl font-bold">
            Modern Developer. <br /> Modern Code.
          </h1>

          <div className="ps-36 space-x-6 mt-4">
            <Button className="w-30">
              <Link href={"/about"} >About Me</Link>
            </Button>
  
            <Button variant={"outline"}>
              <Link href={"/about"} >View Projects</Link>
            </Button>
          </div>

        </div>

        <div className="flex justify-center">
            <Image src={"/robotai.png"} width={500} height={500} alt="" />
        </div>
      </div>
    </section>
  );
}
