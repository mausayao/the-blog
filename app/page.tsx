import { Container } from "@/components/Container/Index";
import { Posts } from "@/components/Posts";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function Home() {
    return (
        <Container>
            <header>
                <h1>Aqui o Titulo</h1>
            </header>
            <Suspense fallback={<SpinLoader />}>
                <Posts />
            </Suspense>
            <footer>
                <h1>Aqui o footer</h1>
            </footer>
        </Container>
    );
}
