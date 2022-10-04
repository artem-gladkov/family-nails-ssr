import {FC, HTMLProps} from 'react'
import classNames from 'classnames'

import styles from './Benefit.module.scss'
import {StaticImageData, default as Image} from "next/image";

export interface BenefitProps extends HTMLProps<HTMLDivElement> {
  key: string
  icon: { src: StaticImageData, alt: string }
  title: string
  description: string
}

export const Benefit: FC<BenefitProps> = ({className, title, icon: {src, alt}, key, description}) => {
  return (
    <div key={key} className={classNames(styles.benefit, className)}>
      <div className={styles.photo}>
        <Image src={src} alt={alt}  placeholder='blur'/>
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}

