import {FC, SVGProps} from "react";
import {IconsArray} from './icons'

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
