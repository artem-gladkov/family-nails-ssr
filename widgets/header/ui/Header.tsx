import {FC} from "react";
import styles from './Header.module.scss';
import {Logo, Button} from "@shared/ui";
import Link from "next/link";
import {Container} from "../../../shared/ui";

interface IHeaderProps {

}

export const Header: FC<IHeaderProps> = ({}) => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <Logo/>
          <div className={styles.actions}>
            <Link href='tel:+79534762121'>
              <a className={styles.phone}>+7-(953)-476-21-21</a>
            </Link>
            <Button
              href='https://wa.me/79534762121?text=Здравствуйте, я бы хотела записаться на маникюр'
              skin='ghost'
              target='_blank'
            >
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </header>
  )
}
