// React-Exporting-Async-Functions-Custom-Hook-HTTP-Request-Database
import { useEffect } from 'react';

// React-Router-Redirecting-Link-to-Different-Page-after-Form-Submission
import { useHistory } from 'react-router-dom';

// React-Exporting-Async-Functions-Custom-Hook-HTTP-Request-Database
import useHttp from '../hooks/use-http';
// React-Exporting-Async-Functions-Custom-Hook-HTTP-Request-Database
import { addQuote } from '../lib/api';

import React from 'react';
import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
  // React-Exporting-Async-Functions-Custom-Hook-HTTP-Request-Database
  const { sendRequest, status } = useHttp(addQuote);

  // React-Router-Redirecting-Link-to-Different-Page-after-Form-Submission
  const history = useHistory();

  // React-Exporting-Async-Functions-Custom-Hook-HTTP-Request-Database
  useEffect(() => {
    if (status === 'completed') {
      // React-Router-Redirecting-Link-to-Different-Page-after-Form-Submission
      history.push('/quotes');
    }
  }, [status, history]);

  const addQuoteHandler = quoteData => {
    // React-Exporting-Async-Functions-Custom-Hook-HTTP-Request-Database
    sendRequest(quoteData);
  };

  return (
    <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />
  );
};

export default NewQuote;