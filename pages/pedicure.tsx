import type {NextPage} from 'next'
import {Preview} from "@features/preview";
import {Service} from "@features/service";
import {PageLayout} from "@shared/ui";
import {Portfolio} from "@features/portfolio";

const Pedicure: NextPage = () => {
  return (
    <PageLayout pageName='Педикюр'>
      <Preview pageTitle='Педикюр в Орле'/>
      <Service />
      <Portfolio />
    </PageLayout>
  )
}

export default Pedicure
