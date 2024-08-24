import { contest_groups, contests_data } from "@/lib/data/contests";
import ContestPage from "@/components/pages/ContestPage";
import { contest_rules } from "@/lib/data/contest_rules";


export const metadata = {
  title: `${contest_groups.gaming.name} | TechnoVenture 3.0`,
  description: contest_groups.gaming.description
}


const rule_groups = {
  'FIFA': contest_rules.fifa,
  'Chess': contests_data.chess.rulebook_url
}

const Page = () => {
  return (
    <ContestPage
      contestData={contest_groups.gaming}
      contestRules={rule_groups}
    />
  )
}

export default Page