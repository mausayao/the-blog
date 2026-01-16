import { Posts } from "@/components/Posts";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function Home() {
    return (
        <div>
            <Suspense fallback={<SpinLoader />}>
                <Posts />
            </Suspense>
        </div>
    );
}
