import type {NextPage} from 'next'
import {Preview} from "../widgets/preview";
import {Service} from "../widgets/service";
import {PageLayout} from "@shared/ui";
import {Portfolio} from "../widgets/portfolio";

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
