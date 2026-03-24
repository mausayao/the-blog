import { findPostsAdmin } from "@/lib/post/queries/admin";

export default async function PostListAdmin() {
    const posts = await findPostsAdmin();
    return (
        <div className="py-16">
            {posts.map((post) => {
                return <p key={post.id}>{post.title}</p>;
            })}
        </div>
    );
}
