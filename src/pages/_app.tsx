// src/pages/_app.tsx
import '../styles/globals.css'
import type { AppType } from 'next/app'
import { trpc } from '../utils/trpc'
import { AnimatePresence } from 'framer-motion'

const MyApp: AppType = ({ Component, pageProps, router }) => {
  return (
    <AnimatePresence mode='wait'>
      <Component
        {...pageProps}
        key={router.route}
      />
    </AnimatePresence>
  )
}

export default trpc.withTRPC(MyApp)
