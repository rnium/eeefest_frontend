import { contests_data } from "@/lib/data/contests";
import ContestPage from "@/components/pages/ContestPage";

const Page = () => {
  return (
    <ContestPage 
        contestData={contests_data.lfr}
    />
  )
}

export default Page