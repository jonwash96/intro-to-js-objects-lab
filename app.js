const pokemon = require('.data.js');

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
console.dir(pokemon, { maxArrayLength });
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
const allFoods = foods.join(' -> ');
print('ex9',{title:"Joining elements", desc:"1) Use the <em>join()<em> method to concatenate the strings in the <em>foods</em> array, separated by ' -> '.<br>2) Assign the result to a variable called <em>allFoods</em>. ", input:"->", func:allFoods, proto:`const allFoods = foods.join(' -> ')`});

// EXERCISE 10
const hasSoup = foods.includes("soup");
print('ex10',{title:"Check for an element", desc:"1) Using the .includes() method, check if the <em>foods</em> array contains the string'soup'.<br>2) Assign the result to a variable called <em>hasSoup</em>.", input:"soup", func:hasSoup, proto:`const hasSoup = foods.includes("soup")`});

// EXERCISE 11
const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
const odds = [];
for (let num of nums) {num % 2!==0 && odds.push(num)};
print('ex11',{title:"Odd numbers from an array", desc:"1) Choose a method to iterate through the <em>nums</em> array.<br>2) Push each odd number to a new array named <em>odds</em>`.", input:nums, func:odds, proto:`for (let num of nums) {num % 2!==0 && odds.push(num)}`});

// EXERCISE 11 v2
const odds2 = nums.filter(num=>num % 2!==0);
print('ex11v2',{title:"Odd numbers from an array", desc:"This method uses the built in Array.filter() method to make a shallow copy, iterate, and perform logic.", input:nums, func:odds2, proto:`const odds2 = nums.filter(num=>num % 2!==0)`});

// EXERCISE 12
const fizz = []; // numbers evenly divisable by 3
const buzz = []; // numbers evenly divisable by 5
const fizzBuzz = []; // numbers evenly divisable by 3 & 5
for (let num of nums) {
    if (num % 3 === 0) fizz.push(num);
    if (num % 5 === 0) buzz.push(num);
    if (num % 3 === 0 && num % 5 === 0) fizzBuzz.push(num);
};
print('ex12',{title:"FizzBuzz with arrays", 
    desc:"1) Choose a method to iterate through the <em>nums</em> array. <br>2. As you loop, sort the numbers into new arrays based on the following rules:<br>&nbsp;&nbsp;- Push any number evenly divisible by 3 to an array called <em>fizz</em>.<br>&nbsp;&nbsp;- Push any number evenly divisible by 5 to an array called <em>buzz</em>.<br>&nbsp;&nbsp;- Push any number that is evenly divisible by 3 and 5 to an array called <em>fizzbuzz</em>.<br>Note: A single number may meet more than one of the above rules. If it does, it should be placed in multiple arrays. For example, the number 15 will appear in the <em>fiz</em>, <em>buzz</em>, and <em>fizzbuzz</em> arrays.", 
    input:nums, func:JSON.stringify({fizz,buzz,fizzBuzz}), proto:`for (let num of nums) {<br>&nbsp;&nbsp;if (num % 3 === 0) fizz.push(num);<br>&nbsp;&nbsp;if (num % 5 === 0) buzz.push(num);<br>&nbsp;&nbsp;if (num % 3 === 0 && num % 5 === 0) fizzBuzz.push(num);<br>}`});

// EXERCISE 13
const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];
const numList = numArrays[numArrays.length -1];
print('ex13',{title:"Retrieve the last array", desc:"1) Assign the last nested array in the <em>numArrays</em> below to a variable named <em>numList</em>. As you do this, also fulfill these goals:<br>&nbsp;&nbsp;- Assume you don't know how many nested arrays <em>numArrays</em> contains.<br>&nbsp;&nbsp;- Do not alter the original <em>numArrays</em> array.", input:numArrays, func:numList, proto:`const numList = numArrays[numArrays.length -1]`});

// EXERCISE 14
const num = numArrays.map(arr=>arr.filter(el=>el===66)).join('');
print('ex14',{title:"Accessing within nested arrays", desc:"1) Retrieve the number 66 from the <em>numArrays</em> array. As part of this process do not alter the original <em>numArrays</em> array.<br>2) Assign it to a variable called <em>num</em>.", input:numArrays, func:num, proto:`const num = numArrays.map(arr=>arr.filter(el=>el===66)).join()`});

// EXERCISE 14 v2
const num2 = numArrays.flat(1)[numArrays.flat(1).indexOf(66)];
print('ex14v2',{title:"Accessing within nested arrays", desc:"1) Retrieve the number 66 from the <em>numArrays</em> array. As part of this process do not alter the original <em>numArrays</em> array.<br>2) Assign it to a variable called <em>num</em>.", input:numArrays, func:num2, proto:`const num2 = numArrays.flat(1)[numArrays.flat(1).indexOf(66)]`});

// EXERCISE 15-A
const sumA = numArrays.map(arr=>arr.reduce((a,c)=>a+c,0));
print('ex15-A',{title:"Nested array sum", desc:"<em>I'm not sure if it wants a single sum, or sums of each, so I did both.</em><br>1) Use nested loops or <em>forEach()M/em> methods to sum up all numbers within <em>numArrays</em> nested arrays.<br>2) Assign the sum to a variable called <em>total</em>.<br><em>Hint: Be sure to declare and initialize the total variable before the iterations.</em>", input:numArrays, func:sumA, proto:`const sumA = numArrays.map(arr=>arr.reduce((a,c)=>a+c,0))`});

// EXERCISE 15-B
const sumB = numArrays.map(arr=>arr.reduce((a,c)=>a+c,0)).reduce((a,c)=>a+c,0);
print('ex15-B',{title:"Nested array sum", desc:"<em>I'm not sure if it wants a single sum, or sums of each, so I did both.</em><br>1) Use nested loops or <em>forEach()M/em> methods to sum up all numbers within <em>numArrays</em> nested arrays.<br>2) Assign the sum to a variable called <em>total</em>.<br><em>Hint: Be sure to declare and initialize the total variable before the iterations.</em>", input:numArrays, func:sumB, proto:`const sumB = numArrays.map(arr=>arr.reduce((a,c)=>a+c,0)).reduce((a,c)=>a+c,0)`});

// EXERCISE 15-C
const sumC = numArrays.flat(1).reduce((a,c)=>a+c,0);
print('ex15-C',{title:"Nested array sum", desc:"<em>I'm not sure if it wants a single sum, or sums of each, so I did both.</em><br>1) Use nested loops or <em>forEach()M/em> methods to sum up all numbers within <em>numArrays</em> nested arrays.<br>2) Assign the sum to a variable called <em>total</em>.<br><em>Hint: Be sure to declare and initialize the total variable before the iterations.</em>", input:numArrays, func:sumC, proto:`const sumC = numArrays.flat(1).reduce((a,c)=>a+c,0)`});


// RENDERING FUNCTIONS

function print(ex,obj) {
    console.log(`Exercise ${ex.replace('ex','')} Result: ${obj.func}`);
}
