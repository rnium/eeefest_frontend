import { contest_groups, contests_data } from "@/lib/data/contests";
import ContestPage from "@/components/pages/ContestPage";
import { contest_rules } from "@/lib/data/contest_rules";

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