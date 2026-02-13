import { Button } from "@/components/ui/button";
import { blogsObj, BlogType } from "@/constants/blog";
import Link from "next/link";

export default function BlogsPage() {
 
  return (
    <section className="container px-6 mx-auto">
      <h1 className="text-2xl font-semibold mt-4">Blog</h1>

      <div className="p-5 grid grid-cols-3 gap-x-4">
        {blogsObj.map((blog: BlogType) => (
            <div key={blog.id} className="bg-gray-50 rounded shadow space-y-4 p-4">
                <span className="text-xs text-slate-600 font-semibold">{blog.blog_duration} mins read</span>
                <h1 className="font-bold text-slate-600 line-clamp-1">{blog.blog_title}</h1>
                <h1 className="text-[14px]">{blog.blog_description}</h1>
               <div className="flex justify-between mt-6">
                  <span className="text-slate-800 text-[12px] font-semibold">{blog.blog_author}</span>
                  <Link href={`/blogs/view/${blog.id}`}>
                    <Button variant={"link"}>View Full Blog</Button>  
                  </Link> 
               </div> 
            </div>
        ))}
      </div>
    </section>
  );
}
