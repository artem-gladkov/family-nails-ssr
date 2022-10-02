import {FC} from "react";
import styles from "./PriceItem.module.scss";

export interface PriceItemProps {
  key: string,
  name: string,
  price?: string
}

export const PriceItem: FC<PriceItemProps> = ({key, name, price}) => {
  return (
    <div key={key} className={styles.item}>
      <p className={styles.name}>{name}</p>
      <span className={styles.price}>{price}</span>
    </div>
  )
}

