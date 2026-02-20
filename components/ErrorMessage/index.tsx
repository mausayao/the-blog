import clsx from "clsx";

type ErroMessageProps = {
    title: string;
    titleContent: string;
    content: string;
};
export function ErroMessage({
    title,
    titleContent,
    content,
}: ErroMessageProps) {
    return (
        <>
            <title>{title}</title>
            <div
                className={clsx(
                    "min-h-80 bg-slate-900 text-slate-100",
                    "mb-16 p-8 rounded-xl",
                    "flex items-center justify-center"
                )}
            >
                <div>
                    <h1 className="text-7xl/tight mb-4 font-extrabold text-center">
                        {titleContent}
                    </h1>
                    <p>{content}</p>
                </div>
            </div>
        </>
    );
}
