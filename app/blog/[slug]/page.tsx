import { getPostBySlug, getAllPosts } from "../../../lib/posts";
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map(post => ({ slug: post.slug }));
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
  
    const post = getPostBySlug(slug);
    

    const processed = await remark()
        .use(remarkGfm)
        .use(remarkBreaks)
        .use(html)
        .process(post.content);
        


    const contentHtml = processed.toString();
  
    return (
        <main className="min-h-screen px-6 py-20 flex justify-center">
          <article className="w-full max-w-2xl relative">
      
            {/* Background glow */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent blur-2xl" />
      
            {/* HEADER */}
            <header className="mb-14 text-center">
              <h1 className="text-5xl font-bold leading-tight mb-4">
                {post.title}
              </h1>
              <p className="text-gray-300 text-md tracking-wide">
                ML Field Journal · Nipun Goyal
              </p>
              <p className="text-gray-300 text-sm mt-2">
                6 min read · Generative Models
              </p>
              <div className="mt-6 h-px bg-white/10" />
            </header>
      
            {/* ARTICLE CONTENT */}
            <div
            className="article-body text-gray-200 text-[1.08rem] leading-[1.95] text-align: justify; "
            dangerouslySetInnerHTML={{ __html: contentHtml }}
            />



      
          </article>
        </main>
      );
      
  }
  
