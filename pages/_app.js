import '../styles/globals.css'
import Layout from '../Components/Navbar/Lauout'
import DataProvider from '../Context/DataContext'
import Home from '.';
import NavbarHome from '../Components/Navbar/NavbarHome/NavbarHome';

function MyApp({ Component, pageProps }) {
  if (Component === Home) {
    console.log('in');
    return (
      <DataProvider>
        <NavbarHome />
        <Component {...pageProps} />
      </DataProvider>
    )
  }
  console.log('other');
  return (
    <DataProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DataProvider>
  )
}

export default MyApp
