import React from 'react'
import { useParams, Route } from 'react-router-dom'
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote'

const Dummy_Quotes = [
    {id: '1', author: 'Harshal Pagare' , text:"devlopment is easy"},
    {id: '2', author: 'any one' , text:"Self motivation is the biggest motivation"}
  ]
  

const SingleQuote = () => {
  const params = useParams();
    const quote = Dummy_Quotes.find(quote=> quote.id === params.quotesID );
    if(!quote){
        return <p>No quote Found</p>
    }
  return (
    <>
    <HighlightedQuote text={quote.text} author ={quote.author} />
    <Route path={`/quotes/${params.quotesID}/comments`} >
        <Comments />
    </Route> 
    </>
  )
}

export default SingleQuote