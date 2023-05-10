import "@/styles/globals.css";
import Navbar from "../../components/navbar/navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="mainContainer">
        <Component {...pageProps} />
      </div>
      <Navbar />
    </>
  );
}
