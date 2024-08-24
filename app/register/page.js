import Register from "@/components/pages/Register"

const Page = ({ searchParams }) => {
    console.log(searchParams);
    return (
        <Register contest={searchParams?.contest} />
    )
}

export default Page