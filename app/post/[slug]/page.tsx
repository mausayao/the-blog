import { PostDetail } from "@/components/PostDetail";
import { SpinLoader } from "@/components/SpinLoader";
import { findBySlug } from "@/lib/post/queries";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

type PostPageProps = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({
    params,
}: PostPageProps): Promise<Metadata> {
    const { slug } = await params;

    const post = await findBySlug(slug).catch(() => undefined);

    return {
        title: post?.title,
        description: post?.excerpt,
    };
}

export default async function PostPage({ params }: PostPageProps) {
    const { slug } = await params;

    return (
        <Suspense fallback={<SpinLoader />}>
            <PostDetail slug={slug} />
        </Suspense>
    );
}
