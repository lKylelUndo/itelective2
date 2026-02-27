import { Button } from "@/components/ui/button";
import { blogsObj, BlogType } from "@/constants/blog";
import Link from "next/link";

export default function BlogsPage() {
 
  return (
    <section className="container px-6 mx-auto">
      <h1 className="text-2xl font-semibold mt-4 text-center">Latest Blog</h1>

      <div className="mx-auto px-6 space-x-2 mt-10">
        <Button variant={"outline"}><Link href={"/blogs"}>All</Link></Button>
        <Button variant={"outline"}><Link href={"/blogs/life"}>Life</Link></Button>
        <Button variant={"outline"}><Link href={"/blogs/health"}>Health</Link></Button>
        <Button variant={"outline"}><Link href={"/blogs/leadership"}>Leadership</Link></Button>
      </div>

      <div className="p-5 grid grid-cols-1 lg:grid-cols-3 gap-x-4 mt-4">
        {blogsObj.map((blog: BlogType) => (
            <div key={blog.id} className="bg-background dark:bg-card rounded shadow space-y-4 p-4">
                <span className="text-xs font-semibold">{blog.blog_duration} mins read</span>
                <h1 className="font-bold line-clamp-1">{blog.blog_title}</h1>
                <h1 className="text-[14px] text-muted-foreground">{blog.blog_description}</h1>
               <div className="flex justify-between items-center mt-6">
                  <span className="text-slate-800 text-[12px] font-semibold dark:text-accent-foreground">{blog.blog_author}</span>
                  <Link href={`/blogs/view/${blog.id}`}>
                    <Button variant={"link"} className="dark:text-accent-foreground">View Full Blog</Button>  
                  </Link> 
               </div> 
            </div>
        ))}
      </div>
    </section>
  );
}
