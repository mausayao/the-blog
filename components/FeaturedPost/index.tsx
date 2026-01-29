import { findAll } from "@/lib/post/queries";
import { PostImageCover } from "../PostImageCover";
import { PostSummary } from "../PostSummary";

export async function FeaturedPost() {
    const posts = await findAll();
    const post = posts[0];

    const postLink = `/post/${post.slug}`;

    return (
        <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
            <PostImageCover
                linkProps={{ href: postLink }}
                imageProps={{
                    src: post.coverImageUrl,
                    alt: post.title,
                    width: 1200,
                    height: 720,
                    priority: true,
                }}
            />
            <PostSummary
                postHeading={"h1"}
                postLink={postLink}
                title={post.title}
                createdAt={post.createdAt}
                excerpt={post.excerpt}
            />
        </section>
    );
}
