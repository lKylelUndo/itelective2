import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section>
      <div className="mx-auto mt-16 px-6 container">
        <div className="flex items-center gap-x-2">
          <Info />
          <h1 className="text-xl font-bold inline">About Me</h1>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between py-4">
          <div>
            <p className="text-[16px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias id
              placeat, optio sint <br /> omnis modi vel magnam. Enim
              perspiciatis aliquam, voluptatum reiciendis <br /> dolorem odio
              cum, deleniti nostrum provident, sint dolores.
            </p>

            <br />

            <p className="text-[16px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias id
              placeat, optio sint <br /> omnis modi vel magnam. Enim
              perspiciatis aliquam, voluptatum reiciendis <br /> dolorem odio
              cum, deleniti nostrum provident, sint dolores.
            </p>

            <Button variant={"default"} className="mt-6 me-4 w-37.5">
              View CV
            </Button>

            <Button variant={"outline"} className="mt-6 w-37.5">
              View Blogs
            </Button>
          </div>

          <div>
            <Image
              src={"/aboutpic.jpeg"}
              className="rounded lg:block hidden"
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
