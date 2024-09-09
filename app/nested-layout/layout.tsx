import Link from "next/link";

export default function SubLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex bg-gray-100 h-full">
            {/* Sidebar */}
            <aside className='bg-base-200 w-64 space-y-6 py-7 px-2'>
                <nav>
                    <ul className="space-y-2">
                        <li><Link href="/nested-layout" className="block px-4 py-2 hover:bg-base-300 rounded">Admin</Link></li>
                        <li><Link href="/nested-layout/about" className="block px-4 py-2 hover:bg-base-300 rounded">About</Link></li>
                        <li><Link href="/nested-layout/contact" className="block px-4 py-2 hover:bg-base-300 rounded">Contact</Link></li>
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <header className="bg-white shadow-md">
                    <div className="max-w-7xl mx-auto py-4 px-4 flex justify-between items-center">
                        <h1 className="text-2xl font-semibold text-gray-900">Nested Layout Dashboard</h1>
                    </div>
                </header>
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                    <div className="container mx-auto px-6 py-8">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}