export default function DRCatchAllPage({ params }: { params: { slug: string[] } }) {
    return (
        <div className="text-center">
            Current Page is Dynamic Route Page with Catch-all Segments.
            <br />
            The param info is: {params.slug.join('/')}
        </div>
    )
}