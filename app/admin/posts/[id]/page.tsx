export const dynamic = "force-dynamic";

type AdminPostIdPageProps = {
    params: Promise<{ id: String }>;
};

export default async function AdminPostIdPage({
    params,
}: AdminPostIdPageProps) {
    const { id } = await params;

    return <div> AdminPostIdPage </div>;
}
