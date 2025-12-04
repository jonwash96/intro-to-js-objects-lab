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
console.dir(pokemon, { maxArrayLength:null });
print('ex1',{title:"Game Object", desc:null, input:"[game object]", func:JSON.stringify(game), proto:`console.dir(game, { maxArrayLength })`})

// EXERCISE 2
console.log(game);
print('ex2',{title:"Game Object" , desc:null, input:"[game object]", func:null, proto:`console.log(game)`});

// EXERCISE 3
game["difficulty"] = 'hard';
print('ex3',{title:"Add Difficulty" , desc:"1. Add a new property to the game object. Let's call it 'difficulty'. 2. Choose a value for 'difficulty' that you think fits the game. How would you assign", input:null, func:game.difficulty, proto:`game["difficulty"] = 'hard'`});

// EXERCISE 4
game.party.push(pokemon.filter(p=>p.name==='Pikachu')[0]);
print('ex4',{title:"Select A Starter" , desc:null, input:"[pokemon Array]", func:game.party, proto:`game.party.push(pokemon.filter(p=>p.name==='Pikachu')[0])`});

// EXERCISE 5
game.party.push(pokemon.filter(p=>{p.starter===false && p.hp > 40 && p.type==='fire'}));
game.party.push(pokemon.filter(p=>{p.starter===false && p.hp > 50 && p.type==='psychic'}));
game.party.push(pokemon.filter(p=>{p.starter===false && p.hp > 80 && p.type==='normal'}));
print('ex5',{title:"Choose team" , 
    desc:"1. Choose three more Pokémon from the pokemon array and add them to your party.<br>2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?", 
    input:"", func:game.party, 
    proto:`game.party.push(pokemon.filter(p=>{p.starter===false && p.hp > 40 && p.type==='fire'}));<br>game.party.push(pokemon.filter(p=>{p.starter===false && p.hp > 50 && p.type==='psychic'}));<br>game.party.push(pokemon.filter(p=>{p.starter===false && p.hp > 80 && p.type==='normal'}))`});

// EXERCISE 6
game.gyms.forEach(gym=>{if (gym.difficulty < 3) gym.completed = true});
print('ex6',{title:"Set Easy Gyms Completed" , desc:"1. Set the completed property to true for gyms with a difficulty below 3.<br>2. Think about how you'd loop through the gyms array to check and update the completed property.", input:null, func:game.gyms, proto:`game.gyms.forEach(gym=>{if (gym.difficulty < 3) gym.completed = true})`});

// EXERCISE 7
function evolveStarter() {game.party.splice(0,1,pokemon.filter(p=>p.name==='Raichu')[0]); return game.party};
print('ex7',{title:"Evolve Starter" , desc:"Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.", input:null, func:evolveStarter(), proto:evolveStarter});

// EXERCISE 8
const printPartyList = () => `My Party: ${game.party.map(p=>p.name)}`;
print('ex8',{title:"Print Party List" , desc:"Print the name of each Pokémon in your party.", input:null, func:printPartyList(), proto:printPartyList});

// EXERCISE 9

print('ex9',{title:"" , desc:"", input:"", func:null, proto:null});

// EXERCISE 10

print('ex10',{title:"" , desc:"", input:"", func:null, proto:null});

// EXERCISE 11

print('ex11',{title:"" , desc:"", input:"", func:null, proto:null});


// EXERCISE 12

print('ex12',{title:"" , desc:"", input:"", func:null, proto:null});

// EXERCISE 13

print('ex13',{title:"" , desc:"", input:"", func:null, proto:null});

// EXERCISE 14

print('ex14',{title:"" , desc:"", input:"", func:null, proto:null});

// EXERCISE 14 v2

print('ex14v2',{title:"" , desc:"", input:"", func:null, proto:null});

// EXERCISE 15

print('ex15',{title:"" , desc:"", input:"", func:null, proto:null});

// EXERCISE 16

print('ex16',{title:"" , desc:"", input:"", func:null, proto:null});


// RENDERING FUNCTIONS
function print(ex,obj) {
    console.log(`######\nEXERCISE ${ex.replace('ex','')}\nDESCTIPTION:\n${obj.desc}\nRESULT:\n${obj.func}\n`);
}
