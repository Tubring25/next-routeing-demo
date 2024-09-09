export default function DROptCatchAllPage({ params }: { params: { slug?: string[] } }) {
    return (
        <div className="text-center">
            Current Page is Dynamic Route Page with Optional Catch-all Segments.
            <br />
            The param info is: {params.slug ? params.slug.join('/') : 'empty info'}
        </div>
    )
}