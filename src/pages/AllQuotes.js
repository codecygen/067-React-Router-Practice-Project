// React-Exporting-Async-Functions-Custom-Hook-HTTP-Request-Database
import React, { useEffect } from 'react';
// React-Exporting-Async-Functions-Custom-Hook-HTTP-Request-Database
import useHttp from '../hooks/use-http';
// React-Exporting-Async-Functions-Custom-Hook-HTTP-Request-Database
import { getAllQuotes } from '../lib/api';

import QuoteList from '../components/quotes/QuoteList';

import LoadingSpinner from '../components/ui/LoadingSpinner';
import NoQuotesFound from '../components/quotes/NoQuotesFound';

const AllQuotes = () => {
  // React-Exporting-Async-Functions-Custom-Hook-HTTP-Request-Database
  const { sendRequest, status, data: loadedQuotes, error } = useHttp(getAllQuotes, true);

  // React-Exporting-Async-Functions-Custom-Hook-HTTP-Request-Database
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  // React-Exporting-Async-Functions-Custom-Hook-HTTP-Request-Database
  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>);
  }

  // React-Exporting-Async-Functions-Custom-Hook-HTTP-Request-Database
  if (error) {
    return (
      <p className='centered focused'>{error}</p>
    );
  }

  // React-Exporting-Async-Functions-Custom-Hook-HTTP-Request-Database
  if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
    return (
      <NoQuotesFound />
    );
  }

  return (
    <QuoteList quotes={loadedQuotes} />
  );
};

export default AllQuotes;