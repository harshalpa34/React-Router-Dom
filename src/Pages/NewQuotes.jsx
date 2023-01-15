import React from 'react'
import QuoteForm from '../components/quotes/QuoteForm'
import { useHistory } from 'react-router-dom'
import QuotesData from '../QuotesData';


const NewQuotes = () => {
    const history  = useHistory()

    const AddQuoteHandler = (Quotevalue) =>{
            let  id = Math.random();
            const Quote = {id: id, author: Quotevalue.author, text: Quotevalue.text} 

            QuotesData.push(Quote);
            history.push('/quotes')
        }
    

  return (
    <>
    <h1>New Quote</h1>
    <QuoteForm onAddQuote={AddQuoteHandler}/>
    </>
  )
}

export default NewQuotes