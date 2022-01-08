console.log("hay hay hay");

const url = "https://pokeapi.co/api/v2/pokemon?limit=1118/"; 
function callServer() {
  fetch(url)
    .then(function (result) {
      return result.json();
    })
    .then(function(response){
        console.log(_findPokemon(response)["url"])
        return _findPokemon(response)["url"]
    })
    .then(_getCard)

    .catch(function (failure) {
      alert("Something went wrong");
    });

    function _findPokemon(response){
        const name = document.querySelector("#find").value
        const current = response["results"].find(function(currentPokemon) {
            return currentPokemon.name === name;
        });
        return current;
    }

    function _getCard(response){
        fetch(response)
        .then(function(result){
            return result.json();
        })
        .then(function(response){
            const { sprites } = response;
            console.log(response["name"]);
            createCard(sprites.front_shiny, sprites.back_shiny, response["name"] );
        })
    }
}

function createCard(pokemonFront, pokemonBack, pokemonName){

    const outerDiv = document.createElement("div");
    outerDiv.className = "col-3"
    // outerDiv.classList.add = ;


    const name = document.createElement("h3");
    name.innerText = pokemonName;
    name.className = "pokName"

const flipCard = document.createElement("div");
flipCard.className = "flip-card";

const flipVardInner = document.createElement("div");
flipVardInner.className = "flip-card-inner";

const flipVardFront = document.createElement("div");
flipVardFront.className = "flip-card-front";

const imgFront = document.createElement("img");
imgFront.src = pokemonFront;
imgFront.alt = "Avatar";
imgFront.style = "width:200px;height:200px;";

const flipVardBack = document.createElement("div");
flipVardBack.className = "flip-card-back";

const imgBack = document.createElement("img");
imgBack.src = pokemonBack;
imgBack.alt = "Avatar";
imgBack.style = "width:200px;height:200px;";

flipVardFront.append(imgFront);
flipVardBack.append(imgBack);
flipVardInner.append(flipVardFront, flipVardBack);
flipCard.append(flipVardInner);
outerDiv.append(name, flipCard);

document.querySelector("#content").append(outerDiv);

}