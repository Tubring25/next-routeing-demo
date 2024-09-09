export default function DRNormalPage({ params }: { params: { slug: string } }) {
    return (
        <div className="text-center">
            Current Page is a Regulart Dynamic Route Page.
            <br />
            The param info is: {params.slug}
        </div>
    )
}