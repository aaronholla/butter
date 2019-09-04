import Link from 'next/link'

const Navbar = () => (
  <nav>
    <ul>
      <Link href="/">
        <a>Now Playing</a>
      </Link>
      <Link href="/movies">
        <a>All Movies</a>
      </Link>
    </ul>
  </nav>
)

export default Navbar