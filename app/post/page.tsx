import Link from "next/link";

export default function PostPage() {

    const posts = [
        { title: 'Post1', slug: '1' },
        { title: 'Post2', slug: '2' },
        { title: 'Post3', slug: '3' }
    ]

    return (
        <div className="container mx-auto px-4 py-4">
            <h2 className="text-xl font-bold mb-4">Recent Blog Posts</h2>
            <div className="grid gap-4 grid-cols-3">
                {posts.map(post => (
                    <div key={post.slug} className="bg-base-100 border-2 p-4 hover:border-amber-400">
                        <h3 className="flex justify-between items-center">
                            <span>{post.title}</span>
                            <Link href={`/post/${post.slug}`} className="btn btn-primary btn-sm">
                                Read
                            </Link>
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    )
}