import Navbar from '@/components/Navbar';
import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import '@/styles/globals.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Navbar />
      <Component {...pageProps} />
      <ToastContainer />
    </SessionProvider>
  );
};

export default App;