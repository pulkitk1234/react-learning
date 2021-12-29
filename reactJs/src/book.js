import React from 'react'

export const Book=(props)=>{
   
    const clickHandler=()=>{
        alert('You clicked');
    }
    return <article className="book">
        <img src={props.img} alt=""/>
        <h1>{props.title}</h1>
        <h4>{props.author}</h4>
        <button type='button' onClick={clickHandler}>Click to action</button>
        
    </article>
}






