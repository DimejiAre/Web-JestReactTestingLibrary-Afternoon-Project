import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todos from './components/Todos';
import Counter from './components/Counter';
import Form from './components/Form';
import Market from './components/Market';

ReactDOM.render(
  <>
  <Counter user='Pere' countLimit={5}/>
  <Todos user='Pereira' />
  <Form user='Mariam' />
  <Market user='Megan' />
</>,
  document.getElementById('root'));
