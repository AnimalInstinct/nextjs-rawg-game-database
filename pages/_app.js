import { ThemeProvider } from 'styled-components'
import * as theme from '../config/theme'
import './app.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
