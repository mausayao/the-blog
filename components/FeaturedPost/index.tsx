import { PostHeader } from "../PostHeader";
import { PostImageCover } from "../PostImageCover";

export function FeaturedPost() {
    const slug = "qualquer";
    const postLink = `/post/${slug}`;

    return (
        <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
            <PostImageCover
                linkProps={{ href: postLink }}
                imageProps={{
                    src: "/images/bryen_0.png",
                    alt: "imagem",
                    width: 1200,
                    height: 720,
                    priority: true,
                }}
            />
            <div className="flex flex-col gap-4 sm:justify-center">
                <time
                    className="text-slate-600 text-sm/tight"
                    dateTime="2026-01-20"
                >
                    20/01/2026
                </time>
                <PostHeader url={postLink} as="h1">
                    Lorem ipsum dolor sit amet consectetur, adipisicing
                </PostHeader>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Repellat molestiae ratione quasi voluptates provident sint
                    corrupti possimus, quod accusantium magnam harum, nihil,
                    porro maxime quae explicabo. Temporibus, assumenda. Eaque,
                    explicabo.
                </p>
            </div>
        </section>
    );
}
