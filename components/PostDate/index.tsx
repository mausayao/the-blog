import { formatDateTime } from "@/utils/format-datetime";

type PostDateProps = {
    createdAt: string;
};

export function PostDate({ createdAt }: PostDateProps) {
    return (
        <time
            className="text-slate-600 text-sm/tight"
            dateTime={formatDateTime(createdAt)}
        >
            {formatDateTime(createdAt)}
        </time>
    );
}
