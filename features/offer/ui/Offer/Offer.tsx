import {FC, HTMLProps} from 'react'
import classNames from 'classnames'

import styles from './Offer.module.scss'
import {Button, Container} from '@shared/ui'

export interface OfferProps extends HTMLProps<HTMLDivElement> {
  title: string,
  subtitle: string
}

export const Offer: FC<OfferProps> = ({className, children, title, subtitle, ...otherProps}) => {
  return (
    <section className={classNames(styles.offer, className)} {...otherProps}>
      <Container>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>
            {title}
          </h2>
          <h4 className={styles.subtitle}>
            {subtitle}
          </h4>
          <Button target="_blank" href="https://n445954.yclients.com">Записаться онлайн</Button>
        </div>
      </Container>
    </section>
  )
}

