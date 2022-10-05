import type {NextPage} from 'next'
import {Preview} from "@widgets/preview";
import {Button, Container, PageLayout, Section, Title} from "@shared/ui";
import {Portfolio} from "@widgets/portfolio";
import { PriceListGroup, PriceListGroupProps} from "@widgets/priceList";
import {ServiceDescription} from '@widgets/serviceDescription';
import servicePhoto from '/public/images/service/repair.jpg'
import styles from './repair.module.scss'

const PRICE: PriceListGroupProps = {
  key: '1',
  title: 'Ремонт ногтей',
  items: [{
    key: '1',
    name: 'Восстановление архитектуры',
    price: '300 ₽'
  }, {
    key: '2',
    name: 'Ремонт (восстановление угла / трещина)',
    price: '100 ₽'
  }, {
    key: '3',
    name: 'Укрепление полигелем',
    price: '1 ноготь 25 ₽ / все ногти 250  ₽'
  }, {
    key: '4',
    name: 'Укрепление акриловой пудрой/гелем',
    price: '1 ноготь 100-300 ₽ / все ногти 1000-2500 ₽'
  },]
}

const Pedicure: NextPage = () => {
  return (
    <PageLayout pageTitle='Ремонт ногтей с салоне маникюра и педикюра Family Nails г Орел'>
      <Preview previewTitle='Ремонт ногтей в Орле'/>
      <ServiceDescription title='Ремонт ногтей' photo={servicePhoto}>
        <p>
          Восстановление формы ногтя, укрепление трещин, удаление несовершенства-всё это могут исправить мастера нашей
          студии с помощью ремонта.
        </p>
        <p>
          Крепкий искусственный материал позволяет исправить недосевы или поломки натурального
          ногтя и увеличить срок носки покрытия
        </p>
      </ServiceDescription>
      <Portfolio/>
      <Section className='ov-h'>
        <Container>
          <Title>Цены</Title>
          <PriceListGroup {...PRICE}/>
          <Button className={styles.ctaButton} href="https://n445954.yclients.com" target="_blank">
            Записаться на ремонт ногтей
          </Button>
        </Container>
      </Section>
    </PageLayout>
  )
}

export default Pedicure
