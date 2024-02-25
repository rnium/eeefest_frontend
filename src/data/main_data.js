import dateFormat from 'dateformat';
const registration_deadline_date = new Date('4 March 2024');
export const registration_deadline = dateFormat(registration_deadline_date, "dddd, d mmmm yyyy");