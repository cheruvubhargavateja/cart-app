import React, { useReducer, useState } from 'react'
import '../App.css'
import { CartState } from '../context/CartContext';


const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const {dispatch} = CartState()

    const handleSearch = (e) => {
      setSearchQuery(e.target.value)
      dispatch({type: 'search_item', payload: e.target.value})
    }
  return (
    <div className='search-bar'>
        <input type='text'
            placeholder='Search for products...'
            value={searchQuery}
            onChange={(e)=>handleSearch(e)}
        />    
    </div>
  )
}

export default SearchBar