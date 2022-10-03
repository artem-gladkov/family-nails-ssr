import type {NextPage} from 'next'
import {Preview} from "../widgets/preview";
import {PageLayout} from "@shared/ui";
import {Portfolio} from "../widgets/portfolio";

const Manicure: NextPage = () => {
  return (
    <PageLayout pageName='Маникюр'>
      <Preview pageTitle="Маникюр в Орле"/>
      <Portfolio />
    </PageLayout>
  )
}

export default Manicure
