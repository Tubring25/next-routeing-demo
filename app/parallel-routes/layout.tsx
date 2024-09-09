export default function ParallelRoutesLayout({
    children,
    team,
    analytics,
  }: {
    children: React.ReactNode
    analytics: React.ReactNode
    team: React.ReactNode
  }) {
    return (
      <>
        {children}
        <div className="flex text-center">
                <div className="w-1/2 p-4">
                    <h1 className="text-2xl font-bold mb-4">Team Side</h1>
                    {team}
                </div>
                <div className="w-1/2 p-4">
                    <h1 className="text-2xl font-bold mb-4">Analytics Side</h1>
                    {analytics}
                </div>
            </div>
      </>
    )
  }