import {FC, HTMLProps} from 'react'
import classNames from 'classnames'

import styles from './AboutUs.module.scss'
import {AnimatedNumber, Container, Logo, Section, Title} from '@shared/ui'

const ITEMS: ItemProps[] = [{
  key: '1',
  number: 3000,
  description: 'выполненных работ'
}, {
  key: '2',
  number: 250,
  description: 'отзывов довольных клиентов'
}, {
  key: '3',
  number: 24,
  description: 'месяца успешной работы'
},]

export interface AboutUsProps extends HTMLProps<any> {
}

export const AboutUs: FC<AboutUsProps> = ({className, children, ...otherProps}) => {
  return (
    <Section className={classNames(styles.aboutUs, className)} {...otherProps}>
      <Container>
        <Title>Мы в цифрах</Title>
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <Logo width={356} height={166}/>
            <span className={styles.separator}>это</span>
          </div>
          <div className={styles.list}>
            {ITEMS.map(Item)}
          </div>
        </div>
      </Container>
    </Section>
  )
}

interface ItemProps {
  number: number
  description: string
  key?: string
}

const Item: FC<ItemProps> = ({key, number, description}) => {
  return (
    <div key={key} className={styles.item}>
      <AnimatedNumber className={styles.number} number={number} duration={1} />
      <div className={styles.description}>{description}</div>
    </div>
  )
}
