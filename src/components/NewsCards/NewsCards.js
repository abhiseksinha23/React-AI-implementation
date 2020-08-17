import React from 'react';

import {Grid,Grow,Typography} from '@material-ui/core';
import NewsCard from '../NewsCard/NewsCard';


const NewsCards = ({articles}) =>{

  return(
    <div>
        {articles.map((article, i)=>(
            <NewsCard article={article} i={i}/>

        ))}
        </div>
  )
};

export default NewsCards;
