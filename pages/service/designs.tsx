import type {NextPage} from 'next'
import {Service} from "@widgets/service";
import {Button, Container, PageLayout, Section, Title} from "@shared/ui";
import {Preview} from "@widgets/preview";
import {Portfolio} from "@widgets/portfolio";
import {PRICE_LIST, PriceListGroup} from "@widgets/priceList";

const Designs: NextPage = () => {
  const {title, items} = PRICE_LIST[5]

  return (
    <PageLayout pageName='Дизайны'>
      <Preview pageTitle='Дизайны ногтей в Орле'/>
      <Portfolio />
      <Section className='ov-h'>
        <Container>
          <Title>Цены</Title>
          <PriceListGroup title={title} items={items} />
          <Button href="https://n445954.yclients.com" target="_blank">
            Записаться на дизайн ногтей
          </Button>
        </Container>
      </Section>
    </PageLayout>
  )
}

export default Designs
