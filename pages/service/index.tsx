import type {NextPage} from 'next'
import {Service} from "@widgets/service";
import {PageLayout} from "@shared/ui";

const ServicePage: NextPage = () => {
  return (
    <PageLayout
      pageTitle='Услуги салона по маникюру и педикюру Family Nails г Орел'
      description='Маникюр, педикюр, наращивание, дизайн и ремонт ногтей.
      И это лишь неполный список того, что ногтевая студия "Family Nails" предлагает  своим клиентам.'
    >
      <Service/>
    </PageLayout>
  )
}

export default ServicePage
