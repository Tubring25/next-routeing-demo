import Link from 'next/link'
import SharedComponent from './SharedComponent'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SharedComponent />
      <Link href='/post' className="text-2xl font-bold mb-4">Blog Home</Link>
      {children}
    </>
  )
}