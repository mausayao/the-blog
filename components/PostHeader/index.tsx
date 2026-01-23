import clsx from "clsx";
import Link from "next/link";

type PostHeaderProps = {
    children: React.ReactNode;
    as?: "h1" | "h2";
    url: string;
};

export function PostHeader({ children, as: Tag = "h2", url }: PostHeaderProps) {
    const styleCompositionFor = {
        h1: "text-2xl/tight sm:text-4xl",
        h2: "text-2xl/tight sm:text-4xl",
    };

    const commomStyle = "font-extrabold";
    return (
        <Link href={url}>
            <Tag className={clsx(styleCompositionFor[Tag], commomStyle)}>
                {children}
            </Tag>
        </Link>
    );
}
