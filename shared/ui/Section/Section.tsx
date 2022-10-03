import { FC, HTMLProps} from 'react'
import classNames from 'classnames'

import styles from './Section.module.scss'

export interface SectionProps extends HTMLProps<HTMLBaseElement>{}

export const Section: FC<SectionProps> = ({className, children, ...otherProps}) => {
    return (
        <section className={classNames(styles.section, className)} {...otherProps}>
            {children}
        </section>
    )
}

