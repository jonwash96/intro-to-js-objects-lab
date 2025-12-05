const pokemon = require('./data.js');

const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
}



// {title:"" , desc:"", input:"", func:null, proto:null}

// EXERCISE 1
//console.dir(pokemon, { maxArrayLength:null });
print('ex1',{
  title:"pokemon Object", 
  desc:"1. Run console.dir(pokemon, { maxArrayLength:null })", 
  input:"[*pokemon object*]", 
  func:"[*large object*]", 
  proto:`console.dir(game, { maxArrayLength })`
});

// EXERCISE 2
console.log("\nGame Object: ",game);
print('ex2',{
  title:"Game Object" , 
  desc:"1. Run console.log(game)", 
  input:null, 
  func:"[*'game' object*]", 
  proto:`console.log(game)`
});

// EXERCISE 3
game["difficulty"] = 'hard';
print('ex3',{
  title:"Add Difficulty" , 
  desc:"1. Add a new property to the game object. Let's call it 'difficulty'.<br>2. Choose a value for 'difficulty' that you think fits the game. How would you assign", 
  input:null, 
  func:game.difficulty, proto:`game["difficulty"] = 'hard'`
});

// EXERCISE 4
game.party.push(pokemon.filter(p=>p.name==='Pikachu')[0]);
print('ex4',{
  title:"Select A Starter" , 
  desc:"1. Select a starter Pokémon from the 'pokemon' array. Remember, a starter Pokémon's 'starter' property is true.<br>2. Add this Pokémon to the 'game.party' array. Which array method will you use to add them?", 
  input:"[pokemon Array]", 
  func:JSON.stringify(game.party,null,1), 
  proto:`game.party.push(pokemon.filter(p=>p.name==='Pikachu')[0])`
});

// EXERCISE 5
game.party.push(pokemon.filter(p=>p.starter===false && p.hp > 50 && p.type==='fire')[0]);
game.party.push(pokemon.filter(p=>p.starter===false && p.hp > 69 && p.type==='psychic')[0]);
game.party.push(pokemon.filter(p=>p.starter===false && p.hp > 80 && p.type==='normal')[0]);
print('ex5',{
  title:"Choose team" , 
  desc:"1. Choose three more Pokémon from the pokemon array and add them to your party.<br>2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?", 
  input:null, 
  func:JSON.stringify(game.party,null,1), 
  proto:`game.party.push(pokemon.filter(p=>{p.starter===false && p.hp > 40 && p.type==='fire'}));<br>game.party.push(pokemon.filter(p=>{p.starter===false && p.hp > 50 && p.type==='psychic'}));<br>game.party.push(pokemon.filter(p=>{p.starter===false && p.hp > 80 && p.type==='normal'}))`
});

// EXERCISE 6
game.gyms.forEach(gym=>{if (gym.difficulty < 3) gym.completed = true});
print('ex6',{
  title:"Set Easy Gyms Completed" , 
  desc:"1. Set the completed property to true for gyms with a difficulty below 3.<br>2. Think about how you'd loop through the gyms array to check and update the completed property.", 
  input:null, func:JSON.stringify(game.gyms,null,1), 
  proto:`game.gyms.forEach(gym=>{if (gym.difficulty < 3) gym.completed = true})`
});

// EXERCISE 7
function evolveStarter() {game.party.splice(0,1,pokemon.filter(p=>p.name==='Raichu')[0]); return game.party};
print('ex7',{
  title:"Evolve Starter" , 
  desc:"1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.", 
  input:null, 
  func:JSON.stringify(evolveStarter(),null,1), 
  proto:evolveStarter
});

// EXERCISE 8
const printPartyList = () => `My Party: ${game.party.map(p=>p.name)}`;
print('ex8',{
  title:"Print Party List" , 
  desc:"1. Print the name of each Pokémon in your party.", 
  input:null, 
  func:JSON.stringify(printPartyList(),null,1), 
  proto:printPartyList
});

