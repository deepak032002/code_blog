import '../styles/globals.css'
import '../styles/Editor.scss'
import Layout from '../components/Layout/Layout'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faS } from '@fortawesome/free-solid-svg-icons'
library.add(faS)

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
