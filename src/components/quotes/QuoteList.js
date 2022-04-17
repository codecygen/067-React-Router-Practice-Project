import { Fragment } from 'react';

// React-Router-Query-Parameters
import { useHistory, useLocation } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

// React-Router-Query-Parameters
const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  // React-Router-Query-Parameters
  // Used to manipulate page after a button click
  const history = useHistory();

  // React-Router-Query-Parameters
  // Gets the current page address
  const location = useLocation();

  // React-Router-Query-Parameters
  // location.search gives "?sort=asc"
  // URLSearchParams is a default Javascript constructor
  const queryParams = new URLSearchParams(location.search);

  // React-Router-Query-Parameters
  const isSortingAscending = queryParams.get('sort') === 'asc';

  // React-Router-Query-Parameters
  const sortedQuoted = sortQuotes(props.quotes, isSortingAscending);

  // React-Router-Query-Parameters
  const changeSortingHandler = () => {
    history.push('/quotes?sort=' + (isSortingAscending ? 'desc' : 'asc'));
  };

  return (
    <Fragment>
      {/* React-Router-Query-Parameters */}
      <div className={classes.sorting}>
        {/* React-Router-Query-Parameters */}
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? 'Descending' : 'Ascending'}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuoted.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
