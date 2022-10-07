import type {NextPage} from 'next'
import {Preview} from "@widgets/preview";
import {AboutUs} from "@widgets/aboutUs";
import {PageLayout} from "@shared/ui";
import {Contacts} from "@widgets/contacts";
import {Team} from "@widgets/team";
import {ServiceDescription} from "@widgets/serviceDescription";

import aboutUsPhoto from "public/images/og-image.jpg";

const AboutUsPage: NextPage = () => {
  return (
    <PageLayout
      pageTitle='Информация о салоне маникюра и педикюра "Family Nails" г Орел'
      description='Салон занимается широким спектром услуг ногтевой индустрии.
      Существует уже более двух лет, а также насчитывет более 3000 выполненных работ.'
    >
      <ServiceDescription
        title='О нас'
        photo={aboutUsPhoto}
      >
        <p>Family Nails - студия маникюра современного формата.</p>
        <p> Двери уютной студии в центре города всегда открыты для вас. Мы работаем по предварительной записи.</p>
        <p>
          Рады знакомству с вами, поэтому приглашаем вас на маникюр с покрытием гель-лак и дарим скидку на эту
          процедуру 300₽+снятие предыдущего покрытия в качестве бонуса за то,что вы выбираете нас.
        </p>
        <ul>
          Приходя к нам вы получаете:
          <li> Качественный маникюр по современным технологиям</li>
          <li> Широкий выбор цветов премиальной линейки материалов Luxio</li>
          <li> Стерильные инструменты и одноразовые расходные материалы</li>
          <li> Теплую и уютную атмосферу</li>
          <li> Особое отношение к каждому клиенту и гарантию качества</li>
          <li> Студия Family Nails больше, чем хороший маникюр, это семья!</li>
        </ul>
        <p>К нам хочется возвращаться, запишитесь !</p>
      </ServiceDescription>
      <AboutUs/>
      <Team/>
      <Contacts hasMap/>
    </PageLayout>
  )
}

export default AboutUsPage
