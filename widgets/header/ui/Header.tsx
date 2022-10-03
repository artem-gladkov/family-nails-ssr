import {FC, useCallback, useEffect, useMemo, useRef, useState} from "react";
import styles from './Header.module.scss';
import {Logo, Button, Nav, Burger, Container, MobileMenu} from "@shared/ui";
import {useRouter} from "next/router";
import classNames from "classnames";

interface IHeaderProps {

}

export const Header: FC<IHeaderProps> = ({}) => {
  const [isOpenHeader, setIsOpenHeader] = useState(false)
  const {pathname} = useRouter()
  const body = useRef<HTMLBodyElement | null>(null)

  useEffect(() => {
    body.current = document.querySelector('body')
  }, [])

  const toggleIsOpenHeader = useCallback(() => {
    setIsOpenHeader(prevState => !prevState)
    if (body.current) {
      body.current.classList.toggle('locked')
    }
  }, [])

  return (
    <header className={styles.header}>
      <div className={styles.innerWrapper}>
        <Container>
        <div className={styles.content}>
          <Logo/>
          <Nav className={styles.nav} currentPage={pathname}/>
          <Button
            className={styles.ctaButton}
            href='https://wa.me/79534762121?text=Здравствуйте, я бы хотела записаться на маникюр'
            skin='ghost'
            target='_blank'
          >
            Написать в WhatsApp
          </Button>
          <Burger className={classNames(styles.burger, {[styles.visible]: isOpenHeader})} active={isOpenHeader} onClick={toggleIsOpenHeader}>Меню</Burger>
        </div>
      </Container>
      </div>
      <MobileMenu isOpenHeader={isOpenHeader} currentPage={pathname} className={styles.mobileMenu}/>
    </header>
  )
}
