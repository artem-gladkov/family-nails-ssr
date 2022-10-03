import type {NextPage} from 'next'
import {Service} from "@widgets/service";
import {Container, PageLayout} from "@shared/ui";

const Manicure: NextPage = () => {
  return (
    <PageLayout pageName='Услуги'>
      <Service />
    </PageLayout>
  )
}

export default Manicure
