import "@/styles/globals.css";
import { RecoilRoot } from "recoil";
import Navbar from "../../components/navbar/navbar";

export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <div className="mainContainer">
        <Component {...pageProps} />
      </div>
      <Navbar />
    </RecoilRoot>
  );
}
