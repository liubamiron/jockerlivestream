import Link from "next/link";

export default function Error() {
    return (
        <>
        <p className="text-white">
            Default page. Go to our <Link href={"/"}><a>home page</a></Link>
        </p>
        </>
    )
};