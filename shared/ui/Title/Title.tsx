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
      <h2 className={styles.text}>{children}</h2>
    </div>
  )
}
