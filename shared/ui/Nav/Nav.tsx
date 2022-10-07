import {FC, HTMLProps} from 'react'
import classNames from 'classnames'

import styles from './Nav.module.scss'
import Link, {LinkProps} from "next/link";

export const NAV_LIST: NavLinkProps[] = [{
  href: '/',
  name: 'Главная'
}, {
  href: '/about-us',
  name: 'О нас'
}, {
  href: '/service',
  name: 'Услуги'
}, {
  href: '/portfolio',
  name: 'Портфолио'
}, {
  href: '/team',
  name: 'Команда'
}, {
  href: '/contacts',
  name: 'Контакты'
}]

export interface NavProps extends HTMLProps<HTMLBaseElement> {
  currentPage?: string;
}

export const Nav: FC<NavProps> = ({
  currentPage,
  className,
  children,
  ...otherProps
}) => {
  return (
    <nav
      className={classNames(styles.nav, className)}
      itemScope
      itemType="http://www.schema.org/SiteNavigationElement"
      {...otherProps}
    >
      {NAV_LIST.map(({href, ...otherProps}) => (
        <NavLink
          key={href}
          href={href}
          active={currentPage === href}
          {...otherProps}
        />
      ))}
    </nav>
  )
}

export interface NavLinkProps extends LinkProps {
  href: string
  name: string
  active?: boolean
  className?: string
}

export const NavLink: FC<NavLinkProps> = ({
  href,
  name,
  active,
  className
}) => {
  return (
    <Link key={href} href={href}>
      <a
        className={classNames(styles.navLink, {[styles.active]: active}, className)}
        itemProp="url"
      >
        {name}
      </a>
    </Link>
  )
}
