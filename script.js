//creating html using template literals
document.body.innerHTML=`
<div class="container">
<img src="https://www.freepnglogos.com/uploads/pokemon-logo-png-0.png" alt="Logo">
<div>
<input type="text" placeholder="Enter Pokemon search here" id="text">
<button onClick="mySearch()" id="btn">Search</button>
</div>
</div>
<div class="content"></div>`;

let div = document.querySelector(".content");
let mySearch = async function(){
    let value = document.querySelector("#text").value;
    try{
        ////fetch data using GET method
        var info = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`,
        {
            method: 'GET'
        });
        info = await info.json();
    }catch(err){
        console.log(err);
    }
    display(info);
}

const display = async function(info){
    div.innerHTML="";
    const card = document.createElement("card");
    card.setAttribute("class", "card");
    //store ablities of pokemon
    const ability = info.abilities.map((e)=>e.ability.name);
    const name = info.name;
    const moves = info.moves.map((e)=>e.move.name);
    const weight = info.weight;

    card.innerHTML=`
    <img src="${info.sprites.other.dream_world.front_default}">
    <h4 id="h5">${name}</h4>
    <div class="card-body">
    <h5>Ability</h5>
    <section>${ability}</section>
    <h5>Moves</h5>
    <section>${moves}</section>
    <h5>Weight<br>${weight}</h5>
    </div>`;
    //apending the card element inside div
    div.appendChild(card);
}
//using getData function fetching 50 pokemon
const getData = async function(){
    var pokemon = 50;
    for(let i=1;i<=pokemon;i++){
        try{
            var info = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`,
            {
                method:"GET"
            });
            info = await info.json();
            createPokemon(info);
        }catch(err){
            console.log(err);
        }
    }
    console.log(info);
}
getData();

const createPokemon = async function(info){
    const card = document.createElement("card");
    card.setAttribute("class","card");
    const ability = info.abilities.map((e)=>e.ability.name);
    const name = info.name;
    const moves = info.moves.map((e)=>e.move.name);
    const weight = info.weight;

    card.innerHTML=`
    <img src="${info.sprites.other.dream_world.front_default}">
    <h5 id="h5">${name}</h5>
    <div class="card-body">
    <h5>Ability</h5>
    <section>${ability}</section>
    <h5>Moves</h5>
    <section>${moves}</section>
    <h5>Weight<br>${weight}</h5>
    </div>`;
    
    div.appendChild(card);
}


