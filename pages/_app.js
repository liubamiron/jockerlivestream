
// add bootstrap css and bootstrap js
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/global.css'
import Head from 'next/head';
import Layout from "../components/Layout";

import { useEffect } from 'react';


export default function MyApp({ Component, pageProps }) {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min");
    }, []);
    
    return (
        <>
        <Head>
   <meta name="viewport" content="width=device-width, initial-scale=1" />
</Head>
    <Layout>
         <Component {...pageProps} />
    </Layout>
         </>
         );  
}

