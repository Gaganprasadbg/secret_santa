import LayoutComponent from '@/components/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
<LayoutComponent>
  <Component {...pageProps} />
  </LayoutComponent>
  )
  
}
