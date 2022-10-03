import type {NextPage} from 'next'
import {Container, PageLayout} from "@shared/ui";
import {Portfolio} from "@widgets/portfolio";

const PortfolioPage: NextPage = () => {
  return (
    <PageLayout pageName='Портфолио'>
      <Container>
        <h1>Наши работы</h1>
      </Container>
      <Portfolio />
    </PageLayout>
  )
}

export default PortfolioPage
