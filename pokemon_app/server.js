
const express = require('express');
const mongoose = require('mongoose')
const pokemons = require('./models/pokemon');
const Pokemon = require('./models/pokemonz')
require('dotenv').config();
const pokemon = require('./models/pokemon')
const app = express();
const port = process.env.PORT || 3003;

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection.once('open', ()=>{
    console.log('connected to mongo')})


app.use(express.urlencoded({extended:false}))
// setting up our views
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


app.get('/',(req,res)=>{
    res.render('Intro', {pokemons:pokemons})
})

// app.get('/pokemon/',(req,res)=>{
//         res.render('Index', {pokemons:pokemons})
        
      
// })
    app.get('/pokemon/',(req,res)=>{
        Pokemon.find({}, (error, allPokemon)=>{
            res.render('Index', {pokemons:allPokemon})
        })   
})

app.get('/pokemon/new', (req,res)=>{
    res.render('New')
})
app.post('/pokemon/', (req,res)=>{
    Pokemon.create(req.body,(error, createdPokemon)=>{
        res.redirect('/pokemon/')
    })
})

app.post('/pokemon/x/', (req,res)=>{
    
    res.render('Show',{pokemons:pokemons})    
})

app.get('/pokemon/x/:id',(req,res)=>{
    Pokemon.findById(req.params.id, (err, foundPokemon)=>{
        res.render('Show', {pokemon: foundPokemon})
    })
})

app.get('/pokemon/:input', (req,res)=>{
    res.render('Show',{pokemon: pokemons[req.params.input]})
})

app.listen(port,() => {
    console.log('I am listening on port' , port);
}); 



