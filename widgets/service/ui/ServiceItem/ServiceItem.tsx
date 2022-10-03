import Image, {StaticImageData} from "next/image";
import {FC} from "react";
import Link from "next/link";
import styles from "./ServiceItem.module.scss";
import classNames from "classnames";

export interface ServiceItemProps {
  key: string
  href: string
  title: string
  description: string
  photo: StaticImageData
}

export const ServiceItem: FC<ServiceItemProps> = ({href, key,  title, description, photo}) => {
  return (
    <Link key={key} href={href}>
      <div className={styles.item}>
        <div className={styles.info}><span
          className={classNames(styles.number, 'number')}>{key}</span>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>
            {description}
          </p>
          <p className={styles.linkText}>Подробнее -></p>
        </div>
        <div className={styles.photo}>
          <Image src={photo} alt={title} placeholder="blur"/>
        </div>
      </div>
    </Link>
  )
}
