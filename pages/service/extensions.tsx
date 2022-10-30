import type {NextPage} from 'next'
import {Button, Container, PageLayout, Section, Title} from "@shared/ui";
import {Preview} from "@widgets/preview";
import {Portfolio} from "@widgets/portfolio";
import {PRICE_LIST, PriceListGroup} from "@widgets/priceList";
import {ServiceDescription} from "@widgets/serviceDescription";
import servicePhoto from "/public/images/service/extensions.jpg";

import styles from './extensions.module.scss'
import {EXTENSIONS_PORTFOLIO_LIST} from "../../public/images/portfolio/extensions";

const Extensions: NextPage = () => {
  const {title, items} = PRICE_LIST[3]

  return (
    <PageLayout
      pageTitle='Услуги по наращиванию ногтей в студии маникюра и педикюра "Family Nails" г Орел'
      description='Наращивание ногтей гелем в Орле, цены и фото выполненных работ на этом сайте.
      Онлайн запись 24/7 или по телефону +7-(953)-476-21-21. Ежедневно с 09:00 до 21:00'
    >
      <Preview previewTitle='Наращивание ногтей в Орле'/>
      <ServiceDescription title='Наращивание ногтей' photo={servicePhoto}>
        <p>
          Быстрый способ сделать желаемую форму и длину является наращивание.
        </p>
        <p>
          Современные техники и материалы позволяют не ждать пока отрастет свой ноготь,
          а смоделировать его искусственным материалом путём наложения поверх натурального.
        </p>
        <p>
          Это настоящее спасение для тех, кто желает длинные ногти здесь и сейчас или хочет исправить
          несовершенство натуральных ногтей, а так же для обладателей тонкой и ломкой ногтевой пластины.
        </p>

      </ServiceDescription>
      <Portfolio items={EXTENSIONS_PORTFOLIO_LIST}/>
      <Section className='ov-h'>
        <Container>
          <Title>Цены</Title>
          <PriceListGroup title={title} items={items}/>
          <Button className={styles.ctaButton} href="https://n445954.yclients.com" target="_blank">
            Записаться на наращивание
          </Button>
        </Container>
      </Section>
    </PageLayout>
  )
}

export default Extensions
