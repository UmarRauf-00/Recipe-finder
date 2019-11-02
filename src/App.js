import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from "./Recipe";
import { setAutoFreeze } from 'immer';

const App = () => {

const APP_ID = 'e151ce2f';
const APP_KEY = '9f4461da7e009180511222bf132f0156';

const [recipes, setRecipies] = useState([]);
const [search, setSearch] = useState('');
const [query, setQuery] = useState('chicken')


 useEffect(() => {
  getRecipies();
  console.log("USE EFECTTTT RANNNNN")
}, [query] )

 const getRecipies = async() => {
   const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
   const data = await  response.json();
    setRecipies(data.hits);
    console.log(data.hits);
 }

const updateSearch = e => {
  setSearch(e.target.value)
  console.log(search)
}

const getSearch = e => {
  e.preventDefault()
  setQuery(search)
}

  return (
    <div className="App">
     <form onSubmit={getSearch} className="search-form">
       <input className="search-bar" type="text" value={search} onChange={updateSearch} />
       <button className="search-button" type="submit">Submit</button>
     </form>
     {recipes.map(recipe => (
       <Recipe 
       
       key = {recipe.recipe.label}
       title={recipe.recipe.label} 
       calories={recipe.recipe.calories} 
       image ={recipe.recipe.image}
       ingredients = {recipe.recipe.ingredients}
       />
     ))}
    </div>
  )
}

export default App;
