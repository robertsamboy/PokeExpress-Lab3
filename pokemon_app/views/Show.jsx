
const React = require('react');
class Show extends React.Component {
    
    render(){
        const design = {
            color: 'black',
            backgroundColor: 'green'
        };
        
        const pokemon = this.props.pokemon
       function caps(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
       }

        return(
            <body style={design}>
            <div > 
                <h1>Gotta Catch Em' All!</h1>
                <h2> {(pokemon.name)}</h2>
                <img href src= {`http://img.pokemondb.net/artwork/${pokemon.name.toLowerCase()}.jpg`}></img>
                <br></br>
                <a href={`/pokemon/`}>back</a>
                
                <ul> 
                   
                            <li> 
                                This{' '}
                                
                               {caps(pokemon.name)}
                               
                                {' '}
                                is{' '}
                                a{' '}
                                pokemon!
                               
                            </li>
                </ul>
                
            </div>
           
            </body>
        )
    }
 }
module.exports = Show;
