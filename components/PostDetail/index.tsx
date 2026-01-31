import { findBySlug } from "@/lib/post/queries";
import { notFound } from "next/navigation";
import { PostHeader } from "../PostHeader";
import Image from "next/image";
import { PostDate } from "../PostDate";
import { PostContent } from "../PostContent";

type PostDetailProps = {
    slug: string;
};

export async function PostDetail({ slug }: PostDetailProps) {
    const post = await findBySlug(slug).catch(() => undefined);

    if (!post) {
        notFound();
    }

    return (
        <article>
            <header className="flex flex-col mb-4 gap-4">
                <PostHeader url={`/post/${post.slug}`} as="h1">
                    {post.title}
                </PostHeader>

                <Image
                    src={post.coverImageUrl}
                    alt={post.title}
                    width={1200}
                    height={720}
                    className="rounded-xl"
                />

                <p>
                    {post.author} | <PostDate createdAt={post.createdAt} />
                </p>
            </header>

            <p className="text-xl mb-4 text-slate-600">{post.excerpt}</p>

            <PostContent content={post.content} />
        </article>
    );
}
