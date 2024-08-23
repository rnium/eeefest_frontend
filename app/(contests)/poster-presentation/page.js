import { contests_data } from "@/lib/data/contests";
import ContestPage from "@/components/pages/ContestPage";
import { contest_rules } from "@/lib/data/contest_rules";

const Page = () => {
  return (
    <ContestPage 
        contestData={contests_data.poster}
        contestRules={contest_rules.poster}
    />
  )
}

export default Page