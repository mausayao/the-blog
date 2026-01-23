import { postRepository } from "@/repositories/post/json-post-repository";
import { PostImageCover } from "../PostImageCover";
import { PostHeader } from "../PostHeader";

export async function Posts() {
    const posts = await postRepository.findAll();
    return (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
                return (
                    <div className="flex flex-col gap-4 group" key={post.id}>
                        <PostImageCover
                            linkProps={{ href: `/post/${post.slug}` }}
                            imageProps={{
                                width: 1200,
                                height: 720,
                                src: post.coverImageUrl,
                                alt: post.title,
                            }}
                        />
                        <div className="flex flex-col gap-4 sm:justify-center">
                            <time
                                className="text-slate-600 block text-sm/tight"
                                dateTime={post.createdAt}
                            >
                                {post.createdAt}
                            </time>
                            <PostHeader url={"#"} as="h2">
                                {post.title}
                            </PostHeader>
                            <p>{post.excerpt}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
