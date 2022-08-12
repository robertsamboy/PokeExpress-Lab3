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
            <a href={`/pokemon/`}>Click here to Start</a>
            </div>
            </body>

        )

        
    }
}
module.exports = Intro;