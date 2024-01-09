import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImg from '../assets/background.jpg';
import './home.css';
import Rules from './Rules';
import Win from './Win'
import  axios from 'axios'


export default function Home() {
  const [showRules, setShowRules] = useState(false);

  const toggleRules = () => {
    setShowRules(!showRules);
  };


  const [quote, setQuote] = useState('')

 const getQuote = () => {
    axios.get('https://api.quotable.io/random')
    .then(response => {
      // console.log(response)
      // console.log(response.data.content)
      setQuote(response.data.content)
    }).catch(error =>{
      console.log(error)
    })
 }

  return (
    <>
      <div className="backgr-img">
        <img className='background' src={backgroundImg} alt="background-img" />
      </div>

      <div className="Home">
        <div className="home-inner">
          <h1 className='header'>ჩამოხრჩობანა</h1>
          
          {showRules && <Rules onClose={toggleRules} />}
          <div className="home-buttons">
            <div className='change-component'>
              <Link to="/Hangman/Game">
                <button className='button'>დაიწყე</button>
              </Link>
            </div>
            <button onClick={toggleRules} className='rules-btn'>წესები</button>
          </div>


          <div className="container">
      {quote ? <p className='quote'>{quote}</p> : null}
      <button className='button' onClick={getQuote}>მოტივაცია</button>
      </div>


        </div>
      </div>
    </>
  );
}

