import React from 'react';
<<<<<<< HEAD
import { HeaderButton } from './Components/Header/HeaderButton/HeaderButton'
import { Header } from './Components/Header/Header';
function App() {
  return (
    <>
      <Header title={'Конюшня'}/>
    </>
=======
import logo from './logo.svg';
import './App.css';
import { TestComponent } from './Components/TestComponent/TestComponent';
import {Card} from './Components/Card/Card'
import { Button } from './Components/Card/Button/Button';

function App() {
  return (
    <div className="App">
      <Card HorseName='Боджек'/>
      <Card />
      
    </div>
>>>>>>> 628a36c (Сверстала карточку лошадей)
  );
}

export default App;
