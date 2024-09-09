import SharedComponent from './SharedComponent'

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div className="flex">
                <div className="w-1/2 p-4">
                    <h1 className="text-2xl font-bold mb-4">Template Side</h1>
                    {children}
                </div>
                <div className="w-1/2 p-4">
                    <h1 className="text-2xl font-bold mb-4">Layout Side</h1>
                    <SharedComponent />
                </div>
            </div>
        </>
    )
}