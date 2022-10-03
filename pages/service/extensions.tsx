import type {NextPage} from 'next'
import {Service} from "@widgets/service";
import {Button, Container, PageLayout, Section, Title} from "@shared/ui";
import {Preview} from "@widgets/preview";
import {Portfolio} from "@widgets/portfolio";
import {PRICE_LIST, PriceListGroup} from "@widgets/priceList";

const Extensions: NextPage = () => {
  const {title, items} = PRICE_LIST[4]

  return (
    <PageLayout pageName='Наращивание'>
      <Preview pageTitle='Наращивание в Орле'/>
      <Portfolio />
      <Section className='ov-h'>
        <Container>
          <Title>Цены</Title>
          <PriceListGroup title={title} items={items} />
          <Button href="https://n445954.yclients.com" target="_blank">
            Записаться на наращивание
          </Button>
        </Container>
      </Section>
    </PageLayout>
  )
}

export default Extensions
