
// React-Router-Redirecting-Link-to-Different-Page-after-Form-Submission
import { useHistory } from 'react-router-dom';

import React from 'react';
import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
  // React-Router-Redirecting-Link-to-Different-Page-after-Form-Submission
  const history = useHistory();

  const addQuoteHandler = quoteData => {
    console.log(quoteData);

    // React-Router-Redirecting-Link-to-Different-Page-after-Form-Submission
    history.push('/quotes');
  };

  return (
    <QuoteForm onAddQuote={addQuoteHandler} />
  );
};

export default NewQuote;