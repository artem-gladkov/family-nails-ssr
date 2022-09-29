import {FC, HTMLProps} from "react";
import styles from './Logo.module.scss';
import logoPath from './logo.svg'
import classNames from "classnames";
import Image from 'next/image'

export interface ILogoProps extends HTMLProps<HTMLDivElement>{
}

export const Logo: FC<ILogoProps> = ({className, ...otherProps}) => {
  return (
    <div className={classNames(styles.logo, className)} {...otherProps}>
      <Image src={logoPath} alt='Family Nails'/>
    </div>
  )
}
