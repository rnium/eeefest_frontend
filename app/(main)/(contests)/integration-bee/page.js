import { contests_data } from "@/lib/data/contests";
import ContestPage from "@/components/pages/ContestPage";
import { contest_rules } from "@/lib/data/contest_rules";


export const metadata = {
  title: `${contests_data.integration.name} | TechnoVenture 3.0`,
  description: contests_data.integration.description
}


const Page = () => {
  return (
    <ContestPage 
        contestData={contests_data.integration}
        contestRules={contest_rules.integration}
        slug='integration'
    />
  )
}

export default Page