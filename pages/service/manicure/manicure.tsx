import type {NextPage} from 'next'
import {Preview} from "@widgets/preview";
import {Button, Container, PageLayout, Section, Title} from "@shared/ui";
import {Portfolio} from "@widgets/portfolio";
import {PRICE_LIST, PriceListGroup} from "@widgets/priceList";

import styles from './manicure.module.scss'

const Manicure: NextPage = () => {
  const {title, items} = PRICE_LIST[1]

  return (
    <PageLayout pageName='Маникюр'>
      <Preview pageTitle='Маникюр в Орле'/>
      <Container>
        <h2 className={styles.title}>Маникюр</h2>
        <p className={styles.paragraph}> Красивые и ухоженные руки- главное украшение любой женщины. В Family Nail’s вам
          помогут сделать ваш образ
          эффектнее и подберут цвет и дизайн, опираясь на ваши предпочтения.
        </p>
        <p className={styles.paragraph}>
          Мастера студии всегда внимательны к вашей красоте и готовы сделать модный маникюр с заботой о вашем
          здоровье.
        </p>
        <p className={styles.paragraph}>
          В студии работают в комбинированной технике, которая является универсальной и позволяет сделать чистую
          обработку на любой тип кожи.
        </p>
        <p className={styles.paragraph}>
          Покрытие только современными материалами позволяет подчеркнуть индивидуальность и достичь желаемого эффекта.
        </p>

      </Container>
      <Portfolio/>
      <Section className='ov-h'>
        <Container>
          <Title>Цены</Title>
          <PriceListGroup title={title} items={items}/>
          <Button className={styles.ctaButton} href="https://n445954.yclients.com" target="_blank">
            Записаться на маникюр
          </Button>
        </Container>
      </Section>

    </PageLayout>
  )
}

export default Manicure
