import type {NextPage} from 'next'
import {Service} from "@widgets/service";
import {Container, PageLayout} from "@shared/ui";

const Manicure: NextPage = () => {
  return (
    <PageLayout pageName='Услуги'>
      <Container>
        <h1>Услуги</h1>
      </Container>
      <Service />
    </PageLayout>
  )
}

export default Manicure
