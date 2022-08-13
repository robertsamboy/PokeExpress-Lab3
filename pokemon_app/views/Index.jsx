const React = require('react');


 class Index extends React.Component{
    render(){
        const design = {
            color: 'black',
            backgroundColor: 'green'
        };
        
        const { pokemon } = this.props;
       function caps(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
       }

        return(
            <body style={design}>
            <div > 
                <h1>See All The Pokemon!</h1>
                <ul> 
                    {pokemon.map((mon) =>{
                        return(
                            <li> 
                                This{' '}
                               <a href ={`/pokemon/x/${mon.id}`} >
                               {caps(mon.name)}
                               </a>
                                {' '}
                                is{' '}
                                a{' '}
                                pokemon!
                                <nav> <form action = {`/pokemon/x/${mon.id}?_method=DELETE`} method='POST'><button type='submit'>Delete Pokemon </button></form></nav>
                                <a href = {`/pokemon/x/${mon.id}/edit`}>Change Pokemon</a>
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