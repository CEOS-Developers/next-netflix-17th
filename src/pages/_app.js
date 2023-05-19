import "@/styles/globals.css";
import { RecoilRoot } from "recoil";
import { useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import Navbar from "../../components/navbar/navbar";
import Layout from "../../components/layout";

export default function App({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());

  console.log("pageProps", pageProps);

  // https://tanstack.com/query/v4/docs/react/guides/ssr
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <RecoilRoot>
          <Layout>
            <Component {...pageProps} />
            <ReactQueryDevtools initialIsOpen={false} />
          </Layout>
          <Navbar />
        </RecoilRoot>
      </Hydrate>
    </QueryClientProvider>
  );
}
