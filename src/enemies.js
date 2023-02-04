export const ENEMIES = [
    {
        name: 'Acid Ooze',
        skills: [
            {name: 'Attack', level: 7},
            {name: 'Defense', level: 3},
            {name: 'Strength', level: 2},
        ],
        health: 10,
        image: require('./assets/images/enemies/AcidOozeIdleSide.gif'),
    },
    {
        name: 'Brawny Ogre',
        health: 15,
        skills: [
            {name: 'Attack', level: 8},
            {name: 'Defense', level: 4},
            {name: 'Strength', level: 3},
        ],
        image: require('./assets/images/enemies/BrawnyOgreIdleSide.gif'),
    },
    {
        name: 'Storm Giant',
        health: 20,
        skills: [
            {name: 'Attack', level: 9},
            {name: 'Defense', level: 5},
            {name: 'Strength', level: 4},
        ],
        image: require('./assets/images/enemies/StormGiantIdleSide.gif'),
    },
    {
        name: 'Werewolf Stalker',
        health: 25,
        skills: [
            {name: 'Attack', level: 10},
            {name: 'Defense', level: 6},
            {name: 'Strength', level: 5},
        ],
        image: require('./assets/images/enemies/WerewolfStalkerIdleSide.gif'),
    },
];