import React from 'react';

import { Route, useParams } from 'react-router-dom';

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Aras', text: 'I am learning React Route.' },
    { id: 'q2', author: 'Joe', text: 'Front End is fun!' },
];

const QuoteDetail = () => {
    const params = useParams();

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

    if (!quote) {
        return <p>No Quote Found!</p>
    }

    return (
        <>
            <HighlightedQuote text={quote.text} author={quote.author} />

            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route>
        </>
    );
};

export default QuoteDetail;