const axios = require('axios');

const express = require("express")
const app = express()
const port = 8080


var pokemones0_150 = [] ;

var apiPoke = [];







async function TotalData (urlEndPoint){
    return await axios.get(urlEndPoint)

}

async function TotalImg(urlImg){

   return  await axios.get(`${urlImg}`)

}

TotalData('https://pokeapi.co/api/v2/pokemon?offset=0&limit=150/').then((pokemones) =>{
    pokemones.data.results.forEach(pokemon => {
        pokemones0_150.push(TotalImg(pokemon.url))
    });
    

    Promise.all(pokemones0_150).then(values => {
        values.forEach(dato =>{
            // console.log(dato.data.sprites.front_default)
            // console.log(dato.data.name)
            apiPoke.push({img: dato.data.sprites.front_default, nombre: dato.data.name});



        })
        // console.log(apiPoke[1].img)

        // apiPoke.forEach( e=>{
        //     console.log(e.img)
        // })
        // console.log(apiPoke.data.img)
        app.get('/pokemones', (req, res) => {
      
            res.send(apiPoke);
        })
        
        app.listen(port, () => {console.log(`Se levantó el servidor en el puerto ${port}`)})

        // console.log(values)
    }).catch(err => {
        console.log(err)
    })
})






// async function Pokemon (){


// var lengthPoke0_10 = poke0_10.data.results.length ; 


// for (let i = 0; i < lengthPoke0_10; i++) {
//     var namePoke0_10For = poke0_10.data.results[i].name;

//     let urlPokemon0_10For = poke0_10.data.results[i].url;

//     // var readPokeUrl = await axios.get(`${urlPokemon0_10For}`)
//     var imgPoke0_10 = readPokeUrl.data.sprites.front_default;

//     // datos0_10Promise(namePoke0_10For,imgPoke0_10)
//     // var promise0_10 = (datos0_150Promise(namePoke0_10For,imgPoke0_10))

//     // pokemones0_150.push(promise0_10)
//     let datos0_10 = {
//         nombre:namePoke0_10For,
//         img: imgPoke0_10
//     }
//     console.log(datos0_10)
//     pokemones0_150.push(datos0_10)
// }

// return (pokemones0_150)


// }

// async function asincronia (){
//     var datos1 = await Pokemon('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10/');
//     var datos2 = await Pokemon('https://pokeapi.co/api/v2/pokemon?offset=10&limit=20');
//     var datos3 = await Pokemon('https://pokeapi.co/api/v2/pokemon?offset=30&limit=20');
//     var datos4 = await Pokemon('https://pokeapi.co/api/v2/pokemon?offset=50&limit=20');
//     var datos5 = await Pokemon('https://pokeapi.co/api/v2/pokemon?offset=70&limit=20');
//     var datos6 = await Pokemon('https://pokeapi.co/api/v2/pokemon?offset=90&limit=20');
//     var datos7 = await Pokemon('https://pokeapi.co/api/v2/pokemon?offset=110&limit=20');
//     var datos8 = await Pokemon('https://pokeapi.co/api/v2/pokemon?offset=130&limit=20');
    
//     console.log(pokemones0_150)
// }

// asincronia()



// randomPokemon('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10/');
// randomPokemon('https://pokeapi.co/api/v2/pokemon?offset=10&limit=20')
// randomPokemon('https://pokeapi.co/api/v2/pokemon?offset=30&limit=20')
// randomPokemon('https://pokeapi.co/api/v2/pokemon?offset=50&limit=20')
// randomPokemon('https://pokeapi.co/api/v2/pokemon?offset=70&limit=20')
// randomPokemon('https://pokeapi.co/api/v2/pokemon?offset=90&limit=20')
// randomPokemon('https://pokeapi.co/api/v2/pokemon?offset=110&limit=20')
// randomPokemon('https://pokeapi.co/api/v2/pokemon?offset=130&limit=20')










