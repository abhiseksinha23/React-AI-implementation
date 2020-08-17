import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import './App.css';
import NewsCards from './components/NewsCards/NewsCards';
const alanKey = '58d3b466c51c6ae03444a70d5b8a5b7a2e956eca572e1d8b807a3e2338fdd0dc/stage';
const App = ()=>{
  const [newsArticles, setNewsArticles] = useState([]);
  useEffect(()=>{
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles })=>{
        if(command === 'newHeadlines'){
          setNewsArticles(articles);
        }
      }
    })
  },[])
  return(
    <div>
      <h1>AI NEWS READING APPLICATION</h1>
      <NewsCards articles={newsArticles}/>
    </div>
  )
}

export default App;
