
//object from JSON file
var pokemons = [{
    name: "Clefairy",
    type: "fairy",
    description: "This impish Pokémon is friendly and peaceful. It is believed to live inside Mt. Moon, although very few have ever been seen by humans.",
    level: 23,
    imageUrl: "./img/pokemon-clefairy-8bit.png",
    moves: [{ name: "Disarming Voice", type: "fairy" },  { name: "Double Slap", type: "normal"}]
  },
  {
    name: "Gengar",
    type: "ghost",
    description: "Gengar, the Shadow Pokémon. Gengar hides in the shadows. If a Gengar is nearby, it is said to feel ten degrees colder than normal.",
    level: 32,
    imageUrl: "./img/pokemon-gengar-8bit.png",
    moves: [{ name: "Lick", type: "ghost" },  { name: "Shadow Punch", type: "ghost"}]
  },
  {
    name: "Growlithe",
    type: "fire",
    description: "Growlithe, a Puppy Pokémon of pleasant demeanor and great diligence. It drives enemies away with barks and bites.",
    level: 18,
    imageUrl: "./img/pokemon-growlithe-8bit.gif",
    moves: [{ name: "Bite", type: "dark" },  { name: "Ember", type: "fire"}]
  },
  {
    name: "Gyarados",
    type: "water",
    description: "Rarely seen in the wild. Huge and vicious, it is capable of destroying entire cities in a rage. Can fire a Hyper Beam from its mouth.",
    level: 26,
    imageUrl: "./img/pokemon-gyarados.png",
    moves: [{ name: "Aqua Tail", type: "water" },  { name: "Hydro Pump", type: "water"}]
  },
  {
    name: "Kadabra",
    type: "psychic",
    description: "Kadabra, a Psychic Pokémon. The evolved form of Abra. It employs powerful telekinetic attacks.",
    level: 24,
    imageUrl: "./img/pokemon-kadabra.png",
    moves: [{ name: "Confusion", type: "psychic" },  { name: "Psybeam", type: "psychic"}]
  },
  {
    name: "Scyther",
    type: "bug",
    description: "Its claws are sharp as swords, and it is a powerful flyer. This Pokémon is rarely seen by humans and almost never captured.",
    level: 18,
    imageUrl: "./img/pokemon-scyther.png",
    moves: [{ name: "Fury Cutter", type: "bug" },  { name: "Razor Wind", type: "normal"}]
  }];

//iterate through the pokemon list, create a square with all info for each pokemon

$.each(pokemons, function(index, value) {
	$('#pokemonWrapper').append('<div class="pokeBox" id='+value.name+'><img class="pokeMage" src='+value.imageUrl+'><p id="pokeLevel"><span id="levellvl">lvl </span><span id="level">'+value.level+'</span></p><p id="pokeName">'+value.name+'<span class="pokeType" id='+value.type+'>'+value.type+'</span></p><p id="descript">'+value.description+'</p><p id="moves">Moves</p><span class="movenames">'+value.moves[0].name+' </span><span class="movestype"> '+value.moves[0].type+'</span><br> <span class="movenames">'+value.moves[1].name+' </span><span class="movestype">  '+value.moves[1].type+'</span></div>');


});


// filter function, the ugly way
$('#filterboxWrapper').click(function(){
		$('.filter-popup').toggle()
	})

$('#bugSelect').click(function(){
	$('#Scyther').show
	$('#Gengar').hide()
	$('#Kadabra').hide()
	$('#Gyarados').hide()
	$('#Growlithe').hide()
	$('#Clefairy').hide()
});

$('#fairySelect').click(function(){
	$('#Clefairy').show()
	$('#Gengar').hide()
	$('#Kadabra').hide()
	$('#Gyarados').hide()
	$('#Growlithe').hide()
	$('#Scyther').hide()
})
$('#fireSelect').click(function(){
	$('#Growlithe').show()
	$('#Gengar').hide()
	$('#Kadabra').hide()
	$('#Gyarados').hide()
	$('#Clefairy').hide()
	$('#Scyther').hide()
})
$('#ghostSelect').click(function(){
	$('#Gengar').show()
	$('#Growlithe').hide()
	$('#Kadabra').hide()
	$('#Gyarados').hide()
	$('#Clefairy').hide()
	$('#Scyther').hide()
})
$('#psychicSelect').click(function(){
	$('#Kadabra').show()
	$('#Growlithe').hide()
	$('#Gengar').hide()
	$('#Gyarados').hide()
	$('#Clefairy').hide()
	$('#Scyther').hide()
})
$('#waterSelect').click(function(){
	$('#Gyarados').show()
	$('#Growlithe').hide()
	$('#Gengar').hide()
	$('#Kadabra').hide()
	$('#Clefairy').hide()
	$('#Scyther').hide()
})
$('#allSelect').click(function(){
	$('#Growlithe').show()
	$('#Gengar').show()
	$('#Kadabra').show()
	$('#Clefairy').show()
	$('#Scyther').show()
	$('#Gyarados').show()
})




