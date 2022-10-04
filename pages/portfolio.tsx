import type {NextPage} from 'next'
import {Container, PageLayout} from "@shared/ui";
import {Portfolio} from "@widgets/portfolio";

const PortfolioPage: NextPage = () => {
  return (
    <PageLayout pageName='Портфолио'>
      <Portfolio />
    </PageLayout>
  )
}

export default PortfolioPage
