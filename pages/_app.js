import '../styles/globals.css'
import Layout from '../Components/Navbar/Lauout'
import DataProvider from '../Context/DataContext'

function MyApp({ Component, pageProps }) {

  return (
    <DataProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DataProvider>
  )
}

export default MyApp
