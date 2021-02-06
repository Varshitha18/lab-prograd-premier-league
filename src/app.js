//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  return [managerName, managerAge, currentTeam, trophiesWon]
}
//Write your function here

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

function createFormation(formationInfo) {
  if(formationInfo.length == 0)
    return null
  return {"defender" : formationInfo[0], "midfield" : formationInfo[1] , "forward" : formationInfo[2]}
}
//write your function here

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year

function filterByDebut(year) {
  return players.filter(player => player.debut == year)
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position) {
  if (position == null || position == NaN || position == undefined)
    return []
  return players.filter(player => player.position == position)
}

//Progression 5 - Filter players that have won ______ award

function filterByAward(awardName) {
  if(awardName == null || awardName == NaN || awardName == undefined)
    return []
  var playerlist = []
  for (var i = 0; i < players.length; i++)
    for (var j = 0; j < players[i].awards.length; j++)
       if (players[i].awards[j].name == awardName)
          playerlist.push(players[i])
  return playerlist
}

//Progression 6 - Filter players that won ______ award ____ times

function filterByAwardxTimes(awardName, noOfTimes) {
  if(awardName == null || awardName == NaN || awardName == undefined)
    return []
  var playerlist = []
  for (var i = 0; i < players.length; i++) {
    count = 0
    for (var j = 0; j < players[i].awards.length; j++) {
       if (players[i].awards[j].name == awardName)
          count += 1
    }
          if(count == noOfTimes)
            playerlist.push(players[i])
    }
  return playerlist
}

//Progression 7 - Filter players that won ______ award and belong to ______ country

function filterByAwardxCountry(awardName, country) {
  let res=[];
  for(var i = 0; i < players.length; i++)
  for(var j = 0; j < players[i].awards.length; j++)
   if((players[i].awards[j].name == awardName) && (players[i].country == country))
     if(!(res.includes(players[i])))
     res.push(players[i]);
  return res;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  let res = players.filter(player => player.awards.length >= noOfAwards && player.team == team && player.age < age);
  return res;
}

//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
