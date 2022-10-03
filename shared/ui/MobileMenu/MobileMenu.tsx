import {FC, HTMLProps} from 'react'
import classNames from 'classnames'

import styles from './MobileMenu.module.scss'
import {Button, NAV_LIST, NavLink} from "@shared/ui";
import Link from "next/link";

export interface MobileMenuProps extends HTMLProps<HTMLDivElement> {
  isOpenHeader: boolean
  currentPage: string
}

export const MobileMenu: FC<MobileMenuProps> = ({isOpenHeader, currentPage, className, children, ...otherProps}) => {

  return (
    <div className={classNames(styles.mobileMenu, {[styles.active]: isOpenHeader}, className)} {...otherProps}>
      <div className={styles.mobileMenuInnerWrapper}>
        <nav className={styles.mobileNav}>
          {NAV_LIST.map(({href, ...otherProps}) => (
            <NavLink
              key={href}
              href={href}
              active={currentPage === href}
              className={styles.mobileLink}
              {...otherProps}
            />
          ))}
        </nav>
        <Button
          className={styles.mobileCtaButton}
          href='https://wa.me/79534762121?text=Здравствуйте, я бы хотела записаться на маникюр'
          skin='ghost'
          target='_blank'
        >
          Написать в WhatsApp
        </Button>
        <Link href='tel:+79534762121'>
          <a className={styles.phone}> Позвонить +7-(953)-476-21-21</a>
        </Link>
      </div>
    </div>
  )
}

