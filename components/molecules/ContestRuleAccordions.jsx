import {
    Stack,
} from '@mui/material';

import ContestAccordions from './ContestAccordions';


const ContestRuleAccordions = ({ contestRules, sx }) => {
    return (
        <Stack
            sx={{ ...sx }}
            spacing={5}
        >
            {
                Array.isArray(contestRules) ?
                    <ContestAccordions
                        contestRules={contestRules}
                    />
                    :
                    Object.keys(contestRules).map((key, idx) => (
                        <ContestAccordions
                            key={idx}
                            title={key}
                            contestRules={contestRules[key]}
                        />
                    ))
            }
        </Stack>
    )
}

export default ContestRuleAccordions