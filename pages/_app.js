import "../styles/globals.css";
import "../styles/Editor.scss";
import Layout from "../components/Layout/Layout";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faS } from "@fortawesome/free-solid-svg-icons";
import "prismjs/themes/prism.css";
import { ThemeProvider } from "@material-tailwind/react";
library.add(faS);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
