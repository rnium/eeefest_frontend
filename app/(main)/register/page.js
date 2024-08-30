import Register from "@/components/pages/Register"


export const metadata = {
    title: `Contest Registration | TechnoVenture 3.0`,
}


const Page = ({ searchParams }) => {
    return (
        <Register contest={searchParams?.contest} />
    )
}

export default Page;