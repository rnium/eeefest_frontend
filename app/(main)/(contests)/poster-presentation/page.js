import { contests_data } from "@/lib/data/contests";
import ContestPage from "@/components/pages/ContestPage";
import { contest_rules } from "@/lib/data/contest_rules";


export const metadata = {
  title: `${contests_data.poster.name} | TechnoVenture 3.0`,
  description: contests_data.poster.description
}


const Page = () => {
  return (
    <ContestPage 
        contestData={contests_data.poster}
        contestRules={contest_rules.poster}
        slug='poster'
    />
  )
}

export default Page