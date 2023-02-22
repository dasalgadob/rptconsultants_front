import React from 'react'
import '@/styles/globals.css'
import 'antd/dist/reset.css';
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import axios from 'axios'

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  return <QueryClientProvider client={queryClient}>
    <Component {...pageProps} />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
}
