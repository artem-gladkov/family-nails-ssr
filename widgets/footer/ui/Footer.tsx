import {Logo} from "@shared/ui";
import styles from './Footer.module.scss'
import {Container} from "@shared/ui";
import {Social} from "@shared/ui";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.content}>
          <Logo />
          <p className={styles.year}>2022</p>
          <Social />
        </div>
      </Container>
    </footer>
  )
}
