import React from 'react';
import '../css/article.css';

export default function LayoutArticle(props) {
  return (
    <article className={`article ${props.class}`}>
      {props.children}
    </article>
  );
}
