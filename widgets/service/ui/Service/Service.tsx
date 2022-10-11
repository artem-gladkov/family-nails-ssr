import {FC} from 'react'
import styles from './Service.module.scss'
import {Button, Container, Section, Title} from "@shared/ui";
import manicurePhoto from '/public/images/service/manicure.jpg'
import pedicurePhoto from '/public/images/service/pedicure.jpg'
import designsPhoto from '/public/images/service/designs.jpg'
import extensionsPhoto from '/public/images/service/extensions.jpg'
import repairPhoto from '/public/images/service/repair.jpg'

import {ServiceItem, ServiceItemProps} from '../ServiceItem';

export const SERVICE_LIST: ServiceItemProps[] = [{
  key: '1',
  title: 'Маникюр',
  description: 'Красивые и ухоженные руки — главное украшение любой женщины. ' +
    'В Family Nail’s вам помогут сделать ваш образ эффектнее и подберут цвет и дизайн, опираясь на ваши предпочтения.',
  href: '/service/manicure',
  photo: manicurePhoto
}, {
  key: '2',
  title: 'Педикюр',
  description: 'Педикюр, как и красивое нижнее белье, его не всем видно, но он позволяет чувствовать себя увереннее. ' +
    'В нашей студии мастера позаботятся о ваших пальчиках на ногах.',
  href: '/service/pedicure',
  photo: pedicurePhoto
}, {
  key: '3',
  title: 'Наращивание ногтей',
  description: 'Наращивание ногтей — это быстрый способ сделать желаемую форму и длину. ' +
    'А также настоящее спасение для тех, кто обладателей тонкой и ломкой ногтевой пластиной.',
  href: '/service/extensions',
  photo: extensionsPhoto
}, {
  key: '4',
  title: 'Дизайн ногтей',
  description: 'Дизайн ногтей — это возможность проявить свою индивидуальность и подчеркнуть особенности образа. ' +
    'Наклейки, стемпинг, фольга, втирки, ручная роспись, стразы — всё это поможет вам и нашим мастерам создать ваш маникюр мечты.',
  href: '/service/designs',
  photo: designsPhoto
}, {
  key: '5',
  title: 'Ремонт ногтей',
  description: 'Восстановление формы ногтя, укрепление трещин, удаление несовершенства — ' +
    'всё это могут исправить мастера нашей студии с помощью ремонта за совсем низкую цену.',
  href: '/service/repair',
  photo: repairPhoto
}]

const SHORT_SERVICE_LIST = SERVICE_LIST.slice(0, 2)

export interface ServiceProps {
  type?: 'short' | 'full'
}

export const Service: FC<ServiceProps> = ({type = 'full'}) => {
  return (
    <Section className={styles.service}>
      <div className={styles.body}>
        <Container>
          <Title type='green' className={styles.title}>Услуги</Title>
          <div className={styles.list}>
            {
              type === 'short'
                ? <>
                  {SHORT_SERVICE_LIST.map(ServiceItem)}
                  <Button href='/service' skin='text'>Все услуги</Button>
                </>
                : SERVICE_LIST.map(ServiceItem)
            }
          </div>
        </Container>
      </div>
    </Section>
  )
}

