import {FC, HTMLProps} from 'react'
import classNames from 'classnames'

import styles from './Advantages.module.scss'
import {Container, Title} from '@shared/ui'
import {Advantage} from "../Advantage";
import {ADVANTAGES_LIST} from "../../constants";

export interface IAdvantagesProps extends HTMLProps<HTMLDivElement> {}

export const Advantages: FC<IAdvantagesProps> = ({className}) => {
  return (
    <section className={classNames(styles.advantages, className)}>
      <Container>
        <Title>Преимущества</Title>
      </Container>

      <div className={styles.list}>
        {ADVANTAGES_LIST.map(Advantage)}
      </div>
    </section>
  )
}