// EXERCISE 9
const allStarters = () => pokemon.filter(p=>p.starter===true);
print('ex9',{
  title:"Print All Starters" , 
  desc:"1. Can you print out all the starter Pokémon from the pokemon array?", 
  input:null, 
  func:JSON.stringify(allStarters(),null,1), 
  proto:allStarters
});

// EXERCISE 10
game['catchPokemon'] = function(pokemonObj){this.party.push(pokemonObj)};
print('ex10',{
  title:"Add a method to the Object" , 
  desc:"1. Create a method called 'catchPokemon' and add it to the 'game' object. You should not need to edit the original game object directly. This method should:<br>- Accept an object as a parameter called 'pokemonObj'<br>- Add the 'pokemonObj' to the 'game.party' array.<br>- not return anything", 
  input:"[param: pokemonObj]", 
  func:game.catchPokemon, 
  proto:`game['catchPokemon'] = function(pokemonObj){this.party.push(pokemonObj)}`
});

// EXERCISE 11
game['catchPokemon'] = function(pokemonObj){
  this.party.push(pokemonObj);
  game.items.filter(i=>i.name==='pokeball')[0].quantity--;
}
print('ex11',{
  title:"Modify the method to use pokeballs" , 
  desc:"1. Copy the 'catchPokemon' method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.", 
  input:"[param: pokemonObj]", 
  func:game.catchPokemon, 
  proto:`game['catchPokemon'] = function(pokemonObj){<br>&nbsp;&nbsp;this.party.push(pokemonObj);<br>&nbsp;&nbsp;game.items.filter(i=>i.name==='pokeball')[0].quantity--;<br>}`
});

// TEST EXERCISE 11
{
const partyBefore = [...game.party];
const quantityBefore = Number(game.items.filter(i=>i.name==='pokeball')[0].quantity);
game.catchPokemon(pokemon.filter(p=>p.number===69)[0]);
print('ex11-T',{
  title:"Test catchPokemon()", 
  desc:"1. After updating the method, call it and pass in a Pokemon object of your choice from the 'pokemon' data to catch it.<br>2. Also, log the 'game.items' array to confirm that the pokeball quantity is being decremented.", 
  input:pokemon.filter(p=>p.number===69)[0], 
  func:`Party Before: ${JSON.stringify(partyBefore,null,1)}<br>Party After: ${JSON.stringify(game.party,null,1)}<br>Quantity Before: ${quantityBefore}<br>Quantity After: ${game.items.filter(i=>i.name==='pokeball')[0].quantity}`, 
  proto:`game.catchPokemon(pokemon.filter(p=>p.number===69)[0])`
});
}

// EXERCISE 12
game['setGymCompletion'] = function(type,value,bool) { // Had I known I'd use this again, I would've done this the first time.
  switch (type) {
    case 'difficulty': {this.gyms.forEach(gym=>{if (gym.difficulty < value) gym.completed = bool})}; break;
    case 'location': {this.gyms.forEach(gym=>{if (gym.location === value) gym.completed = bool})}; break;
  }
};
game.setGymCompletion('difficulty',6,true);
print('ex12',{
  title:"Set Medium Gyms Completed" , desc:"1. Similar to Exercise 6, now complete gyms with a difficulty below 6.", 
  input:"6,true", 
  func:game.gyms.map(g=>JSON.stringify(g,null,1)), 
  proto:`game['setGymCompletion'] = function(type,value,bool) {<br>&nbsp;&nbsp;switch (type) {<br>&nbsp;&nbsp;&nbsp;&nbsp;case 'difficulty': {this.gyms.forEach(gym=>{if (gym.difficulty < value) gym.completed = bool})}; break;<br>&nbsp;&nbsp;&nbsp;&nbsp;case 'location': {this.gyms.forEach(gym=>{if (gym.location === value) gym.completed = bool})}; break;<br>&nbsp;&nbsp;}<br>};<br>game.setGymCompletion('difficulty',6,true);`
});

