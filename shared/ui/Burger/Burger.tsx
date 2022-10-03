import {FC, HTMLProps} from 'react'
import classNames from 'classnames'

import styles from './Burger.module.scss'

export interface BurgerProps extends HTMLProps<HTMLButtonElement> {
  active: boolean;
}

export const Burger: FC<BurgerProps> = ({
  active,
  className,
  children,
  ...otherProps
}) => {
  return (
    <button className={classNames(styles.burger, {[styles.active]: active}, className)} {...otherProps} type='button'>
      <p className={styles.text}>
        {children}
      </p>
      <div className={styles.lines}>
        <div className={styles.line}/>
        <div className={styles.line}/>
        <div className={styles.line}/>
      </div>
    </button>
  )
}

