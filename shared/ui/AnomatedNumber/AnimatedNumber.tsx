import {FC, HTMLProps, useCallback, useEffect, useRef, useState} from 'react'
import classNames from 'classnames'

import styles from './AnimatedNumber.module.scss'

export interface AnimatedNumberProps extends HTMLProps<HTMLDivElement> {
  number: number
  duration: number
}

export const AnimatedNumber: FC<AnimatedNumberProps> = ({
  number,
  duration,
  className,
  children,
  ...otherProps
}) => {
  const ref = useRef(null)
  const intervalId = useRef(null)

  useEffect(() => {
    if(intervalId.current) {
      return
    }

    // @ts-ignore
    intervalId.current = setInterval(() => {
      if(ref.current) {

        if(number < 100) {
          // @ts-ignore
          ref.current.innerText = +ref.current.innerText + 1
        }

        if(number >= 100 && number < 1000) {
          // @ts-ignore
          ref.current.innerText = +ref.current.innerText + 10
        }

        if(number >= 1000 && number < 10000) {
          // @ts-ignore
          ref.current.innerText = +ref.current.innerText + 100
        }

        if(number >= 10000) {
          // @ts-ignore
          ref.current.innerText = +ref.current.innerText + 1000
        }

        // @ts-ignore
        if(  +ref.current.innerText === number) {
          // @ts-ignore
          clearInterval( intervalId.current)
        }
      }

    }, 75)
  }, [])

  return (
    <div className={classNames(styles.animatedNumber, className)} {...otherProps}>
      <span ref={ref}></span>
      <span>+</span>
    </div>
  )
}

