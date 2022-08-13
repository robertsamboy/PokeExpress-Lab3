const React = require('react');


class Edit extends React.Component{
    render() {
        const design = {
            color: 'black',
            backgroundColor: 'green'
        }
        const pokemon = this.props.pokemon
        return(
            <body style = {design}>
            <div>
                <h1>Change your Pokémon!</h1>
                <form action = {`/pokemon/x/${pokemon.id}?_method=PUT`} method='POST'>
                Name: <input type="text" name="name" /><br/>
                 <input type="submit" name="" value="Edit Pokemon"/> <br/>
              
                </form>
            </div>
            </body>
        )
    }
}


module.exports = Edit