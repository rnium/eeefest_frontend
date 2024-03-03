import dateFormat from 'dateformat';
const registration_deadline_date = new Date('4 March 2024');
const payment_deadline_date = new Date('6 March 2024');
export const schedules = {
    lfr: new Date('9:00:00, 10 March 2024'),
    poster: new Date('10:00:00, 10 March 2024'),
    circuit: new Date('10:15:00, 9 March 2024'),
    integration: new Date('11:00:00, 9 March 2024'),
    gamingFifa: new Date('17:00:00, 9 March 2024'),
    gamingChess: new Date('15:00:00, 9 March 2024'),
}
export const registration_deadline = dateFormat(registration_deadline_date, "dddd, d mmmm yyyy");
export const payment_deadline = dateFormat(payment_deadline_date, "dddd, d mmmm yyyy");