import {FC, HTMLProps} from 'react'
import classNames from 'classnames'

import { Container, Section, Title } from '@shared/ui'
import {Master} from "../Master";
import {MASTERS_LIST} from "../../constants";

import styles from './Team.module.scss'



export interface TeamProps extends HTMLProps<HTMLBaseElement> {}

export const Team: FC<TeamProps> = ({className, children, ...otherProps}) => {
  return (
    <Section className={classNames(styles.team, className)} {...otherProps}>
      <Container>
        <Title type='green'>Команда</Title>
        <div className={styles.list}>
          {MASTERS_LIST.map(Master)}
        </div>
      </Container>
    </Section>
  )
}

