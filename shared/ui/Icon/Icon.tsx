import {FC, SVGProps} from "react";
import Image from 'next/image'
import {IconsArray} from './icons'
import classNames from "classnames";
import styles from './Icon.module.scss'

//TODO any
export interface IIconProps extends SVGProps<any>{
  type: IconType
}

export type IconType = keyof typeof IconsArray

export const Icon: FC<IIconProps> = ({type, className, ...otherProps}) => {
  const IconComponent = IconsArray[type]

  return (
    <IconComponent className={className} {...otherProps}/>
  )
}
