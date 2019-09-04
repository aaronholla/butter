import Link from 'next/link'

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a>Now Playing</a>
        </Link>
      </li>
      <li>
        <Link href="/movies">
          <a>All Movies</a>
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navbar