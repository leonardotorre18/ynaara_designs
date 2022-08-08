import React from 'react';
import '../../styles/CardList.scss';

export default function CardList({ title, count }) {
  return (
    <div className='card-list'>{title}   {count}</div>
  )
}
