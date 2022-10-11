import {FC, HTMLProps, ReactElement} from 'react'
import classNames from 'classnames'

import styles from './Benefit.module.scss'

export interface BenefitProps extends HTMLProps<HTMLDivElement> {
  key: string
  icon: ReactElement
  title: string
  description: string
}

export const Benefit: FC<BenefitProps> = ({className, title, icon, key, description}) => {
  return (
    <div key={key} className={classNames(styles.benefit, className)}>
      {icon}
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}

