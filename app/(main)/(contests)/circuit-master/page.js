import { contests_data } from "@/lib/data/contests";
import ContestPage from "@/components/pages/ContestPage";
import { contest_rules } from "@/lib/data/contest_rules";


export const metadata = {
  title: `${contests_data.circuit.name} | TechnoVenture 3.0`,
  description: contests_data.circuit.description
}


const Page = () => {
  return (
    <ContestPage 
        contestData={contests_data.circuit}
        contestRules={contest_rules.circuit}
        slug='circuit'
    />
  )
}

export default Page