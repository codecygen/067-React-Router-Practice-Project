import React from 'react';

import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  {id: 'q1', author: 'Aras', text: 'I am learning React Route.'},
  {id: 'q2', author: 'Joe', text: 'Front End is fun!'},
];

const AllQuotes = () => {
  return (
    <QuoteList quotes={DUMMY_QUOTES} />
  );
};

export default AllQuotes;