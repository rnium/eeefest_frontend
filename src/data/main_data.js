import dateFormat from 'dateformat';
const registration_deadline_date = new Date('4 March 2024');
const payment_deadline_date = new Date('6 March 2024');
export const registration_deadline = dateFormat(registration_deadline_date, "dddd, d mmmm yyyy");
export const payment_deadline = dateFormat(payment_deadline_date, "dddd, d mmmm yyyy");