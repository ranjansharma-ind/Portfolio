import React,{useEffect} from 'react';

function Works(props) {
    useEffect(() =>{
        document.title = `${props.capital(props.category)} - Ranjan Sharma`;
    })
    return ( 
        <>
            <div style={{height:'92.5vh'}}>
                <h1>Works</h1>
            </div>
        </>
     );
}

export default Works;