import "@/styles/globals.css";
import { RecoilRoot } from "recoil";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import Navbar from "../../components/navbar/navbar";
import Layout from "../../components/layout";

export default function App({ Component, pageProps }) {
  // useState lazy init을 사용해 QueryClient 인스턴스 생성
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </Layout>
        <Navbar />
      </RecoilRoot>
    </QueryClientProvider>
  );
}
