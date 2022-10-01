import {FC, HTMLProps} from 'react'
import classNames from 'classnames'
import Image, {StaticImageData} from "next/image";

import styles from './Master.module.scss'

export interface MasterProps extends HTMLProps<HTMLDivElement> {
  key?: string,
  photo: { src: StaticImageData, alt: string },
  name: string,
  description: string
}

export const Master: FC<MasterProps> = ({className, key, photo: {src, alt}, name, description, ...otherProps}) => {
  return (
    <div key={key} className={classNames(styles.master, className)} {...otherProps}>
      <div className={styles.master}>
        <div className={styles.photo}>
          <Image src={src} alt={alt}/>
        </div>
        <h4 className={styles.name}>{name}</h4>
        <div className={styles.description}>Маникюр, педикюр, наращивание</div>
      </div>
    </div>
  )
}

