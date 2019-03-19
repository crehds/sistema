import React from 'react';

import Input from '../../reusables/components/Input.jsx';

import '../css/search.css';

function Search() {
  return (
    <form
      className="Search"
    >
      <Input
        type="text"
        place="Buscar documento"
        class="Search-input"
        name="search"
      />
    </form>
  );
}

export default Search;
