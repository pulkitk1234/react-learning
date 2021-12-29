import React from 'react'
import ReactDom from 'react-dom'
//CSS
import '/Users/pulkitkaushik/Desktop/reacT/my-app/src/index.css'; 

import {books} from './books'
import {Book} from './book'



function Greeting()
{
    return (
        <section className="booklist">
          {books.map((book,index)=>{
              return <Book key={book.id} {...book}></Book>
          }) }
        </section>
    );

}



ReactDom.render(<Greeting />, document.getElementById('root'))
