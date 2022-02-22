function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
             }
             
           const poke_container = document.getElementById('poke-container')
           const pokemon_count = 150
           const colors = {
	fire: '#FDDFDF',
	grass: '#DEFDE0',
	           electric: '#FCF7DE',
	           water: '#DEF3FD',
	           ground: '#f4e7da',
	           rock: '#d5d5d4',
	           fairy: '#fceaff',
	           poison: '#98d7a5',
	           bug: '#f8d5a3',
	           dragon: '#97b3e6',
	           psychic: '#eaeda1',
	           flying: '#F5F5F5',
	           fighting: '#E6E0D4',
	           normal: '#F5F5F5'
           }
           
           function getDataById (id) {
	fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
	    .then(response => response.json())
	    .then(data => {
	        setCardPokemon (data)
	        // console.log(data)
	})
	
             
           }
           // getDataById (1)
           
           function setCardPokemon (data) {
	let claves = Object.values(data);
	console.log('imprimiendo claves')
	console.log(claves)
	console.log('//////////////')
	type = data.types[0].type.name
           
	let color;
	for (const tipo in colors) {
	    if (type == tipo) {
	        color = colors[type]
	    }
	}
	
	let container = document.querySelector('.poke-container')
           
	container.innerHTML += `<div class="pokemon" style="background-color: ${color};">
	<div class="img-container">
	  <img src="${data.sprites.front_default}" alt="${data.name}">
	</div>
	<div class="info">
	  <span class="number">${data.id}</span>
	  <h3 class="name">${data.name}</h3>
	  <small class="type">Type: <span>${data.types[0].type.name}</span></small>
	</div>
             </div> <br>`
           }
           
           // console.log(data.length)
           for (let i = 0; i <= 20; i++) {
	getDataById (i)
	
           }
           
           // let selectPokemon = document.getElementById('selectPokemon')
           
           // for (let j = 0; j <= 10; j++) {
           
           //     selectPokemon.innerHTML += `<option value="${data.id}">${data.name}</option>`
	
           // }