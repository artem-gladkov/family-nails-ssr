import {FC, ReactElement} from "react";
import styles from "./Contact.module.scss";

export interface ContactProps {
  title: string
  subtitle: string | ReactElement
  key?: string
}

export const Contact:FC<ContactProps> = ({key, title, subtitle}) => {
  return (
    <div key={key} className={styles.contact}>
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.subtitle}>{subtitle}</div>
    </div>
  )
}
