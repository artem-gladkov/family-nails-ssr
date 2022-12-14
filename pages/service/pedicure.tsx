import type {NextPage} from 'next'
import {Preview} from "@widgets/preview";
import {Button, Container, PageLayout, Section, Title} from "@shared/ui";
import {Portfolio} from "@widgets/portfolio";
import {PRICE_LIST, PriceListGroup} from "@widgets/priceList";
import {ServiceDescription} from "@widgets/serviceDescription";
import servicePhoto from '/public/images/service/pedicure.jpg'
import previewPhoto from '/public/images/service/pedicure_preview.png'
import styles from './pedicure.module.scss'
import {PEDICURE_PORTFOLIO_LIST} from "../../public/images/portfolio/pedicure";

const Pedicure: NextPage = () => {
  const {title, items} = PRICE_LIST[1]

  return (
    <PageLayout
      pageTitle='Сделать модный педикюр в ногтевой студии "Family Nails" г Орел'
      description='Педикюр в Орле, обработка пяток, покрытие гель лак от ногтевой студии "Family Nails".
      Запись по телефону +7-(953)-476-21-21. Ежедневно с 9:00 до 21:00.'
    >
      <Preview
        className={styles.preview}
        previewTitle='Педикюр в Орле'
        photo={previewPhoto}
        description={<>Педикюр за 1600 ₽. Набор натуральной уходовой косметики <strong className={styles.accent}>В
          ПОДАРОК</strong> по промокоду
          <strong className={styles.accent}>&quot;ФН11&quot;</strong></>}
      />
      <ServiceDescription title='Педикюр' photo={servicePhoto}>
        <p>
          Педикюр - неотъемлемая часть образа женщины.
        </p>
        <p>
          Педикюр, как и красивое нижнее белье, его не всем видно, но он позволяет чувствовать себя увереннее.
          В нашей студии мастера позаботятся о ваших пальчиках на ногах.
        </p>
        <p>
          Педикюр делается в комбинированной технике, а обработка стоп в технике SMART.
        </p>
      </ServiceDescription>
      <Portfolio items={PEDICURE_PORTFOLIO_LIST}/>
      <Section className='ov-h'>
        <Container>
          <Title>Цены</Title>
          <PriceListGroup title={title} items={items}/>
          <Button className={styles.ctaButton} href="https://n445954.yclients.com" target="_blank">
            Записаться на педикюр
          </Button>
        </Container>
      </Section>
    </PageLayout>
  )
}

export default Pedicure
