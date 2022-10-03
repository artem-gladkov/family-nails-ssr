import {FC} from 'react'
import styles from './Service.module.scss'
import {Container, Section, Title} from "@shared/ui";
import offer_manicure from '/public/images/offer_manicure.jpg'
import offer_pedicure from '/public/images/offer_pedicure.jpg'
import { ServiceItem, ServiceItemProps } from '../ServiceItem';

export const SERVICE_LIST: ServiceItemProps[] = [{
  key: '1',
  title: 'Маникюр',
  description: 'Красивые и ухоженные руки — главное украшение любой женщины. В ' +
    'FamilyNails вам помогут выбрать косметическую процедуру под ваши личные особенности.',
  href: '/manicure',
  photo: offer_manicure
}, {
  key: '2',
  title: 'Педикюр',
  description: 'Красивые и ухоженные ноги — главное украшение любой женщины. ' +
    'В FamilyNails вам помогут выбрать косметическую процедуру под ваши личные особенности.',
  href: '/pedicure',
  photo: offer_pedicure
}]

export interface ServiceProps {
}

export const Service: FC<ServiceProps> = ({}) => {
  return (
    <Section className={styles.service}>
      <div className={styles.body}>
        <Container>
          <Title type='green' className={styles.title}>Мы предлагаем</Title>
          <div className={styles.list}>
            {SERVICE_LIST.map(ServiceItem)}
          </div>
        </Container>
      </div>
    </Section>
  )
}

