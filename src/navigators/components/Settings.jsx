import React from 'react';

import LayoutDiv from '../../reusables/components/LayoutDiv.jsx';

import '../css/settings.css';

export default function Settings(props) {
  var { content, functionsSettings } = props;
  return (
    <LayoutDiv
      class={props.class}
    >
      {content.map((e, i) => (
        <p
          key={e.id}
          onClick={functionsSettings[i]}
        >
        {e.text}
        </p>
      ))}
    </LayoutDiv>
  );
}
