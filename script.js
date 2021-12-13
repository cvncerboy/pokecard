const pokeContainer = document.getElementById('poke-container');
const pokeNum = 100;
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
};
const mainTypes  = Object.keys(colors);

const fetchPoke = async () => {
    for(let i = 1; i <= pokeNum; i++) {
        await getPoke(i);
    }
}

const getPoke = async (id) => {
    const linkUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(linkUrl);
    const pokemon = await response.json();
    createPokeCard(pokemon);
}

fetchPoke();

const createPokeCard = (pokemon) =>{
    const PokeElement = document.createElement('div');
    PokeElement.classList.add('pokemon');
    const pokeType = pokemon.types.map(res => res.type.name);
    const type = mainTypes.find(element => pokeType.indexOf(element) > -1);
    const color = colors[type];

    PokeElement.style.backgroundColor = color;

    const PokeInnerHTML = `
        <div class="img-container">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg">
            <div class="info">
                <span class="number">${pokemon.id.toString().padStart(3, '0')}</span>
                <h2>${pokemon.name}</h2>
                <h5>Type: ${type}</h5>
            </div>
        </div>
    `;

    PokeElement.innerHTML = PokeInnerHTML;

    pokeContainer.appendChild(PokeElement);
}