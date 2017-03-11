import React from 'react';

const SearchRowResult = ({concert}) => {
  return (
    <li>
      <ul>
        <a href={"concerts/"+concert.id}>
          <li>{concert.band}</li>
          <li>{concert.date}</li>
          <li>{concert.typeOfMusic}</li>
        </a>
      </ul>
    </li>
  )
}

export default SearchRowResult;