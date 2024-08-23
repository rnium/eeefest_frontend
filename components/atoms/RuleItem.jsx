import { Typography } from "@mui/material"

const RuleItem = ({ rule, listItem = false }) => {
    if (listItem) {
        return (
            <li>
                <Typography
                    variant='body2'
                >
                    {rule}
                </Typography>
            </li>
        )
    } else {
        return (
            <Typography
                variant='body2'
            >
                {rule}
            </Typography>
        )
    }
}

export default RuleItem;