import clsx from "clsx";
import Link from "next/link";

type PostHeaderProps = {
    children: React.ReactNode;
    as?: "h1" | "h2";
    url: string;
};

export function PostHeader({ children, as: Tag = "h2", url }: PostHeaderProps) {
    const styleCompositionFor = {
        h1: "text-2xl/tight font-extrabold sm:text-4xl",
        h2: "text-2xl/tight font-bold",
    };

    return (
        <Link href={url} className="group-hover:text-slate-600 transition">
            <Tag className={clsx(styleCompositionFor[Tag])}>{children}</Tag>
        </Link>
    );
}
