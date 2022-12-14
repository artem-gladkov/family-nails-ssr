import {FC, HTMLProps} from 'react'
import classNames from 'classnames'

import styles from './ServiceDescription.module.scss'
import {Container, Section} from "@shared/ui";
import Image from 'next/image'
import {StaticImageData} from "next/dist/client/image";

export interface ServiceDescriptionProps extends HTMLProps<HTMLBaseElement> {
  title: string
  photo: StaticImageData
}

export const ServiceDescription: FC<ServiceDescriptionProps> = ({title, className, photo, children, ...otherProps}) => {
  return (
    <Section className={classNames(styles.serviceDescription, className)} {...otherProps}>
      <Container>
        <div itemScope itemType="http://schema.org/ImageObject">
        <h2 className={styles.title} itemProp="name">{title}</h2>
          <div className={styles.body} >
            <div className={styles.text} itemProp="description">
              {children}
            </div>
            <Image
              src={photo}
              alt={title}
              className={styles.photo}
              placeholder="blur"
              layout='responsive'
              objectFit={'contain'}
              itemProp="contentUrl"
            />
          </div>
        </div>
      </Container>
    </Section>
  )
}

