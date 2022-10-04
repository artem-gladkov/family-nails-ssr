import type {NextPage} from 'next'
import {Contacts} from "../widgets/contacts";
import {Container, PageLayout} from "@shared/ui";

const ContactsPage: NextPage = () => {
  return (
    <PageLayout pageName='Контакты'>
      <Contacts hasMap/>
    </PageLayout>
  )
}

export default ContactsPage
