import {FC, HTMLProps} from 'react'
import classNames from 'classnames'

import styles from './ServiceDescription.module.scss'
import {Container, Section} from "@shared/ui";
import Image from 'next/image'
import { StaticImageData } from "next/dist/client/image";

export interface ServiceDescriptionProps extends HTMLProps<HTMLBaseElement> {
  title: string
  photo: StaticImageData
}

export const ServiceDescription: FC<ServiceDescriptionProps> = ({title, className, photo, children, ...otherProps}) => {
  return (
    <Section className={classNames(styles.serviceDescription, className)} {...otherProps}>
      <Container>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.body}>
          <div className={styles.text}>
            {children}
          </div>
          <Image src={photo} alt={title} className={styles.photo} placeholder="blur" layout='responsive' objectFit={'contain'}/>
        </div>
      </Container>
    </Section>
  )
}

