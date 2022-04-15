import React from 'react';

import { useParams } from 'react-router-dom';

const QuoteDetail = () => {
    const params = useParams();

    return (
        <>
            <div>QuoteDetail</div>
            <p>{params.quoteId}</p>
        </>
    );
};

export default QuoteDetail;