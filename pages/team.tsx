import type {NextPage} from 'next'
import {Container, PageLayout} from "@shared/ui";
import {Team} from "../widgets/team";

const Pedicure: NextPage = () => {
  return (
    <PageLayout pageTitle='Команда' >
      <Team />
    </PageLayout>
  )
}

export default Pedicure
