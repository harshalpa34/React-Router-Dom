import React from 'react'
import QuoteList from '../components/quotes/QuoteList'
import QuotesData from '../QuotesData'

const Allquotes = () => {
  return (
    <>
    <QuoteList quotes = {QuotesData} />
    </>
  )
}

export default Allquotes