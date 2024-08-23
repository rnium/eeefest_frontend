import {
    Box, Typography, Accordion, AccordionSummary,
    AccordionDetails, Paper, Button
} from '@mui/material';
import RuleItem from '../atoms/RuleItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';

const ContestAccordions = ({ contestRules, title }) => {
    return (
        <Paper sx={{ px: 2, py: 5 }} style={{ backgroundColor: '#edede9' }} >
            {
                title && (
                    <Typography sx={{ mb: 1 }} variant='h5' color="text.secondary" textAlign="center">
                        {title}
                    </Typography>
                )
            }
            {
                typeof (contestRules) === 'string' ?
                    <Box display="flex" justifyContent="center" sx={{ py: 4 }}>
                        <Button variant='contained' target="_blank" href='/assets/Tournament_Format(Chess).pdf'>Download Rule Book</Button>
                    </Box>
                    :
                    contestRules.map((ruleSection, idx) => (
                        <Accordion
                            key={idx}
                            defaultExpanded={idx < 2}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="content"
                            >
                                <Typography variant='h6'>{ruleSection.title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {
                                    ruleSection?.image_type ?
                                        <Image
                                            src={ruleSection.image}
                                            alt='LFR Track'
                                            layout='responsive'
                                            placeholder='blur'
                                        />
                                        :
                                        <ol>
                                            {
                                                ruleSection.rules.map((rule, idx) => (
                                                    <li
                                                        key={idx}
                                                    >
                                                        {
                                                            typeof (rule) === 'string' ?
                                                                <RuleItem
                                                                    rule={rule}
                                                                />
                                                                :
                                                                <>
                                                                    <RuleItem
                                                                        rule={rule.main}
                                                                    />
                                                                    <ul>
                                                                        {
                                                                            rule.sub.map((sub_rule, idx) => (
                                                                                <RuleItem
                                                                                    key={idx}
                                                                                    rule={sub_rule}
                                                                                    listItem
                                                                                />
                                                                            ))
                                                                        }
                                                                    </ul>
                                                                </>
                                                        }
                                                    </li>
                                                ))
                                            }
                                        </ol>
                                }
                            </AccordionDetails>
                        </Accordion>
                    ))

            }

        </Paper>
    )
}

export default ContestAccordions