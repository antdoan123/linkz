import '../styles/globals.css'

import Head from 'next/head'
import { AnimatePresence } from "framer-motion";

const MyApp = ({ Component, pageProps }) => {


  return (
    <>
      <Head>
        <title>Optimal Gym</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

            <Component {...pageProps} />

    </>
  )
}
export default MyApp