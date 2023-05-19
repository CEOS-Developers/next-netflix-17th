import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import Seo from '@/components/Seo';
// import Layout from '@/components/Layout';
import localFont from 'next/font/local';
import NavBar from '@/components/NavBar';
import { usePathname } from 'next/navigation';

const myFont = localFont({
  src: '../assets/sanfranciscodisplay-regular-webfont.woff',
});

const App = ({ Component, pageProps }: AppProps) => {
  const pathname = usePathname();
  const isLandigPage = pathname === '/';

  return (
    <div className={`${myFont.className} container`}>
      <Seo title="넷플릭스" />
      <Component {...pageProps} />
      {!isLandigPage && <NavBar />}

      <style jsx>{`
        .container {
          width: 100%;
          height: ${isLandigPage ? '100%' : 'calc(100% - 64px)'};
        }
      `}</style>
    </div>
  );
};

export default App;
