import {FC, HTMLProps} from 'react'
import classNames from 'classnames'

import styles from './Advantages.module.scss'
import {Container, Section, Title} from '@shared/ui'
import {Advantage} from "../Advantage";
import {ADVANTAGES_LIST} from "../../../../public/images/advantages";

export interface IAdvantagesProps extends HTMLProps<HTMLDivElement> {}

export const Advantages: FC<IAdvantagesProps> = ({className}) => {
  return (
    <Section className={classNames(styles.advantages, className)}>
      <Container>
        <Title>Преимущества</Title>
      </Container>

      <div className={styles.list}>
        {ADVANTAGES_LIST.map(Advantage)}
      </div>
    </Section>
  )
}
