import type {NextPage} from 'next'
import {Contacts} from "@features/contacts";
import {PageLayout} from "@shared/ui";

const ContactsPage: NextPage = () => {
  return (
    <PageLayout pageName='Контакты'>
      <h1>Контакты</h1>
      <Contacts />
    </PageLayout>
  )
}

export default ContactsPage
