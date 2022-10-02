import type {NextPage} from 'next'
import {Preview} from "../widgets/preview";
import {Service} from "../widgets/service";
import {Advantages} from "../widgets/advantages";

import {Benefits} from '../widgets/benefits';
import {PriceList} from "../widgets/priceList";
import {Portfolio} from "../widgets/portfolio";
import {Offer} from '../widgets/offer';
import {AboutUs} from "../widgets/aboutUs";
import {Team} from "../widgets/team";
import {Contacts} from '../widgets/contacts';
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
