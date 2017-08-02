import Game from './components/game';
import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener("DOMContentLoaded", () => {
  React.DOM.render(
    <Game />, document.getElementById('main')
  );
});
