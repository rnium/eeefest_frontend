import { contests_data } from "@/lib/data/contests";
import ContestPage from "@/components/pages/ContestPage";
import { contest_rules } from "@/lib/data/contest_rules";


export const metadata = {
  title: `${contests_data.lfr.name} | TechnoVenture 3.0`,
  description: contests_data.lfr.description
}


const Page = () => {
  return (
    <ContestPage 
        contestData={contests_data.lfr}
        contestRules={contest_rules.lfr}
        slug='lfr'
    />
  )
}

export default Page