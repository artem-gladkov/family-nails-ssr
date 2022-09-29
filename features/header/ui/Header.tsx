import {FC} from "react";
import styles from './Header.module.scss';
import {Logo, ButtonLink} from "@shared/ui";
import Link from "next/link";

interface IHeaderProps {

}

export const Header: FC<IHeaderProps> = ({}) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header__content}>
          <Logo/>
          <div className={styles.header__actions}>
            <Link href='tel:+79534762121'>
              <a className={styles.phone} href="">+7-(953)-476-21-21</a>
            </Link>
            <ButtonLink href={''} skin='ghost' target='_blank'> Написать в WhatsApp </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  )
}
