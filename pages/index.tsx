import type {NextPage} from 'next'
import {Preview} from "@widgets/preview";
import {Service} from "@widgets/service";
import {Advantages} from "@widgets/advantages";

import {Benefits} from '@widgets/benefits';
import {PriceList} from "@widgets/priceList";
import {Portfolio} from "@widgets/portfolio";
import {Offer} from '@widgets/offer';
import {AboutUs} from "@widgets/aboutUs";
import {Team} from "@widgets/team";
import {Contacts} from '@widgets/contacts';
import {PageLayout} from "@shared/ui";
import {httpClient} from "@shared/api/http-client";

const Home: NextPage = () => {
  return (
    <PageLayout
      pageTitle='Салон маникюра и педикюра "Family Nails" г Орел'
      description='Наша студия расположена в самом центре Советского района.
      Приходите к нам, и мы порадуем вас приятными ценами и уютной атмосферой. Запись по номеру +7-(953)-476-21-21'
    >
      <Preview previewTitle={<>Ногтевая студия <br/> Family Nail&apos;s</>}/>
      <Service type='short'/>
      <Advantages/>
      <Benefits/>
      <PriceList/>
      <Portfolio/>
      <Offer
        title='Подарок по промокоду "ФН11"'
        subtitle='Сообщи о промокоде во время первой записи и получи набор натуральной уходовой косметики в подарок.'
        text='Все подробности уточнайте у администратора'
        isWhatsapp
      />
      <AboutUs/>
      <Team type='short'/>
      <Offer title='В 4 руки' subtitle='Профессиональный маникюр + педикюр = 2 часа ( вместо 4 )'/>
      <Contacts/>
    </PageLayout>
  )
}

export default Home
