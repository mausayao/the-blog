import { findPostsAdmin } from "@/lib/post/queries/admin";
import clsx from "clsx";
import { Trash2Icon } from "lucide-react";
import Link from "next/link";
import { DeletePostButton } from "../Admin/DeletePostButton";

export default async function PostListAdmin() {
    const posts = await findPostsAdmin();
    return (
        <div className="mb-16">
            {posts.map((post) => {
                return (
                    <div
                        className={clsx(
                            "py-2 px-2",
                            !post.published && "bg-slate-300",
                            "flex gap-2 items-center justify-between",
                        )}
                        key={post.id}
                    >
                        <Link href={`/admin/posts/${post.id}`}>
                            {post.title}
                        </Link>
                        {!post.published && (
                            <span className=" text-xs text-slate-600 italic">
                                (Não publicado)
                            </span>
                        )}

                        <DeletePostButton id={post.id} title={post.title} />
                    </div>
                );
            })}
        </div>
    );
}
