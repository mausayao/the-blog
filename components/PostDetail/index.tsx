import { findBySlug } from "@/lib/post/queries";
import { notFound } from "next/navigation";

type PostDetailProps = {
    slug: string;
};

export async function PostDetail({ slug }: PostDetailProps) {
    const post = await findBySlug(slug).catch(() => undefined);

    if (!post) {
        notFound();
    }

    return (
        <div>
            <p>{post.title}</p>
        </div>
    );
}
