import React from 'react';

// React-Router-Nested-Routes
// React-Router-useRouteMatch
import { Route, useParams, Link, useRouteMatch } from 'react-router-dom';

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Aras', text: 'I am learning React Route.' },
    { id: 'q2', author: 'Joe', text: 'Front End is fun!' },
];

const QuoteDetail = () => {
    const params = useParams();

    // React-Router-useRouteMatch
    const match = useRouteMatch();

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

    if (!quote) {
        return <p>No Quote Found!</p>
    }

    return (
        <>
            <HighlightedQuote text={quote.text} author={quote.author} />

            {/* React-Router-Nested-Routes */}
            <Route path={`/quotes/${params.quoteId}`} exact>
                <div className='centered'>
                    <Link className='btn--flat' to={`/quotes/${params.quoteId}/comments`}>Load Comments</Link>
                </div>
            </Route>

            {/* React-Router-Nested-Routes */}
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route>
        </>
    );
};

export default QuoteDetail;