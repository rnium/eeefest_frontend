import lfr_banner from '@/public/static/images/Line_Follower_Robot.png';


const pageurls = {
    lfr: '/line-follower',
    poster: '/poster-presentation',
    circuit: '/circuit-master',
    integration: '/integreation-bee',
    gaming: '/gaming'
}

const descriptions = {
    lfr: 'Line Follower Robot competition in Technoventure 3.0 the robot must be able to follow a black line on white surface or vice versa. It is an autonomous robot which is able to make decision for complete the track on a surface.'
}

const schedules = {
    lfr: "9:00 AM, 10 March 2024",
    poster: "10:00 AM, 10 March 2024",
    circuit: "10:15 AM, 9 March 2024",
    integration: "11:00 AM, 9 March 2024",
    fifa: "5:00 PM, 9 March 2024",
    chess: "3:00 PM, 9 March 2024",
};

const registration_fees = {
    lfr: 1200,
    poster: 300,
    circuit: 100,
    integration: 100,
    fifa: 100,
    chess: 100,
}

const additional_fees = {
    lfr: 500
}

export const prizemoney_titles = ['Champion', '1st Runner-up', '2nd Runner-up'];

const prize_moneys = {
    lfr: [15000, 10000, 5000],
}

const gifts = {
    lfr: 'T-shirt, Lunch Coupon'
}

const rulebook_urls = {
    lfr: '/assets/LineFollower_RuleBook.pdf'
}

const helplines = {
    lfr: {
        phone: ['+8801781-482257', '+8801829-263221', '+8801625-758872', '+8801710-737663'],
        email: 'robo.eee@sec.ac.bd'
    }
}

export const contests_data = {
    lfr: {
        name: 'Line Follower Robot',
        logo_name: '001-robot.svg',
        hero_img: '/static/images/hero/lfr1.jpeg',
        banner: lfr_banner,
        title: "Get your bot in the groove, it's time to move and prove!",
        description: descriptions.lfr,
        url: pageurls.lfr,
        orientation_type: 1,
        fee: registration_fees.lfr,
        fee_additional: additional_fees.lfr,
        prize_money: prize_moneys.lfr,
        gift: gifts.lfr,
        rulebook_url: rulebook_urls.lfr,
        helpline: helplines.lfr,
        featured_info: [
            "Open For All",
            "Champion Prize Money: 15,000 Tk",
            "Runner Up Prize Money: 10,000 Tk",
            "2nd Runner Up Up Prize Money: 5,000 Tk",
            "Gift : T-shirt, Lunch Coupon",
            "Registration Fee: 1200 Tk",
        ],
        schedule: schedules.lfr,
    },
    poster: {
        name: 'Poster Presentation',
        logo_name: '002-poster.svg',
        hero_img: '/static/images/hero/poster.jpeg',
        title: "Be the change you want to see, on a poster, it's meant to be!",
        url: pageurls.poster,
        orientation_type: 2,
        featured_info: [
            "Open For All",
            "Champion Prize Money: 3,000 Tk",
            "Registration Fee: 300 Tk",
        ],
        schedule: schedules.poster,
    },
    circuit: {
        name: 'Circuit Master',
        logo_name: '003-electrical-circuit_1.svg',
        hero_img: '/static/images/hero/circuit.jpeg',
        title: "Push the limits, defy the odds, become the circuit master the world applauds.",
        url: pageurls.circuit,
        orientation_type: 1,
        featured_info: [
            "Open For All",
            "Champion Prize Money: 1,500 Tk",
            "Registration Fee: 100 Tk",
        ],
        schedule: schedules.circuit,
    },
    integration: {
        name: 'Integration Bee',
        logo_name: '004-math.svg',
        hero_img: '/static/images/hero/integration.jpeg',
        title: "Bee the best, put the rest to the test, in the Integration Bee's royal quest!",
        url: pageurls.integration,
        orientation_type: 2,
        featured_info: [
            "Open For All",
            "Champion Prize Money: 1,500 Tk",
            "Runner Up Prize Money: 1,000 Tk",
            "Registration Fee: 100 Tk",
        ],
        schedule: schedules.integration,
    },
    fifa: {
        name: 'Gaming Contest [FIFA]',
        logo_name: '006-game-controller-1.svg',
        hero_img: '/static/images/hero/fifa.jpeg',
        title: "Joystick justice, virtual goals, who will control the FIFA scrolls?",
        url: pageurls.gaming,
        orientation_type: 1,
        featured_info: [
            "Open For All",
            "Champion Prize Money: 1000 Tk",
            "Runner Up Prize Money: 500 Tk",
            "Registration Fee: 100 Tk",
        ],
        schedule: schedules.fifa,
    },
    chess: {
        name: 'Gaming Contest [Chess]',
        logo_name: 'chess.svg',
        hero_img: '/static/images/hero/chess.jpeg',
        title: "The clock ticks, the tension builds, who will be the chess champion whose name thrills?",
        url: pageurls.gaming,
        orientation_type: 2,
        featured_info: [
            "Open For All",
            "Champion Prize Money: 1000 Tk",
            "Runner Up Prize Money: 500 Tk",
            "Registration Fee: 100 Tk",
        ],
        schedule: schedules.chess,
    },
} 