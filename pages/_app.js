import '../styles/globals.css'
import Layout from '../Components/Navbar/Lauout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
