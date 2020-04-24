// influences proficiencyBonus
const characterLevel = 1;
/** Origin(originSubtype1, originSubtype2,...) {string}
 * Synth(Houston, Visser, Shenzen)
 */
const origin = 'Synth';
const originSubtype = 'Visser';
const characterClass = 'Enforcer';
// standard array = [16, 14, 13, 12, 10, 9]
const strength = 13;
const dexterity = 16;
const constitution = 12;
const intelligence = 14;
const technology = 10;
const people = 9;

/** To Do
 * add misc racial boni
 * need a way of selecting only a certain {number} of skills (defined by characterClass) from array [classSkillList]
 * -> add proficiencyBonus only to those skills
 */

function main() {
    // FIXME: array → object
    // FIXME: suggestion: put into `abilities.json`
    const ability = [
        (STR = {
            name: 'Str',
            value: strength,
        }),
        (DEX = {
            name: 'Dex',
            value: dexterity,
        }),
        (CON = {
            name: 'Con',
            value: constitution,
        }),
        (INT = {
            name: 'Int',
            value: intelligence,
        }),
        (TEC = {
            name: 'Tec',
            value: technology,
        }),
        (PEO = {
            name: 'Peo',
            value: people,
        }),
    ];

    function abilityModifier(ability) {
        // FIXME: const, or just return the expression
        abilityMod = Math.floor((ability - 10) / 2);
        return abilityMod;
    }

    // FIXME: add `origin`, `originSubtype` and `ability` as params
    function originAbilityAjustment() {
        switch (origin.toLowerCase()) {
            case 'synth':
                ability[ability.indexOf(CON)].value += 2;
                switch (originSubtype.toLowerCase()) {
                    case 'houston':
                        ability[ability.indexOf(DEX)].value += 1;
                        break;
                    case 'shenzen':
                        ability[ability.indexOf(PEO)].value += 1;
                        break;
                    case 'visser':
                        ability[ability.indexOf(STR)].value += 1;
                        break;
                }
                break;
        }
    }

    // FIXME: those parameters don't exist on the function
    originAbilityAjustment(origin, originSubtype);

    // FIXME: suggestion for name: `viewAbilityStats`
    // lists abilities with ability modifiers {string}
    function finalAbilityStats() {
        let fas = '';
        // FIXME: for..of instead of raw loop
        for (let counter = 0; counter < ability.length; counter++) {
            (fas += `\n${ability[counter].name}: `),
                (fas += `${ability[counter].value} (`);
            let mod = abilityModifier(ability[counter].value);
            if (mod >= 0) fas += '+';
            fas += `${mod})`;
        }
        return fas;
    }

    // FIXME: add `characterLevel` as param
    function proficiencyBonus() {
        profB = 2 + Math.floor((characterLevel - 1) / 4);
        return profB;
    }

    // FIXME: array → object
    const skillList = [
        (ACROBATICS = {
            name: 'Acrobatics',
            value: abilityModifier(ability[ability.indexOf(DEX)].value),
            classSkill: false,
        }),
        (ATHLETICS = {
            name: 'Athletics',
            value: abilityModifier(ability[ability.indexOf(STR)].value),
            classSkill: false,
        }),
        (BUREAUCRACY = {
            name: 'Bureaucracy',
            value: abilityModifier(ability[ability.indexOf(PEO)].value),
            classSkill: false,
        }),
        (COMPUTING = {
            name: 'Computing',
            value: abilityModifier(ability[ability.indexOf(TEC)].value),
            classSkill: false,
        }),
        (DECEPTION = {
            name: 'Deception',
            value: abilityModifier(ability[ability.indexOf(PEO)].value),
            classSkill: false,
        }),
        (ENGINEERING = {
            name: 'Engineering',
            value: abilityModifier(ability[ability.indexOf(INT)].value),
            classSkill: false,
        }),
        (GAMBLING = {
            name: 'Gambling',
            value: abilityModifier(ability[ability.indexOf(INT)].value),
            classSkill: false,
        }),
        (HACKING = {
            name: 'Hacking',
            value: abilityModifier(ability[ability.indexOf(TEC)].value),
            classSkill: false,
        }),
        (HISTORY = {
            name: 'History',
            value: abilityModifier(ability[ability.indexOf(INT)].value),
            classSkill: false,
        }),
        (Intimidation = {
            name: 'Intimidation',
            value: abilityModifier(ability[ability.indexOf(STR)].value),
            classSkill: false,
        }),
        (INVESTIGATION = {
            name: 'Investigation',
            value: abilityModifier(ability[ability.indexOf(INT)].value),
            classSkill: false,
        }),
        (MECHANICS = {
            name: 'Mechanics',
            value: abilityModifier(ability[ability.indexOf(TEC)].value),
            classSkill: false,
        }),
        (MEDICINE = {
            name: 'Medicine',
            value: abilityModiier(ability[ability.indexOf(TEC)].value),
            classSkill: false,
        }),
        (NAVIGATION = {
            name: 'Navigation',
            value: abilityModifier(ability[ability.indexOf(INT)].value),
            classSkill: false,
        }),
        (PERCEPTION = {
            name: 'Perception',
            value: abilityModifier(ability[ability.indexOf(INT)].value),
            classSkill: false,
        }),
        (PERFORMANCE = {
            name: 'Performance',
            value: abilityModifier(ability[ability.indexOf(PEO)].value),
            classSkill: false,
        }),
        (PERSUASION = {
            name: 'Persuasion',
            value: abilityModifier(ability[ability.indexOf(PEO)].value),
            classSkill: false,
        }),
        (PRESENCE = {
            name: 'Presence',
            value: abilityModifier(ability[ability.indexOf(PEO)].value),
            classSkill: false,
        }),
        (RELIGION = {
            name: 'Religion',
            value: abilityModifier(ability[ability.indexOf(INT)].value),
            classSkill: false,
        }),
        (ROBOTICS = {
            name: 'Robotics',
            value: abilityModifier(ability[ability.indexOf(TEC)].value),
            classSkill: false,
        }),
        (SENSE_MOTIVE = {
            name: 'Sense Motive',
            value: abilityModifier(ability[ability.indexOf(PEO)].value),
            classSkill: false,
        }),
        (SLEIGHT_OF_HAND = {
            name: 'Sleight of Hand',
            value: abilityModifier(ability[ability.indexOf(DEX)].value),
            classSkill: false,
        }),
        (STEALTH = {
            name: 'Stealth',
            value: abilityModifier(ability[ability.indexOf(DEX)].value),
            classSkill: false,
        }),
        (STREETWISE = {
            name: 'Streetwise',
            value: abilityModifier(ability[ability.indexOf(INT)].value),
            classSkill: false,
        }),
        (TRACKING = {
            name: 'Tracking',
            value: abilityModifier(ability[ability.indexOf(INT)].value),
            classSkill: false,
        }),
        (VEHICLES_AIRCRAFT = {
            name: 'Vehicles (Aircraft)',
            value: abilityModifier(ability[ability.indexOf(TEC)].value),
            classSkill: false,
        }),
        (VEHICLES_LAND = {
            name: 'Vehicles (Land)',
            value: abilityModifier(ability[ability.indexOf(DEX)].value),
            classSkill: false,
        }),
    ];


    // FIXME: add `characterClass` as param
    function characterClassSkillList() {
        const csl = [];
        switch (characterClass.toLowerCase()) {
            case 'enforcer':
                csl.push(
                    'Acrobatics',
                    'Athletics',
                    'Intimidation',
                    'Navigation',
                    'Perception',
                    'Sense Motive',
                    'Vehicles (Land)',
                );
                break;
        }
        return csl;
    }

    const classSkillList = characterClassSkillList();

    // FIXME: add `skillList` and `classSkillList` as params
    // FIXME: suggestion for name: `viewCharacterSkillList`
    // lists skillnames and values including proficiency bonus from class skills {string}
    function finalCharacterSkillList() {
        const charSkills = [];
        let charSkillsPretty = '\n[Skills]:';

        // FIXME: for..of instead of raw loop
        for (let index = 0; index < skillList.length; index++) {
            charSkills.push(skillList[index]);

            if (classSkillList.includes(skillList[index].name) == true) {
                charSkills[index].value += proficiencyBonus();
            }
        }

        // FIXME: for..of instead of raw loop
        for (let index = 0; index < charSkills.length; index++) {
            charSkillsPretty += `\n${charSkills[index].name}: ${
                charSkills[index].value
                }`;
        }
        return charSkillsPretty;
    }

    // FIXME: Nice, separation of program logic and printing!
    console.log(
        `Origin: ${origin} (${originSubtype})\nLevel`,
        characterLevel,
        characterClass,
        '\n',
        finalAbilityStats(),
        '\n',
        finalCharacterSkillList(),
    );
}

