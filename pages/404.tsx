import type {NextPage} from 'next'
import {Button, Container, PageLayout} from "@shared/ui";

import styles from './404.module.scss'

const Custom404: NextPage = () => {
  return (
    <PageLayout
      pageTitle='Ошибка 404'
      description='Упс, кажется этой страницы не существует :с'
      className={styles.wrapper}
    >
      <Container>
        <div className={styles.wrapper}>
          <h4>Упс, кажется этой страницы не существует :с</h4>
          <Button href={'/'} className={styles.button}>На главную </Button>
        </div>
      </Container>

    </PageLayout>
  )
}

export default Custom404
