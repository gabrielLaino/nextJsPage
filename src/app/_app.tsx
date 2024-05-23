import type { AppProps } from 'next/app'
 
export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
    <h1>ola</h1>
    <Component {...pageProps} />
  </>
)
}