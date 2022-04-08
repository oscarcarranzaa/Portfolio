import { I18nProvider } from '../context/i18nContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
      <I18nProvider>
        <Component {...pageProps} />
      </I18nProvider>
    )
}

export default MyApp
