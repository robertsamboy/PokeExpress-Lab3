const React = require('react')


class Intro extends React.Component{
    render(){
        const design = {
            color: 'white',
            backgroundColor: 'black'
        }
          
        
        return(
            <body style = {design}>
                <div>
            <h1>WELCOME TO THE POKELIBRARY</h1>
            <nav><h2><a href = {`/pokemon/`}>Click here to start</a></h2></nav>
            </div>
            </body>

        )

        
    }
}
module.exports = Intro;