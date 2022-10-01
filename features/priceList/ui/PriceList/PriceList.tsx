import {FC, HTMLProps} from 'react'
import classNames from 'classnames'

import styles from './PriceList.module.scss'
import { Container, Title } from '@shared/ui'
import {PRICE_LIST} from "../../constants/priceList";
import {PriceListGroup} from "../PriceListGroup";

export interface IPriceListProps extends HTMLProps<HTMLDivElement> {
}

export const PriceList: FC<IPriceListProps> = ({className, children, ...otherProps}) => {
  return (
    <section className={classNames(styles.priceList, className)} {...otherProps}>
      <Container>
        <Title>Приятные цены</Title>
        <div className={styles.list}>
          {PRICE_LIST.map(PriceListGroup)}
        </div>
      </Container>
    </section>
  )
}

