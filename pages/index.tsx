import type {NextPage} from 'next'
import {Preview} from "@features/preview";
import {Service} from "@features/service";
import {Advantages} from "@features/advantages";

import {Benefits} from '@features/benefits';
import {PriceList} from "@features/priceList";
import {Portfolio} from "@features/portfolio";
import {Offer} from '@features/offer';
import {AboutUs} from "@features/aboutUs";
import {Team} from "@features/team";
import {Contacts} from '@features/contacts';
import {PageLayout} from "@shared/ui";

const Home: NextPage = () => {
  return (
    <PageLayout>
      <Preview pageTitle={<>Ногтевая студия <br/> Family Nail&apos;s</>}/>
      <Service/>
      <Advantages/>
      <Benefits/>
      <PriceList/>
      <Portfolio/>
      <Offer title='Акция “Первый визит - Педикюр”' subtitle='Профессиональный педикюр за 1300 ₽ вместо 1600 ₽'/>
      <AboutUs/>
      <Team/>
      <Offer title='В 4 руки' subtitle='Профессиональный маникюр + педикюр = 2 часа ( вместо 4 )'/>
      <Contacts/>
    </PageLayout>
  )
}

export default Home
