import Head from 'next/Head'
import Navbar from './Navbar'

const Layout = ({ children, title = "Butter", description = "Find what movies have end credit scenes" }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name="Description" content={description} />
    </Head>
    <Navbar />
    <main>
      {children}
    </main>
  </>
)

export default Layout