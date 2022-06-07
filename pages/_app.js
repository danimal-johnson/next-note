import react from "react";
import '../src/styles.css';

// This file is necessary for css styles to be included

export default function App({ Component, pageProps }) {
  return (<Component {...pageProps} />);
}
