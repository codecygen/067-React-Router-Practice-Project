import React from 'react';

// React-Router-Nested-Routes
// React-Router-useRouteMatch-Eliminate-Hard-Coding-Paths-in-Nested-Routes
import { Route, useParams, Link, useRouteMatch } from 'react-router-dom';

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Aras', text: 'I am learning React Route.' },
    { id: 'q2', author: 'Joe', text: 'Front End is fun!' },
];

const QuoteDetail = () => {
    const params = useParams();

    // React-Router-useRouteMatch-Eliminate-Hard-Coding-Paths-in-Nested-Routes
    const match = useRouteMatch();

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

    if (!quote) {
        return <p>No Quote Found!</p>
    }

    return (
        <>
            <HighlightedQuote text={quote.text} author={quote.author} />

            {/* React-Router-Nested-Routes */}
            {/* React-Router-useRouteMatch-Eliminate-Hard-Coding-Paths-in-Nested-Routes */}
            <Route path={match.path} exact>
                <div className='centered'>
                    {/* React-Router-useRouteMatch-Eliminate-Hard-Coding-Paths-in-Nested-Routes */}
                    <Link className='btn--flat' to={`${match.url}/comments`}>Load Comments</Link>
                </div>
            </Route>

            {/* React-Router-Nested-Routes */}
            {/* React-Router-useRouteMatch-Eliminate-Hard-Coding-Paths-in-Nested-Routes */}
            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </>
    );
};

export default QuoteDetail;