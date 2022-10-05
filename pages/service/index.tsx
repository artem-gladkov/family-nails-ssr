import type {NextPage} from 'next'
import {Service} from "@widgets/service";
import {PageLayout} from "@shared/ui";

const ServicePage: NextPage = () => {
  return (
    <PageLayout pageTitle='Услуги салона по маникюру и педикюру Family Nails г Орел'>
      <Service />
    </PageLayout>
  )
}

export default ServicePage
