import PostListAdmin from "@/components/PostListAdmin";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default async function AdminPostsPage() {
    return (
        <Suspense fallback={<SpinLoader containderClasses="mb-16" />}>
            <PostListAdmin />
        </Suspense>
    );
}
