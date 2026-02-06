import Image from "next/image";

export default function HomePage() {
  return (
    <section>
      <div className="container px-6 mx-auto flex flex-col lg:flex-row lg:justify-between">
        <div>
          <h1 className="text-center leading-21.5 lg:mt-32 mt-12 text-7xl font-bold">
            Modern Developer. <br /> Modern Code.
          </h1>
        </div>

        <div className="flex justify-center">
            <Image src={"/robotai.png"} width={500} height={500} alt="" />
        </div>
      </div>
    </section>
  );
}
