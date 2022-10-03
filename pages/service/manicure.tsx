import type {NextPage} from 'next'
import {Preview} from "@widgets/preview";
import {Button, Container, PageLayout, Section, Title} from "@shared/ui";
import {Portfolio} from "@widgets/portfolio";
import {PRICE_LIST, PriceListGroup} from "@widgets/priceList";

const Manicure: NextPage = () => {
  const {title, items} = PRICE_LIST[1]

  return (
    <PageLayout pageName='Маникюр'>
      <Preview pageTitle='Маникюр в Орле'/>
      <Portfolio />
      <Section className='ov-h'>
        <Container>
          <Title>Цены</Title>
          <PriceListGroup title={title} items={items} />
          <Button href="https://n445954.yclients.com" target="_blank">
            Записаться на маникюр
          </Button>
        </Container>
      </Section>

    </PageLayout>
  )
}

export default Manicure
