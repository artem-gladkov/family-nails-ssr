import type {NextPage} from 'next'
import {Contacts} from "../widgets/contacts";
import {Container, PageLayout} from "@shared/ui";

const ContactsPage: NextPage = () => {
  return (
    <PageLayout pageName='Контакты'>
      <Container>
        <h1>Контакты</h1>
      </Container>
      <Contacts/>
    </PageLayout>
  )
}

export default ContactsPage
