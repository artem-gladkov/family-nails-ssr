import {FC, HTMLProps} from 'react'
import classNames from 'classnames'
import bgPhoto from '/public/images/thrid_offer_bg.jpg'
import {Button, Container, Section} from '@shared/ui'
import Image from 'next/image'

import styles from './Offer.module.scss'

export interface OfferProps extends HTMLProps<HTMLBaseElement> {
  title: string,
  subtitle: string
}

export const Offer: FC<OfferProps> = ({className, children, title, subtitle, ...otherProps}) => {
  return (
    <Section className={classNames(styles.offer, className)} {...otherProps}>
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
    </Section>
  )
}

