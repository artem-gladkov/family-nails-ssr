import {FC, HTMLProps} from 'react'
import classNames from 'classnames'

import styles from './Benefits.module.scss'
import {Container, Title} from "@shared/ui";
import {Benefit} from "../Benefit";
import {BENEFITS_LIST} from "../../constants";

export interface IBenefitsProps extends HTMLProps<HTMLDivElement> {}

export const Benefits: FC<IBenefitsProps> = ({className}) => {
  return (
    <section className={classNames(styles.benefits, className)}>
      <Container>
          <Title type='bisque'>С нами комфортно</Title>
          <div className={styles.list}>
            {BENEFITS_LIST.map(Benefit)}
          </div>
      </Container>
    </section>
  )
}
