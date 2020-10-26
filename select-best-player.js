const nba = [
  {
    lebron: 'LeBron James',
    ad: 'Anthony Davis'
  },
  {
    dame: 'Damien Lillard',
    cj: 'CJ McCollough'
  },
  {
    harden: 'James Harden',
    lin: 'Jeremy Linn'
  }
];

function selectBestPlayer(sport) {
  const bestPlayers = [];
  let anthnoyDavis = 'ad';

  for (let i = 0; i < sport.length; i++) {
    let team = sport[i];
    console.log(`The current team has the following:`);
    console.log(team);

    if (team.harden) {
      console.log('James Harden was selected');
      bestPlayers.push(team.harden);
    } else if (team['lebron']) {
      console.log('Lebron James was selected');
      bestPlayers.push(team.lebron);
    } else if (team.dame) {
      console.log('Damien Lillard was selected');
      bestPlayers.push(team['dame']);
    }
    
    if (team[anthnoyDavis]) {
      console.log('Anthony Davis was selected');
      bestPlayers.push(team.ad);
    }
  }

  return bestPlayers;
}

console.log(selectBestPlayer(nba));
// Output
// > [ 'LeBron James', 'Anthony Davis', 'Damien Lillard', 'James Harden' ]
