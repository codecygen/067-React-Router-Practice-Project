// React-Exporting-Async-Functions-Custom-Hook-HTTP-Request-Database
import React, { useEffect } from 'react';

// React-Router-Nested-Routes
// React-Router-useRouteMatch-Eliminate-Hard-Coding-Paths-in-Nested-Routes
import { Route, useParams, Link, useRouteMatch } from 'react-router-dom';

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';

// React-Exporting-Async-Functions-Custom-Hook-HTTP-Request-Database
import useHttp from '../hooks/use-http';
// React-Exporting-Async-Functions-Custom-Hook-HTTP-Request-Database
import { getSingleQuote } from '../lib/api';

import LoadingSpinner from '../components/ui/LoadingSpinner';

const QuoteDetail = () => {
    const params = useParams();

    // React-Router-useRouteMatch-Eliminate-Hard-Coding-Paths-in-Nested-Routes
    const { quoteId } = params;

    // React-Exporting-Async-Functions-Custom-Hook-HTTP-Request-Database
    const match = useRouteMatch();

    // React-Exporting-Async-Functions-Custom-Hook-HTTP-Request-Database
    const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);

    // React-Exporting-Async-Functions-Custom-Hook-HTTP-Request-Database
    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);

    if (status === 'pending') {
        return (
            <div className='centered'>
                <LoadingSpinner />
            </div>
        );
    }

    if (error) {
        return (
            <p className='centered'>{error}</p>
        );
    }

    if (!loadedQuote.text) {
        return (
            <p className='centered'>No quote text found!</p>
        );
    }

    return (
        <>
            <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />

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