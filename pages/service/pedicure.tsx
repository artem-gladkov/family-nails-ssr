import type {NextPage} from 'next'
import {Preview} from "@widgets/preview";
import {Service} from "@widgets/service";
import {Button, Container, PageLayout, Section, Title} from "@shared/ui";
import {Portfolio} from "@widgets/portfolio";
import {PRICE_LIST, PriceListGroup} from "@widgets/priceList";

const Pedicure: NextPage = () => {
  const {title, items} = PRICE_LIST[2]

  return (
    <PageLayout pageName='Педикюр'>
      <Preview pageTitle='Педикюр в Орле'/>
      <Portfolio />
      <Section className='ov-h'>
        <Container>
          <Title>Цены</Title>
          <PriceListGroup title={title} items={items} />
          <Button href="https://n445954.yclients.com" target="_blank">
            Записаться на педикюр
          </Button>
        </Container>
      </Section>
    </PageLayout>
  )
}

export default Pedicure
