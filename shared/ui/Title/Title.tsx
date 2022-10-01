import {FC, HTMLProps} from 'react'
import classNames from 'classnames'

import styles from './Title.module.scss'

export interface ITitleProps extends HTMLProps<any> {
  type?: 'green' | 'bisque' | 'default'
}

export const Title: FC<ITitleProps> = ({
  className,
  children,
  type = 'default',
...otherProps}) => {
  return (
    <div
      className={classNames(styles.title, styles[type], className)}
      {...otherProps}
    >
      <TitleBg/>
      <h2 className={styles.text}>{children}</h2>
    </div>
  )
}

const TitleBg = () => {
  return (
    <svg className={styles.bg} width="720" height="100" viewBox="0 0 720 100" fill="none"
         xmlns="http://www.w3.org/2000/svg"
         preserveAspectRatio="none">
      <path
        d="M98.8826 4.98828C365.724 -9.66551 375.172 12.6316 704.869 12.6315C751.778 12.6315 678.89 99.9999 631.981 100C394.069 100 324.947 100 13.6497 100C-33.2597 100 52.0574 7.55972 98.8826 4.98828Z"
        fill="#9FAB7C"/>
    </svg>
  )
}
