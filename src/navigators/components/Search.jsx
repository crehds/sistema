import React from 'react';

import Input from '../../reusables/components/Input.jsx';

import '../css/search.css';

function Search(props) {
  var {
    type,
    place,
    name,
  } = props.search.input;
  /*Sólo esqueleto, al momento de conectar la BD se le añadirá
  la funcionalidad
  */
  return (
    <form
      className={props.search.class}
    >
      <Input
        type={type}
        place={place}
        class={props.search.input.class}
        name={name}
      />
    </form>
  );
}

export default Search;
