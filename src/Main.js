import React, { useState } from 'react'
import './main.css'

const Main = () => {

    const [guess,setGuess]=useState('');
    const [randNumber,setRandNumber]=useState(Math.floor(Math.random()*10)+1);
    const [message,setMessage]=useState('');
    const [guessNumber,setGuessNumber]=useState(1);

    const changeHandler=(e)=>{
        setGuess(e.target.value);
    }

    const guessHandler=()=>{
        const userInput=parseInt(guess,10);
        // let guessNumber=0;

        if(userInput<1 || userInput>10){
            setMessage('Please enter number between 1 and 10');
        }else{
            setGuessNumber(guessNumber+1)
        }
        if(userInput===randNumber){
            // guessNumber+=1;
            setMessage(`Congrats you have guessed correctly in ${guessNumber} Attempt`)
        }else if(userInput > randNumber){
            // guessNumber+=1;
            setMessage('Your guess is high. Try again!')
        }else{
            // guessNumber+=1;
            setMessage('your guess is low. Try again!')
        }
    }

  return (
    <div className='container'>
        <h1>Number Guessing Game</h1>
        <p>Guess a Number Between 1 to 10</p>

        <div className="inputBox">
            <input type="number" placeholder='Enter Your Guess' value={guess} onChange={changeHandler} />
            <button onClick={guessHandler} >Submit</button>

        </div>

        <p className='message' >{message}</p>
    </div>
  )
}

export default Main