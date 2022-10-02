import {FC, HTMLProps} from 'react'
import classNames from 'classnames'
import {YMaps, Map, Placemark} from '@pbe/react-yandex-maps'

import {Container, Title} from '@shared/ui'
import {Contact, CONTACTS_LIST} from '../../../contacts'

import styles from './Contacts.module.scss'


export interface ContactsProps extends HTMLProps<any> {
}

export const Contacts: FC<ContactsProps> = ({className, ...otherProps}) => {
  return (
    <section className={classNames(styles.contacts, className)} {...otherProps}>
      <Container>
        <Title type='green' className={styles.title}>Контакты</Title>
        <div className={styles.info}>
          <div className={styles.list}>
            {CONTACTS_LIST.map(Contact)}
          </div>
        </div>
      </Container>
      <YMaps query={{lang: 'ru_RU'}}>
        <Map
          className={styles.map}
          defaultState={{center: [52.9766543035093, 36.06316926024887], zoom: 17}}
          width={49}
          height={50}
        >
          <Placemark geometry={[52.9766543035093, 36.06316926024887]} properties={{
            iconCaption: 'Family Nails',
            hintContent: 'Студия маникюра и педикюра',
            ballContentHeader: 'Family Nails',
            ballContentBody: 'Студия маникюра и педикюра',
            ballContentFooter: '+7-(953)-476-21-21'
          }}/>
        </Map>
      </YMaps>

    </section>
  )
}

