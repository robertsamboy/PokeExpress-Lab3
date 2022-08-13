
const express = require('express');
const mongoose = require('mongoose')
const Pokemon = require('./models/pokemon')
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3003;
const methodOverride = require('method-override')

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection.once('open', ()=>{
    console.log('connected to mongo')})


app.use(express.urlencoded({extended:false}))
// setting up our views
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use((req,res,next) => {
console.log('I run for all routes')
next()
})
app.use(methodOverride('_method'))

// seed route
app.get('/pokemon/seed', (req, res)=>{
    
    Pokemon.deleteMany({})
})

//home page
app.get('/',(req,res)=>{
    res.render('Intro')
})


    app.get("/pokemon/", (req,res)=>{
        Pokemon.find({}, (error, allPokemon)=>{
            res.render("Index", {
                pokemon: allPokemon
            })
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



app.get('/pokemon/x/:id',(req,res)=>{
    Pokemon.findById(req.params.id, (err, foundPokemon)=>{
        res.render('Show', {pokemon: foundPokemon})
    })
})
app.get('/pokemon/x/:id/edit', (req,res)=>{
    Pokemon.findById(req.params.id, (error, foundPokemon)=>{
if(!error){
    res.render('Edit', {
        pokemon: foundPokemon
    })
}else{
    res.send({
        message: error.message
    })
}
    })
})
//Update route
app.put('/pokemon/x/:id',(req, res) => {
    Pokemon.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    },(error, pokemon) => {
    res.redirect(`/pokemon/x/${req.params.id}`)
})
})

// delete route

app.delete('/pokemon/x/:id',(req, res)=>{
    Pokemon.findByIdAndRemove(req.params.id, (error, database)=>{
        res.redirect('/pokemon/')
    })
})



app.listen(port,() => {
    console.log('I am listening on port' , port);
}); 



