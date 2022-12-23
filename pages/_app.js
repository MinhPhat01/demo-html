import ComponentThemeProvider from "../hocs/ThemeProvider";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ComponentThemeProvider>
      <Component {...pageProps} />
    </ComponentThemeProvider>
  );
}
