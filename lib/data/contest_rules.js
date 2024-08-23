import lfr_track from '@/public/static/images/lfr_track.png';

export const contest_rules = {
    lfr: [
        {
            title: "Eligibility",
            rules: [
                "The competition is open to all the students of college and universities.",
                {
                    main: "Participants may participate individually or as a team. Please note the following requirements:",
                    sub: [
                        "Teams can be of 1 - 3 members. Additional members are allowed, but must pay an extra fee."
                    ]
                },
                "The competition is open to all the students of college and universities.",
                "Each participant, whether individual or a team, must give a Team Name.",
                "Team members can be from different institutions.",
                "Participants must be enrolled as a current student of any university/college/school in Bangladesh."
            ]
        },
        {
            title: "General Rules",
            rules: [
                "All the participating teams must submit their robot to the organizing committee thirty minutes before the start of the competition, and only one member from the team would be allowed to operate the robot on track.",
                "Robots must have dedicated on-board power supply; no power supply would be provided from the organizing committee to operate the robot on track.",
                "The robot must be autonomous and no remote control is allowed.",
                "Points will be awarded only if the robot travels through the whole path of the checkpoint and crosses the checkpoint skipping none.",
                "Touching the bot during run-time will count as a restart. Restart is a must in case of a line loss.",
                "A maximum of 5 restarts will be allowed.",
                {
                    main: "The tournament is comprised of two phases:",
                    sub: [
                        "a) Eliminator round",
                        "b) Final round",
                    ]
                },
                "The winning team is declared based on points.",
                "The organizers reserve the right to change the rules as they deem fit.",
                "The judges can ask for an explanation of any mechanism on the robot, and there would be an immediate disqualification of defaulters of any kind.",
                "Judges' decision will be final."
            ]
        },
        {
            title: "An Overview of The Track",
            rules: [
                "The color of the line in the track of this tournament can be white in a black background or black in a white background. Line width will be 3 cm.",
                "There can be discontinuity.",
                "There can be loops in the track.",
                "There can be a bridge in the track, whose upward and downward ramp would not be more than 25 degrees.",
                "There can be acute angles ranging from 30-150 degrees.",
                "No wall or object will be present in the track."
            ]
        },
        {
            title: "Game Play",
            rules: [
                "The robot will be placed at a pre-assigned starting point on each stage and may be started by hand when directed by the judge.",
                "The bot has to start from the indicated starting point and reach the end point following the line. The end of the task is indicated by reaching the end point.",
                "Robot must be able to operate under any lighting conditions. (Teams should take necessary measures to isolate the sensors from external lighting like camera flash.)",
                "Any robot that loses the line must restart from the previous checkpoint. In this case, the timer will remain running during restart, and a penalty will be pointed.",
                "After submitting the robot and during competition time, any change of hardware and software is not allowed. After the qualifying round, only the qualified teams can perform in the final round.",
                "There is no option to skip any task.",
                "Teams will be given a maximum of 5 minutes in the qualifying round, and the Robot can take a maximum of 5 restarts in these 5 minutes.",
                "Teams will be given a maximum of 8 minutes in the final round, and the Robot can take a maximum of 5 restarts in these 8 minutes.",
                "The timer will be running if a robot needs a restart."
            ]
        },
        {
            title: "Caution",
            rules: [
                {
                    main: "If a team is found guilty of the following acts, they will be disqualified:",
                    sub: [
                        "Showing disrespect to other teams and competitors.",
                        "Showing disrespect to security rules.",
                        "Showing disrespect to competition judges.",
                    ]
                },
                "The authority reserves the right to change the rules; in such a case, teams will be pre-notified and the changes will be applicable to all teams.",
                "The authority won’t take responsibility for any accidents caused by the team members or their robots."
            ]
        },
        {
            title: "Demo Track",
            image_type: true,
            image: lfr_track
        }
    ]
};
