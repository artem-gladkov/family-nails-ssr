import {FC} from 'react'
import styles from './Service.module.scss'
import {Container, Section, Title} from "@shared/ui";
import manicurePhoto from '/public/images/service/manicure.jpg'
import pedicurePhoto from '/public/images/service/pedicure.jpg'
import designsPhoto from '/public/images/service/designs.jpg'
import extensionsPhoto from '/public/images/service/extensions.jpg'
import repairPhoto from '/public/images/service/repair.jpg'

import { ServiceItem, ServiceItemProps } from '../ServiceItem';

export const SERVICE_LIST: ServiceItemProps[] = [{
  key: '1',
  title: 'Маникюр',
  description: 'Красивые и ухоженные руки — главное украшение любой женщины. В ' +
    'FamilyNails вам помогут выбрать косметическую процедуру под ваши личные особенности.',
  href: '/service/manicure',
  photo: manicurePhoto
}, {
  key: '2',
  title: 'Педикюр',
  description: 'Красивые и ухоженные ноги — главное украшение любой женщины. ' +
    'В FamilyNails вам помогут выбрать косметическую процедуру под ваши личные особенности.',
  href: '/service/pedicure',
  photo: pedicurePhoto
}, {
  key: '3',
  title: 'Наращивание ногтей',
  description: 'Наращивание ногтей лбюбомй сложности.' +
    'В FamilyNails вам помогут выбрать косметическую процедуру под ваши личные особенности.',
  href: '/service/extensions',
  photo: extensionsPhoto
}, {
  key: '4',
  title: 'Дизайн ногтей',
  description: 'У нас вы можете создать свой уникальный дизайн. Слайдеры, стемпинг или ручная роспись в акварельной технике и текстуре.',
  href: '/service/designs',
  photo: designsPhoto
}, {
  key: '5',
  title: 'Ремонт ногтей',
  description: 'Совсем недорого. В FamilyNails вам помогут выбрать косметическую процедуру под ваши личные особенности.',
  href: '/service/repair',
  photo: repairPhoto
}]

export interface ServiceProps {
}

export const Service: FC<ServiceProps> = ({}) => {
  return (
    <Section className={styles.service}>
      <div className={styles.body}>
        <Container>
          <Title type='green' className={styles.title}>Услуги</Title>
          <div className={styles.list}>
            {SERVICE_LIST.map(ServiceItem)}
          </div>
        </Container>
      </div>
    </Section>
  )
}

