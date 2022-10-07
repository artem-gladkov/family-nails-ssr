import type {NextPage} from 'next'
import { PageLayout } from "@shared/ui";
import {Portfolio} from "@widgets/portfolio";

const PortfolioPage: NextPage = () => {
  return (
    <PageLayout
      pageTitle='Фото маникюра и педикюра от мастеров студии "Family Nails" г Орел'
      description='Примеры выполненных работ ногтевой студии "Family Nails" г Орел.
      Фото маникюра, педикюра, наращивания и дизайнов на короткие и длинные ногти.'>
      <Portfolio />
    </PageLayout>
  )
}

export default PortfolioPage
