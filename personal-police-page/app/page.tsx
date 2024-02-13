import Image from 'next/image'
import Link from 'next/link'
import Navloginbar from './components/Navloginbar'

export default function Home() {
  return (
    <main>
      <Navloginbar />
      <h1>test</h1>
      <h1><Link href="/users">Users</Link></h1> {/* for later */}
    </main>
  )
}
