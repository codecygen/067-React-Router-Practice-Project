
// React-Redirect-Page-After-Submitting-Data-With-Button
import { useHistory } from 'react-router-dom';

import React from 'react';
import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
  // React-Redirect-Page-After-Submitting-Data-With-Button
  const history = useHistory();

  const addQuoteHandler = quoteData => {
    console.log(quoteData);

    // React-Redirect-Page-After-Submitting-Data-With-Button
    history.push('/quotes');
  };

  return (
    <QuoteForm onAddQuote={addQuoteHandler} />
  );
};

export default NewQuote;