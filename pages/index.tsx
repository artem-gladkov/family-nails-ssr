import type {NextPage} from 'next'
import Head from 'next/head'
import {Header} from "../features/header";
import {Footer} from "../features/footer";
import {Preview} from "../features/preview";
import {Service} from "../features/service";
import {Advantages} from "../features/advantages";

import { Benefits } from '@features/benefits';
import {PriceList} from "../features/priceList";
import {Portfolio} from "../features/portfolio";
import { Offer } from '@features/offer';
import {AboutUs} from "../features/aboutUs";
import {Team} from "../features/team";
import { Contacts } from '@features/contacts';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
        <meta property="description" content="Студия маникюра и педикюра &quot;Family Nails&quot; в Орле"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
        <meta property="og:locale" content="ru_RU"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Делаем качественный маникюр и педикюр — Студия «Family Nails»"/>
        <meta property="og:description" content="Студия маникюра и педикюра &quot;Family Nails&quot; в Орле"/>
        <meta property="og:url" content="https://family-nails.ru/"/>
        <meta property="og:site_name" content="Family Nails"/>
        <meta name="yandex-verification" content="d0513e8f012f5db8"/>
        <meta name="google-site-verification" content="mVZ-aF0dGRCqS7zMeNgQp9OooluT6RqaNJwe4wWW9VI"/>
        <link rel="apple-touch-icon" sizes="180x180" href="../app/images/favicons/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="../app/images/favicons/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="../app/images/favicons/favicon-16x16.png"/>
        <link rel="mask-icon" href="../app/images/favicons/safari-pinned-tab.svg" color="#5bbad5"/>
        <title>Family Nails — Студия маникюра и педикюра</title>
      </Head>

      <Header/>
      <Preview pageTitle={<>Ногтевая студия <br/> Family Nail&apos;s</>}/>
      <Service />
      <Advantages />
      <Benefits />
      <PriceList />
      <Portfolio />
      <Offer title='Акция “Первый визит - Педикюр”' subtitle='Профессиональный педикюр за 1300 ₽ вместо 1600 ₽'/>
      <AboutUs />
      <Team />
      <Offer title='В 4 руки' subtitle='Профессиональный маникюр + педикюр = 2 часа ( вместо 4 )'/>
      <Contacts />
      <Footer/>
    </>
  )
}

export default Home
