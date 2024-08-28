import { Stack, CircularProgress } from "@mui/material"


const Loader = () => {
  return (
    <Stack 
        sx={{my: 5}}
        alignItems='center'
    >
        <CircularProgress />
    </Stack>
  )
}

export default Loader