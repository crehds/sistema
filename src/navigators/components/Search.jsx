import React from 'react';

import Input from '../../reusables/components/Input.jsx';

import '../css/search.css';

function Search() {
  /*Sólo esqueleto, al momento de conectar la BD se le añadirá
  la funcionalidad
  */
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
