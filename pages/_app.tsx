import Head from 'next/head';
import '@styles/globals.css';
import { AppProps } from 'next/app';
import { NextWebVitalsMetric } from 'next/app';

export function reportWebVitals(metric: NextWebVitalsMetric) {
  metric.label === "web-vital" && console.log(metric);
}

const defaults = {
  title: "Zoneminder",
  descripton: "",
  keywords: "",
  themeColor: "#317EFB"
};

export default ({ Component, pageProps }: AppProps) =>
(
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <meta name="description" content={defaults.descripton} />
      <meta name="keywords" content={defaults.keywords} />
      <title>{defaults.title}</title>

      <link rel="manifest" href="/manifest.json" />
      <link
        href="/icons/favicon-16x16.png"
        rel="icon"
        type="image/png"
        sizes="16x16"
      />
      <link
        href="/icons/favicon-32x32.png"
        rel="icon"
        type="image/png"
        sizes="32x32"
      />
      <link rel="apple-touch-icon" href="/apple-icon.png"></link>
      <meta name="theme-color" content={defaults.themeColor} />
    </Head>
    <Component {...pageProps} />
  </>
);