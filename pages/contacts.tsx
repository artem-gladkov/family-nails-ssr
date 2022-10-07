import type {NextPage} from 'next'
import {Contacts} from "../widgets/contacts";
import {Container, PageLayout} from "@shared/ui";

const ContactsPage: NextPage = () => {
  return (
    <PageLayout
      pageTitle='Контакты салона маникюра и педикюра "Family Nails" г Орел'
      description='Маникюрный салон "Family Nails" расположен в Советском районе г Орла на улице Гуртьева, д 14
      — Запись по телефону +7-(953)-476-21-21. Ежедневно с 09:00 до 21:00'
    >
      <Contacts hasMap/>
    </PageLayout>
  )
}

export default ContactsPage
