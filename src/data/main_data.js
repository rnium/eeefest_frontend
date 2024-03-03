import dateFormat from 'dateformat';
const registration_deadline_date = new Date('4 March 2024');
const payment_deadline_date = new Date('6 March 2024');
export const schedules = {
    lfr: "9:00 AM, 10 March 2024",
    poster: "10:00 AM, 10 March 2024",
    circuit: "10:15 AM, 9 March 2024",
    integration: "11:00 AM, 9 March 2024",
    gamingFifa: "5:00 PM, 9 March 2024",
    gamingChess: "3:00 PM, 9 March 2024",
}
export const registration_deadline = dateFormat(registration_deadline_date, "dddd, d mmmm yyyy");
export const payment_deadline = dateFormat(payment_deadline_date, "dddd, d mmmm yyyy");