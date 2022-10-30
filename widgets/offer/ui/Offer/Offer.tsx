import {FC, HTMLProps} from 'react'
import classNames from 'classnames'
import {Button, Container, Section} from '@shared/ui'

import styles from './Offer.module.scss'

export interface OfferProps extends HTMLProps<HTMLBaseElement> {
  title: string,
  subtitle: string
  text?: string
  isWhatsapp?: boolean
}

export const Offer: FC<OfferProps> = ({className, children, title, text, subtitle, isWhatsapp, ...otherProps}) => {
  return (
    <Section className={classNames(styles.offer, className)} {...otherProps}>
      <Container>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>
            {title}
          </h2>
          <h4 className={classNames(styles.subtitle, {[styles.withText]: !!text})}>
            {subtitle}
          </h4>
          {text && <p className={styles.text}>{text}</p>}
          {isWhatsapp
            ? <Button
              href='https://wa.me/79534762121?text=Здравствуйте, я бы хотела записаться на маникюр'
              skin='primary'
              target='_blank'
            >
              Написать в WhatsApp
            </Button>
            : <Button target="_blank" href="https://n445954.yclients.com">Записаться онлайн</Button>
          }

        </div>
      </Container>
    </Section>
  )
}

