import type {NextPage} from 'next'
import {Button, Container, PageLayout, Section, Title} from "@shared/ui";
import {Preview} from "@widgets/preview";
import {Portfolio} from "@widgets/portfolio";
import {PRICE_LIST, PriceListGroup} from "@widgets/priceList";
import servicePhoto from "public/images/service/designs.jpg";
import servicePreviewPhoto from "public/images/service/designs_preview.webp";
import {ServiceDescription} from "@widgets/serviceDescription";
import styles from './designs.module.scss'
import {DESIGNS_PORTFOLIO_LIST} from "public/images/portfolio/designs";

const Designs: NextPage = () => {
  const {title, items} = PRICE_LIST[4]

  return (
    <PageLayout
      pageTitle='Сделать дизайн ногтей в салоне маникюра и педикюра "Family Nails" г Орел'
      description='Уникальный дизайн ногтей в Орле, наклейки, стемпинг, фольга, втирки, ручная роспись, стразы.
       Цены и фото выполненных работ на этом сайте!'
    >
      <Preview
        className={styles.preview}
        previewTitle={<>Дизайн ногтей <br/> в Орле</>} photo={servicePreviewPhoto}
        description={'Воплоти в жизнь свой уникальный дизайн!'}
      />
      <ServiceDescription title='Дизайн ногтей' photo={servicePhoto}>
        <p>
          Дизайн ногтей — это возможность проявить свою индивидуальность и подчеркнуть особенности образа.
        </p>
        <p>
          Модный маникюр — это не всегда однотонное покрытие, это может быть интересный принт или французский маникюр,
          который тоже считается дизайном.
        </p>
        <p>
          Наклейки, стемпинг, фольга, втирки, ручная роспись, стразы — всё это помогает мастерам
          сделать маникюр мечты для наших клиентов.
        </p>
      </ServiceDescription>
      <Portfolio items={DESIGNS_PORTFOLIO_LIST}/>
      <Section className='ov-h'>
        <Container>
          <Title>Цены</Title>
          <PriceListGroup title={title} items={items} priceColumnName={'1 ноготь / все ногти'}/>
          <Button className={styles.ctaButton} href="https://n445954.yclients.com" target="_blank">
            Записаться на дизайн ногтей
          </Button>
        </Container>
      </Section>
    </PageLayout>
  )
}

export default Designs
