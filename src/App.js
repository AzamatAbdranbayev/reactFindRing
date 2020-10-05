import React,{useState} from 'react';
import './App.css';
import ButtonReset from './components/ButtonReset/ButtonReset';
import Boxes from './components/Boxes/Boxes';
import Counter from './components/Counter/Counter';

function App() {
  const sizeBoxes = 36;
  const getState = (sizeBoxes) => {
    const currentStateCopy = [];
    let randomNumber = Math.floor(Math.random()*sizeBoxes);
    for (let i =0; i <sizeBoxes; i++) {
      if(i===randomNumber)currentStateCopy.push({status:"true"});
      else currentStateCopy.push({status:"false"});
    }
    return currentStateCopy;
  }
  const [currentState,setCurrentState] = useState (getState(sizeBoxes));
  const [currentCounter,setCurrentCounter] = useState ([{counter:0}]);
  const [currentGameStatus,setCurrentWinStatus] = useState([{statusGame:false}]);

  const clickButton = () => {
    Object.values(document.getElementsByClassName("Box")).map(element=> {
      element.style="background:gray";
      element.innerHTML="";
    })
    changeCurrentCounter("reset");
    changeCurrentState();
    changeCurrentWinStatus(false);
  }
  const changeCurrentCounter = (status) => {
    const currentCounterCopy = [...currentCounter];
    if(status === "next") currentCounterCopy[0].counter++;
    if(status === "reset") currentCounterCopy[0].counter = 0;
    setCurrentCounter(currentCounterCopy);
  }
  const changeCurrentState = () => {
    let currentStateCopy = [...currentState];
    currentStateCopy = getState(sizeBoxes);
    setCurrentState(currentStateCopy);
  }
  const changeCurrentWinStatus = (status)=> {
    let currentGameStatusCopy = [...currentGameStatus];
    currentGameStatusCopy[0].statusGame=status;
    setCurrentWinStatus(currentGameStatusCopy);
  }
  return (
    <div className="container">
      <Boxes 
        stateNow = {currentState} 
        counterTries={changeCurrentCounter} 
        statusWin = {currentGameStatus[0].statusGame}
        changeStatusWin = {changeCurrentWinStatus}/>
      <Counter counter={currentCounter[0].counter}/>
      <ButtonReset onclick={clickButton}/>
    </div>
   
  )
}

export default App;
