'use-strict';
//challenge 1
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;

const [gk, ...fieldPlayers] = players1;
// const [gk2,...fieldPlayers2] = players2
const allPlayers = [...players1, ...players2];

const playerFinale = [...players1, 'Thiago', 'Countinho', 'Perisic'];
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(players1);
console.log(players2);
console.log(gk);
console.log(fieldPlayers);
console.log(playerFinale);
console.log(allPlayers);
console.log(team1, draw, team2);

function printGoals(...players) {
  for (let i = 0; i < players.length; i++) {
    console.log(`names: ${players[i]}`);
  }
  console.log(`goals scored: ${players.length}`);
}
console.log((team1 < team2 && team1) || (team2 < team1 && team2));
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich', ...game.scored);
