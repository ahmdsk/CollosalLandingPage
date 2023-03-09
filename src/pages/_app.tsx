import '@/styles/globals.css'
import { AppContext, initialState } from '@/utils/context'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContext.Provider value={initialState}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  )
}