main();

console.log("test");

// const termsWorked = 3;

// function ageCalculation() {
//   const ageRange = { start: 0, middle:0, old:0, ancient:0}
//   switch (origin.toLowerCase()) {    
//     case "synth":
//       ageRange.start = 0;
//       ageRange.middle= 16;
//       ageRange.old= 45;
//       ageRange.ancient= 55;
//       break;
//     };

//     return ageRange.middle;
//   };


// console.log(ageCalculation())


// const origins = {
//   "Synth": {
//       asi: ability.CON += 2,
//       age: {
//           start: 0,
//           middle: 16,
//           old: 45,
//           ancient: 55
//       },
//       speed: 30,
//       special: `BIOENHANCED. As a synth, you have advantage on checks made to avoid disease.\nRECHARGE. Instead of regular sleep, your enhancements allow you to sleep for just four hours a day and still gain the benefits of an eight-hour rest. Your AI produces the illusion of dreams for you in this state, usually of robot sheep.\nCOMPOSITE WEAVING. Your skin and muscles are interwoven with high-strength composite materials, granting you a natural armor of 13 + your Dexterity modifier. Even when wearing armor your AC cannot be any lower than that of your natural armor.`,
//       languages: "LANGUAGES. You can speak, read, and write English, and one other language of your choice.",
//   }
// }

// console.log(origins.originSelected)

