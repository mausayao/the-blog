import { Container } from "@/components/Container/Index";
import { Header } from "@/components/Header";
import { Posts } from "@/components/Posts";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function Home() {
    return (
        <Container>
            <Header />
            <Suspense fallback={<SpinLoader />}>
                <Posts />
            </Suspense>
            <footer>
                <h1>Aqui o footer</h1>
            </footer>
        </Container>
    );
}
