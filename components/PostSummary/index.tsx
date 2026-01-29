import { formatDateTime } from "@/utils/format-datetime";
import { PostHeader } from "../PostHeader";

type PostSummaryProps = {
    postHeading: "h1" | "h2";
    postLink: string;
    title: string;
    createdAt: string;
    excerpt: string;
};

export function PostSummary({
    title,
    createdAt,
    excerpt,
    postHeading,
    postLink,
}: PostSummaryProps) {
    return (
        <div className="flex flex-col gap-4 sm:justify-center">
            <time
                className="text-slate-600 block text-sm/tight"
                dateTime={formatDateTime(createdAt)}
            >
                {formatDateTime(createdAt)}
            </time>
            <PostHeader url={postLink} as={postHeading}>
                {title}
            </PostHeader>
            <p>{excerpt}</p>
        </div>
    );
}
