import {FC, SVGProps} from 'react'
import classNames from 'classnames'

import styles from './MainServiceTransitions.module.scss'

export interface ITransitionProps extends SVGProps<SVGSVGElement> {
}

const First: FC<ITransitionProps> = ({
                                       className,
                                       children,
                                       ...otherProps
                                     }) => {
  return (

    <svg
      className={classNames(styles.firstBgTransition, className)}
      width="1600"
      height="939"
      viewBox="0 0 1600 939"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      {...otherProps}
    >
      <path
        d="M1185 129.972C993.013 117.616 692.786 41.3871 456 14.9939C282.136 -4.3857 107.702 -4.41737 0 14.9939V939C74.3805 887.052 192.475 834.881 420.499 826.017C597.611 819.133 772.042 777.234 903.499 774.745C1050.53 771.96 1226 780.96 1343 750.403C1457 724.837 1506.5 666.064 1600 625.15L1599.01 129.972C1411.17 129.972 1376.99 142.328 1185 129.972Z"
        fill="white"/>
    </svg>
  )
}

const Second: FC<ITransitionProps> = ({
  className,
  children,
  ...otherProps
}) => {
  return (
    <svg
      className={classNames(styles.secondBgTransition, className)}
      width="1600"
      height="785"
      viewBox="0 0 1600 785"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      {...otherProps}
    >
      <path
        d="M-0.00256348 6.10352e-05L1600 6.10352e-05L1599.99 707.908C1380.14 810.372 1068.61 781.479 833.453 776.721C387.779 767.704 133.325 753.884 -0.00257199 714L-0.00256348 6.10352e-05Z"
        fill="#9FAB7C"/>
    </svg>
  )
}

export const MainServiceTransitions = {First, Second}
