import React from 'react';
import { render } from 'react-dom';
import Main from '../main/containers/Main.jsx';
import login from '../login.json';
import dataDB from '../datosDb.json';
import api from '../api.json';
import './home.css';

const homeContainer = document.getElementById('home-container');

render(<Main
  login={login.Login}
  home={api.home}
  dataDB={dataDb.data}
  />, homeContainer);
