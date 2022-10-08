import type {NextPage} from 'next'
import {Preview} from "@widgets/preview";
import {Button, Container, PageLayout, Section, Title} from "@shared/ui";
import {Portfolio} from "@widgets/portfolio";
import {PRICE_LIST, PriceListGroup} from "@widgets/priceList";

import styles from './manicure.module.scss'
import {ServiceDescription} from "@widgets/serviceDescription";
import photo from '/public/images/service/manicure.jpg'

const Manicure: NextPage = () => {
  const {title, items} = PRICE_LIST[1]

  return (
    <PageLayout
      pageTitle='Сделать модный маникюр в ногтевой студии "Family Nails" г Орел'
      description='Комбинированный маникюр в Орле, а также снятие, обработка и покрытие гель лак.
      Узнать цены и записаться онлайн можно тут или по телефону +7-(953)-476-21-21.'
    >
      <Preview previewTitle='Маникюр в Орле' className={styles.preview}/>
      <ServiceDescription title='Маникюр' photo={photo}>
        <p>
          Красивые и ухоженные руки- главное украшение любой женщины. В Family Nail’s вам помогут сделать ваш образ
          эффектнее и подберут цвет и дизайн, опираясь на ваши предпочтения.
        </p>
        <p>
          Мастера студии всегда внимательны к вашей красоте и готовы сделать модный маникюр с заботой о вашем
          здоровье.
        </p>
        <p>
          В студии работают в комбинированной технике, которая является универсальной и позволяет сделать чистую
          обработку на любой тип кожи.
        </p>
        <p>
          Покрытие только современными материалами позволяет подчеркнуть индивидуальность и достичь желаемого
          эффекта.
        </p>
      </ServiceDescription>
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
