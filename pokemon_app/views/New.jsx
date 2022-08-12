const React = require('react');


class New extends React.Component{
    render() {
        const design = {
            color: 'black',
            backgroundColor: 'green'
        }
        return(
            <body style = {design}>
            <div>
                <h1>Create your own Pokémon!</h1>
                <form action = '/pokemon/' method='POST'>
                Name: <input type="text" name="name" /><br/>
                 <input type="submit" name="" value="Birth Pokemon"/> <br/>
              
                </form>
            </div>
            </body>
        )
    }
}



module.exports = New