// EXERCISE 13
game['gymStatus'] = function() {
  if (!this.gymTally) {this['gymTally'] = {complete:0,incomplete:0}};
  this.gymTally.complete = game.gyms.filter(g=>g.completed===true).length;
  this.gymTally.incomplete = game.gyms.filter(g=>g.completed===false).length;
}
print('ex13',{
  title:"Gym Tally" , 
  desc:"1. Create a 'gymStatus' method in 'game' to tally completed and incomplete gyms.<br>This method should:<br>- Not accept any arguments.<br>- Initially create a constant 'gymTally', which is an object that has two properties: 'completed' and 'incomplete', both of which are initially set to 0.<br>- Iterate through the objects in the 'game.gyms' array and update the properties on 'gymTally' as follows:<br>&nbsp;&nbsp;- 'completed' should count how many gyms in the array have a value of 'true' for their 'completed' property.<br>&nbsp;&nbsp;- 'incomplete' should count how many gyms in the array have a value of 'false' for their 'completed' property.<br>- Log the value of 'gymTally'.<br>- The method should not return anything.", 
  input:null, 
  func:"[*object*]", 
  proto:`game['gymStatus'] = function() {<br>&nbsp;&nbsp;if (!this.gymTally) {this['gymTally'] = {complete:0,incomplete:0}};<br>&nbsp;&nbsp;this.gymTally.complete = game.gyms.filter(g=>g.completed===true).length;<br>&nbsp;&nbsp;this.gymTally.incomplete = game.gyms.filter(g=>g.completed===false).length;}`
});

// EXERCISE 13 TEST
{
  const before = JSON.stringify({...game.gymTally},null,1);
  game.gymStatus();
  print('ex13-T',{
    title:"Test Gym Tally", 
    desc:null, input:null, 
    func:`Before: ${before}<br>After: ${JSON.stringify(game.gymTally,null,1)}`, 
    proto:`const before = {...game.gymTally};<br>game.gymStatus();`
  })
}

// EXERCISE 14
game['countParty'] = function() {return(this.party.length)}
print('ex14',{
  title:"Count Party" , 
  desc:"1. Add a 'partyCount' method to 'game' that counts the number of Pokémon in your party.<br>This method should:<br>&nbsp;&nbsp;- Not accept any arguments.<br>&nbsp;&nbsp;- Count the number of Pokemon in the party.<br>&nbsp;&nbsp;- return the found number of Pokemon in the party.", 
  input:"", 
  func:game.countParty, 
  proto:`game['countParty'] = function() {return(this.party.length)}`
});

// EXERCISE 15
game.setGymCompletion('difficulty',8,true);
game.gymStatus();
print('ex15',{
  title:"Complete Hard Gyms", 
  desc:"1. Complete gyms with a difficulty below 8.", 
  input:"8,true", 
  func:game.gymTally, 
  proto:`game.setGymCompletion('difficulty',8,true);<br>game.gymStatus();`
});

// EXERCISE 16
console.dir(game, { depth:null })
print('ex16',{
  title:"Final Game Object", 
  desc:"1. Log the entire 'game' object to the console.", 
  input:null, 
  func:JSON.stringify(game,null,1), 
  proto:null
});


// RENDERING FUNCTIONS
function print(ex,obj) {
  const desc = obj.desc?.constructor.name==='String' && obj.desc.replaceAll('<br>','\n').replaceAll('&nbsp;',' ') || obj.desc || null;
  const func = obj.func?.constructor.name==='String' && obj.func.replaceAll('<br>','\n').replaceAll('&nbsp;',' ') || obj.func || null;
  const proto = obj.proto?.constructor.name==='String' && obj.proto.replaceAll('<br>','\n').replaceAll('&nbsp;',' ') || obj.proto || null;
  console.log(`\n#######\nEXERCISE ${ex.replace('ex','')}\nDESCRIPTION:\n${desc}\nMY CODE: \n${proto}\nRESULT:\n${func}`);
}
