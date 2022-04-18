// React-Router-Redirecting-Link-to-Different-Page-after-Form-Submission
import { useHistory } from 'react-router-dom';

// React-Exporting-Async-Functions-Custom-Hook-HTTP-Request
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';

import React from 'react';
import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);

  // React-Router-Redirecting-Link-to-Different-Page-after-Form-Submission
  const history = useHistory();

  const addQuoteHandler = quoteData => {

    // React-Router-Redirecting-Link-to-Different-Page-after-Form-Submission
    history.push('/quotes');
  };

  return (
    <QuoteForm onAddQuote={addQuoteHandler} />
  );
};

export default NewQuote;