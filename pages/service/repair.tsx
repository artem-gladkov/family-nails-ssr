import type {NextPage} from 'next'
import {Preview} from "@widgets/preview";
import {Button, Container, PageLayout, Section, Title} from "@shared/ui";
import {Portfolio} from "@widgets/portfolio";
import {PriceListGroup, PriceListGroupProps} from "@widgets/priceList";
import {ServiceDescription} from '@widgets/serviceDescription';
import servicePhoto from '/public/images/service/repair.jpg'
import styles from './repair.module.scss'

const PRICE: PriceListGroupProps = {
  key: '1',
  title: 'Ремонт ногтей',
  items: [{
    key: '1',
    name: 'Восстановление архитектуры',
    price: '500 ₽'
  }, {
    key: '2',
    name: 'Ремонт (восстановление угла / трещина)',
    price: '50 ₽ / 100 ₽'
  }, {
    key: '3',
    name: 'Укрепление полигелем',
    price: '200 ₽'
  }, {
    key: '4',
    name: 'Укрепление акриловой пудрой/гелем',
    price: 'Бесплатно'
  }]
}

const Pedicure: NextPage = () => {
  return (
    <PageLayout
      pageTitle='Ремонт ногтей в салоне маникюра и педикюра Family Nails г Орел'
      description='Ремонт ногтей в Орле, восстановление архитектуры, укрепление полигелем/акриловой пудрой/гелем
      в ногтевой студии "Family Nails". Онлайн запись и цены тут!'
    >
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
      <Section className='ov-h'>
        <Container>
          <Title>Цены</Title>
          <PriceListGroup {...PRICE}/>
          <Button
            className={styles.ctaButton}
            href='https://wa.me/79534762121?text=Здравствуйте, я бы хотела записаться на ремонт ногтей :)'
            target="_blank"
          >
            Записаться на ремонт в WhatsApp
          </Button>
        </Container>
      </Section>
    </PageLayout>
  )
}

export default Pedicure
