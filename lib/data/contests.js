import lfr_banner from '@/public/static/images/Line_Follower_Robot.png';
import poster_banner from '@/public/static/images/Poster_Presentation.png';
import circuit_banner from '@/public/static/images/Circuit_master.png';
import integration_banner from '@/public/static/images/Integration_Bee.png';
import gaming_banner from '@/public/static/images/Gaming_Contest.png';
import fifa_banner from '@/public/static/images/fifa_banner2.jpg';
import chess_banner from '@/public/static/images/chess_banner.png';


export const contestPages = {
    lfr: {
        title: 'Line Follower Robot',
        url: '/line-follower'
    },
    poster: {
        title: 'Poster Presentation',
        url: '/poster-presentation'
    },
    circuit: {
        title: 'Circuit Master',
        url: '/circuit-master'
    },
    integration: {
        title: 'Integration Bee',
        url: '/integration-bee'
    },
    gaming: {
        title: 'Gaming',
        url: '/gaming'
    }
}



const pageurls = Object.keys(contestPages).reduce(
    (acc, key) => (
        {
            ...acc,
            [key]: contestPages[key].url
        }
    ),
    {}
);


const descriptions = {
    lfr: 'Line Follower Robot competition in Technoventure 3.0 the robot must be able to follow a black line on white surface or vice versa. It is an autonomous robot which is able to make decision for complete the track on a surface.',
    poster: 'Posters are often used to share information and are an important part of many conferences, seminars and exhibitions. They may be used to present quite complex material, and so it is important that the information on them is well laid out, legible and attractively presented.',
    circuit: "In this contest, participants will be presented with a variety of electrical circuits. The challenge is to analyze these circuits and solve for unknowns such as voltages, currents, and power. This will test and enhance your understanding of circuit theory, network analysis, and electronics.",
    integration: "This competition is designed to ignite the mathematical curiosity of engineering students as they explore the intricacies of integrals. Participants will face a series of thought-provoking problems, ranging from elementary integrals to more complex challenges that will test their analytical abilities. It's a chance to showcase your prowess in calculus, compete with fellow students, and, most importantly, have a great time embracing the beauty of mathematical integration.",
    gaming: "Immerse yourself in the world of virtual excitement and strategic brilliance with our FIFA Gaming Contest and Chess Tournament. Whether you're a joystick maven or a chess aficionado, this is your chance to compete, have fun, and showcase your gaming prowess. Join us for a day of friendly competition, camaraderie, and the thrill of victory. Ready to make your move? Register now and let the games begin!"
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

export const prizemoney_titles = [
    {'1': 'Champion', '2': 'Champion', '3': 'Champion'},
    {'1': '', '2': 'Runner Up', '3': '1st Runner-up'},
    {'1': '', '2': '', '3': '2nd Runner-up'},
];

const prize_moneys = {
    lfr: [15000, 10000, 5000],
    poster: [3000, 1500],
    circuit: [3000],
    integration: [1500, 1000],
    fifa: [1000, 500],
    chess: [1000, 500],
}

const gifts = {
    lfr: 'T-shirt, Lunch Coupon'
}

const rulebook_urls = {
    lfr: '/assets/LineFollower_RuleBook.pdf',
    poster: '/assets/Poster_Presentation-RuleBook.pdf',
    chess: '/assets/Tournament_Format(Chess).pdf',
}

const helplines = {
    lfr: {
        phone: ['01781-482257', '01829-263221', '01625-758872', '01710-737663'],
        email: 'robo.eee@sec.ac.bd'
    },
    poster: {
        phone: ['01734-704526', '01784-500419', '01625-045135'],
    },
    circuit: {
        phone: ['01916-381989', '01711-960676'],
    },
    integration: {
        phone: ['01783-201798', '01770-274707'],
    },
    gaming: {
        phone: ['01711-960676', '01745-216246']
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
        banner: poster_banner,
        title: "Be the change you want to see, on a poster, it's meant to be!",
        description: descriptions.poster,
        url: pageurls.poster,
        fee: registration_fees.poster,
        prize_money: prize_moneys.poster,
        rulebook_url: rulebook_urls.poster,
        helpline: helplines.poster,
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
        banner: circuit_banner,
        title: "Push the limits, defy the odds, become the circuit master the world applauds.",
        url: pageurls.circuit,
        description: descriptions.circuit,
        fee: registration_fees.circuit,
        prize_money: prize_moneys.circuit,
        helpline: helplines.circuit,
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
        banner: integration_banner,
        title: "Bee the best, put the rest to the test, in the Integration Bee's royal quest!",
        url: pageurls.integration,
        description: descriptions.integration,
        fee: registration_fees.integration,
        prize_money: prize_moneys.integration,
        helpline: helplines.integration,
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
        shortname: 'FIFA',
        logo_name: '006-game-controller-1.svg',
        hero_img: '/static/images/hero/fifa.jpeg',
        banner: fifa_banner,
        title: "Joystick justice, virtual goals, who will control the FIFA scrolls?",
        url: pageurls.gaming,
        fee: registration_fees.fifa,
        prize_money: prize_moneys.fifa,
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
        shortname: 'Chess',
        logo_name: 'chess.svg',
        hero_img: '/static/images/hero/chess.jpeg',
        banner: chess_banner,
        title: "The clock ticks, the tension builds, who will be the chess champion whose name thrills?",
        url: pageurls.gaming,
        fee: registration_fees.chess,
        prize_money: prize_moneys.chess,
        rulebook_url: rulebook_urls.chess,
        featured_info: [
            "Open For All",
            "Champion Prize Money: 1000 Tk",
            "Runner Up Prize Money: 500 Tk",
            "Registration Fee: 100 Tk",
        ],
        schedule: schedules.chess,
    },
}

export const contest_groups = {
    gaming: {
        groupType: true,
        name: 'Gaming',
        banner: gaming_banner,
        url: pageurls.gaming,
        description: descriptions.gaming,
        helpline: helplines.gaming,
        contests: [
            contests_data.fifa,
            contests_data.chess
        ]
    },
}