import {FC, HTMLProps} from 'react'
import classNames from 'classnames'

import {Button, Container, Section, Title} from '@shared/ui'
import {Master} from "../Master";
import {MASTERS_LIST, SHORT_MASTERS_LIST} from "../../constants";

import styles from './Team.module.scss'


export interface TeamProps extends HTMLProps<HTMLBaseElement> {
  type?: 'short' | 'full'
}

export const Team: FC<TeamProps> = ({type = 'full', className, children, ...otherProps}) => {
  return (
    <Section className={classNames(styles.team, className)} {...otherProps}>
      <Container>
        <Title type='green'>Команда</Title>
        <div className={styles.list}>
          {
            type === 'short'
              ? SHORT_MASTERS_LIST.map(Master)
              : MASTERS_LIST.map(Master)
          }
        </div>
        {type === 'short' && <Button className={styles.allButton} href='/team' skin='text'> Вся команда</Button>}

      </Container>
    </Section>
  )
}

