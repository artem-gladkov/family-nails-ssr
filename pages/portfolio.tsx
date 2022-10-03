import type {NextPage} from 'next'
import {PageLayout} from "@shared/ui";
import {Portfolio} from "@widgets/portfolio";

const PortfolioPage: NextPage = () => {
  return (
    <PageLayout pageName='Портфолио'>
      <h1>Наши работы</h1>
      <Portfolio />
    </PageLayout>
  )
}

export default PortfolioPage
