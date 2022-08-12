const React = require('react');


 class Index extends React.Component{
    render(){
        const design = {
            color: 'black',
            backgroundColor: 'green'
        };
        
        const { pokemon } = this.props;

        return(
            <body style={design}>
            <div > 
                <h1>See All The Pokemon!</h1>
                <ul> 
                    {pokemon.map((mons) =>{
                        return(
                            <li> 
                                This{' '}
                               <a href ={`/pokemon/x/${mons.id}`} >
                               {mons.name}
                               </a>
                                {' '}
                                is{' '}
                                a{' '}
                                pokemon!
                               
                            </li>
                        )
                        
                
                    })}
                </ul>
                <nav> <a href = '/pokemon/new'> Create Pokemon</a></nav>
            </div>
           
            </body>
        )
    }
 }

 module.exports = Index;