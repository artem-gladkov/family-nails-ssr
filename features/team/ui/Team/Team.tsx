import {FC, HTMLProps} from 'react'
import classNames from 'classnames'

import { Container, Title } from '@shared/ui'
import {Master} from "../Master";
import {MASTERS_LIST} from "../../constants";

import styles from './Team.module.scss'



export interface TeamProps extends HTMLProps<HTMLDivElement> {}

export const Team: FC<TeamProps> = ({className, children, ...otherProps}) => {
  return (
    <section className={classNames(styles.team, className)} {...otherProps}>
      <Container>
        <Title type='green'>Команда</Title>
        <div className={styles.list}>
          {MASTERS_LIST.map(Master)}
        </div>
      </Container>
    </section>
  )
}

