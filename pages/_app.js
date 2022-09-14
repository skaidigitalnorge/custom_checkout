import { domAnimation, LazyMotion } from "framer-motion";

import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <LazyMotion features={domAnimation}>
      <Component {...pageProps} />
    </LazyMotion>
  );
}

export default MyApp;
