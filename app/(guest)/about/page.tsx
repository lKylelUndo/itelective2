import Image from "next/image";

export default function AboutPage() {
  return (
    <section>
      <div className="mx-auto mt-16 px-6 container">
        <h1 className="text-xl">About Me</h1>
        <div className="flex justify-between py-4">
          <div className="">
            <p className="text-[16px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias id
              placeat, optio sint <br /> omnis modi vel magnam. Enim perspiciatis
              aliquam, voluptatum reiciendis <br /> dolorem odio cum, deleniti nostrum
              provident, sint dolores.
            </p>
          </div>

          <div>
            <Image
              src={"/aboutpic.jpeg"}
              className="rounded"
              width={400}
              height={0}
              alt="test"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
