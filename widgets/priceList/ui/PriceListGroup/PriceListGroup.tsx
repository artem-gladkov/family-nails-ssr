import {FC, HTMLProps} from 'react'
import classNames from 'classnames'
import {PriceItem, PriceItemProps} from "../PriceItem";

import styles from './PriceListGroup.module.scss'

export interface PriceListGroupProps extends HTMLProps<HTMLDivElement> {
  title: string
  items: PriceItemProps[]
  priceColumnName?: string
  key?: string
  bg?: PriceListGroupBgProps
}

export const PriceListGroup: FC<PriceListGroupProps> = ({
  className,
  title,
  items,
  priceColumnName,
  ...otherProps
}) => {
  return (
    <div className={classNames(styles.priceListGroup, className)} {...otherProps}>
      {/*<PriceListGroupBg/>*/}
      <div className={styles.header}>
        <h3 className={styles.title}>
          {title}
        </h3>
        <span className={styles.priceColumnName}>{priceColumnName}</span>
      </div>
      <div className={styles.list}>
        {items.map(PriceItem)}
      </div>
    </div>
  )
}

export interface PriceListGroupBgProps {
  variant?: 'first' | 'second'
  className?: string;
}

const PriceListGroupBg: FC<PriceListGroupBgProps> = ({variant = 'first', className}) => {
  switch (variant) {
    case "first" : {
      return (
        <svg
          className={classNames(styles.bg, styles[variant], className)}
          width="1340"
          height="218"
          viewBox="0 0 1340 218"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0.918149 108.318C-1.07185 65.8131 -7.01408 9.39321 77.0846 6.45002C491.769 -8.06258 628.868 6.45012 1232.56 6.45002C1361.89 6.45 1382.52 203.307 1250.05 201.364C958.923 197.095 881.596 203.12 648.615 201.364C431.475 199.728 141.264 231.37 92.8821 211.323C44.5 191.277 2.98303 152.421 0.918149 108.318Z"
            fill="white"/>
        </svg>)
    }
    case "second" : {
      return (
        <svg
          className={classNames(styles.bg, styles[variant], className)}
          width="1340"
          height="252"
          viewBox="0 0 1340 252"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M1339.08 122.588C1341.07 74.4839 1347.01 10.6308 1262.92 7.29981C848.231 -9.12481 711.132 7.29992 107.441 7.29981C-21.8906 7.29978 -42.5249 230.092 89.9517 227.894C381.077 223.062 458.404 229.881 691.385 227.894C908.525 226.042 1216.46 274.267 1247.12 239.165C1277.77 204.063 1337.02 172.503 1339.08 122.588Z"
            fill="white"/>
        </svg>
      )
    }
  }
}
