import {FC} from "react";
import styles from './Social.module.scss'
import Link from "next/link";
import classNames from "classnames";
import {Icon, IconType} from "../Icon";

export interface ISocialProps {
  size?: number
}

export interface ISocialIconProps {
  name: IconType,
  href: string
}

const SOCIALS: ISocialIconProps[] = [{
  name:'IconVk',
  href:'https://vk.com/family.nails'
}, {
  name:'IconInst',
  href:'https://instagram.com/family_nail.s'
}, {
  name:'IconWhatsapp',
  href:'https://wa.me/79534762121?text=Здравствуйте, я бы хотела записаться на маникюр'
}]

export const Social: FC<ISocialProps> = ({size = 24}) => {
  return (
    <div className={styles.social}>
      {SOCIALS.map(({name, href}) => (
        <Link href={href} key={name} >
          <a className={classNames(styles.item, styles[name])} target='_blank'>
            <Icon type={name}/>
          </a>
        </Link>
      ))}
    </div>
  )
}
