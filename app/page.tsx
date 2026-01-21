import { Container } from "@/components/Container/Index";
import { Header } from "@/components/Header";
import { Posts } from "@/components/Posts";
import { SpinLoader } from "@/components/SpinLoader";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function Home() {
    return (
        <Container>
            <Header />
            <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
                <Link
                    className="w-full h-full overflow-hidden rounded-xl"
                    href={""}
                >
                    <Image
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition"
                        src={"/images/bryen_0.png"}
                        alt={"imagem"}
                        width={1200}
                        height={720}
                    />
                </Link>
                <div className="flex flex-col gap-4 sm:justify-center">
                    <time
                        className="text-slate-600 text-sm/tight"
                        dateTime="2026-01-20"
                    >
                        20/01/2026
                    </time>
                    <h2 className="text-2xl/tight font-extrabold sm:text-4xl">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit.
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Repellat molestiae ratione quasi voluptates
                        provident sint corrupti possimus, quod accusantium
                        magnam harum, nihil, porro maxime quae explicabo.
                        Temporibus, assumenda. Eaque, explicabo.
                    </p>
                </div>
            </section>
            <Suspense fallback={<SpinLoader />}>
                <Posts />
            </Suspense>
            <footer>
                <h1>Aqui o footer</h1>
            </footer>
        </Container>
    );
}
