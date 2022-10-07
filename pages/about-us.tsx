import type {NextPage} from 'next'
import {Preview} from "@widgets/preview";
import {AboutUs} from "@widgets/aboutUs";
import {PageLayout} from "@shared/ui";
import {Contacts} from "@widgets/contacts";
import {Team} from "@widgets/team";

const AboutUsPage: NextPage = () => {
  return (
    <PageLayout
      pageTitle='Информация о салоне маникюра и педикюра "Family Nails" г Орел'
      description='Салон занимается широким спектром услуг ногтевой индустрии.
      Существует уже более двух лет, а также насчитывет более 3000 выполненных работ.'
    >
      <Preview previewTitle={<>Ногтевая студия <br/> Family Nail&apos;s</>}/>
      <AboutUs />
      <Team />
      <Contacts  hasMap/>
    </PageLayout>
  )
}

export default AboutUsPage
