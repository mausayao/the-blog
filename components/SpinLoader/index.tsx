import clsx from "clsx";

type SpinLoadreProps = {
    containderClasses?: string;
};

export function SpinLoader({ containderClasses = "" }: SpinLoadreProps) {
    const classes = clsx(
        "flex",
        "items-center",
        "justify-center",
        containderClasses
    );
    return (
        <div className={classes}>
            <div
                className={clsx(
                    "w-10 h-10",
                    "border-5 border-t-transparent border-slate-900",
                    "rounded-full",
                    "animate-spin"
                )}
            ></div>
        </div>
    );
}
