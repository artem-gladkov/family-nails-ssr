import {Html, Head, Main, NextScript} from 'next/document'
import Script from 'next/script'

export default function Document() {

  return (
    <Html lang="ru">
      <Head>
        <meta name="yandex-verification" content="d0513e8f012f5db8"/>
        <meta name="google-site-verification" content="mVZ-aF0dGRCqS7zMeNgQp9OooluT6RqaNJwe4wWW9VI"/>

        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicons/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicons/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicons/favicon-16x16.png"/>
        <link rel="mask-icon" href="/images/favicons/safari-pinned-tab.svg" color="#5bbad5"/>

        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
        <meta property="og:locale" content="ru_RU"/>
        <meta property="og:type" content="website"/>

        <Script id="yandex-metrika" strategy="afterInteractive" type="text/javascript" dangerouslySetInnerHTML={{
          __html: `
         (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

          ym(90639526, "init", {
          clickmap:true,
          trackLinks:true,
          accurateTrackBounce:true
        })
        `
        }}>
        </Script>

        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/90639526" style={{position: 'absolute', left: '-9999px'}} alt=""/>
          </div>
        </noscript>

      </Head>
      <body>
      <Main/>
      <NextScript/>
      </body>
    </Html>
  )
}
