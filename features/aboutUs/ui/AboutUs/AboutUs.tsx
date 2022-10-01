import {FC, HTMLProps} from 'react'
import classNames from 'classnames'

import styles from './AboutUs.module.scss'
import {Container, Logo, Title} from '@shared/ui'

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
    <section className={classNames(styles.aboutUs, className)} {...otherProps}>
      <Container>
        <Title>О нас</Title>
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <Logo width={356} height={166}/>
            <span className={styles.separator}>это</span></div>
          <div className={styles.list}>
            {ITEMS.map(Item)}
          </div>
        </div>
      </Container>
    </section>
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
      <div className={styles.number}>{`${number}+`} </div>
      <div className={styles.description}>{description}</div>
    </div>
  )
}
