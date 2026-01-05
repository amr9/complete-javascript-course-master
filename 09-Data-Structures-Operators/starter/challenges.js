'use-strict';
//challenge 1
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const [players1, players2] = game.players;

// const [gk, ...fieldPlayers] = players1;
// // const [gk2,...fieldPlayers2] = players2
// const allPlayers = [...players1, ...players2];

// const playerFinale = [...players1, 'Thiago', 'Countinho', 'Perisic'];
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(players1);
// console.log(players2);
// console.log(gk);
// console.log(fieldPlayers);
// console.log(playerFinale);
// console.log(allPlayers);
// console.log(team1, draw, team2);

// function printGoals(...players) {
//   for (let i = 0; i < players.length; i++) {
//     console.log(`names: ${players[i]}`);
//   }
//   console.log(`goals scored: ${players.length}`);
// }
// console.log((team1 < team2 && team1) || (team2 < team1 && team2));
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich', ...game.scored);

//challenge 2
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// for (const [index, player] of game.scored.entries()) {
//   console.log(`Goal ${index + 1}: ${player}`);
// }

// let sum = 0;
// for (const odd of Object.values(game.odds)) {
//   sum += odd;
// }

// console.log(`average of all odds is ${sum / Object.values(game.odds).length}`);

// const [team1, draw, team2] = Object.values(game.odds);
// console.log(`
//       Odd of victory ${game.team1}: ${team1}
//       Odd of draw: ${draw}
//       Odd of victory ${game.team2}: ${team2}
//       `);

// const scorers = {};
// for (const [index, player] of game.scored.entries()) {
//   let goal = 0;
//   for (let i = 0; i < game.scored.length; i++) {
//     if (player === game.scored[i]) {
//       goal++;
//     }
//   }
//   scorers[player] = goal;
// }
// console.log(scorers);
//challenge 3

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// gameEvents.delete(64);

// console.log(gameEvents);

// const sizeOfMap = gameEvents.size;
// console.log(`An event happened, on average, every ${90 / sizeOfMap} minutes`);

// for (const [key, value] of gameEvents) {
//   console.log(`[${key <= 45 ? 'FIRST HALF' : 'SECOND HALF'}] ${key}: ${value}`);
// }

//challenge 4
const textArea = [
  'underscore_case',
  ' first_name',
  'Some_Variable ',
  '  calculate_AGE',
  'delayed_departure',
];

let newTextaArea = '';
for (const [index, str] of textArea.entries()) {
  const trimed = str.trim();
  const lowered = trimed.toLowerCase();
  const splited = lowered.split('_');
  const camelize =
    splited[0] + splited[1].replace(splited[1][0], splited[1][0].toUpperCase());
  const padded = camelize.padEnd(20, ' ');
  newTextaArea += padded + `${'✅'.repeat(index + 1)}\n`;
}
console.log(newTextaArea);
