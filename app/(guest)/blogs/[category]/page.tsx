import { Button } from "@/components/ui/button";
import { blogsObj } from "@/constants/blog";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function ViewSingleCategoryPage({ params } : { params: { category: string } }) {
    const { category } = await params;

    const matchCategories = blogsObj.filter((b) => 
        (b.blog_category ?? []).includes(category)
    )

    console.log("m", matchCategories)
    return (
        <section className="px-6 container mx-auto">
            <div className="mt-4"><Link href={"/blogs"}><ArrowLeft className="inline" /> Back to Blogs</Link></div>

            <div className="p-5 grid grid-cols-1 lg:grid-cols-3 gap-x-4 mt-4">
                {matchCategories.map((m) => (
                  <div key={m.id} className="bg-background dark:bg-card rounded shadow space-y-4 p-4 mt-6">
                    <span className="text-xs text-primary  font-semibold">{m.blog_duration} mins read</span>
                    <h1 className="font-bold text-primary  line-clamp-1">{m.blog_title}</h1>
                    <h1 className="text-[14px] text-muted-foreground">{m.blog_description}</h1>
                   <div className="flex justify-between items-center mt-6">
                      <span className="text-slate-800 text-[12px] font-semibold dark:text-accent-foreground">{m.blog_author}</span>
                      <Link href={`/blogs/view/${m.id}`}>
                        <Button variant={"link"} className="dark:text-accent-foreground">View Full Blog</Button>  
                      </Link> 
                   </div> 
                </div>
                ))}
            </div>
        </section>
    )
}