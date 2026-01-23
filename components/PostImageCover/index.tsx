import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

type PostImageCoverProps = {
    linkProps: React.ComponentProps<typeof Link>;
    imageProps: React.ComponentProps<typeof Image>;
};

export function PostImageCover({ linkProps, imageProps }: PostImageCoverProps) {
    return (
        <Link
            className={clsx(
                "w-full h-full overflow-hidden rounded-xl",
                linkProps.className
            )}
            {...linkProps}
        >
            <Image
                className={clsx(
                    "w-full h-full object-cover object-center group-hover:scale-105 transition",
                    imageProps.className
                )}
                {...imageProps}
                alt={imageProps.alt}
            />
        </Link>
    );
}
