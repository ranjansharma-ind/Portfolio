import React,{useEffect} from 'react';
import { useState } from 'react';
import Model from './Model'

function Blog(props) {
    useEffect(() =>{
        document.title = `${props.capital(props.category)} - Ranjan Sharma`;
    })

    const [model,setModel] = useState(false)

    const toggleModel = () =>{
        setModel(!model)
    }

    if(model){
        document.body.classList.add('active-model')
    }else{
        document.body.classList.remove('active-model')
    }
    return ( 
        <>
            <div style={{height:'60vh'}} className="blog">
                <h1>Publish your Passions, your Way</h1>
                <p>Create an unique and beautiful blogs easily</p>
                <button className='btn-model' onClick={toggleModel}>{props.name}</button>
            </div>
            <div>
                {model && (<Model click={toggleModel}/>)}
            </div>
        </>
     );
}

export default Blog;