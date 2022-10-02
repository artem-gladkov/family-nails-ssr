import type {NextPage} from 'next'
import {PageLayout} from "@shared/ui";
import {Team} from "@features/team";

const Pedicure: NextPage = () => {
  return (
    <PageLayout pageName='Команда' >
      <h1>Команда</h1>
      <Team />
    </PageLayout>
  )
}

export default Pedicure
