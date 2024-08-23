import React from 'react';
import {
    TextField, FormControl, Select, MenuItem, Box, InputLabel, Alert
} from '@mui/material';

const GroupmemberFields = ({ groupFormData, handleGroupFormChange, numMembers }) => {
    if (numMembers === "" || numMembers === 0 || numMembers === 1) {
        return (
            <Box>
                <TextField
                    variant="outlined"
                    label="Contestant Name"
                    sx={{ mt: 2 }}
                    name="group_member_1-name"
                    value={groupFormData.group_member_1.name}
                    onChange={handleGroupFormChange}
                    fullWidth
                    required
                />
                <TextField
                    variant="outlined"
                    label="Institution"
                    sx={{ mt: 2 }}
                    name="group_member_1-inst"
                    value={groupFormData.group_member_1.inst}
                    onChange={handleGroupFormChange}
                    fullWidth
                />
                <TextField
                    variant="outlined"
                    label="Department"
                    sx={{ mt: 2 }}
                    name="group_member_1-dept"
                    value={groupFormData.group_member_1.dept}
                    onChange={handleGroupFormChange}
                    fullWidth
                />
                <TextField
                    variant="outlined"
                    label="Registration Number"
                    sx={{ mt: 2 }}
                    name="group_member_1-reg_num"
                    value={groupFormData.group_member_1.reg_num}
                    onChange={handleGroupFormChange}
                    fullWidth
                />
                <TextField
                    variant="outlined"
                    label="Email"
                    type="email"
                    name="group_member_1-email"
                    sx={{ mt: 2 }}
                    value={groupFormData.group_member_1.email}
                    onChange={handleGroupFormChange}
                    fullWidth
                    required
                />
                <TextField
                    variant="outlined"
                    label="Phone Number"
                    type="tel"
                    name="group_member_1-phone"
                    value={groupFormData.group_member_1.phone}
                    onChange={handleGroupFormChange}
                    sx={{ mt: 2 }}
                    fullWidth
                    required
                />
            </Box>
        )
    }
    let form = [];
    let i = 0;
    for (const role in groupFormData) {
        form.push(
            <Box key={role}>
                <TextField
                    variant="outlined"
                    label={`Group Member ${i + 1} Name`}
                    sx={{ mt: 2 }}
                    name={`${role}-name`}
                    value={groupFormData?.[role].name}
                    onChange={handleGroupFormChange}
                    fullWidth
                    required
                />
                <TextField
                    variant="outlined"
                    label={`Group Member ${i + 1} Instituition`}
                    sx={{ mt: 2 }}
                    name={`${role}-inst`}
                    value={groupFormData?.[role].inst}
                    onChange={handleGroupFormChange}
                    fullWidth
                    required
                />
                <TextField
                    variant="outlined"
                    label={`Group Member ${i + 1} Department`}
                    sx={{ mt: 2 }}
                    name={`${role}-dept`}
                    value={groupFormData?.[role].dept}
                    onChange={handleGroupFormChange}
                    fullWidth
                    required
                />
                <FormControl fullWidth sx={{ mt: 2 }}>
                    <InputLabel id={`${role}-tshirt-select-label`}>
                        {`Group Member ${i + 1} Tshirt Size`}
                    </InputLabel>
                    <Select
                        labelId={`${role}-tshirt-select-label`}
                        value={groupFormData?.[role].tshirt}
                        label={`Group Member ${i + 1} Tshirt Size`}
                        name={`${role}-tshirt`}
                        onChange={handleGroupFormChange}
                    >
                        <MenuItem value="S">S</MenuItem>
                        <MenuItem value="M">M</MenuItem>
                        <MenuItem value="L">L</MenuItem>
                        <MenuItem value="XL">XL</MenuItem>
                        <MenuItem value="XXL">XXL</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    variant="outlined"
                    label={`Group Member ${i + 1} Phone`}
                    sx={{ mt: 2 }}
                    name={`${role}-phone`}
                    value={groupFormData?.[role].phone}
                    onChange={handleGroupFormChange}
                    fullWidth
                    required={i === 0 ? true : false}
                />
                <TextField
                    variant="outlined"
                    label={`Group Member ${i + 1} Email`}
                    sx={{ mt: 2, mb: 2 }}
                    type="email"
                    name={`${role}-email`}
                    value={groupFormData?.[role].email}
                    onChange={handleGroupFormChange}
                    fullWidth
                    required={i === 0 ? true : false}
                />
            </Box>
        )
        i++;
    }
    return (
        <div>
            <Alert sx={{ mt: 2 }} severity='info' >Group Member 1 is considered as Team Leader</Alert>
            {form}
        </div>
    )
}

export default GroupmemberFields