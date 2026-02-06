import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

export default function ProjectsPage() {
  return (
    <section>
      <div className="container mx-auto">
        <h1 className="text-center mt-12 font-semibold text-3xl">
          Recent Projects
        </h1>

        <div className="grid lg:grid-cols-3 gap-y-2 gap-x-4 mt-10 px-6">
          <div className="border shadow-xs rounded-lg p-2">
            <div className="w-full h-50 bg-gray-700 animate-pulse"></div>

            <div className="px-4 py-2">
              <p className="text-[14px]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Assumenda debitis pariatur, accusamus distinctio dolorum
                voluptatibus sapiente veritatis laborum ducimus corrupti.
              </p>

              <Button className="my-4">View Project <MoveRight /></Button>
            </div>
          </div>

          <div className="border shadow-xs rounded-lg p-2">
            <div className="w-full h-50 bg-gray-700 p-4 animate-pulse"></div>

            <div className="px-4 py-2">
              <p className="text-[14px]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Assumenda debitis pariatur, accusamus distinctio dolorum
                voluptatibus sapiente veritatis laborum ducimus corrupti.
              </p>

              <Button className="my-4">View Project <MoveRight /></Button>
            </div>
          </div>

          <div className="border shadow-xs rounded-lg p-2">
            <div className="w-full h-50 bg-gray-700 p-4 animate-pulse"></div>

            <div className="px-4 py-2">
              <p className="text-[14px]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Assumenda debitis pariatur, accusamus distinctio dolorum
                voluptatibus sapiente veritatis laborum ducimus corrupti.
              </p>

              <Button className="my-4">View Project <MoveRight /></Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
