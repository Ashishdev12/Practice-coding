import React, { useEffect, useState } from 'react';
import './App.css';
import TodoList from './todoList';

// "https://fakestoreapi.com/products"

function App() {
    const [products, setProducts] = useState([]);

    useEffect(()=> {
        getProducts()
    },[])

    async function getProducts(){
        let res = await fetch("https://fakestoreapi.com/products")
        let productList = await res.json();
        setProducts(productList);
        console.log(productList);
    }

    if(products.length === 0){
       return (
        <h1>Data Fetching ...</h1>
       ) 
    }
    return ( 
        <>
          <div className='product-list'>
        {products.map((p)=><TodoList {...p} key={p.id}></TodoList>)}
        </div>
        </>
      
     );
}

export default App;
