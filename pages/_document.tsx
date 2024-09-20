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

                <meta property="og:title" content="Делаем качественный маникюр и педикюр — Студия «Family Nails»"/>
                <meta property="og:description" content="Студия маникюра и педикюра &quot;Family Nails&quot; в Орле"/>
                <meta property="og:locale" content="ru_RU"/>
                <meta property="og:type" content="website"/>
                <meta property="og:image" content="/images/og-image.jpg"/>
                <meta property="og:image:width" content="1200"/>
                <meta property="og:image:height" content="630"/>
                <meta property="og:image:type" content="image/jpeg"/>
                <meta property="og:url" content="https://family-nails.ru/"/>
                <meta property="og:site_name" content="Family Nails"/>

                <Script id="yandex-metrika" strategy="lazyOnload" type="text/javascript" dangerouslySetInnerHTML={{
                    __html: `
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                ym(90639526, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
              });
      `
                }}>

                </Script>



                <Script id="recorder" dangerouslySetInnerHTML={{
                    __html: `'use strict';(function(){var t=function(){var r,e=document.createElement('script'),o=document.getElementsByTagName('script')[0];e.src='https://dev.fixspotter.com/files/scripts/recorder.js?uid=14',e.id='fixspotter-recorder',e.crossOrigin='anonymous',e.type='module',(r=o.parentNode)===null||r===void 0||r.insertBefore(e,o);};document.readyState==='complete'?t():window.addEventListener('load',t,!1);})();
      `
                }}>

                </Script>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
