import { blogsObj } from "@/constants/blog";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ViewSingleBlogPage({params} : {params: {blogId : string}}) {
    const {blogId} = await params;

    const blog = blogsObj.find((blog) => blog.id === blogId);

    if (!blog || Object.keys(blog).length === 0) {
        notFound();
    }

    return (
        <section className="container mx-auto px-6">
            <div className="mt-10"><Link href={"/blogs"}><ArrowLeft className="inline" /> Back to Blogs</Link></div>
            <div className="bg-background dark:bg-card rounded-lg max-w-200 mt-6 shadow p-4 space-y-4">
                <h1 className="text-[14px] text-muted-foreground">{blog.blog_author} | {blog.blog_duration} mins read</h1>
                <h1>{blog.blog_content}</h1>
            </div>
        </section>
    )
}