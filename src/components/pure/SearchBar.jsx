import React, { useRef } from 'react';
import icon from '../../assets/iconmonstr-magnifier-2.svg';
import '../../styles/SearchBar.scss';

export default function SearchBar({ setFilter }) {
  const input = useRef(null)
  return (
    <div className='search-bar'>
      <input
        type="text"
        ref={input}
        onChange={e=>{
          setFilter(e.target.value.trim());
        }}
      />
      <button 
        type="submit"
        onClick={()=>{
          setFilter(input.current.value.trim());
          input.current.value = '';
        }}
      >
        <img src={icon} alt="Search Icon" />
      </button>
    </div>
  )
}
