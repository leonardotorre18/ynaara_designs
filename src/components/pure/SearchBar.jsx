import React, { useRef } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

export default function SearchBar({ setFilter }) {
  const input = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilter(input.current.value);
    input.current.value = '';
  };

  return (
    <form
      className="shadow flex w-72 mx-auto my-4 rounded overflow-hidden h-10 hover:ring-2 ring-first"
      onSubmit={handleSubmit}
    >
      <input
        className="w-full outline-none px-2"
        type="text"
        onChange={(e) => setFilter(e.target.value)}
        ref={input}
      />
      <button
        type="button"
        className="bg-first w-10 p-1"
      >
        <AiOutlineSearch className="text-white object-cover w-full h-full" />
      </button>
    </form>
  );
}
