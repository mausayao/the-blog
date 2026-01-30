import { FeaturedPost } from "@/components/FeaturedPost";
import { Posts } from "@/components/Posts";
import { SpinLoader } from "@/components/SpinLoader";

import { Suspense } from "react";

export default async function Home() {
    return (
        <>
            <Suspense fallback={<SpinLoader />}>
                <FeaturedPost />
                <Posts />
            </Suspense>
        </>
    );
}
