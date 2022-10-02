import type {NextPage} from 'next'
import {Preview} from "@features/preview";
import {Service} from "@features/service";
import {PageLayout} from "@shared/ui";
import {Portfolio} from "@features/portfolio";

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
