import type {NextPage} from 'next'
import {Container, PageLayout} from "@shared/ui";
import {Team} from "@widgets/team";

const TeamPage: NextPage = () => {
  return (
    <PageLayout
      pageTitle='Команда мастеров маникюра и педикюра, салона "Family Nails" г Орел'
      description='Наша команда мастеров маникюра и педикюра,
      регулярно проходит повышение квалификации. Узнайте о них подробнее и выберите своего мастера на этом сайте!'
    >
      <Team />
    </PageLayout>
  )
}

export default TeamPage
