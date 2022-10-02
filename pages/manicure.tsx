import type {NextPage} from 'next'
import {Preview} from "../widgets/preview";
import {Service} from "../widgets/service";
import {PageLayout} from "@shared/ui";
import {Portfolio} from "../widgets/portfolio";

const Manicure: NextPage = () => {
  return (
    <PageLayout pageName='Маникюр'>
      <Preview pageTitle="Маникюр в Орле"/>
      <Service />
      <Portfolio />
    </PageLayout>
  )
}

export default Manicure
