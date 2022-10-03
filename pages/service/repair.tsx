import type {NextPage} from 'next'
import {Preview} from "@widgets/preview";
import {Service} from "@widgets/service";
import {Button, Container, PageLayout, Section, Title} from "@shared/ui";
import {Portfolio} from "@widgets/portfolio";
import {PRICE_LIST, PriceItem, PriceListGroup, PriceListGroupProps} from "@widgets/priceList";

const PRICE: PriceListGroupProps = {
  key: '1',
  title: 'Ремонт ногтей',
  items: [{
    key: '1',
    name: 'Восстановление архитектуры',
    price: '300 ₽'
  },{
    key: '2',
    name: 'Ремонт (восстановление угла / трещина)',
    price: '100 ₽'
  },{
    key: '3',
    name: 'Укрепление полигелем',
    price: '1 ноготь 25 ₽ / все ногти 250  ₽'
  },{
    key: '4',
    name: 'Укрепление акриловой пудрой/гелем',
    price: '1 ноготь 100-300 ₽ / все ногти 1000-2500 ₽'
  },]
}

const Pedicure: NextPage = () => {

  return (
    <PageLayout pageName='Ремонт ногтей'>
      <Preview pageTitle='Ремонт ногтей в Орле'/>
      <Portfolio/>
      <Section className='ov-h'>
        <Container>
          <Title>Цены</Title>
          <PriceListGroup {...PRICE}/>
          <Button href="https://n445954.yclients.com" target="_blank">
            Записаться на ремонт ногтей
          </Button>
        </Container>
      </Section>
    </PageLayout>
  )
}

export default Pedicure
