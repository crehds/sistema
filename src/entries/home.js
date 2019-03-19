import React from 'react';
import { render } from 'react-dom';
import Main from '../main/containers/Main.jsx';
import login from '../../login.json';
import './home.css';

const homeContainer = document.getElementById('home-container');

render(<Main
  login={login.Login}
  />, homeContainer);
